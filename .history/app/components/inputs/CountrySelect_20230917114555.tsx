import React from "react"; // Import React
import useCountries from "@/app/hooks/useCountries";
import Select from "react-select"; // Correctly import react-select

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue | undefined; // Correct type for value
  onChange: (value: CountrySelectValue | null) => void; // Updated type
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries;

  return (
    <div>
      {/* Use the Select component from react-select */}
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CountrySelect;
