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
      <button>{label}</button>
    </div>
  );
}
