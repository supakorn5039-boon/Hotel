"use client";

import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdoutlineVilla } from "react-icons/md";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has Windmills!",
  },
  {
    label: "MOdern",
    icon: MdoutlineVilla,
    description: "This property has Windmills!",
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
