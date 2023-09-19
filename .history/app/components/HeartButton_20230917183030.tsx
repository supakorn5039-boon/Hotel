"use client";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
import React from "react";
import { SafeUser } from "../types";
import { AiOutlineHeart } from "react-icons/ai";

export default function HeartButton({
  listingId,
  currentUser,
}: HeartButtonProps) {
  const hasFavorite = false;
  const toggleFavorite = () => {};

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative 
        hover:opacity-80
        transition
        cursor-pointer
    "
    >
      <AiOutlineHeart />
    </div>
  );
}
