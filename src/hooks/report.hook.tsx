import { useAtom, useSetAtom } from "jotai";
import {
  asyncFetchDataAtom,
  petReportsAtom,
  userPetsWithReportsAtom,
  userWithTokenAtom,
} from "../context";
import { hasToken } from "../utils/auth";
import { Report, UserWithToken } from "../utils/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function useSendPetReport() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function sendPetReport(data: Report, id: number) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `report`,
        method: "POST",
        token: token as string,
        body: { data, id },
        errorMessage: "Error creating new seen report",
      });

      return await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { sendPetReport };
}

export function useGetUserReports() {
  const [user, _setUser] = useAtom(userWithTokenAtom);
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [userPetsWithReports, setUserPetsWithReports] = useAtom(
    userPetsWithReportsAtom
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const token = hasToken();
        const { id } = user as UserWithToken;

        const fetchPromise = fetchData({
          endpoint: `user/reports`,
          method: "POST",
          token: token as string,
          body: { id },
          errorMessage: "Error obteniendo reportes del usuario",
        });

        const data = await fetchPromise;

        setUserPetsWithReports(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [fetchData, setUserPetsWithReports]);

  return { userPetsWithReports, isLoading, error };
}

export function useGetPetReports() {
  let { idPet } = useParams();
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [petWithReports, setPetWithReports] = useAtom(petReportsAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const token = hasToken();
        const endpoint = `pets/${idPet}/reports`;

        const fetchPromise = fetchData({
          endpoint: endpoint,
          method: "POST",
          token: token as string,
          body: undefined,
          errorMessage: "Error obteniendo reportes de la mascota",
        });

        const data = await fetchPromise;
        const { id, name, Reports: reports } = data;
        setPetWithReports({ id, name, reports });
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [fetchData, setPetWithReports]);

  return { petWithReports, isLoading, error };
}
