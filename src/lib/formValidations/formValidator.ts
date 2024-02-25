import { z } from 'zod';

// See https://zod.dev/?id=primitives for schema syntax
export const userSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10)
});
