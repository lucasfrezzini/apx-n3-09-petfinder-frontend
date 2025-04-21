import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import { PetAndReports } from "../../utils/types";
import { useNavigate } from "react-router";

interface PetResumeProps {
  pet: PetAndReports;
}

export default function PetReportResume({ pet }: PetResumeProps) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/report-detail/${pet.id}`);
  }
  return (
    <article className="flex gap-4 items-center">
      <Avatar src={pet.images[0].url} size={"64px"}></Avatar>
      <header className="grow">
        <p className="text-lg sm:text-xl font-semibold mb-1">{pet.name}</p>
        <p className="text-sm">
          Tienes {pet.Reports.length}{" "}
          {pet.Reports.length == 1 ? "alerta" : "alertas"}
        </p>
      </header>
      <Button type="button" isSmall onClick={handleClick}>
        Revisar
      </Button>
    </article>
  );
}
