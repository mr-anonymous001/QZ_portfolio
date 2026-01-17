'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
    '/images/Dr. Qamar uz Zaman.JPG',
    '/images/WhatsApp Image 2026-01-17 at 6.35.42 PM.jpeg',
    '/images/WhatsApp Image 2026-01-17 at 6.36.28 PM.jpeg',
]

export default function ProfileSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length)
                setIsTransitioning(false)
            }, 500) // Half of transition duration
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            {/* Fading mask container */}
            <div
                className="relative w-full h-full overflow-hidden rounded-2xl"
                style={{
                    maskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)',
                }}
            >
                <Image
                    src={images[currentIndex]}
                    alt="Dr. Qamar Uz Zaman"
                    fill
                    className={`object-cover object-top transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                    priority
                />
            </div>
        </div>
    )
}
