import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
});

export { signInSchema };
