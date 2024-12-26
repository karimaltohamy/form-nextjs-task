import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  status?: string;
  className?: string;
  icon?: React.ReactNode;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  status = "primary",
  className,
  to,
  icon,
  ...props
}) => {
  const statuses: any = {
    primary: "bg-primary-500 text-white",
    interview: "bg-primary-100 text-primary-500",
    selected: "bg-primary-100 text-primary-500",
    successful: "bg-green-100 text-green-500",
    unsuccessful: "bg-red-100 text-red-500",
  };
  return (
    <button
      className={`py-[6px] px-4 md:px-12 rounded-full text-center w-fit gap-1 mb-2 flex items-center justify-center uppercase text-[13px] md:text-[15px] ${className} ${statuses[status]}`}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
