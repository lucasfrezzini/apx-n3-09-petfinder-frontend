// Función de conversión a base 64
export const convertToBase64 = (file: File | Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      }
    };
    reader.readAsDataURL(file);
  });
};

export function allPropsAreEmptyStrings(obj: any) {
  // Verifica si el objeto está vacío
  if (Object.keys(obj).length === 0) return false;

  // Si no esta vacio, verifica si las props son strings y strings vacios
  return Object.values(obj).every(
    (value) => typeof value === "string" && value.trim() === ""
  );
}

export async function getAddress(
  lng: number,
  lat: number,
  token: string
): Promise<string> {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}`
  );
  const data = await response.json();
  // Verifica si hay resultados
  if (data.features.length > 0) {
    const context = data.features[0].context;

    // Busca la ciudad (place) o el barrio (neighborhood) en el contexto
    const city = context.find((item: any) => item.id.startsWith("place"))?.text;
    const region = context.find((item: any) =>
      item.id.startsWith("region")
    )?.text;

    // Devuelve la ciudad o el barrio, según lo que esté disponible
    return `${city ? city : ""}${region ? "," + region : ""}`;
  } else {
    return "No encontrada";
  }
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric" as "numeric",
    month: "long" as "long",
    day: "numeric" as "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("es-AR", options);
};
