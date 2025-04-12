import clsx from "clsx";
import InfoCard from "../../ui/InfoCard";
import { Pet } from "../../utils/types";

interface PetCardProps {
  children?: React.ReactNode;
  data: Pet;
}
const defaultClasses = "flex flex-col";

export default function PetCard({ data }: PetCardProps) {
  const styles = clsx(defaultClasses);
  return (
    <div className={styles}>
      <div className="rounded-xl">
        <img
          className="rounded-xl aspect-3/2 object-cover"
          src={data.images[0].url}
          alt={data.name}
        />
      </div>

      <InfoCard type={data.type_pet} name={data.name} size={data.size} />
    </div>
  );
}
