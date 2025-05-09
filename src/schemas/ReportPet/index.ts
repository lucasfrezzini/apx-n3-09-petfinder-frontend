import { z } from "zod";

const type_of_pets = ["cat", "dog"] as const;
const sizes_of_pets = ["small", "medium", "big"] as const;

// creating a schema ReportPet
export const ReportPetSchema = z.object({
  name: z.string().trim().min(3, { message: "El nombre es obligatorio" }),
  age: z
    .string()
    .min(1, { message: "Ingrese una edad aproximada" })
    .regex(/^[0-9]+$/, { message: "Solo numeros para la edad" }),
  location: z.string().min(1, { message: "Ingrese una ubicacion en el mapa" }),
  description: z.string().optional(),
  lat: z.number(),
  lng: z.number(),
  type_pet: z.enum(type_of_pets),
  size: z.enum(sizes_of_pets),
  arrDataURI: z
    .array(z.string(), { message: "Agregue al menos una foto" })
    .min(1, "Debe contener al menos 1 foto")
    .max(4, "Máximo 4 fotos permitidas"),
});
