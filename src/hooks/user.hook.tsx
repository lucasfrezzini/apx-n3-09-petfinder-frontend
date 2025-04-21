import { useAtom, useSetAtom } from "jotai";
import {
  asyncFetchDataAtom,
  userPetsAtom,
  userWithTokenAtom,
} from "../context";
import { User, UserWithToken } from "../utils/types";
import { hasToken } from "../utils/auth";
import { useEffect, useState } from "react";

export function useUpdateUserData() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function updateUserData(data: User) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `user/data`,
        method: "PUT",
        token: token as string,
        body: data,
        errorMessage: "Error updating user information",
      });

      return await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { updateUserData };
}

export function useUpdateUserPassword() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function updateUserPassword(data: any) {
    try {
      const token = hasToken();
      const fetchPromise = fetchData({
        endpoint: `user/pass`,
        method: "PUT",
        token: token as string,
        body: data,
        errorMessage: "Error updating user password",
      });

      return await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { updateUserPassword };
}

export function useGetUserPets() {
  const [user, _setUser] = useAtom(userWithTokenAtom);
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [userPets, setUserPets] = useAtom(userPetsAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const token = hasToken();
        const { id } = user as UserWithToken;

        const fetchPromise = fetchData({
          endpoint: `user/pets`,
          method: "POST",
          token: token as string,
          body: { id },
          errorMessage: "Error obteniendo mascotas del usuario",
        });

        const data = await fetchPromise;
        setUserPets(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [fetchData, setUserPets]);

  return { userPets, isLoading, error };
}
