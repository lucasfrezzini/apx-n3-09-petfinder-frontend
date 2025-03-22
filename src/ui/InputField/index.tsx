interface InputFieldProps {
  typeField: string;
  placeholder: string;
}

const defaultClasses =
  "w-full p-3 border border-(--color-gray-light) rounded-(--border-radius) focus:outline-(--color-primary) transition-all";

export default function InputField(props: InputFieldProps) {
  const { typeField, placeholder } = props;
  return (
    <input
      type={typeField}
      placeholder={placeholder}
      className={defaultClasses}
    />
  );
}
