import { getListingById } from "@/app/actions/getListingById";

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById();
  return <div></div>;
};

export default ListingPage;
