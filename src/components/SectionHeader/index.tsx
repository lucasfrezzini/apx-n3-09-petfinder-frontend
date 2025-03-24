import clsx from "clsx";

interface SectionHeaderProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  textAlign?: string;
}
const defaultClasses = "md:w-md lg:w-lg";

export default function SectionHeader({
  children,
  title,
  subtitle,
  textAlign = "text-center",
}: SectionHeaderProps) {
  const styles = clsx(defaultClasses, textAlign);
  return (
    <header className={styles}>
      <p className=" text-primary tracking-wide text-lg">{subtitle}</p>
      <h3 className="my-4">{title}</h3>
      {children}
    </header>
  );
}
