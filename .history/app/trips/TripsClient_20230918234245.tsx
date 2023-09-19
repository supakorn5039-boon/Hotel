"use client";

import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps {
  reservation: SafeReservation[];
  currentUser?: SafeUser | null;
}

export default function TripsClient() {
  return <div>My trips </div>;
}
