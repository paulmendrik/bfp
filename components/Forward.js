import React from "react";
import Link from "next/link";



export default function Forward() {
    const handleClick = (e) => {
        var canvas = document.querySelectorAll('canvas');
        var i;

        for (i = 0; i < canvas.length; i++) {
            canvas[i].classList.add("removed")
        }

    }

    return <Link href="/gallery"><a className="button intro" onClick={handleClick}>Enter</a></Link>
}