import { useGetPets } from "../../../hooks/pet.hook";
import MapLostPets from "../../../components/MapLostPets";
import { userCoordsAtom } from "../../../context";
import { useAtomValue } from "jotai";

export default function LostPetsMap() {
  const coords = useAtomValue(userCoordsAtom);
  const { pets } = useGetPets();

  return (
    <main className="w-full">
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
    </main>
  );
}
