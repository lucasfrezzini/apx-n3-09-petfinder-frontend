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

import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import SelectField from "../../../ui/SelectField";
import UploadImageField from "../../../ui/UploadImageField";
import Avatar from "../../../ui/Avatar";
import InputFormError from "../../../ui/InputFormError";
import MapPin from "../../../ui/MapPin";

const TOKEN =
  "pk.eyJ1IjoidGFub2RldmVsb3BlciIsImEiOiJjbTYzdXoxY3YxZzFzMmxvdW9oN3EwZ3p6In0.5rPl_irsXaZzKAt1lMg-iw";

// Función de conversión (versión simplificada)
const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result.split(",")[1]); // Elimina el prefijo "data:*/*;base64,"
      }
    };
    reader.readAsDataURL(file);
  });
};

export default function CreatePetReport() {
  const [base64Images, setBase64Images] = useState<string[]>([]);
  const [markerPoints, setMarkerPoints] = useState<
    { lat: string; lng: string }[]
  >([]);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ReportPetSchema),
  });

  const onSubmit = (data: any) => {
    console.log(JSON.parse(data.images));
    console.log(data);
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
      setValue("images", JSON.stringify(base64Array));
    },
  });

  const thumbs = files.map((file) => (
    <div
      key={`file-${file.name}`}
      className="size-12 rounded border-(--color-gray-light) border border-dashed"
    >
      <Avatar size="48px" src={file.preview} />
    </div>
  ));

  const emptyThumbs = (
    <>
      <div className="size-12 rounded border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded border-(--color-gray-light) border border-dashed"></div>
      <div className="size-12 rounded border-(--color-gray-light) border border-dashed"></div>
    </>
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  async function getAddress(lng: number, lat: number): Promise<string> {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${TOKEN}`
    );
    const data = await response.json();
    // Verifica si hay resultados
    if (data.features.length > 0) {
      const context = data.features[0].context;

      // Busca la ciudad (place) o el barrio (neighborhood) en el contexto
      const city = context.find((item: any) =>
        item.id.startsWith("place")
      )?.text;
      const region = context.find((item: any) =>
        item.id.startsWith("region")
      )?.text;

      // Devuelve la ciudad o el barrio, según lo que esté disponible
      return `${city ? city : ""}${region ? "," + region : ""}`;
    } else {
      return "No encontrada";
    }
  }

  async function handleClickMap(e: any) {
    const { lng, lat } = e.lngLat;
    const location = await getAddress(lng, lat);
    setMarkerPoints((_prevPoints) => [{ lng, lat }]);
    setValue("lat", lat);
    setValue("lng", lng);
    setValue("location", location);
  }

  return (
    <main className="container xl:w-4xl mx-auto pt-24">
      <SectionPrivateLayout>
        <h4>Reportar mascota</h4>
        <form
          className="mt-10 grid lg:gap-x-10"
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
            <FieldGroup label="Subir imágenes de mascota">
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
                      No pueden ser más de 4 imágenes
                    </p>
                  )}
                  {errors.images?.message && (
                    <InputFormError>{errors.images?.message}</InputFormError>
                  )}
                </div>
                <aside className="flex gap-4 mt-4">
                  {thumbs.length ? thumbs : emptyThumbs}
                  <input
                    type="hidden"
                    {...register("images")}
                    value={JSON.stringify(base64Images)}
                  />
                </aside>
              </section>
            </FieldGroup>
          </div>
          <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
            <FieldGroup label="Ubicacion">
              <div className="w-[100%] h-[300px] sm:h-[400px] lg:h-[570px] rounded-lg overflow-hidden">
                <Map
                  initialViewState={{
                    latitude: -34.6277,
                    longitude: -58.4477,
                    zoom: 14,
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
          <Button type="submit" isStrech isFull>
            Guardar cambios
          </Button>
        </form>
      </SectionPrivateLayout>
    </main>
  );
}
