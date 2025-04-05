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
  lng: z.string(),
  lat: z.string(),
  type_pet: z.enum(type_of_pets),
  size: z.enum(sizes_of_pets),
  file_0: z.string({ message: "Se necesita al menos 1 foto" }),
  file_1: z.string().optional(),
  file_2: z.string().optional(),
  file_3: z.string().optional(),
  // dataImageURI: z
  //   .array(z.string().base64())
  //   .min(1, { message: "Se necesita al menos 1 foto" })
  //   .max(4, { message: "No se pueden cargar mas de 4 fotos" }),
});
