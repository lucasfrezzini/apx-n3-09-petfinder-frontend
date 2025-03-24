import clsx from "clsx";

interface AvatarProps {
  size: string;
  isCircle?: boolean;
  isBorder?: boolean;
  src: string;
}

const defaultClasses = "aspect-square rounded-(--border-radius)";
const circle = "rounded-full";
const border = "border border-primary border-2";

export default function Avatar({
  isCircle = false,
  isBorder = false,
  size,
  src,
}: AvatarProps) {
  const styles = clsx(defaultClasses, isCircle && circle, isBorder && border);
  return <img className={styles} width={size && size} src={src} alt="Avatar" />;
}
