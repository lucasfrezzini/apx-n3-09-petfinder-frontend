import { ReactNode } from "react";

interface FieldGroupProps {
  children: ReactNode;
  label: string;
}

export default function FieldGroup(props: FieldGroupProps) {
  const { children, label } = props;
  return (
    <div>
      <label className="mb-2 inline-block">{label}</label>
      {children}
    </div>
  );
}
