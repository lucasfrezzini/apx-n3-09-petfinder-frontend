import { ReactNode } from "react";

interface SelectFieldProps {
  children: ReactNode;
  autocomplete?: string;
  register?: any;
}

const defaultClasses =
  "w-full p-3 border border-r-14 border-transparent border-(--color-gray-light) rounded-(--border-radius) outline outline-gray-light focus:outline-(--color-primary) transition-all";

export default function SelectField(props: SelectFieldProps) {
  const { children, register, autocomplete = "on" } = props;
  return (
    <select
      {...register}
      autoComplete={autocomplete}
      className={defaultClasses}
    >
      {children}
    </select>
  );
}
