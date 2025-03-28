import SectionLostPets from "../../../components/SectionLostPets";

export default function LostPets() {
  return (
    <main className="w-full">
      <div className="bg-linear-to-b from-secondary to-transparent">
        <div className="container md:pt-[60px] p-5 mx-auto">
          <SectionLostPets></SectionLostPets>
        </div>
      </div>
    </main>
  );
}
