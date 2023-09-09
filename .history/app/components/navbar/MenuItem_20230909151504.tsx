"use client";

interface MenuItemProps {
    onClick:() => void;
    label: string;
}
import React from "react";
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


