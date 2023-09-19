import { getListingById } from "@/app/actions/getListingById";


const ListingPage  = await  ({ params } : { params : IParams}) => {
    const listing = await getListingById()
  return (
    <div>
      
    </div>
  )
}

export default page
