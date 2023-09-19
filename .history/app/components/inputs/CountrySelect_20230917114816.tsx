import React from "react";
import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

interface CountrySelectValue {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
}

interface CountrySelectProps {
  value?: CountrySelectValue | null;
  onChange: (value: CountrySelectValue | null) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        onChange={(selectedOption) =>
          onChange(selectedOption as CountrySelectValue)
        }
        value={value}
      />
    </div>
  );
};

export default CountrySelect;
