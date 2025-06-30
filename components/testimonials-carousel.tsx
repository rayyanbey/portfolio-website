"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function TestimonialsCarousel({ testimonials, onMouseEnter, onMouseLeave }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleMouseEnterCarousel = () => {
    setIsAutoPlaying(false)
    onMouseEnter()
  }

  const handleMouseLeaveCarousel = () => {
    setIsAutoPlaying(true)
    onMouseLeave()
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnterCarousel}
      onMouseLeave={handleMouseLeaveCarousel}
    >
      {/* Main testimonial display */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 p-8 md:p-12 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            {/* Quote icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <Quote className="h-12 w-12 text-[#00eeff]/30" />
            </motion.div>

            {/* Testimonial content */}
            <motion.blockquote
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              "{testimonials[currentIndex].content}"
            </motion.blockquote>

            {/* Rating stars */}
            <motion.div
              className="flex justify-center gap-1 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#00ff66] text-[#00ff66]" />
              ))}
            </motion.div>

            {/* Author info */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="relative">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-[#00eeff]/30 shadow-lg shadow-[#00eeff]/20"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00eeff]/20 to-[#00ff66]/20"></div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-[#00eeff] font-medium">{testimonials[currentIndex].role}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 transition-all"
          onClick={goToPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 transition-all"
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#00eeff] shadow-lg shadow-[#00eeff]/50" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00eeff] to-[#00ff66]"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{
            duration: isAutoPlaying ? 5 : 0,
            ease: "linear",
            repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0,
          }}
          key={`${currentIndex}-${isAutoPlaying}`}
        />
      </div>


    </div>
  )
}
