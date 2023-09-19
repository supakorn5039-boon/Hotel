import React from "react";
import useCountries, { CountrySelectValue } from "@/app/hooks/useCountries";
import Select from "react-select";

interface CountrySelectProps {
  value?: CountrySelectValue | null;
  onChange: (value: CountrySelectValue | null) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select placeholder="Anywhere" isClearable options={getAll()} />
    </div>
  );
};

export default CountrySelect;
