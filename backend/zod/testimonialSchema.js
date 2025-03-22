import { z } from 'zod';

const testimonialSchema = z
  .object({
    text: z
      .string()
      .max(1000, '📏 That’s a bit too long! Try keeping it under 1000 characters.')
      .optional(),
    name: z
      .string()
      .min(1, '🤔 Name cannot be empty! Give us something to work with.')
      .max(100, '🔠 Keep it short! Name 100 characters max.'),
    rating: z
      .number()
      .int()
      .max(5, '⭐ Rating cannot be more than 5.')
      .optional(),
    type: z.enum(['text', 'image', 'video']).refine((val) => ['text', 'image', 'video'].includes(val), {
      message: '🔴 Invalid type. Must be either "text", "image", or "video".',
    }),
    mediaUrl: z
      .string()
      .optional()
  })
  .refine(
    (data) => {
      if (data.type === 'text') {
        return data.text && data.text.trim().length > 0;
      }
      return true;
    },
    {
      message: '📝 Text is required for text testimonials!',
      path: ['text'],
    }
  )
  .refine(
    (data) => {
      if (['image', 'video'].includes(data.type)) {
        return data.mediaUrl && data.mediaUrl.trim().length > 0;
      }
      return true;
    },
    {
      message: '🖼️ Media URL is required for image/video testimonials!',
      path: ['mediaUrl'],
    }
  );

export default testimonialSchema;
