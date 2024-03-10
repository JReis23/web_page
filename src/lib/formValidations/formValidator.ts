import { z } from 'zod';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

const defaulLang = navigator.language.slice(0, 2);
defaulLang.toUpperCase();
interface ValidatorMessage {
	form: {
		nameRequired: string;
		nameMinLength: string;
		emailRequired: string;
		emailInvalid: string;
		messageRequired: string;
		messageMinLength: string;
		messageMaxLength: string;
	};
}

const formValidator: ValidatorMessage[] = defaulLang === 'fr' ? FR.message : EN.message;

export const userSchema = z.object({
	name: z
		.string({ required_error: formValidator[0].form.nameRequired })
		.min(2, { message: formValidator[0].form.nameMinLength }),
	email: z
		.string({ required_error: formValidator[0].form.emailRequired })
		.email({ message: formValidator[0].form.emailInvalid })
		.regex(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)*[a-zA-Z]{2,}))$/
		),
	message: z
		.string({
			required_error: formValidator[0].form.messageRequired
		})
		.min(5, { message: formValidator[0].form.messageMinLength })
		.regex(/^[a-zA-Z0-9\s.,!?()'-]*$/)
		.max(255, { message: formValidator[0].form.messageMaxLength })
});
