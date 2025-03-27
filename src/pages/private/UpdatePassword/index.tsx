import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";

export default function UpdatePassword() {
  return (
    <SectionPrivateLayout>
      <h4>Modificar contraseña</h4>
      <form className="mt-10" action="">
        <FieldGroup label="Contraseña">
          <InputField
            name="password"
            typeField="password"
            placeholder="Ingrese la contraseña"
          />
        </FieldGroup>
        <FieldGroup label="Confirmar contrasena">
          <InputField
            name="confirmPassword"
            typeField="password"
            placeholder="Ingrese nuevamente la contrasena"
          />
        </FieldGroup>
        <Button isFull>Guardar cambios</Button>
      </form>
    </SectionPrivateLayout>
  );
}
