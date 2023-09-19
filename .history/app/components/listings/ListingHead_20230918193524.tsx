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
import Heading from "../Heading";

export default function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region} , ${location?.label}`}
      />
    </>
  );
}
