import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { asyncFetchDataAtom, userWithTokenAtom } from "../context";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useCreateAccount() {
  const fetchData = useSetAtom(asyncFetchDataAtom);

  async function createAccount(email: string, password: string) {
    try {
      const fetchPromise = fetchData({
        endpoint: `auth`,
        method: "POST",
        token: undefined,
        body: { email, password },
        errorMessage: "Error signing up",
      });

      await fetchPromise;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { createAccount };
}

export function useLogin() {
  const fetchData = useSetAtom(asyncFetchDataAtom);
  const [_userWithToken, setUserWithToken] = useAtom(userWithTokenAtom);

  async function login(email: string, password: string) {
    try {
      const fetchPromise = fetchData({
        endpoint: `auth/token`,
        method: "POST",
        token: undefined,
        body: { email, password },
        errorMessage: "Error logging in",
      });

      const login = await fetchPromise;
      setUserWithToken({
        id: login.id,
        name: login.userData.name,
        email: login.userData.email,
        phone: login.userData.phone,
        address: login.userData.address,
        lat: login.userData.lat,
        lng: login.userData.lng,
        profilePic: login.userData.profilePic,
        token: login.token,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return { login };
}

export function useLogout() {
  const navigate = useNavigate();
  const [_userWithToken, setUserWithToken] = useAtom(userWithTokenAtom);

  function logout() {
    setUserWithToken(RESET);
    toast.success("Hasta luego!", {
      description: "Te haz desconectado correctamente. Vuelve pronto :)",
    });
    navigate("/");
  }

  return { logout };
}
