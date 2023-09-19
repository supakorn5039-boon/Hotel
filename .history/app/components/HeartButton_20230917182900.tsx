"use client";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
import React from "react";
import { SafeUser } from "../types";

export default function HeartButton({
  listingId,
  currentUser,
}: HeartButtonProps) {
  const hasFavorite = false;
  const toggleFavorite = () => {};

  return 
 ( <div 
  onClick={toggleFavorite}><
    /div>)

}
