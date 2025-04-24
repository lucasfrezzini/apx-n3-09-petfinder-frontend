import SectionHeader from "../../../components/SectionHeader";
import SectionPrivateLayout from "../../../components/SectionPrivateLayout";
import { Report } from "../../../utils/types";
import { formatDate } from "../../../utils";
import { useGetPetReports } from "../../../hooks/report.hook";
import PetReportSkeleton from "../../../ui/PetResumeSkeleton";

export default function ReportDetails() {
  const { petWithReports, isLoading, error } = useGetPetReports();

  if (error) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="¡Sistema colapsado!"
          subtitle="Demasiadas solicitudes simultáneas"
        >
          <p className="mb-4">
            Nuestros servidores están saturados. Intentá nuevamente en 2 minutos
            o contactá soporte@petrescue.com.
          </p>
        </SectionHeader>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="Analizando reportes..."
          subtitle="Verificando última ubicación"
        >
          <p className="mb-4">
            Estamos cruzando los datos de avistamientos con tu ubicación actual.
            Esto puede demorar unos segundos.
          </p>
        </SectionHeader>
        <SectionPrivateLayout>
          <div className="flex flex-col gap-6">
            <PetReportSkeleton bg="bg-secondary" />
          </div>
        </SectionPrivateLayout>
        <SectionPrivateLayout>
          <div className="flex flex-col gap-6">
            <PetReportSkeleton bg="bg-secondary" />
          </div>
        </SectionPrivateLayout>
      </main>
    );
  }

  if (!petWithReports?.reports.length) {
    return (
      <main className="container mx-auto sm:w-lg">
        <SectionHeader
          title="Ninguna alerta activa"
          subtitle="Tu mascota aún no fue vista"
        >
          <p className="mb-4">
            Te notificaremos por correo inmediatamente cuando alguien reporte un
            avistamiento. Te recomendamos compartir el perfil de tu mascota en
            las redes para mayor visibilidad.
          </p>
        </SectionHeader>
      </main>
    );
  }

  return (
    <main className="container mt-24 mx-auto sm:w-3xl">
      <SectionHeader
        title={`Alertas recientes de ${petWithReports?.name}`}
        subtitle="Centro de avistamientos"
      >
        <p className="mb-4">
          Revisá las características reportadas por la comunidad, si es tu
          compañero no pierdas tiempo o comunicate con quien la reportó.
        </p>
      </SectionHeader>

      {petWithReports?.reports.map((report: Report) => {
        return (
          <SectionPrivateLayout key={report.createdAt}>
            <div className="flex flex-col gap-6">
              <div className="w-full max-xl:max-w-2xl max-xl:mx-auto">
                <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
                  <div className="flex items-center gap-3">
                    <h6 className="font-semibold text-lg leading-8 text-primary">
                      {report.name}
                    </h6>
                  </div>
                  <p className="text-sm">{formatDate(report.createdAt)}</p>
                </div>
                <p className="mb-6 w-full">{report.info}</p>
                <p>
                  Contacto: <strong>{report.phone}</strong>
                </p>
              </div>
            </div>
          </SectionPrivateLayout>
        );
      })}
    </main>
  );
}
