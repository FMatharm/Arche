import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap';
import Menu from './Menu';

function Navbar() {
    const [active, setActive] = useState(false);
    const tl = useRef(gsap.timeline({paused: true}))

    useEffect(() => {
        tl.current.to("#res-button i", {duration: 0.2, margin: 0, ease: "power1.inOut"})
                  .to("#res-button i", {duration: 0, position: "absolute"})
                  .to("#res-button i:last-child", {duration: 0, display: "none"})
                  .to("#res-button i:first-child", {duration: 0.2, ease: "power1.inOut", rotate: "45deg"})
                  .to("#res-button i:nth-child(2)", {duration: 0.2, ease: "power1.inOut", rotate: "-45deg"}, "<")
    }, [tl])

    const activateButton = () => {
        if (!active) {
            tl.current.play()
            setActive(true)
        } else {
            tl.current.reverse()
            setActive(false)
        }
    }

    return (
        <>
            <nav id="navbar" className='heronav'>
                <Link to="/" id="logo">
                    <p id="letter">M</p>
                    <p className='subtitle'>Mateo Armijos</p>
                    <p className='subtitle'>Web Developer</p>
                </Link>
                <div id="links">
                    <Link to="/about">ABOUT</Link>
                    <Link to="/work">WORK</Link>
                    <Link to="/contact">CONTACT</Link>
                </div>
                <div id='res-button' onClick={activateButton}>
                    <i/>
                    <i/>
                    <i/>
                </div>
            </nav>
            <Menu toggle={active}/>
        </>
    )
}

export default Navbar