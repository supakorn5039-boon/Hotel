"use client";

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disable?: boolean;
  actionLabel?: string;
  actionId: string;
  currentUser?: SafeUser;
}

export default function ListingCard() {
  return <div>Listing</div>;
}
