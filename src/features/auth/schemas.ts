import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string(),
});

export const signUpSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .min(8, "Length of password must be greater than 6 words."),
  name: z.string().min(2, "Please enter a valid name."),
});
