"use client";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType;
  };
}

import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";

export default function ListingInfo() {
  return <div>ListingInfo</div>;
}
