import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ReportPetSchema } from "../../../schemas/ReportPet";

import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

import { convertToBase64, getAddress } from "../../../utils";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import SelectField from "../../../ui/SelectField";
import UploadImageField from "../../../ui/UploadImageField";
import Avatar from "../../../ui/Avatar";
import InputFormError from "../../../ui/InputFormError";
import MapPin from "../../../ui/MapPin";
import { useNavigate, useParams } from "react-router";
import {
  useGetPetById,
  useChangeStatusPet,
  useUpdatePetReport,
} from "../../../hooks/pet.hook";
import LoaderSpinner from "../../../ui/LoaderSpinner";
import { toast } from "sonner";
import TextareaField from "../../../ui/TextareaField";
import PetEditReportSkeletonProps from "../../../ui/PetEditReportSkeleton";
import SectionHeader from "../../../components/SectionHeader";
import { userCoordsAtom } from "../../../context";
import { useAtomValue } from "jotai";

const TOKEN =
  "pk.eyJ1IjoidGFub2RldmVsb3BlciIsImEiOiJjbTYzdXoxY3YxZzFzMmxvdW9oN3EwZ3p6In0.5rPl_irsXaZzKAt1lMg-iw";

export default function EditPetReport() {
  const coords = useAtomValue(userCoordsAtom);

  let navigate = useNavigate();
  let { id } = useParams();

  const { pet, isLoading, error } = useGetPetById(parseInt(id!));

  const [showLoader, setShowLoader] = useState(false);
  const [showLoaderFind, setShowLoaderFind] = useState(false);
  const { updatePetReport } = useUpdatePetReport();
  const { changeStatusPet } = useChangeStatusPet();

  const [base64Images, setBase64Images] = useState<string[]>([]);
  const [markerPoints, setMarkerPoints] = useState<
    { lat: string; lng: string }[]
  >([]);

  const {
    register,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ReportPetSchema),
  });

  useEffect(() => {
    if (pet) {
      const convertImagesToBase64 = async () => {
        const base64ImagePromises = pet.images.map(async (image) => {
          try {
            const response = await fetch(image.url);
            const blob = await response.blob();
            return await convertToBase64(blob);
          } catch (error) {
            console.error("Error fetching image:", image.url, error);
            return null; // o alguna otra forma de manejar el error
          }
        });

        const base64ImagesArray = await Promise.all(base64ImagePromises);
        const validBase64Images = base64ImagesArray.filter(Boolean) as string[]; // Filtrar imágenes que no se pudieron convertir

        reset({
          name: pet.name,
          age: pet.age,
          type_pet: pet.type_pet!,
          size: pet.size,
          description: pet.description,
          location: pet.location,
          lat: Number(pet.lat),
          lng: Number(pet.lng),
          arrDataURI: validBase64Images,
        });

        setBase64Images(validBase64Images);
        setFiles(
          validBase64Images.map((base64, index) => ({
            name: `image-${index}`,
            preview: base64,
          }))
        );

        if (pet.lat && pet.lng) {
          setMarkerPoints([{ lat: pet.lat, lng: pet.lng }]);
        }
      };

      convertImagesToBase64();
    }
  }, [pet, reset]);

  async function handleClickChangePetStatus() {
    try {
      setShowLoaderFind(true);

      await changeStatusPet(pet!.id);
      setShowLoaderFind(false);
      toast.success("Cambio de estado modificado", {
        description: "Genial, se han actualizado correctamente los cambios",
      });
      setTimeout(() => {
        navigate("/pets-state");
      }, 1500);
    } catch (error: any) {
      setShowLoaderFind(false);
      toast.error("Tuvimos un error con la actualización", {
        description: "Lo siento, intentelo nuevamente",
      });
    }
  }

  const onSubmit = async (data: any) => {
    try {
      setShowLoader(true);

      await updatePetReport(data, pet!.id);
      setShowLoader(false);
      toast.success("Felicitaciones", {
        description: "Se ha actualizado correctamente el reporte",
      });
      setTimeout(() => {
        navigate("/pets-state");
      }, 1500);
    } catch (error: any) {
      setShowLoader(false);
      toast.error("Tuvimos un error con la actualización", {
        description: "Lo siento, intentelo nuevamente",
      });
    }
  };

  // Dropzone config
  const [files, setFiles] = useState<Array<{ name: string; preview: string }>>(
    []
  );
  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
    maxFiles: 4,
    maxSize: 5 * 1024 * 1024, // 5MB
    onDrop: async (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
      const base64Array: string[] = await Promise.all(
        acceptedFiles.map((file) => convertToBase64(file))
      );
      setBase64Images(base64Array);
      setValue("arrDataURI", base64Array);
    },
  });

  const thumbs = files.map((file) => (
    <div
      key={`file-${file.name}`}
      className="size-12 rounded-(--border-radius)"
    >
      <Avatar size="48px" src={file.preview} />
    </div>
  ));

  const emptyThumbs = (
    <>
      <div className="size-12 rounded-(--border-radius) border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded-(--border-radius) border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded-(--border-radius) border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded-(--border-radius) border-(--color-gray-light) border border-dashed"></div>
    </>
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  async function handleClickMap(e: any) {
    const { lng, lat } = e.lngLat;
    const location = await getAddress(lng, lat, TOKEN);
    setMarkerPoints((_prevPoints) => [{ lng, lat }]);
    setValue("lat", lat);
    setValue("lng", lng);
    setValue("location", location);
  }

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="¡Sistema colapsado!"
          subtitle="Demasiadas solicitudes simultáneas"
        >
          <p className="mb-4">
            Nuestros servidores están saturados. Intentá nuevamente en 2 minutos
            o contactá soporte@petrescue.com.
          </p>
        </SectionHeader>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto mt-24 sm:w-4xl">
        <SectionHeader
          title="Buscando mascota..."
          subtitle="Verificando últimos datos"
        >
          <p className="mb-4">
            Estamos cruzando los datos de la mascota con su ultima versión. Esto
            puede demorar unos segundos.
          </p>
        </SectionHeader>
        <SectionPrivateLayout>
          <PetEditReportSkeletonProps bg="bg-secondary" />
        </SectionPrivateLayout>
      </main>
    );
  }

  return (
    <main className="container xl:w-4xl mx-auto pt-24">
      <SectionPrivateLayout>
        <h4>Reportar mascota</h4>
        <form
          className="mt-10 mb-4 grid lg:gap-x-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
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
            <FieldGroup label="Edad">
              <InputField
                register={register("age")}
                typeField="string"
                placeholder="Ingrese la edad"
              />
              {errors.age?.message && (
                <InputFormError>{errors.age?.message}</InputFormError>
              )}
            </FieldGroup>
            <FieldGroup label="Tipo de animal">
              <SelectField register={register("type_pet")}>
                <option value={"dog"}>Perro</option>
                <option value={"cat"}>Gato</option>
              </SelectField>
              {errors.type_pet?.message && (
                <InputFormError>{errors.type_pet?.message}</InputFormError>
              )}
            </FieldGroup>
            <FieldGroup label="Tamaño">
              <SelectField register={register("size")}>
                <option value={"small"}>Pequeño</option>
                <option value={"medium"}>Mediano</option>
                <option value={"big"}>Grande</option>
              </SelectField>
              {errors.size?.message && (
                <InputFormError>{errors.size?.message}</InputFormError>
              )}
            </FieldGroup>
            <FieldGroup label="Subir imágenes de la mascota">
              <p className="-mt-2 text-sm text-warning-primary">
                Hasta 4 imágenes
              </p>
              <section className="container">
                <div
                  {...getRootProps({ className: "dropzone cursor-pointer" })}
                >
                  <input {...getInputProps()} />
                  <UploadImageField></UploadImageField>
                  {isDragReject && (
                    <p className="text-sm mt-2 text-alert-primary">
                      No pueden ser más de 4 imágenes ni tampoco archivos
                      mayores a 5MB
                    </p>
                  )}
                  {errors.arrDataURI?.message && (
                    <InputFormError>
                      {errors.arrDataURI?.message}
                    </InputFormError>
                  )}
                </div>
                <aside className="flex gap-4 mt-4">
                  {thumbs.length ? thumbs : emptyThumbs}
                  <input
                    type="hidden"
                    {...register("arrDataURI")}
                    value={base64Images}
                  />
                </aside>
              </section>
            </FieldGroup>
          </div>
          <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
            <FieldGroup label="Descripcion">
              <TextareaField
                register={register("description")}
                placeholder="Ingrese toda la informacion que pueda sobre la mascota, como razgos, qué llevaba puesto, etc para ayudar a identificarla"
              />
              {errors.description?.message && (
                <InputFormError>{errors.description?.message}</InputFormError>
              )}
            </FieldGroup>
            <FieldGroup label="Ubicacion">
              <div className="w-[100%] h-[300px] sm:h-[400px] lg:h-[350px] rounded-lg overflow-hidden">
                <Map
                  initialViewState={{
                    latitude: coords?.latitude || -34.6118,
                    longitude: coords?.longitude || -58.4244,
                    zoom: 10,
                    bearing: 0,
                    pitch: 0,
                  }}
                  style={{ width: "100%", height: "100%" }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken={TOKEN}
                  scrollZoom={false}
                  onClick={handleClickMap}
                >
                  <FullscreenControl position="top-left" />
                  <NavigationControl position="top-left" />
                  <GeolocateControl position="top-left" />

                  {markerPoints.map((point, index) => (
                    <Marker
                      key={`clicked-marker-${index}`}
                      longitude={Number(point.lng)}
                      latitude={Number(point.lat)}
                      anchor="bottom"
                    >
                      <MapPin />
                    </Marker>
                  ))}
                </Map>
              </div>
              <input type="hidden" {...register("lat")} />
              <input type="hidden" {...register("lng")} />
              {errors.lat?.message && (
                <InputFormError>{errors.lat?.message}</InputFormError>
              )}
              {errors.lng?.message && (
                <InputFormError>{errors.lng?.message}</InputFormError>
              )}
            </FieldGroup>
            <FieldGroup label="">
              <InputField
                register={register("location")}
                typeField="text"
                disabled={true}
                placeholder="Ingrese su ubicacion"
              />
              {errors.location?.message && (
                <InputFormError>{errors.location?.message}</InputFormError>
              )}
            </FieldGroup>
          </div>
          {showLoader ? (
            <LoaderSpinner isStrech />
          ) : (
            <Button type="submit" isStrech isFull>
              Guardar cambios
            </Button>
          )}
        </form>
        {showLoaderFind ? (
          <LoaderSpinner isStrech />
        ) : (
          <Button
            type="button"
            isStrech
            isFull
            isUnfilled
            onClick={handleClickChangePetStatus}
          >
            {pet?.status == "lost"
              ? "Reportar como encontrada"
              : "Reportar como perdida"}
          </Button>
        )}
      </SectionPrivateLayout>
    </main>
  );
}
