"use client";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

import { Listing } from "@prisma/client";
import React from "react";
import { IconType } from "react-icons";

export default function ListingCategory({
  icon,
  label,
  description,
}: ListingCategoryProps) {
  return (
    <div className="flex flex-col gap-6 ">
      <div className=" flex flex-row items-center gap-4 "></div>
    </div>
  );
}
