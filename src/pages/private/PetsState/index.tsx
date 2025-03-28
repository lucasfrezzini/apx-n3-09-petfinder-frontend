import PetResume from "../../../components/PetResume";
import SectionHeader from "../../../components/SectionHeader";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";

import emptyOK from "../../../assets/icons/emptyOK.svg";

//! TODO use types of pets
const mascotas = [
  {
    name: "Luna",
    isMissing: true,
    urlImage:
      "https://www.cronista.com/files/image/651/651177/64bac94461355_700_462!.jpg?s=2e4395f6da95bbed148764512dc5558e&d=1689962824",
  },
  {
    name: "Rocky",
    isMissing: true,
    urlImage:
      "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg",
  },
  {
    name: "Milo",
    isMissing: false,
    urlImage:
      "https://cdn.shopify.com/s/files/1/0268/6861/files/cat-2908286_960_720_f3f025b4-912a-4e02-8701-0fdc8b3107db_grande.jpg?v=1533312369",
  },
  {
    name: "Bella",
    isMissing: true,
    urlImage:
      "https://www.hogarmania.com/archivos/201505/perro-consejos-848x477x80xX.jpg",
  },
];

export default function PetsState() {
  if (!mascotas.length) {
    return (
      <main className="container mx-auto pt-24 sm:w-lg">
        <SectionHeader
          title="Reportes creados"
          subtitle="Estado de tus mascotas"
        >
          <p className="mb-4">
            No tienes mascotas reportadas ¡que buena noticia!
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <img src={emptyOK} alt="Empty Icon" />
        </div>
      </main>
    );
  }
  return (
    <main className="container mx-auto pt-24 sm:w-lg">
      <SectionHeader title="Reportes creados" subtitle="Estado de tus mascotas">
        <p className="mb-4">Estas son tus mascotas reportadas en la app</p>
      </SectionHeader>
      <SectionPrivateLayout>
        <div className="flex flex-col gap-6">
          {mascotas.map((pet) => {
            return <PetResume pet={pet} />;
          })}
        </div>
      </SectionPrivateLayout>
    </main>
  );
}
