import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../../../schemas/Login";

import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import { Link } from "react-router";
import InputFormError from "../../../ui/InputFormError";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="container mx-auto pt-24 sm:w-lg">
      <SectionPrivateLayout>
        <h4>Iniciar sesion</h4>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup label="Correo">
            <InputField
              register={register("email")}
              typeField="email"
              placeholder="Ingrese el correo"
            />
            {errors.email?.message && (
              <InputFormError>{errors.email?.message}</InputFormError>
            )}
          </FieldGroup>
          <FieldGroup label="Contrasena">
            <InputField
              register={register("password")}
              typeField="password"
              placeholder="Ingrese la contrasena"
            />
            {errors.password?.message && (
              <InputFormError>{errors.password?.message}</InputFormError>
            )}
          </FieldGroup>
          <Button isFull type="submit">
            Ingresar
          </Button>
        </form>
        <p className="text-gray-400">
          No tienes cuenta?{" "}
          <Link className="text-primary hover:underline" to="/register">
            Crear una nueva cuenta
          </Link>
        </p>
      </SectionPrivateLayout>
    </main>
  );
}
