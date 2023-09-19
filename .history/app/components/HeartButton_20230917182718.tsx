"use client";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
import React from "react";
import { SafeUser } from "../types";

export default function HeartButton({
  lsitingId,
  currentUser,
}: HeartButtonProps) {
  return <div></div>;
}
