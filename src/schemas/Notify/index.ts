import { z } from "zod";

// creating a schema Notify
export const NotifySchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  phone: z
    .string()
    .min(1, { message: "El teléfono es obligatorio para contactarte" }),
  info: z.string().min(3, {
    message: "Por favor ingrese informacion adicional",
  }),
});
