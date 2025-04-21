import PetReportResume from "../../../components/PetReportResume";
import SectionHeader from "../../../components/SectionHeader";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";

import PetResumeSkeleton from "../../../ui/PetReportSkeleton";
import { useGetUserReports } from "../../../hooks/report.hook";
import { PetAndReports } from "../../../utils/types";
import Button from "../../../ui/Button";
import { Link } from "react-router";

export default function ReportList() {
  const { userPetsWithReports, isLoading, error } = useGetUserReports();

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="¡Rayos! No hay conexión"
          subtitle="No podemos actualizar las alertas"
        >
          <p className="mb-4">
            Las alertas requieren internet. Conectate a una red y actualizá la
            pantalla.
          </p>
        </SectionHeader>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="Escaneando la zona..."
          subtitle="Buscando nuevos avistamientos"
        >
          <p className="mb-4">
            Estamos revisando reportes recientes en tu área. Esto puede tomar
            unos segundos...
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

  if (!userPetsWithReports.length) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="Sin alertas recientes"
          subtitle="Tu mascota aún no ha sido vista"
        >
          <p className="mb-4">
            Revisá que los datos de tu reporte estén actualizados. Podés
            compartir el enlace de búsqueda en redes sociales.
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
        title="Alertas Recibidas"
        subtitle="Posibles pistas sobre tu mascota"
      >
        <p className="mb-4">
          Notificaciones sobre posibles avistamientos de tus mascotas. Contactá
          al testigo directamente desde el resumen de cada alerta.
        </p>
      </SectionHeader>
      <SectionPrivateLayout>
        <div className="flex flex-col gap-6">
          {userPetsWithReports
            .sort((petA, petB) => petB.Reports.length - petA.Reports.length)
            .map((pet: PetAndReports) => {
              return <PetReportResume key={pet.name} pet={pet} />;
            })}
        </div>
      </SectionPrivateLayout>
    </main>
  );
}
