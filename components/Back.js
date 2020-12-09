import { useRouter } from 'next/router'
import React from "react";
import Link from "next/link";


export default function Back() {
    const router = useRouter()

    return <span className="button back" onClick={() => router.back()}>X</span>
}