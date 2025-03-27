import Button from "../../../ui/Button";
import InputField from "../../../ui/InputField";
import FieldGroup from "../../../ui/FieldGroup";
import TextareaField from "../../../ui/TextareaField";
import Badge from "../../../ui/Badge";
import Avatar from "../../../ui/Avatar";
import AvatarImage from "./assets/pet5.jpg";
import SectionHeader from "../../../components/SectionHeader";
import Alarm from "../../../ui/Alarm";
import SectionTeam from "../../../components/SectionTeam";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PetCard from "../../../components/PetCard";
import SectionHero from "../../../components/SectionHero";

const PetDataSample = {
  name: "Firulais",
  size: "Mediano",
  age: "8",
  type: "Gato",
  latitude: 1.233232,
  longitude: 3.424244,
  urlImage:
    "https://www.cronista.com/files/image/651/651177/64bac94461355_700_462!.jpg?s=2e4395f6da95bbed148764512dc5558e&d=1689962824",
};

function DesignSystem() {
  return (
    <>
      <Navbar />
      <div className="container pt-[60px] p-5 mx-auto">
        <SectionHero
          title="Encuentra a tus amigos peludos más rápido"
          description="¿Tu mascota se perdió? ¡No estás solo! Reporta su pérdida y encuentra ayuda en nuestra comunidad. Descubre mascotas cerca y únete para ayudar a otros."
        ></SectionHero>
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
          repellendus recusandae assumenda? Illum mollitia dolore, voluptates
          nam iusto, exercitationem fuga libero expedita ad velit dicta
          assumenda distinctio vitae error facilis.
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
            <InputField
              name="email"
              typeField="email"
              placeholder="Ingrese el correo"
            />
          </FieldGroup>
          <FieldGroup label="Contrasena">
            <InputField
              name="password"
              typeField="password"
              placeholder="Ingrese la contrasena"
            />
          </FieldGroup>
          <FieldGroup label="Nombre">
            <InputField
              name="password"
              typeField="text"
              placeholder="Ingrese su nombre"
            />
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
          <Avatar src={AvatarImage} size={"119px"} isCircle isBorder />
        </div>
        <hr className="my-5" />
        <div className="space-y-5">
          <SectionHeader
            subtitle="Cerca de tu ubicacion"
            title="Mascotas perdidas recientemente"
            textAlign="text-right"
          >
            <p>
              Estas son las mascotas perdidas recient emente por tu zona
              geografica, si viste alguna no dudes en reportar
            </p>
          </SectionHeader>
        </div>
        <hr className="my-5" />
        <div className="space-y-5">
          <Alarm title="Bravo!" description="Descripcion" />
          <Alarm
            type="alert"
            title="Oops! Error encontrado"
            description="Descripcion"
          />
          <Alarm
            type="warning"
            title="Cuidado! Algo anda mal"
            description="Descripcion"
          />
          <Alarm
            type="info"
            title="Sabias?"
            description="Estas son las mascotas perdidas recient emente por tu zona geografica, si viste alguna no dudes en reportar"
          />
        </div>
        <hr className="my-5" />
        <div className="space-y-5">
          <SectionTeam>
            <SectionHeader
              subtitle="Quienes somos"
              textAlign="text-left"
              title="Uniendo comunidades para salvar peluditos"
            >
              <p className="mb-4">
                En Pet Rescue nos apasiona ayudar a las mascotas a regresar a
                casa. Entendemos el dolor y la ansiedad que puede causar perder
                a un ser querido, por eso creamos una plataforma que conecta a
                la comunidad para facilitar el reencuentro.
              </p>
              <p className="mb-6">
                Nuestra misión es ser una herramienta confiable y fácil de usar
                para que las mascotas regresen a casa lo más rápido posible.
                Queremos que nuestra DesignSystem sea un lugar donde la
                comunidad se una para ayudar a aquellos que más lo necesitan.
              </p>
              <Button>Reportar mascota</Button>
            </SectionHeader>
          </SectionTeam>
        </div>
        <div className="space-y-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <PetCard data={PetDataSample}></PetCard>
          <PetCard data={PetDataSample}></PetCard>
          <PetCard data={PetDataSample}></PetCard>
          <PetCard data={PetDataSample}></PetCard>
          <PetCard data={PetDataSample}></PetCard>
          <PetCard data={PetDataSample}></PetCard>
        </div>
        <hr className="my-5" />
      </div>
      <Footer />
    </>
  );
}

export default DesignSystem;
