import { z } from 'zod'

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    role: z.enum(['user', 'admin']),
    password: z
      .string({ invalid_type_error: 'Password must be string' })
      .max(15, { message: 'Password cannot be more than 15 characters' }),
    phone: z.string(),
    address: z.string(),
  }),
})

export const userValidation = {
  userValidationSchema,
}
