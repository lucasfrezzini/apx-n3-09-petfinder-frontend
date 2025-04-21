import { toast } from "sonner";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProfileSchema } from "../../../schemas/UpdateProfile";
import { useUpdateUserData } from "../../../hooks/user.hook";
import userDefault from "../../../assets/userPhotoDefault.png";
import { allPropsAreEmptyStrings, convertToBase64 } from "../../../utils";
import { UserPic } from "../../../utils/types";
import InputFormError from "../../../ui/InputFormError";
import LoaderSpinner from "../../../ui/LoaderSpinner";
import { userWithTokenAtom } from "../../../context";
import { useAtom } from "jotai";

export default function UpdateProfile() {
  const [showLoader, setShowLoader] = useState(false);
  const [user, _setUser] = useAtom(userWithTokenAtom);
  const [previewUserPic, setPreviewUserPic] = useState<UserPic>({
    url: user?.profilePic.url || "",
    url64: "",
  });
  const { updateUserData } = useUpdateUserData();

  const {
    register,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(UpdateProfileSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      });
    }
  }, [user, reset]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    // Simulate the click on the hidden file input
    fileInputRef.current!.click();
  };

  const onSubmit = async (data: any) => {
    try {
      setShowLoader(true);

      if (allPropsAreEmptyStrings(data)) {
        toast.warning("Lo lamento", {
          description: "No hay elementos nuevos para cambiar",
        });
        setShowLoader(false);
      } else {
        const profilePicClean = data.profilePic || "";
        await updateUserData({
          ...user,
          ...data,
          profilePic: profilePicClean,
        });
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
      <h4>Modificar información</h4>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="photo">Foto de perfil</label>
          <div className="mt-2 flex items-center gap-x-3">
            <img
              className="size-12 rounded-full aspect-square object-cover"
              src={previewUserPic?.url ? previewUserPic.url : userDefault}
              alt="User Pic"
            />
            {/* Input oculto */}
            <input
              ref={fileInputRef}
              type="file"
              id="photo"
              className="hidden"
              onChange={async (e: any) => {
                const file: File = e.target.files[0]!;
                if (file) {
                  console.log("Imagen seleccionada:", file);
                  const objectURL = URL.createObjectURL(file);
                  const image64 = await convertToBase64(file);
                  setValue("profilePic", image64);
                  setPreviewUserPic({ url: objectURL, url64: image64 });
                }
              }}
            />
            {/* Botón para disparar el input */}
            <button
              type="button"
              className="rounded-md cursor-pointer bg-white px-2.5 py-1.5 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              onClick={handleButtonClick}
            >
              Cambiar
            </button>

            <input type="hidden" {...register("profilePic")} />
          </div>
        </div>
        <FieldGroup label="Correo">
          <InputField
            register={register("email")}
            typeField="email"
            placeholder={user?.email || "Ingrese su correo"}
          />
          {errors.email?.message && (
            <InputFormError>{errors.email?.message}</InputFormError>
          )}
        </FieldGroup>
        <FieldGroup label="Nombre">
          <InputField
            register={register("name")}
            typeField="text"
            placeholder={user?.name || "Ingrese su nombre"}
          />
          {errors.name?.message && (
            <InputFormError>{errors.name?.message}</InputFormError>
          )}
        </FieldGroup>
        <FieldGroup label="Telefono">
          <InputField
            register={register("phone")}
            typeField="text"
            placeholder={user?.phone || "Ingrese su telefono"}
          />
          {errors.phone?.message && (
            <InputFormError>{errors.phone?.message}</InputFormError>
          )}
        </FieldGroup>
        <FieldGroup label="Ubicacion">
          <InputField
            register={register("address")}
            typeField="text"
            placeholder={user?.address || "Ingrese su direccion"}
          />
        </FieldGroup>
        {showLoader ? (
          <LoaderSpinner />
        ) : (
          <Button isFull type="submit">
            Guardar cambios
          </Button>
        )}
      </form>
    </SectionPrivateLayout>
  );
}
