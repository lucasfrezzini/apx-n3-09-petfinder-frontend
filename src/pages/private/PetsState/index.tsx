import PetResume from "../../../components/PetResume";
import SectionHeader from "../../../components/SectionHeader";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";

import { useGetUserPets } from "../../../hooks/user.hook";
import { Pet } from "../../../utils/types";
import PetResumeSkeleton from "../../../ui/PetResumeSkeleton";

export default function PetsState() {
  const { userPets, isLoading, error } = useGetUserPets();

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Mis Mascotas" subtitle="Estado de tus mascotas">
          <p className="mb-4">
            Tuvimos problemas tecnicos con la carga de la información
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <p className="text-8xl">😭</p>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Mis Mascotas" subtitle="Estado de tus mascotas">
          <p className="mb-4">
            No tienes mascotas reportadas aún ¡que buena noticia!
          </p>
        </SectionHeader>
        <SectionPrivateLayout>
          <div className="flex flex-col gap-6">
            <PetResumeSkeleton bg="bg-secondary" />
            <PetResumeSkeleton bg="bg-secondary" />
            <PetResumeSkeleton bg="bg-secondary" />
          </div>
        </SectionPrivateLayout>
      </main>
    );
  }

  if (!userPets.length) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader title="Mis Mascotas" subtitle="Estado de tus mascotas">
          <p className="mb-4">Estas son tus mascotas reportadas en la app</p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <p className="text-8xl">🥳</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto sm:w-lg">
      <SectionHeader title="Mis Mascotas" subtitle="Estado de tus mascotas">
        <p className="mb-4">Estas son tus mascotas reportadas en la app</p>
      </SectionHeader>
      <SectionPrivateLayout>
        <div className="flex flex-col gap-6">
          {userPets.map((pet: Pet) => {
            return <PetResume key={pet.name} pet={pet} />;
          })}
        </div>
      </SectionPrivateLayout>
    </main>
  );
}
