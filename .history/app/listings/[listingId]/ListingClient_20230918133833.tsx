import { categories } from "@/app/components/navbar/Categories";
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
  const Categories = useMemo(() => {
    return categories;
  }, []);
  return <div>ListingClient</div>;
}
