import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import Button from "../../../ui/Button";
import FieldGroup from "../../../ui/FieldGroup";
import InputField from "../../../ui/InputField";

export default function Register() {
  return (
    <main className="container mx-auto pt-24 sm:w-lg">
      <SectionPrivateLayout>
        <h4>Crear cuenta nueva</h4>
        <form className="my-10" action="">
          <FieldGroup label="Correo">
            <InputField
              name="email"
              typeField="email"
              placeholder="Ingrese el correo"
            />
          </FieldGroup>
          <FieldGroup label="Tu contraseña">
            <InputField
              name="password"
              typeField="password"
              placeholder="Ingrese la contrasena"
            />
          </FieldGroup>
          <FieldGroup label="Confirmar contraseña">
            <InputField
              name="confirmPassword"
              typeField="password"
              placeholder="Ingrese nuevamente la contrasena"
            />
          </FieldGroup>
          <Button isFull>Registrarse</Button>
        </form>
        <p className="text-gray-400">
          Ya tienes cuenta?{" "}
          <a className="text-primary hover:underline" href="#">
            Iniciar sesion
          </a>
        </p>
      </SectionPrivateLayout>
    </main>
  );
}
