"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      style={{ height: "auto", width: "auto" }}
      alt="Logo"
    />
  );
}
