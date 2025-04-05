import { ReactNode } from "react";

interface InputFormErrorProps {
  children: ReactNode;
}

export default function InputFormError({ children }: InputFormErrorProps) {
  return <p className="mt-3 text-sm text-alert-primary">{children}</p>;
}
