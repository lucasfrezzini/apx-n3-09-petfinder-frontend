import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";

export default function UpdatePassword() {
  return (
    <SectionPrivateLayout>
      <h4>Modificar información</h4>
      <form className="mt-10" action="">
        <FieldGroup label="Nombre">
          <InputField
            name="name"
            typeField="name"
            placeholder="Ingrese el Nombre"
          />
        </FieldGroup>
        <FieldGroup label="Apellido">
          <InputField
            name="lastname"
            typeField="lastname"
            placeholder="Ingrese el Apellido"
          />
        </FieldGroup>
        <FieldGroup label="Ubicacion">
          <InputField
            name="location"
            typeField="email"
            placeholder="Ingrese su ubicacion"
          />
        </FieldGroup>
        <FieldGroup label="Correo">
          <InputField
            name="email"
            typeField="email"
            placeholder="Ingrese el correo"
          />
        </FieldGroup>
        <Button isFull>Guardar cambios</Button>
      </form>
    </SectionPrivateLayout>
  );
}
