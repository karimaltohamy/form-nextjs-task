import React from "react";

interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  errMes?: string;
}

const InputBase: React.FC<InputBaseProps> = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  icon,
  errMes,
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
          required={required}
          {...props}
          className="flex-1 outline-none border-none"
        />
      </div>
      {errMes && <p className="text-red-500 text-[13px] mt-2">{errMes}</p>}
    </div>
  );
};

export default InputBase;
