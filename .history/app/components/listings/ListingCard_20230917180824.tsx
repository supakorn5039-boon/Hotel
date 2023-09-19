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
  currentUser?: SafeUser | null;
}

export default function ListingCard({
  data,
  reservation,
  onAction,
  disable,
  actionLabel,
  actionId,
  currentUser,
}: ListingCardProps) {
  return <div>Listing</div>;
}
