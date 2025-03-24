import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  isFull?: boolean;
  isUnfilled?: boolean;
}

const defaultClasses =
  "px-7 py-3 rounded-(--border-radius) cursor-pointer transition-all";
const full = "w-full";
const filled = "bg-primary text-white hover:bg-primary-dark";
const unfilled =
  "bg-white border border-primary text-primary hover:bg-primary hover:text-white";

export default function Button({
  children,
  isUnfilled = false,
  isFull = false,
}: ButtonProps) {
  const styles = clsx(
    defaultClasses,
    isUnfilled ? unfilled : filled,
    isFull && full
  );
  return <button className={styles}>{children}</button>;
}
