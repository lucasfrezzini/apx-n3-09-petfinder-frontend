import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";

export default function Register() {
  return (
    <SectionPrivateLayout>
      <h4>Crear cuenta nueva</h4>
      <form className="my-10" action="">
        <FieldGroup label="Correo">
          <InputField typeField="email" placeholder="Ingrese el correo" />
        </FieldGroup>
        <FieldGroup label="Tu contraseña">
          <InputField
            typeField="password"
            placeholder="Ingrese la contrasena"
          />
        </FieldGroup>
        <FieldGroup label="Confirmar contraseña">
          <InputField
            typeField="password"
            placeholder="Ingrese la contrasena"
          />
        </FieldGroup>
        <Button isFull>Registrarse</Button>
      </form>
      <p className="text-gray-400">
        Ya tienes cuenta?{" "}
        <a className="text-primary" href="#">
          Iniciar sesion
        </a>
      </p>
    </SectionPrivateLayout>
  );
}
