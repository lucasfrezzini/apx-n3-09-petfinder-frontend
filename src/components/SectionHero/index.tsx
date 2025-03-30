import clsx from "clsx";
import Button from "../../ui/Button";
import heroMap from "../../assets/heroMap.png";
import { Link } from "react-router";

interface SectionHeroProps {
  title: string;
  description: string;
  btnChildren?: string;
}
const defaultClasses = "py-(--padding-section)";

export default function SectionHero({
  title,
  description,
  btnChildren = "Reportá tu mascota",
}: SectionHeroProps) {
  const styles = clsx(defaultClasses);
  return (
    <section className={styles}>
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <header className="py-(--padding-section)">
          <h2 className="my-4">{title}</h2>
          <p className="mb-4">{description}</p>
          <Link to="/create-pet-report">
            <Button>{btnChildren}</Button>
          </Link>
        </header>
        <img
          className="justify-self-center"
          src={heroMap}
          alt="PetRescue Map Example"
        />
      </div>
    </section>
  );
}
