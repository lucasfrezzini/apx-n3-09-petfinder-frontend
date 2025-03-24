import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  isFound?: boolean;
  isLost?: boolean;
}

const defaultClasses = "px-2 py-2 rounded-(--border-radius) tracking-wide";
const lost = "bg-alert-secondary text-alert-primary";
const found = "bg-success-secondary text-success-primary";

export default function Badge({
  children,
  isLost = false,
  isFound = false,
}: BadgeProps) {
  const styles = clsx(defaultClasses, isLost && lost, isFound && found);
  return <span className={styles}>{children}</span>;
}
