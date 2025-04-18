"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
  index: number
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function ProjectCard({ project, index, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00ff66] transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-gray-800 text-[#00eeff] border border-[#00eeff]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-[#00ff66] transition-colors"
            whileHover={{ x: 2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-[#00ff66] transition-colors"
            whileHover={{ x: 2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
