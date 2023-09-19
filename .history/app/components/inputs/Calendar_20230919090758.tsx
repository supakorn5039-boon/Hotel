import React from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: DateRange; // Change this to a single DateRange object
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value, // Change this to a single DateRange object
  onChange,
  disabledDates,
}) => {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={value ? [value] : []} // Format the ranges prop correctly
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default Calendar;
