import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  isLost?: boolean;
}

const defaultClasses =
  "px-1 py-1 rounded-(--border-radius) tracking-wide text-sm";
const lost = "bg-alert-secondary text-alert-primary";
const found = "bg-success-secondary text-success-primary";

export default function Badge({ children, isLost = true }: BadgeProps) {
  const styles = clsx(defaultClasses, isLost ? lost : found);
  return <span className={styles}>{children}</span>;
}
