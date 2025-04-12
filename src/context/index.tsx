import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import {
  FetchParams,
  Pet,
  User,
  Report,
  UserWithToken,
} from "../../src/utils/types";

// Atomo para la url base de la API
export const urlBaseAtom = atom("http://localhost:3000/api");

export const userAtom = atom<User | null>(null);

export const userWithTokenAtom = atomWithStorage<UserWithToken | null>(
  "userWithToken",
  null
);

export const petsAtom = atom<Pet[]>([]);

export const reportsAtom = atom<Report[]>([]);

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
