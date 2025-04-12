import { useAtom, useSetAtom } from "jotai";
import { asyncFetchDataAtom, petsAtom } from "../context";
import { useEffect, useState } from "react";
import { hasToken } from "../utils/auth";
import { Pet } from "../utils/types";

export function useGetPets() {
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [pets, setPets] = useAtom(petsAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);

        const fetchPromise = fetchData({
          endpoint: `pets`,
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
  }, [fetchData, setPets]);

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
