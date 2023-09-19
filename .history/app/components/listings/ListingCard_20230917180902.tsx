"use client";

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return <div>Listing</div>;
}
