import { z } from "zod";

// creating a schema Login
export const LoginSchema = z.object({
  email: z.string().email({ message: "Debe ser un correo válido" }),
  password: z
    .string()
    .min(3, { message: "La contraseña debe tener al menos 3 caracteres" })
    .max(6, { message: "La contraseña debe tener maximo 6 caracteres" }),
});
