// TypeScript type for the Pet table
export type Pet = {
  UserId?: number;
  id: number;
  name: string;
  type_pet: "dog" | "cat";
  age: string;
  size: "small" | "medium" | "big";
  lat: string;
  lng: string;
  status: string;
  description: string;
  images: {
    url: string;
    public_id: string;
  }[];
  location: string;
  createdAt: string;
  updatedAt: string;
};

// TypeScript type for the Report table
export type Report = {
  name: string;
  phone: string;
  info: string;
  createdAt: string;
  updatedAt: string;
};

// TypeScript type for the User table
export type User = {
  id: number;
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  lat?: string;
  lng?: string;
  profilePic: {
    url: string;
    public_id: string;
  };
};

export type PetAndReports = Pet & { Reports: Report[] };

export type ReportInfo = {
  id: number;
  name: string;
  reports: Report[];
};

export type UserPic = {
  url: string;
  url64: string;
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
