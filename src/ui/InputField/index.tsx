interface InputFieldProps {
  typeField: string;
  placeholder: string;
  name: string;
  autocomplete?: string;
}

const defaultClasses =
  "w-full p-3 border border-(--color-gray-light) rounded-(--border-radius) focus:outline-(--color-primary) transition-all";

export default function InputField(props: InputFieldProps) {
  const { typeField, placeholder, name, autocomplete = "on" } = props;
  return (
    <input
      name={name}
      autoComplete={autocomplete}
      type={typeField}
      placeholder={placeholder}
      className={defaultClasses}
    />
  );
}
