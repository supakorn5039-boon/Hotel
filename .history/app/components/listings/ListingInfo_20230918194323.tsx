"use client";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: Icontype;
  };
}

import { SafeUser } from "@/app/types";
import React from "react";

export default function ListingInfo() {
  return <div>ListingInfo</div>;
}
