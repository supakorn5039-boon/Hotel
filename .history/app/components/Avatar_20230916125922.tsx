"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | underfined;
}
export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
}
