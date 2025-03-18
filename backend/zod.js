import { z } from 'zod';

const signinSchema = z
  .object({
    email: z.string().email('🚨 Invalid email! Enter a legit one.'),
    password: z
      .string()
      .min(8, '🔑 Password too short! At least 8 characters, please.')
      .max(128, '📏 Whoa there! Max 128 characters allowed.')
  })
  .strict();

const signupSchema = signinSchema
  .extend({
    name: z
      .string()
      .min(1, '🤔 Name cannot be empty! Give us something to work with.')
      .max(100, '✂️ Too long! Keep it under 100 characters.')
  })
  .strict();

export { signinSchema, signupSchema };
