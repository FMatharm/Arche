import { gsap } from 'gsap'
import React, { useEffect } from 'react'

export default function Wave({waveId, zeta, opacity, delay, bottom, bgX}) {
    useEffect(() => {
        gsap.to(("#wave" + waveId), {duration: 20, backgroundPositionX: (bgX + "px"), repeat: -1, ease: "none"})
            .delay(delay)
    }, [waveId, bgX, delay])

    return (
        <div id={"wave" + waveId} className='wave' style={{zIndex: zeta, opacity: opacity, bottom: bottom}} />
    )
}