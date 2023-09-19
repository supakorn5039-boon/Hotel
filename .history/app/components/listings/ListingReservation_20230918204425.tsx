"use client ";

import { Range } from "react-date-range";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

export default function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disableDates,
  disabled,
}: ListingReservationProps) {
  return <div> Listing </div>;
}
