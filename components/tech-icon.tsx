"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"

interface Tech {
  name: string
  icon: string | React.ReactNode  // Updated to allow a React element or a string URL
  experience: string
}

interface TechIconProps {
  tech: Tech
  index: number
  categoryIndex: number
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function TechIcon({ tech, index, categoryIndex, onMouseEnter, onMouseLeave }: TechIconProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 + categoryIndex * 0.1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-[#00eeff]/30 transition-all"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px 0 rgba(0, 238, 255, 0.2)",
          borderColor: "rgba(0, 238, 255, 0.5)",
        }}
        onMouseEnter={() => {
          setShowTooltip(true)
          onMouseEnter()
        }}
        onMouseLeave={() => {
          setShowTooltip(false)
          onMouseLeave()
        }}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          {typeof tech.icon === "string" ? (
            <Image
              src={tech.icon || "/placeholder.svg"}
              alt={tech.name}
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          ) : (
            // If tech.icon is a React element, render it directly
            <div className="text-3xl">{tech.icon}</div>
          )}
        </div>
        <span className="text-sm text-gray-300">{tech.name}</span>
      </motion.div>

      {showTooltip && (
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 px-3 py-2 rounded-lg border border-[#00eeff]/30 shadow-lg shadow-[#00eeff]/10 z-10 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <p className="text-xs text-[#00eeff]">{tech.experience}</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 border-r border-b border-[#00eeff]/30"></div>
        </motion.div>
      )}
    </motion.div>
  )
}