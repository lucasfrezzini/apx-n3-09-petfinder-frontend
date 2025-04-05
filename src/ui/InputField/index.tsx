import clsx from "clsx";

interface InputFieldProps {
  typeField: string;
  placeholder: string;
  autocomplete?: string;
  value?: string;
  isHidden?: boolean;
  disabled?: boolean;
  register?: any;
}

const defaultClasses =
  "w-full p-3 border border-(--color-gray-light) rounded-(--border-radius) focus:outline-(--color-primary) transition-all";

export default function InputField(props: InputFieldProps) {
  const {
    typeField,
    placeholder,
    value,
    register,
    isHidden = false,
    disabled = false,
    autocomplete = "on",
  } = props;
  return (
    <input
      {...register}
      value={value && value}
      autoComplete={autocomplete}
      type={typeField}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        defaultClasses,
        isHidden ? "hidden" : "",
        disabled ? "opacity-70 cursor-not-allowed" : ""
      )}
    />
  );
}
