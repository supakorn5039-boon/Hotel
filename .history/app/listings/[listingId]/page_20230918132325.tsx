import { getListingById } from "@/app/actions/getListingById";

export default function page() {
  const listing = await getListingById();
  return <div>My individual listing page!</div>;
}
