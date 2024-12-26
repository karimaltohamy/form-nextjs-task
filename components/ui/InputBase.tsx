import React from "react";

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon?: React.ReactNode;
}

const InputBase: React.FC<InputBaseProps> = ({
  label,
  name,
  type,
  placeholder,
  required,
  value = "",
  onChange,
  icon,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="text-black font-extrabold mb-2 block">{label}</label>
      <div className="flex items-center gap-2 p-2 border border-gray-200">
        {icon}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
          className="flex-1 outline-none border-none"
        />
      </div>
    </div>
  );
};

export default InputBase;
