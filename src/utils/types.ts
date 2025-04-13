// TypeScript type for the Pet table
export type Pet = {
  id: number;
  name: string; // NOT NULL
  type_pet: "dog" | "cat"; // NOT NULL
  age: string; // NOT NULL
  size: "small" | "medium" | "big"; // NOT NULL
  lat: string; // NOT NULL
  lng: string; // NOT NULL
  status: string; // NOT NULL
  description: string;
  images: {
    url: string;
    asset_id: string;
  }[];
  location: string; // NOT NULL
};

// TypeScript type for the Report table
export type Report = {
  name: string; // NOT NULL
  phone: string; // NOT NULL
  info: string; // NOT NULL
};

// TypeScript type for the User table
export type User = {
  id: number;
  name?: string; // Opcional porque no tiene NOT NULL
  email: string; // NOT NULL
  phone?: string; // Opcional porque no tiene NOT NULL
  address?: string; // Opcional porque no tiene NOT NULL
  lat?: string; // Opcional porque no tiene NOT NULL
  lng?: string; // Opcional porque no tiene NOT NULL
  profilePic: string;
};

export type UserPic = {
  url: string; // Propiedad para la URL de previsualización
  url64: string; // Propiedad para la URL en formato Base64
};

export type FetchParams = {
  endpoint: string;
  // headers: {};
  method: string;
  token?: string;
  body?: {};
  errorMessage?: string;
};

// make type User + Token string
export type UserWithToken = User & { token: string };
