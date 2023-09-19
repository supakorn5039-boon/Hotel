"use client ";

import { Range } from "postcss/lib/node";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

export default function ListingReservation() {
  return <div>ListingReservation</div>;
}
