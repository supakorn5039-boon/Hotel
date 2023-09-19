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
  return (
    <div
      className="
        bg-white
        rounded-xl
        border-[1px]
        border-neutral-200
        overflow-hidden
    "
    >
      <div className="flex flex-row items-center gap-1 p-4"></div>
    </div>
  );
}
