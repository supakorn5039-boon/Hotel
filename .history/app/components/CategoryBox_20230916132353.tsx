"use client";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}
export default function CategoryBox({
  icon,
  label,
  selected,
}: CategoryBoxProps) {
  return <div></div>;
}
