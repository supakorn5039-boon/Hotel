interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

import React from "react";
import { IconType } from "react-icons";

export default function Button() {
  return (
    <div>
      <button></button>
    </div>
  );
}
