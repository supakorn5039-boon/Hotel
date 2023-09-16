import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  onClick,
  label,
  disabled,
  outline,
  small,
  icon,
}: ButtonProps) {
  return (
    <div>
      <button
        className={`
        relative
        disable:opacity-70
        disable:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? "bg-white" : "bg-rose-500"}
      `}
      >
        {label}
      </button>
    </div>
  );
}
