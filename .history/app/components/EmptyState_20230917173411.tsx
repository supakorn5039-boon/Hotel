interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

import React from "react";

export default function EmptyState({ title, subtitle, showReset }: EmptyState) {
  return <div></div>;
}
