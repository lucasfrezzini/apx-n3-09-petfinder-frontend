import { Link } from "react-router";
import Avatar from "../../ui/Avatar";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { Pet } from "../../utils/types";

interface PetResumeProps {
  pet: Pet;
}

export default function PetResume({ pet }: PetResumeProps) {
  return (
    <article className="flex gap-4 items-center">
      <Avatar src={pet.images[0].url} size={"48px"}></Avatar>
      <header className="grow">
        <p className="text-lg sm:text-xl font-semibold mb-1">{pet.name}</p>
        <Badge isLost={pet.status == "lost" ? true : false}>
          {pet.status == "lost" ? "Perdido" : "Ubicado"}
        </Badge>
      </header>
      <Link to={`/edit-pet/${pet.id}`}>
        <Button type="button" isSmall>
          Editar mascota
        </Button>
      </Link>
    </article>
  );
}
