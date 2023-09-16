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
  return (
    <div
      className={`
        flex
        flex-col 
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
  `}
    ></div>
  );
}
