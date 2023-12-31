"use client";

import { FieldValue, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValue>;
}

export default function Input() {
  return <div className=""></div>;
}
