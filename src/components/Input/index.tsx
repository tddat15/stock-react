interface InputProps {
  className?: string;
  isRequired?: boolean;
  name: string;
  placeholder?: string;
  type: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className,
  isRequired = false,
  name,
  placeholder,
  type,
  value = '',
  handleChange,
}: InputProps): JSX.Element {
  const fixedInputClass =
    'rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

  return (
    <div className="my-5">
      <input
        onChange={handleChange}
        value={value}
        name={name}
        id={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + className}
        placeholder={placeholder}
      />
    </div>
  );
}
