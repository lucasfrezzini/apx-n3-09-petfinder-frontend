import { z } from "zod";

// creating a schema Register
export const RegisterSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Debe ser un correo válido" })
      .min(1, "El correo es obligatorio"),
    password: z
      .string()
      .min(3, { message: "La contraseña debe tener al menos 3 caracteres" })
      .max(6, { message: "La contraseña debe tener maximo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(3, { message: "La confirmacion debe tener al menos 3 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "No coinciden las contraseñas",
    path: ["confirmPassword"],
  });
