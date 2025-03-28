import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  isFull?: boolean;
  isUnfilled?: boolean;
  isStrech?: boolean;
}

const defaultClasses =
  "px-7 py-3 rounded-(--border-radius) cursor-pointer transition-all";
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
}: ButtonProps) {
  const styles = clsx(
    defaultClasses,
    isUnfilled ? unfilled : filled,
    isFull && full,
    isStrech && strech
  );
  return <button className={styles}>{children}</button>;
}
