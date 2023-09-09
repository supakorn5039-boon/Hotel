"use client";

import React, { useState } from "react";

export default function ClientOnly() {
  const [hasMounted, setHasMounted] = useState(false);
  return <div></div>;
}
