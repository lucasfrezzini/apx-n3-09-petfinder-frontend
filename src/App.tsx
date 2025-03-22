import Button from "./ui/Button";
import InputField from "./ui/InputField";
import FieldGroup from "./ui/FieldGroup";
import TextareaField from "./ui/TextareaField";

function App() {
  return (
    <>
      <h1 className=" font-bold text-primary my-5">
        Design System for PetFinder
      </h1>
      <hr className="my-5" />
      <h2>Lorem ipsum dolor sit amet</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <h4>Lorem ipsum dolor sit amet</h4>
      <h5>Lorem ipsum dolor sit amet</h5>
      <h6>Lorem ipsum dolor sit amet</h6>
      <hr className="my-5" />

      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        repellendus recusandae assumenda? Illum mollitia dolore, voluptates nam
        iusto, exercitationem fuga libero expedita ad velit dicta assumenda
        distinctio vitae error facilis.
      </p>
      <hr className="my-5" />
      <div className="space-y-5">
        <Button>Reportar pérdida</Button>
        <Button isUnfilled isFull>
          Reportar pérdida
        </Button>
        <Button isFull>Reportar pérdida</Button>
      </div>
      <hr className="my-5" />
      <div className="space-y-5">
        <FieldGroup label="Correo">
          <InputField typeField="email" placeholder="Ingrese el correo" />
        </FieldGroup>
        <FieldGroup label="Contrasena">
          <InputField
            typeField="password"
            placeholder="Ingrese la contrasena"
          />
        </FieldGroup>
        <FieldGroup label="Nombre">
          <InputField typeField="text" placeholder="Nombre" />
        </FieldGroup>
        <FieldGroup label="Mensaje">
          <TextareaField placeholder="Ingrese su mensaje largo" />
        </FieldGroup>
        <Button isFull>Guardar cambios</Button>
      </div>
      <hr className="my-5" />
      <div className="space-y-5">
        <InputField typeField="password" placeholder="Ingrese la contrasena" />
        <InputField typeField="text" placeholder="Nombre" />
      </div>
    </>
  );
}

export default App;
