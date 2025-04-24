import { useNavigate, useParams } from "react-router";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import TextareaField from "../../../ui/TextareaField";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import { Component, useState } from "react";
import { useGetPetById } from "../../../hooks/pet.hook";
import SectionHeader from "../../../components/SectionHeader";
import PetResumeSkeleton from "../../../ui/PetReportSkeleton";
import LoaderSpinner from "../../../ui/LoaderSpinner";
import InputFormError from "../../../ui/InputFormError";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NotifySchema } from "../../../schemas/Notify";
import { useSendPetReport } from "../../../hooks/report.hook";
import { userWithTokenAtom } from "../../../context";
import { useAtomValue } from "jotai";

function getSize(size: string) {
  if (size === "small") return "Pequeño";
  if (size === "medium") return "Mediano";
  if (size === "big") return "Grande";
}

type CarouselPetProps = {
  images: { url: string; public_id: string }[]; // Prop que contiene un array de URLs de imágenes
};

class CarouselPet extends Component<CarouselPetProps> {
  private _plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
    new Fade(),
    new Pagination({ type: "scroll" }),
  ];

  public render() {
    const { images } = this.props; // Extraer las imágenes desde las props

    return (
      <>
        <Flicking align="center" circular={true} plugins={this._plugins}>
          {images.map((image, index) => (
            <div key={index} className="plugins-panel">
              <img
                className="panel-image"
                src={image.url}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          <ViewportSlot>
            <div className="flicking-pagination"></div>
          </ViewportSlot>
        </Flicking>
      </>
    );
  }
}

export default function NotifyPet() {
  let navigate = useNavigate();
  const { sendPetReport } = useSendPetReport();
  let { id } = useParams();
  const { pet, isLoading, error } = useGetPetById(parseInt(id!));
  const user = useAtomValue(userWithTokenAtom);
  const [showLoader, setShowLoader] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(NotifySchema),
  });

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Mis Mascotas" subtitle="Estado de tus mascotas">
          <p className="mb-4">
            Tuvimos problemas tecnicos con la carga de la información
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <p className="text-8xl">😭</p>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Nuevo aviso" subtitle="Envio de alertas">
          <p className="mb-4">
            Estamos preparando todo para poder avisar el dueño
          </p>
        </SectionHeader>
        <SectionPrivateLayout>
          <div className="flex flex-col gap-6">
            <PetResumeSkeleton bg="bg-secondary" />
            <PetResumeSkeleton bg="bg-secondary" />
            <PetResumeSkeleton bg="bg-secondary" />
          </div>
        </SectionPrivateLayout>
      </main>
    );
  }

  if (!pet) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Nuevo aviso" subtitle="Envio de alertas">
          <p className="mb-4">
            No se encontro la mascota buscada, prueba de nuevo
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <p className="text-8xl">🥳</p>
        </div>
      </main>
    );
  }

  const typeToSpanish = pet?.type_pet === "dog" ? "Perro" : "Gato";
  const sizeToSpanish = getSize(pet!.size);

  const onSubmit = async (data: any) => {
    try {
      setShowLoader(true);
      await sendPetReport(data, pet.id);

      setShowLoader(false);
      toast.success("Gracias por el aviso", {
        description: "Ayudaste seguramente a encontrar un amigo peludito ☺️",
      });
      navigate("/");
    } catch (error: any) {
      setShowLoader(false);
      toast.error("Tuvimos un error", {
        description: "Lo siento, intentelo nuevamente",
      });
    }
  };

  return (
    <main className="container mx-auto pt-24 sm:w-2xl">
      <SectionPrivateLayout>
        <CarouselPet images={pet.images} />
        <div className="bg-warning-secondary border border-dashed border-gray-light p-4 rounded-lg text-3xl">
          <h6 className="mb-4">Resumen</h6>
          <p className="font-bold">
            {`Nombre: `}
            <span className="text-primary font-normal"> {pet.name}</span>
          </p>
          <p className="font-bold">
            {`Edad: `}
            <span className="text-primary font-normal"> {pet.age}</span>
          </p>
          <p className="font-bold">
            {`Tipo: `}
            <span className="text-primary font-normal"> {typeToSpanish}</span>
          </p>
          <p className="font-bold">
            {`Tamaño: `}
            <span className="text-primary font-normal"> {sizeToSpanish}</span>
          </p>
          <p className="font-bold mt-4">
            {`Descripcion: `}
            <span className="block font-normal"> {pet.description}</span>
          </p>
        </div>
        {pet?.UserId !== user?.id && (
          <>
            <h4 className="mt-10">Avisar al dueño</h4>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup label="Nombre">
                <InputField
                  register={register("name")}
                  typeField="text"
                  placeholder="Ingrese el nombre"
                />
                {errors.name?.message && (
                  <InputFormError>{errors.name?.message}</InputFormError>
                )}
              </FieldGroup>
              <FieldGroup label="Telefono">
                <InputField
                  register={register("phone")}
                  typeField="text"
                  placeholder="Ingrese su telefono"
                />
                {errors.phone?.message && (
                  <InputFormError>{errors.phone?.message}</InputFormError>
                )}
              </FieldGroup>
              <FieldGroup label="Descripcion">
                <TextareaField
                  register={register("info")}
                  placeholder="Ingrese toda la informacion que pueda sobre la mascota, como calle donde la vio, si estaba en algun arbol o con otros animales. Todo sirve!"
                />
                {errors.info?.message && (
                  <InputFormError>{errors.info?.message}</InputFormError>
                )}
              </FieldGroup>
              {showLoader ? (
                <LoaderSpinner />
              ) : (
                <Button type="submit" isFull>
                  Enviar reporte
                </Button>
              )}
            </form>
          </>
        )}
      </SectionPrivateLayout>
    </main>
  );
}
