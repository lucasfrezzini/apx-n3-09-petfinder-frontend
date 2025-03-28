import Avatar from "../../ui/Avatar";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

type PetData = {
  name: string;
  isMissing: boolean;
  urlImage: string;
};

interface PetResumeProps {
  pet: PetData;
}

export default function PetResume({ pet }: PetResumeProps) {
  return (
    <article className="flex gap-4 items-center">
      <Avatar src={pet.urlImage} size={"64px"}></Avatar>
      <header className="grow">
        <p className="text-xl font-semibold mb-1">{pet.name}</p>
        <Badge isLost={pet.isMissing}>
          {pet.isMissing ? "Perdido" : "Ubicado"}
        </Badge>
      </header>
      <Button isSmall>Editar</Button>
    </article>
  );
}
