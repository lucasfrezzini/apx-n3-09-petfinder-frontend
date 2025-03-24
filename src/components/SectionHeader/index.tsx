interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <header className="text-center mx-auto md:w-md lg:w-lg ">
      <p className=" text-primary tracking-wide text-lg">{subtitle}</p>
      <h3 className="my-4">{title}</h3>
      <p>{description}</p>
    </header>
  );
}
