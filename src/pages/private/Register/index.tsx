import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "../../../schemas/Register";

import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import InputFormError from "../../../ui/InputFormError";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../../../utils/auth";
import { useCreateAccount, useLogin } from "../../../hooks/login.hook";
import { toast } from "sonner";
import LoaderSpinner from "../../../ui/LoaderSpinner";

export default function Register() {
  let navigate = useNavigate();

  // Redirect to pets-state if already authenticated
  //! DESCOMENTAR CUANDO FUNCIONA TODO
  // useEffect(() => {
  //   if (isAuthenticated()) navigate("/pets-state");
  // }, [isAuthenticated, navigate]);
  const [showLoader, setShowLoader] = useState(false);
  const { createAccount } = useCreateAccount();
  const { login } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setShowLoader(true);
      await createAccount(data.email, data.password);
      await login(data.email, data.password);
      setShowLoader(false);
      toast.success("Felicidades", {
        description: "Cuenta creada con éxito",
      });
      navigate("/pets-state");
    } catch (error: any) {
      setShowLoader(false);
      toast.error("Error de registro", {
        description: "Lo siento, intentelo nuevamente",
      });
    }
  };

  return (
    <div className="w-full bg-gray-light pb-16 min-h-full">
      <main className="container mx-auto pt-24 md:pt-36 sm:w-lg">
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
                <InputFormError>
                  {errors.confirmPassword?.message}
                </InputFormError>
              )}
            </FieldGroup>

            {showLoader ? (
              <LoaderSpinner />
            ) : (
              <Button isFull type="submit">
                Registrarse
              </Button>
            )}
          </form>
          <p className="text-gray-400">
            Ya tienes cuenta?{" "}
            <Link className="text-primary hover:underline" to="/login">
              Ingresar a la cuenta
            </Link>
          </p>
        </SectionPrivateLayout>
      </main>
    </div>
  );
}
