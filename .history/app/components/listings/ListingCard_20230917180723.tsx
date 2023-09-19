"use client";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disable?: boolean;
  actionLabel?: string;
  actionId: string;
  currentUser?: SafeUser;
}

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import React from "react";

export default function ListingCard() {
  return <div>Listing</div>;
}
