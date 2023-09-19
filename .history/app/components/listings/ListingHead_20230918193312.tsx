"use client";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}
import { SafeUser } from "@/app/types";
import React from "react";

export default function ListingHead() {
  return <div>ListingHead</div>;
}
