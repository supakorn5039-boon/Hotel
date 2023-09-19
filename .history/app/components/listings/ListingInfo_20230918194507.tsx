"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

export default function ListingInfo({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
}: ListingInfoProps) {
     const { getByValue } = useCountries
  return (


  )
}
