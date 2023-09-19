"use client";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

import { Listing } from "@prisma/client";
import React from "react";
import { IconType } from "react-icons";

export default function ListingCategory({ icon, label, description }: Listing) {
  return <div>ListingCategory</div>;
}
