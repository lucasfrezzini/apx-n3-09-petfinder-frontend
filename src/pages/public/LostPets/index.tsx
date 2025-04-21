import SectionLostPets from "../../../components/SectionLostPets";
import { useGetPets } from "../../../hooks/pet.hook";

export default function LostPets() {
  const { pets, isLoading, error } = useGetPets();

  return (
    <main className="w-full">
      <div className="bg-linear-to-b from-secondary to-transparent">
        <div className="container md:pt-[60px] p-5 mx-auto">
          <SectionLostPets
            pets={pets}
            isLoading={isLoading}
            error={error}
          ></SectionLostPets>
        </div>
      </div>
    </main>
  );
}
