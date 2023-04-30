import React from 'react'
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { DiGit } from "@react-icons/all-files/di/DiGit"
import { DiReact } from "@react-icons/all-files/di/DiReact"
import { DiWordpress } from "@react-icons/all-files/di/DiWordpress"
import { SiSpring } from "@react-icons/all-files/si/SiSpring"
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby"
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function AboutWork() {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(".water-icon", {y: () => {
            let sign = Math.random()
            if (sign < 0.5) {
                sign = -1
            } else {
                sign = 1
            }
            return Math.random() * 5 * sign
        }, duration: 2, ease: "none"})
          .to(".water-icon", {x: () => {
            let sign = Math.random()
            if (sign < 0.5) {
                sign = -1
            } else {
                sign = 1
            }
            return Math.random() * 5 * sign
          }, duration: 2, ease: "none"}, "<")
          .to(".water-icon", {y: 0, duration: 2, ease: "none"})
          .to(".water-icon", {x: 0, duration: 2, ease: "none"})
          .repeat(-1)
    }, [])
    return (
        <section id="home-about">
            <div>
                <div id="project-display">
                    
                </div>
                <div id="introduction">
                    <h2>EAGER TO WORK</h2>
                    <p>I create successful websites that are fast, easy to use, and built with best practices. My main focus has been front end development, React, Gatsby, Wordpress, with a bit of back end technologies like Spring and Node, building small and medium web apps.</p>
                    <div>
                        <AiFillGithub className='water-icon' />
                        <DiGit className='water-icon' />
                        <DiReact className='water-icon' />
                        <SiSpring className='water-icon' />
                        <DiWordpress className='water-icon' />
                        <SiGatsby className='water-icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}