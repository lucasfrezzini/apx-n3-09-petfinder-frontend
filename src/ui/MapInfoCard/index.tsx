import { Link } from "react-router";
import Button from "../Button";

interface InfoCardProps {
  name: string;
  size: string;
  type: string;
  id: number;
  btnChildren?: string;
}
function getSize(size: string) {
  if (size === "small") return "Pequeño";
  if (size === "medium") return "Mediano";
  if (size === "big") return "Grande";
}
export default function InfoCard({
  name,
  size,
  type,
  id,
  btnChildren = "Dar Aviso",
}: InfoCardProps) {
  const typeToSpanish = type === "dog" ? "Perro" : "Gato";
  const sizeToSpanish = getSize(size);

  return (
    <div className="w-full -mt-2.5 bg-white text-center p-6 rounded-xl shadow-2xl">
      <p className="text-primary tracking-wid mt-2">
        {`
          ${typeToSpanish} • 
          ${sizeToSpanish}
          `}
      </p>
      <h6 className="my-4">{name}</h6>
      <Link to={`/notify-pet/${id}`}>
        <Button type="button">{btnChildren}</Button>
      </Link>
    </div>
  );
}
