import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingCLientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

export default function ListingClient({
  listing,
  currentUser,
}: ListingCLientProps) {
  const category = useMemo(() => {
    return category;
  });
  return <div>ListingClient</div>;
}
