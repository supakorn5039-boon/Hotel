"use client";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import { useRouter } from "next/navigation";
import React from "react";

export default function EmptyState({
  title = "No Exact Matches",
  subtitle = "Try Changing or Remove some of your Filters",
  showReset,
}: EmptyState) {
  const router = useRouter();
  return <div></div>;
}
