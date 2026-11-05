interface InputTextProps {
  className?: string;
  id?: string;
  name: string;
  type?: 'text' | 'email';
}

const InputText = ({ id, className = '', type = 'text', name }: InputTextProps) => {
  return (
    <input
      id={id}
      className={`block w-full border-gray-400 rounded-sm focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
      type={type}
      name={name}
    />
  );
}

export default InputText;