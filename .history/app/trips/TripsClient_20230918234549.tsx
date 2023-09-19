"use client";
import { useRouter } from "next/navigation";
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
      <div
        className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      ></div>
    </Container>
  );
}
