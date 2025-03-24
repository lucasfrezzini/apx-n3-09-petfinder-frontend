import clsx from "clsx";
import team from "../../assets/team.png";

interface SectionTeamProps {
  children: React.ReactNode;
}
const defaultClasses = "py-(--padding-section)";

export default function SectionTeam({ children }: SectionTeamProps) {
  const styles = clsx(defaultClasses);
  return (
    <section className={styles}>
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <img
          className="order-last lg:order-0 lg:justify-self-end"
          src={team}
          alt="PetRescue Team"
        />
        {children}
      </div>
    </section>
  );
}
