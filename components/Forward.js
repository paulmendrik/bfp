import { useRouter } from 'next/router'
import React from "react";
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
    return <Button className="button intro"><a onClick={handleClick}>Enter</a></Button>
}