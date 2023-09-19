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
import Image from "next/image";

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
      <div
        className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
      "
      >
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
      </div>
    </>
  );
}
