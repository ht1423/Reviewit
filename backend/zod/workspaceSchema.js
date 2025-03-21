import { z } from 'zod';

const workspaceSchema = z.object({
    name: z
      .string()
      .min(1, '⚡ A name is required! Give your workspace an identity.')
      .max(100, '🔠 Keep it short! 100 characters max.'),
    description: z
      .string()
      .min(1, '📝 A description is needed! Tell us what this workspace is about.')
      .max(1000, '📏 That’s a bit too long! Try keeping it under 1000 characters.')
  }).strict();

export default workspaceSchema