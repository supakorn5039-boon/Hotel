"use client";

import Container from "../Container";
import { TbBeach } from "react-icons/tb";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
  },
];

export default function Categories() {
  return (
    <Container>
      <div
        className="
            pt-4 
            flex 
            flex-row 
            items-center 
            justify-between 
            overflow-x-auto"
      ></div>
    </Container>
  );
}
