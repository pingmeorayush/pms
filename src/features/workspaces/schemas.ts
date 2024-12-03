import { z } from "zod";

const isBrowser = typeof window !== "undefined";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "required"),
  image: z.union([
    isBrowser ? z.instanceof(File) : z.any(),
    z
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .optional(),
  ]),
});
