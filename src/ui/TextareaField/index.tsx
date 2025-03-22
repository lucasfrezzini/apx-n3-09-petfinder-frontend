interface TextareaFieldProps {
  placeholder: string;
}

const defaultClasses =
  "w-full h-40 p-3 border border-(--color-gray-light) rounded-(--border-radius) focus:outline-(--color-primary) transition-all";

export default function TextareaField(props: TextareaFieldProps) {
  const { placeholder } = props;
  return <textarea placeholder={placeholder} className={defaultClasses} />;
}
