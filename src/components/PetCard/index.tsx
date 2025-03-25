import clsx from "clsx";
import InfoCard from "../../ui/InfoCard";

type PetData = {
  name: string;
  size: string;
  age: string;
  type: string;
  latitude: number;
  longitude: number;
  urlImage: string;
};
interface PetCardProps {
  children?: React.ReactNode;
  data: PetData;
}
const defaultClasses = "flex flex-col";

export default function PetCard({ data }: PetCardProps) {
  const styles = clsx(defaultClasses);
  return (
    <div className={styles}>
      <div className="rounded-xl">
        <img
          className="rounded-xl aspect-3/2 object-cover"
          src={data.urlImage}
          alt={data.name}
        />
      </div>

      <InfoCard type={data.type} name={data.name} size={data.size} />
    </div>
  );
}
