"use client";

import { Range, RangeKeyDict } from "react-date-range";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disableDates?: Date[];
}

export default function Calendar() {
  return <div className="text-xl">listing</div>;
}
