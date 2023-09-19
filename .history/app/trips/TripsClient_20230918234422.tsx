"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps {
  reservation: SafeReservation[];
  currentUser?: SafeUser | null;
}

export default function TripsClient({
  reservation,
  currentUser,
}: TripsClientProps) {
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
    </Container>
  );
}
