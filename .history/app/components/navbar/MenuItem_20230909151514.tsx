"use client";
import React from "react";

interface MenuItemProps {
    onClick:() => void;
    label: string;
}
export default function MenuItem: React.FC<MenuItemProps> =( 
    onClick,
    label

) => {
  return (
    <div
      className="

        "
    ></div>
  );
}


