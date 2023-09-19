import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";

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
  return <div>ListingClient</div>;
}
