import React from 'react'
import Wave from './animated/Wave'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Hero() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to("#hero-content", {
            y: ScrollTrigger.maxScroll(window), opacity: 0, ease: "none", scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom center",
                scrub: 0.5,
                onScrubComplete: ({ progress }) => {
                    if (progress === 1) {
                        document.getElementById("hero-content").style.display = "none"
                    }
                },
                onEnterBack: () => {
                    document.getElementById("hero-content").style.display = "grid"
                }
            }
        })
    }, [])
    return (
        <section id='hero'>
            <div id="hero-content">
                <div id="hero-desc">
                    <h1 className='anim-typewriter'>Hi, I'm Mateo</h1>
                    <h2>Web Developer</h2>
                </div>
                <div id='hero-icon' />
            </div>
            <div id="waves">
                <Wave waveId={1} bgX={1000} opacity={1} zeta={5} delay={-1} bottom={-20} />
                <Wave waveId={4} bgX={1000} opacity={0.4} zeta={4} delay={1} bottom={5} />
                <Wave waveId={2} bgX={-1000} opacity={0.6} zeta={3} delay={0} bottom={10} />
                <Wave waveId={3} bgX={-1000} opacity={0.1} zeta={2} delay={3} bottom={20} />
            </div>
        </section>
    )
}

export default Hero