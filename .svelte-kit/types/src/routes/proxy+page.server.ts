// @ts-nocheck
import { getMongoClient } from '$lib/db/mogodb';
import type { PageServerLoad, Actions } from './$types';
import { userSchema } from '$lib/formValidations/formValidator';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const form = await superValidate(zod(userSchema));

	return { form };
};

export const actions = {
	default: async ({ request }: import('./$types').RequestEvent) => {
		// const data = await request.formData();
		const form = await superValidate(request, zod(userSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			const client = await getMongoClient();
			const db = client.db('portfolio');
			const contactCollection = db.collection('contact');

			if (form.data) {
				const currentDate: Date = new Date();
				const obj = { ...form.data };

				const contacts = await contactCollection
					.find({}, { projection: { email: 1, contact_name: 1 } })
					.toArray();
				const emails = contacts.map((item) => item.email);
				if (emails.includes(obj.email)) {
					const existingContact = contacts.find((contact) => contact.email === obj.email);
					if (existingContact && existingContact.contact_name.name !== obj.name) {
						await contactCollection.updateOne(
							{ email: obj.email }, // Filter by email
							{
								$set: { contact_name: { name: obj.name, updatedAt: currentDate } }, // Update the name field and updatedAt if name is different
								$push: { messages: { message: obj.message, insertAt: currentDate } } // Push a new message to the messages array
							}
						);
					} else {
						await contactCollection.updateOne(
							{ email: obj.email }, // Filter by email
							{
								$push: { messages: { message: obj.message, insertAt: currentDate } } // Push a new message to the messages array without changing name and updatedAt
							}
						);
					}
				} else {
					await contactCollection.insertOne({
						email: obj.email,
						contact_name: { name: obj.name, updatedAt: currentDate },
						messages: [{ message: obj.message, insertAt: currentDate }]
					});
				}
			}
			return message(form, 'Message envoyée');
		} catch (e) {
			console.log('Connection Error:', e);
		}

		return { form };
	}
};
;null as any as Actions;