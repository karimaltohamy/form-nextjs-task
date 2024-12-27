import React from "react";

interface SelectBaseProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options?: any[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  errMes?: string;
}

const SelectBase: React.FC<SelectBaseProps> = ({
  label,
  name,
  options = [],
  required = false,
  errMes,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="text-black font-extrabold mb-2 block">{label}</label>
      <div className="flex items-center gap-2 p-2 border border-gray-200">
        <select
          name={name}
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
      {errMes && <p className="text-red-500 text-[13px] mt-2">{errMes}</p>}
    </div>
  );
};

export default SelectBase;
