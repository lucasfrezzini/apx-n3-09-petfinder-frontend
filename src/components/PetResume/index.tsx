import Avatar from "../../ui/Avatar";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import { Pet } from "../../utils/types";

interface PetResumeProps {
  pet: Pet;
  isReport?: boolean;
}

export default function PetResume({ pet, isReport = false }: PetResumeProps) {
  return (
    <article className="flex gap-4 items-center">
      <Avatar src={pet.images[0].url} size={"64px"}></Avatar>
      <header className="grow">
        <p className="text-xl font-semibold mb-1">{pet.name}</p>
        {isReport ? (
          <p className="text-sm">Tienes 3 avistajes</p>
        ) : (
          <Badge isLost={pet.status == "lost" ? true : false}>
            {pet.status == "lost" ? "Perdido" : "Ubicado"}
          </Badge>
        )}
      </header>
      <Button type="button" isSmall>
        {isReport ? "Ver" : "Editar"}
      </Button>
    </article>
  );
}
