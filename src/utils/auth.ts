// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const userWithToken = localStorage.getItem("userWithToken");
  if (userWithToken === null) return false;

  try {
    const parsedUser = JSON.parse(userWithToken);
    const token = parsedUser.token;
    if (!token) return false;

    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp && payload.exp < Date.now() / 1000) {
      localStorage.removeItem("userWithToken"); // También eliminar userWithToken
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error al parsear datos:", error);
    return false; // Si hay un error de parseo (JSON inválido)
  }
};

export function hasToken(): void | string {
  const userWithToken = localStorage.getItem("userWithToken");
  if (userWithToken === null) throw new Error("No token found");

  const parsedUser = JSON.parse(userWithToken as string);
  const token = parsedUser.token;

  if (!token) {
    throw new Error("No token found");
  }

  return token;
}
