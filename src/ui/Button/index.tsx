import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  isFull?: boolean;
  isUnfilled?: boolean;
  isStrech?: boolean;
  isSmall?: boolean;
}

const defaultClasses =
  "rounded-(--border-radius) cursor-pointer transition-all";
const normal = "py-3 px-5";
const small = "px-3 py-2";
const full = "w-full";
const filled = "bg-primary text-white hover:bg-primary-dark";
const unfilled =
  "bg-white border border-primary text-primary hover:bg-primary hover:text-white";
const strech = "col-start-1 col-end-3";

export default function Button({
  children,
  isUnfilled = false,
  isFull = false,
  isStrech = false,
  isSmall = false,
}: ButtonProps) {
  const styles = clsx(
    defaultClasses,
    isUnfilled ? unfilled : filled,
    isFull && full,
    isStrech && strech,
    isSmall ? small : normal
  );
  return <button className={styles}>{children}</button>;
}
