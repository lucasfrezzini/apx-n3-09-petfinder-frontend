import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LoginSchema } from "../../../schemas/Login";

import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import { Link, useNavigate } from "react-router";
import InputFormError from "../../../ui/InputFormError";
import { useLogin } from "../../../hooks/login.hook";
import { useState, useEffect } from "react";
import LoaderSpinner from "../../../ui/LoaderSpinner";
import { isAuthenticated } from "../../../utils/auth";

export default function Login() {
  let navigate = useNavigate();

  // Redirect to pets-state if already authenticated
  useEffect(() => {
    if (isAuthenticated()) navigate("/pets-state");
  }, [isAuthenticated, navigate]);

  const [showLoader, setShowLoader] = useState(false);
  const { login } = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setShowLoader(true);
      await login(data.email, data.password);
      setShowLoader(false);
      toast.success("Bienvenido", {
        description: "Haz iniciado sesion",
      });
      navigate("/pets-state");
    } catch (error: any) {
      setShowLoader(false);
      toast.error("Error de sesion", {
        description: "Lo siento, intentelo nuevamente",
      });
    }
  };

  return (
    <div className="w-full bg-gray-light pb-16 min-h-full">
      <main className="container mx-auto pt-24 md:pt-36 sm:w-lg">
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
            {showLoader ? (
              <LoaderSpinner />
            ) : (
              <Button isFull type="submit">
                Ingresar
              </Button>
            )}
          </form>
          <p className="text-gray-400">
            No tienes cuenta?{" "}
            <Link className="text-primary hover:underline" to="/register">
              Crear una nueva cuenta
            </Link>
          </p>
        </SectionPrivateLayout>
      </main>
    </div>
  );
}
