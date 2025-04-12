import clsx from "clsx";
import PetCard from "../PetCard";
import SectionHeader from "../SectionHeader";
import Button from "../../ui/Button";

import emptyOK from "../../assets/icons/emptyOK.svg";
import errorIcon from "../../assets/icons/close.svg";
import { useState } from "react";
import { useGetPets } from "../../hooks/pet.hook";
import { useAtom } from "jotai";
import { petsAtom } from "../../context";
import PetCardSkeleton from "../../ui/PetCardSkeleton";
import { toast } from "sonner";

const defaultClasses = "py-(--padding-section)";

export default function SectionLostPets() {
  const { pets, isLoading, error } = useGetPets();

  const [filterType, setFilterType] = useState("all");
  const filteredPets = pets.filter((pet) => {
    if (filterType === "all") return true;
    return pet.type_pet === filterType;
  });

  const handleFilter = (type: string) => {
    setFilterType(type);
  };

  const styles = clsx(defaultClasses);

  if (error) {
    toast.error("Error en la peticion", {
      description: "Lo siento, intentelo nuevamente",
    });
    return (
      <section className={styles}>
        <SectionHeader
          title="Ayuda a encontrar a los que se perdieron"
          subtitle="Mascotas perdidas cerca tuyo"
        >
          <p className="mb-8">{error?.message}</p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <img src={errorIcon} alt="Error Icon" />
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={styles}>
        <SectionHeader
          title="Ayuda a encontrar a los que se perdieron"
          subtitle="Mascotas perdidas cerca tuyo"
        >
          <p className="mb-8">
            Estamos buscando las mascotas perdidas en tu zona. Por favor, espera
            un momento.
          </p>
        </SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          <PetCardSkeleton bg="bg-secondary" />
          <PetCardSkeleton bg="bg-secondary" />
          <PetCardSkeleton bg="bg-secondary" />
          <PetCardSkeleton bg="bg-secondary" />
          <PetCardSkeleton bg="bg-secondary" />
          <PetCardSkeleton bg="bg-secondary" />
        </div>
      </section>
    );
  }

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
          onClick={() => handleFilter("all")}
          type="button"
          isUnfilled={filterType !== "Todos" && true}
          isSmall
        >
          Todos
        </Button>
        <Button
          onClick={() => handleFilter("dog")}
          type="button"
          isUnfilled={filterType !== "dog" && true}
          isSmall
        >
          Perros
        </Button>
        <Button
          onClick={() => handleFilter("cat")}
          type="button"
          isUnfilled={filterType !== "cat" && true}
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
