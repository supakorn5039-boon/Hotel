"use client";

import React, { useEffect, useState } from "react";

export default function ClientOnly() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <div></div>;
}
