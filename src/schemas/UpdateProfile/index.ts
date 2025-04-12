import { z } from "zod";

// creating a schema UpdateProfile
export const UpdateProfileSchema = z.object({
  name: z.string().trim(),
  email: z
    .string()
    .optional()
    .superRefine((val, ctx) => {
      if (val && val.length > 0) {
        // Solo valida si el campo está presente
        const result = z.string().email().safeParse(val);
        if (!result.success) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Debe ser un correo válido",
          });
        }
      }
    }),
  address: z.string(),
  phone: z.string(),
  // lat: z.number(),
  // lng: z.number(),
  profilePic: z.string().optional(),
});
