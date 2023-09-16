"use client";

import Container from "../Container";
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
