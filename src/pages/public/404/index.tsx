import { Link } from "react-router";
import Button from "../../../ui/Button";

export default function Page404() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-2xl font-semibold text-primary">404</p>
          <h1 className="mt-4">Página no encontrada</h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Lo sentimos, no pudimos encontrar la página que estabas buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <Button type="button" isSmall>
                Ir al inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
