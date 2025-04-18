"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  const generateParticles = useCallback(() => {
    const newParticles: Particle[] = []
    const colors = ["#00eeff", "#00ff66", "#ffffff"]

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    setParticles(newParticles)
  }, [])

  useEffect(() => {
    generateParticles()

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy

          // Bounce off edges
          if (newX < 0 || newX > 100) {
            particle.vx *= -1
            newX = particle.x + particle.vx
          }

          if (newY < 0 || newY > 100) {
            particle.vy *= -1
            newY = particle.y + particle.vy
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [generateParticles])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #00eeff 1px, transparent 1px), linear-gradient(to bottom, #00eeff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#00eeff] opacity-5 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-[#00ff66] opacity-5 blur-[150px] rounded-full" />
    </div>
  )
}
