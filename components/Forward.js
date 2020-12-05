import { useRouter } from 'next/router'
import React from "react";
import Link from "next/link";
import { Button } from 'rbx';


export default function Forward() {
    const handleClick = (e) => {
        var c = document.querySelectorAll('canvas');
        c.remove
        e.preventDefault()
        router.push({pathname: '/gallery'})
        router.reload()
    }

    const router = useRouter()
    return <Link href="/"><a className="button intro" onClick={handleClick}>Enter</a></Link>
}