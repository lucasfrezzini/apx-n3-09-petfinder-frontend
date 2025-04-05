import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "../../../schemas/Register";

import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import InputFormError from "../../../ui/InputFormError";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="container mx-auto pt-24 sm:w-lg">
      <SectionPrivateLayout>
        <h4>Crear cuenta</h4>
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
          <FieldGroup label="Tu contraseña">
            <InputField
              register={register("password")}
              typeField="password"
              placeholder="Ingrese la contrasena"
            />
            {errors.password?.message && (
              <InputFormError>{errors.password?.message}</InputFormError>
            )}
          </FieldGroup>
          <FieldGroup label="Confirmar contraseña">
            <InputField
              register={register("confirmPassword")}
              typeField="password"
              placeholder="Ingrese nuevamente la contrasena"
            />
            {errors.confirmPassword?.message && (
              <InputFormError>{errors.confirmPassword?.message}</InputFormError>
            )}
          </FieldGroup>
          <Button isFull type="submit">
            Registrarse
          </Button>
        </form>
        <p className="text-gray-400">
          Ya tienes cuenta?{" "}
          <a className="text-primary hover:underline" href="#">
            Iniciar sesion
          </a>
        </p>
      </SectionPrivateLayout>
    </main>
  );
}
