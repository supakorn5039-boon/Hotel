"use client";

import useCountries from "@/app/hooks/useCountries";
import select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectProps;
  onChange: (value: CountrySelectValue) => void;
}

const { getAll } = useCountries;

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  return (
    <div>
      <select placeholder="Anywhere" isClearable options={getAll()} />
    </div>
  );
}
