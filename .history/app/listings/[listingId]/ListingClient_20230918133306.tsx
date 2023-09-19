import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";

interface ListingCLientProps {
  reservation?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}
const ListingClient = () => {
  return <div></div>;
};

export default ListingClient;
