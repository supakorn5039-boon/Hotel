import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login " />
      </ClientOnly>
    );
  }

  const reservations = await getReservation({
    userId: currentUser.id,
  });

  if (reservations.length == 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found "
          subtitle=" Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }
};
