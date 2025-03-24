import Button from "./ui/Button";
import InputField from "./ui/InputField";
import FieldGroup from "./ui/FieldGroup";
import TextareaField from "./ui/TextareaField";
import Badge from "./ui/Badge";
import Avatar from "./ui/Avatar";
import AvatarImage from "./assets/pet5.jpg";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <>
      <h1 className=" text-primary my-5">Design System for PetFinder</h1>
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
        <Badge isLost>Perdido</Badge>
        <Badge isFound>Encontrado</Badge>
        <br />
        <br />
        <Avatar src={AvatarImage} size={"32px"} isBorder />
        <Avatar src={AvatarImage} size={"24px"} isCircle />
        <Avatar src={AvatarImage} size={"42px"} isCircle isBorder />
      </div>
      <hr className="my-5" />
      <div className="space-y-5">
        <SectionHeader
          subtitle="Cerca de tu ubicacion"
          title="Mascotas perdidas recientemente"
          description="Estas son las mascotas perdidas recient
          emente por tu zona geografica, si viste alguna no dudes en reportar
          "
        />
      </div>
    </>
  );
}

export default App;
