import EmptyState from "../EmptyState";
import ClientOnly from "../ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";

const ListingPage = async () => {
  return (
    <ClientOnly>
      <EmptyState
        title=" No favorites found "
        subtitle="looks like you have no favorite listings "
      />
    </ClientOnly>
  );
};
