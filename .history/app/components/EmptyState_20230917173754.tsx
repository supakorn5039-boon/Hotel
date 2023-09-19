"use client";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";

export default function EmptyState({
  title = "No Exact Matches",
  subtitle = "Try Changing or Remove some of your Filters",
  showReset,
}: EmptyState) {
  const router = useRouter();
  return (
    <div
      className="
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
    "
    >
      <Heading title={title} subtitle={subtitle} />
    </div>
  );
}
