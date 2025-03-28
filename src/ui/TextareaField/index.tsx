interface TextareaFieldProps {
  placeholder: string;
  autocomplete?: string;
}

const defaultClasses =
  "w-full h-40 p-3 border border-(--color-gray-light) rounded-(--border-radius) focus:outline-(--color-primary) transition-all";

export default function TextareaField(props: TextareaFieldProps) {
  const { placeholder, autocomplete = "on" } = props;
  return (
    <textarea
      autoComplete={autocomplete}
      placeholder={placeholder}
      className={defaultClasses}
    />
  );
}
