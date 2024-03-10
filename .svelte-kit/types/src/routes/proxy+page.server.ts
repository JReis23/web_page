// @ts-nocheck
// import { getMongoClient } from '$lib/db/mogodb';
import { db } from '$lib/db/db.sever';
import { messagesTable, usersTable } from '$lib/db/schema';
import type { PageServerLoad, Actions } from './$types';
import { userSchema } from '$lib/formValidations/formValidator';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(zod(userSchema));

	return { form };
};

export const actions = {
	default: async ({ request }: import('./$types').RequestEvent) => {
		const form = await superValidate(request, zod(userSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			const findUser = await db.query.usersTable.findFirst({
				where: (email, { eq }) => eq(usersTable.email, form.data.email)
			});

			if (!findUser) {
				const insertUser: { id: number }[] = await db
					.insert(usersTable)
					.values({ name: form.data.name, email: form.data.email })
					.returning({ id: usersTable.id });

				await db.insert(messagesTable).values({
					message: form.data.message,
					userId: insertUser[0].id
				});
			} else {
				await db.insert(messagesTable).values({
					message: form.data.message,
					userId: findUser.id
				});
			}
			return message(form, 'Message envoyée');
		} catch (e) {
			console.log('Connection Error:', e);
		}

		return { form };
	}
};
;null as any as PageServerLoad;;null as any as Actions;