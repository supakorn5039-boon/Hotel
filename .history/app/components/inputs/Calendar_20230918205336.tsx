"use client";

import { Range, RangeKeyDict } from "react-date-range";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

export default function Calendar({
  value,
  onChange,
  disabledDates,
}: CalendarProps) {
  return <div className="text-xl">listing</div>;
}
