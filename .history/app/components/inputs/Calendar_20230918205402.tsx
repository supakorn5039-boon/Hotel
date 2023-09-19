"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

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
  return <DateRange />;
}
