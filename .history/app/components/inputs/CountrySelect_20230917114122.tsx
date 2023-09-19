"use client";

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

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  return <div></div>;
}
