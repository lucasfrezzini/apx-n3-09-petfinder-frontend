import { z } from "zod";

export const UpdateDataPassword = z
  .object({
    password: z.string().optional(), // Hacemos el campo opcional

    confirmPassword: z.string().optional(), // Hacemos el campo opcional
  })
  .superRefine((data, ctx) => {
    // Solo validamos si algún campo tiene contenido
    if (data.password || data.confirmPassword) {
      // Validación de longitud mínima para password
      if (data.password && data.password.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "La contraseña debe tener al menos 3 caracteres",
          path: ["password"],
        });
      }

      // Validación de longitud máxima para password
      if (data.password && data.password.length > 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "La contraseña debe tener máximo 6 caracteres",
          path: ["password"],
        });
      }

      // Validación de confirmación
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "No coinciden las contraseñas",
          path: ["confirmPassword"],
        });
      }
    }
  });
