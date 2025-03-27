import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";
import TextareaField from "../../../ui/TextareaField";

export default function NotifyPet() {
  return (
    <main className="container mx-auto pt-24 sm:w-lg">
      <SectionPrivateLayout>
        <h4>
          Reportar información sobre:{" "}
          <span className="text-primary">Manchitas</span>
        </h4>
        <form className="mt-10" action="">
          <FieldGroup label="Nombre">
            <InputField
              name="name"
              typeField="name"
              placeholder="Ingrese el Nombre"
            />
          </FieldGroup>
          <FieldGroup label="Telefono">
            <InputField
              name="phone"
              typeField="phone"
              placeholder="Ingrese su telefono"
            />
          </FieldGroup>
          <FieldGroup label="Mensaje">
            <TextareaField placeholder="Ingrese toda la informacion que pueda sobre la mascota vista" />
          </FieldGroup>
          <Button isFull>Enviar reporte</Button>
        </form>
      </SectionPrivateLayout>
    </main>
  );
}
