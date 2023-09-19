import { getListingById } from "@/app/actions/getListingById";

export default async function page() {
  const listing = await getListingById();
  return <div>My individual listing page!</div>;
}
