import { Link } from "react-router";
import SectionHeader from "../../../components/SectionHeader";
import SectionHero from "../../../components/SectionHero";
import SectionLostPets from "../../../components/SectionLostPets";
import SectionTeam from "../../../components/SectionTeam";
import Button from "../../../ui/Button";
import MapLostPets from "../../../components/MapLostPets";
import { useGetPets } from "../../../hooks/pet.hook";
import { userCoordsAtom } from "../../../context";
import { useAtomValue } from "jotai";

export default function Home() {
  const coords = useAtomValue(userCoordsAtom);
  const { pets, isLoading, error } = useGetPets();

  return (
    <main className="w-full">
      <div className="bg-linear-to-b from-secondary to-transparent">
        <div className="container md:pt-[60px] p-5 mx-auto">
          <SectionHero
            title="Encuentra a tus amigos peludos más rápido"
            description="¿Tu mascota se perdió? ¡No estás solo! Reporta su pérdida y encuentra ayuda en nuestra comunidad. Descubre mascotas cerca y únete para ayudar a otros."
          ></SectionHero>
          <SectionLostPets
            pets={pets}
            isLoading={isLoading}
            error={error}
          ></SectionLostPets>
        </div>
      </div>
      <MapLostPets
        pets={pets}
        zoom={coords ? 12 : 8}
        coords={
          coords
            ? {
                lat: Number(coords?.latitude),
                lng: Number(coords?.longitude),
              }
            : { lat: -34.6277, lng: -58.4477 }
        }
      />
      <div className="container p-5 mx-auto">
        <SectionTeam>
          <SectionHeader
            subtitle="Quienes somos"
            textAlign="text-left"
            title="Uniendo comunidades para salvar peluditos"
          >
            <p className="mb-4">
              En Pet Rescue nos apasiona ayudar a las mascotas a regresar a
              casa. Entendemos el dolor y la ansiedad que puede causar perder a
              un ser querido, por eso creamos una plataforma que conecta a la
              comunidad para facilitar el reencuentro.
            </p>
            <p className="mb-6">
              Nuestra misión es ser una herramienta confiable y fácil de usar
              para que las mascotas regresen a casa lo más rápido posible.
              Queremos que nuestra DesignSystem sea un lugar donde la comunidad
              se una para ayudar a aquellos que más lo necesitan.
            </p>
            <Link to="/create-pet-report">
              <Button type="button">Reportá tu mascota</Button>
            </Link>
          </SectionHeader>
        </SectionTeam>
      </div>
    </main>
  );
}
