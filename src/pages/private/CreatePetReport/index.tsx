import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import SelectField from "../../../ui/SelectField";
import UploadImageField from "../../../ui/UploadImageField";

export default function CreatePetReport() {
  return (
    <main className="container xl:w-4xl mx-auto pt-24">
      <SectionPrivateLayout>
        <h4>Reportar mascota</h4>
        <form className="mt-10 grid lg:gap-12" action="">
          <div className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
            <FieldGroup label="Nombre">
              <InputField
                name="name"
                typeField="text"
                placeholder="Ingrese el Nombre"
              />
            </FieldGroup>
            <FieldGroup label="Edad">
              <InputField
                name="age"
                typeField="number"
                placeholder="Ingrese el edad"
              />
            </FieldGroup>
            <FieldGroup label="Tipo de animal">
              <SelectField name="type">
                <option>Perro</option>
                <option>Gato</option>
              </SelectField>
            </FieldGroup>
            <FieldGroup label="Tamaño">
              <SelectField name="size">
                <option>Pequeño</option>
                <option>Mediano</option>
                <option>Grande</option>
              </SelectField>
            </FieldGroup>
          </div>
          <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
            <FieldGroup label="Subir imagen de mascota">
              <UploadImageField></UploadImageField>
            </FieldGroup>
            {/* //! TODO: Add Mapbox map */}
            <FieldGroup label="Ubicacion">
              <InputField
                name="location"
                typeField="email"
                placeholder="Ingrese su ubicacion"
              />
            </FieldGroup>
          </div>
          <Button isStrech isFull>
            Guardar cambios
          </Button>
        </form>
      </SectionPrivateLayout>
    </main>
  );
}
