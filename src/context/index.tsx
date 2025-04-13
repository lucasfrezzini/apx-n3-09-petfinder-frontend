import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { FetchParams, Pet, Report, UserWithToken } from "../../src/utils/types";

// Atomo para la url base de la API
export const urlBaseAtom = atom("http://localhost:3000/api");

// Atomo para guardar la data del usuario + el token de auth con localStorage
export const userWithTokenAtom = atomWithStorage<UserWithToken | null>(
  "userWithToken",
  null
);

// Atomo para todas las mascotas
export const petsAtom = atom<Pet[]>([]);

// Atomo para las mascotas del usuario
export const userPetsAtom = atom<Pet[]>([]);

// Atomo para los reportes del usuario
export const userReportsAtom = atom<Report[]>([]);

// Atomo para la info de la mascota a reportar
export const petAtom = atom<Pet | null>(null);

// Atomo derivado para hacer el fetch dinamico para peticiones
export const asyncFetchDataAtom = atom(
  null,
  async (
    get,
    _set,
    { endpoint, method, body, token, errorMessage }: FetchParams
  ) => {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const url = `${get(urlBaseAtom)}/${endpoint}`;
      const bodyReady = body ? JSON.stringify(body) : undefined;

      const response = await fetch(url, {
        method: method,
        headers,
        body: bodyReady,
      });

      if (!response.ok) throw new Error(errorMessage || "Error en la peticion");

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
);
