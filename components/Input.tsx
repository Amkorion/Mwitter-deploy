interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange,
  type,
  placeholder,
  value,
  disabled,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="
      w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900/70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
