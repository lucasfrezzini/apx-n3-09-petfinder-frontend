import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  asyncFetchDataAtom,
  petsAtom,
  petAtom,
  userCoordsAtom,
} from "../context";
import { useEffect, useState } from "react";
import { hasToken } from "../utils/auth";
import { Pet } from "../utils/types";

export function useGetPets() {
  const coords = useAtomValue(userCoordsAtom);
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [pets, setPets] = useAtom(petsAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);

        const endpoint = coords
          ? `pets/near?lat=${coords.latitude}&lng=${coords.longitude}`
          : `pets`;

        const fetchPromise = fetchData({
          endpoint: endpoint,
          method: "GET",
          token: undefined,
          body: undefined,
          errorMessage: "Error obteniendo mascotas",
        });

        const data = await fetchPromise;

        setPets(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [fetchData, setPets, coords]);

  return { pets, isLoading, error };
}

export function useCreateNewReport() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function createReport(data: Pet, userId: number) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `pets`,
        method: "POST",
        token: token as string,
        body: { data, userId },
        errorMessage: "Error creating new pet report",
      });

      await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { createReport };
}

export function useGetPetById(id: number) {
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [pet, setPet] = useAtom(petAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const token = hasToken();
        const endpoint = `pets/${id}`;
        const fetchPromise = fetchData({
          endpoint: endpoint,
          method: "POST",
          token: token as string,
          body: undefined,
          errorMessage: "Error gettin pet by if",
        });

        const data = await fetchPromise;

        setPet(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [fetchData, setPet]);

  return { pet, isLoading, error };
}

export function useUpdatePetReport() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function updatePetReport(data: Pet, id: number) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `pets/data`,
        method: "PUT",
        token: token as string,
        body: { data, id },
        errorMessage: "Error updating pet report",
      });

      await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { updatePetReport };
}

export function useChangeStatusPet() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function changeStatusPet(id: number) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `pets/status`,
        method: "PUT",
        token: token as string,
        body: { id },
        errorMessage: "Error changing pet status",
      });

      await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { changeStatusPet };
}
