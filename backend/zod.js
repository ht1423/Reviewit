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

  const workspaceSchema = z.object({
    name: z
      .string()
      .min(1, '⚡ A name is required! Give your workspace an identity.')
      .max(100, '🔠 Keep it short! 100 characters max.'),
    description: z
      .string()
      .min(1, '📝 A description is needed! Tell us what this workspace is about.')
      .max(1000, '📏 That’s a bit too long! Try keeping it under 1000 characters.')
  });
  

export { signinSchema, signupSchema, workspaceSchema };
