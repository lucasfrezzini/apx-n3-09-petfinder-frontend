import { toast } from "sonner";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import InputFormError from "../../../ui/InputFormError";
import LoaderSpinner from "../../../ui/LoaderSpinner";
import { allPropsAreEmptyStrings } from "../../../utils";
import { useState } from "react";
import { useAtom } from "jotai";
import { userWithTokenAtom } from "../../../context";
import { useUpdateUserPassword } from "../../../hooks/user.hook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateDataPassword } from "../../../schemas/UpdatePassword";

export default function UpdatePassword() {
  const [showLoader, setShowLoader] = useState(false);
  const [user, _setUser] = useAtom(userWithTokenAtom);

  const { updateUserPassword } = useUpdateUserPassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(UpdateDataPassword),
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);

      setShowLoader(true);
      if (allPropsAreEmptyStrings(data)) {
        toast.warning("Lo lamento", {
          description: "No hay elementos nuevos para cambiar",
        });
        setShowLoader(false);
      } else {
        await updateUserPassword({ ...data, id: user!.id });
        setShowLoader(false);
        toast.success("Todo genial", {
          description: "Se han actualizado los datos correctamente",
        });
      }
    } catch (error: any) {
      setShowLoader(false);
      toast.error("Lo lamento", {
        description: "Algo falló, intentelo nuevamente",
      });
    }
  };
  return (
    <SectionPrivateLayout>
      <h4>Modificar contraseña</h4>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
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
        {showLoader ? (
          <LoaderSpinner />
        ) : (
          <Button type="submit" isFull>
            Guardar cambios
          </Button>
        )}
      </form>
    </SectionPrivateLayout>
  );
}
