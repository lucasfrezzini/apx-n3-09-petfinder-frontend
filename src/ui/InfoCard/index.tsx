import { Link } from "react-router";
import Button from "../Button";

interface InfoCardProps {
  name: string;
  size: keyof typeof typesSize;
  type: keyof typeof typesOfPets;
  btnChildren?: string;
}

const typesSize = {
  small: "Pequeño",
  medium: "Mediano",
  large: "Grande",
};

const typesOfPets = {
  dog: "Perro",
  cat: "Gato",
};

export default function InfoCard({
  name,
  size,
  type,
  btnChildren = "Reportar mascota",
}: InfoCardProps) {
  return (
    <div className="bg-white text-center p-6 rounded-xl shadow-2xl -mt-8 mx-8">
      <p className="text-primary tracking-wide">
        {`
          ${typesSize[size]} | 
          ${typesOfPets[type]}
          `}
      </p>
      <h6 className="my-4">{name}</h6>
      <Link to="/notify-pet">
        <Button type="button">{btnChildren}</Button>
      </Link>
    </div>
  );
}
