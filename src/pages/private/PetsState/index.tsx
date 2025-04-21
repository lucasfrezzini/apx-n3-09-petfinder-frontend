import PetResume from "../../../components/PetResume";
import SectionHeader from "../../../components/SectionHeader";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";

import { useGetUserPets } from "../../../hooks/user.hook";
import { Pet } from "../../../utils/types";
import PetResumeSkeleton from "../../../ui/PetReportSkeleton";
import Button from "../../../ui/Button";
import { Link } from "react-router";

export default function PetsState() {
  const { userPets, isLoading, error } = useGetUserPets();

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="¡Ups! Algo salió mal"
          subtitle="No pudimos cargar tus mascotas reportadas"
        >
          <p className="mb-4">
            Reintentá en unos minutos o verificá tu conexión a internet. Si el
            problema persiste, contactá a soporte.
          </p>
        </SectionHeader>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="Buscando tus mascotas..."
          subtitle="Estamos cargando la información"
        >
          <p className="mb-4">
            Por favor esperá unos segundos mientras reunimos los últimos datos
            de tus reportes.
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
        <SectionHeader
          title="Ninguna mascota reportada"
          subtitle="¿Perdiste a tu compañero peludo?"
        >
          <p className="mb-4">
            Usá el botón para registrar una mascota perdida. Cuantos más
            detalles agregues, más fácil será encontrarla.
          </p>
        </SectionHeader>
        <div className="flex justify-center my-16">
          <Link to={"/create-pet-report"}>
            <Button type="button">Crear nuevo reporte</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto sm:w-lg pt-24">
      <SectionHeader
        title="Mis Mascotas Reportadas"
        subtitle="Tus casos activos de búsqueda"
      >
        <p className="mb-4">
          Aquí encontrarás todas las mascotas que has reportado. Mantené
          actualizada la información para facilitar su localización.
        </p>
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
