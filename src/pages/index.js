import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

import "normalize.css"
import '../styles/global.css'
import AboutWork from "../components/AboutWork"
import { useEffect } from "react"
import { ScrollToPlugin } from "gsap/all"
import { gsap } from "gsap"

export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
        window.scrollTo(0,0)
        
        let pos = window.scrollY
        let aboutpos = document.getElementById("home-about").offsetTop - 116
        let scrolling = false

        window.onscroll = () => {
            if (pos === 0 && window.scrollY > 50 && !scrolling) {
                gsap.to(window, {
                    scrollTo: aboutpos, onStart: () => {
                        scrolling = true
                    }, onComplete: () => {
                        document.querySelector("#navbar").classList.add("aboutnav")
                        document.querySelector("#navbar").classList.remove("heronav")
                        pos = aboutpos
                        scrolling = false
                    }
                })
            } else if (pos === aboutpos && window.scrollY < (aboutpos - 50) && !scrolling) {
                gsap.to(window, {
                    scrollTo: 0, onStart: () => {
                        scrolling = true
                    }, onComplete: () => {
                        document.querySelector("#navbar").classList.add("heronav")
                        document.querySelector("#navbar").classList.remove("aboutnav")
                        pos = 0
                        scrolling = false
                    }
                })
            }
        }
    }, [])

    return (
        <Layout>
            <Hero />
            <AboutWork />
        </Layout>
    )
}
