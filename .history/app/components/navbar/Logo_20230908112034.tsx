'use client';

import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Logo () {
    const router = useRouter();

    return (
        <Image
            alt="Logo"
            className="hidden md:black cursor-pointer"
            height="100"
            width="100"
            src="/public/images/logo"
        />
    )    
}