"use client";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

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
      <AiOutlineHeart
        size={28}
        className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}
