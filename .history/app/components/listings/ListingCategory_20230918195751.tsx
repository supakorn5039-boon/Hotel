"use client";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

import { IconType } from "react-icons";

export default function ListingCategory({
  icon: Icon,
  label,
  description,
}: ListingCategoryProps) {
  return (
    <div className="flex flex-col gap-6 ">
      <div className=" flex flex-row items-center gap-4 ">
        <Icon size={40} className="text-neutral-600" />
      </div>
    </div>
  );
}
