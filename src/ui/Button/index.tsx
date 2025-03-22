import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  isFull?: boolean;
  isUnfilled?: boolean;
}

const defaultClasses = "px-7 py-3 rounded-md cursor-pointer transition-all";
const full = "w-full";
const filled = "bg-primary text-white hover:bg-primary-dark";
const unfilled =
  "bg-white border border-primary text-primary hover:bg-primary hover:text-white";

export default function Button({
  children,
  isUnfilled = false,
  isFull = false,
}: ButtonProps) {
  return (
    <button
      className={`
        ${defaultClasses} 
        ${isUnfilled ? unfilled : filled} 
        ${isFull ? full : ""}
      `}
    >
      {children}
    </button>
  );
}
