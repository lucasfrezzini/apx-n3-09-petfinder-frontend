import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";

export default function Login() {
  return (
    <SectionPrivateLayout>
      <h4>Iniciar sesion</h4>
      <form className="my-10" action="">
        <FieldGroup label="Correo">
          <InputField typeField="email" placeholder="Ingrese el correo" />
        </FieldGroup>
        <FieldGroup label="Contrasena">
          <InputField
            typeField="password"
            placeholder="Ingrese la contrasena"
          />
        </FieldGroup>
        <Button isFull>Ingresar</Button>
      </form>
      <p className="text-gray-400">
        No tienes cuenta?{" "}
        <a className="text-primary" href="#">
          Crear una nueva cuenta
        </a>
      </p>
    </SectionPrivateLayout>
  );
}
