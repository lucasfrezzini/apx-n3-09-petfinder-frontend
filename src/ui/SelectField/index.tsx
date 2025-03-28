import { ReactNode } from "react";

interface SelectFieldProps {
  children: ReactNode;
  name: string;
  autocomplete?: string;
}

const defaultClasses =
  "w-full p-3 border border-r-14 border-transparent border-(--color-gray-light) rounded-(--border-radius) outline outline-gray-light focus:outline-(--color-primary) transition-all";

export default function SelectField(props: SelectFieldProps) {
  const { children, name, autocomplete = "on" } = props;
  return (
    <select name={name} autoComplete={autocomplete} className={defaultClasses}>
      {children}
    </select>
  );
}
