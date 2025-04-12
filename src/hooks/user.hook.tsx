import { useSetAtom } from "jotai";
import { asyncFetchDataAtom } from "../context";
import { User } from "../utils/types";
import { hasToken } from "../utils/auth";

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
