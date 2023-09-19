"use client";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";

export default function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);
  return <div>ListingHead</div>;
}
