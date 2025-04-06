import clsx from "clsx";
import PetCard from "../PetCard";
import SectionHeader from "../SectionHeader";
import Button from "../../ui/Button";

import emptyOK from "../../assets/icons/emptyOK.svg";
import { useState } from "react";

const mascotas = [
  {
    name: "Luna",
    size: "Pequeño",
    age: "5",
    type_pet: "Gato",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://www.cronista.com/files/image/651/651177/64bac94461355_700_462!.jpg?s=2e4395f6da95bbed148764512dc5558e&d=1689962824",
  },
  {
    name: "Rocky",
    size: "Grande",
    age: "3",
    type_pet: "Perro",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg",
  },
  {
    name: "Milo",
    size: "Mediano",
    age: "7",
    type_pet: "Gato",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://cdn.shopify.com/s/files/1/0268/6861/files/cat-2908286_960_720_f3f025b4-912a-4e02-8701-0fdc8b3107db_grande.jpg?v=1533312369",
  },
  {
    name: "Bella",
    size: "Pequeño",
    age: "2",
    type_pet: "Perro",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://www.hogarmania.com/archivos/201505/perro-consejos-848x477x80xX.jpg",
  },
  {
    name: "Oliver",
    size: "Mediano",
    age: "4",
    type_pet: "Gato",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://s2.ppllstatics.com/elcomercio/www/multimedia/202002/20/media/cortadas/gato-kRID-U100219218863XFC-1248x770@El%20Comercio.jpg",
  },
  {
    name: "Charlie",
    size: "Grande",
    age: "6",
    type_pet: "Perro",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://conecta.tec.mx/sites/default/files/styles/header_full/public/2018-11/Portada%20perros.jpg.webp?itok=84KeYznH",
  },
  {
    name: "Lucy",
    size: "Pequeño",
    age: "1",
    type_pet: "Gato",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://www.cronista.com/files/image/950/950569/66e5bedef1a20_728_403!.jpg?s=7187484673f9ca1d5bcfe0ca1879b8d9&d=1726334176",
  },
  {
    name: "Max",
    size: "Mediano",
    age: "9",
    type_pet: "Perro",
    latitude: -34.603722,
    longitude: -58.381592,
    urlImage:
      "https://purina.cl/sites/default/files/2023-01/nombres-para-perros-machos-02.png",
  },
];

interface SectionLostPetsProps {}
const defaultClasses = "py-(--padding-section)";

export default function SectionLostPets({}: SectionLostPetsProps) {
  const [filterType, setFilterType] = useState("Todos");

  const filteredPets = mascotas.filter((pet) => {
    if (filterType === "Todos") return true;
    return pet.type_pet === filterType;
  });

  const handleFilter = (type: string) => {
    setFilterType(type);
  };

  const styles = clsx(defaultClasses);

  if (!filteredPets.length) {
    return (
      <section className={styles}>
        <SectionHeader
          title="Ayuda a encontrar a los que se perdieron"
          subtitle="Mascotas perdidas cerca tuyo"
        >
          <p className="mb-8">
            No hay mascotas perdidas cerca de tu zona ¡que buena noticia!
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <img src={emptyOK} alt="Empty Icon" />
        </div>
      </section>
    );
  }

  return (
    <section className={styles}>
      <SectionHeader
        title="Ayuda a encontrar a los que se perdieron"
        subtitle="Mascotas perdidas cerca tuyo"
      >
        <p className="mb-8">
          Aquí puedes ver todas las mascotas reportadas como perdidas en tu
          zona. Ayuda a encontrarlas compartiendo información y reportando
          avistamientos.
        </p>
      </SectionHeader>
      <div className="flex justify-center gap-6 my-12">
        <Button
          onClick={() => handleFilter("Todos")}
          type="button"
          isUnfilled={filterType !== "Todos" && true}
          isSmall
        >
          Todos
        </Button>
        <Button
          onClick={() => handleFilter("Perro")}
          type="button"
          isUnfilled={filterType !== "Perro" && true}
          isSmall
        >
          Perros
        </Button>
        <Button
          onClick={() => handleFilter("Gato")}
          type="button"
          isUnfilled={filterType !== "Gato" && true}
          isSmall
        >
          Gatos
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {filteredPets.map((pet, idx) => {
          return <PetCard key={`${pet.name}-${idx}`} data={pet}></PetCard>;
        })}
      </div>
    </section>
  );
}
