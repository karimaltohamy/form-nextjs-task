import React from "react";

interface SelectBaseProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options?: any[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

const SelectBase: React.FC<SelectBaseProps> = ({
  label,
  name,
  options = [],
  required,
  value = "",
  onChange,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="text-black font-extrabold mb-2 block">{label}</label>
      <div className="flex items-center gap-2 p-2 border border-gray-200">
        <select
          name={name}
          required
          value={value}
          onChange={onChange}
          {...props}
          className="flex-1 outline-none border-none"
        >
          <option value="">Select</option>
          {options?.length > 0 &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBase;
