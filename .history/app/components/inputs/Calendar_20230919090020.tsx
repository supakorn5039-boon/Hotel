

'use client'
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the CSS styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme
import { DateRange } from 'react-date-range';

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = () => {
  value,
  onChange,
  disabledDates,
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  // Handle the submit button click
  const handleFormSubmit = () => {
    // Access the selected date range using selectedRange[0]
    const startDate = selectedRange[0].startDate;
    const endDate = selectedRange[0].endDate;

    // You can perform further actions with the selected date range here
    // For example, send it to a backend API or update your application's state
    console.log('Selected Start Date:', startDate);
    console.log('Selected End Date:', endDate);
  };

  return (
    <Box width='500px'>
      {/* Render the DateRangePicker */}
      <DateRangePicker
        onChange={(ranges: { selection: DateRange }) =>
          setSelectedRange([ranges.selection])
        }
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedRange}
      />

      {/* Render a button to submit the selected date range */}
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Calendar;

