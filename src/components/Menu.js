import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

export default function Menu({toggle}) {

    useEffect(() => {
        if (toggle) {
            gsap.to("#menu", {x: "0"})
        } else {
            gsap.to("#menu", {x: "-100%"})
        }
    }, [toggle])

    return (
        <div id="menu">
            <div id="menu-links">
                <Link to="/about">ABOUT</Link>
                <Link to="/work">WORK</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}
