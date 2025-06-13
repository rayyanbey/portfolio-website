"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ChevronUp, Menu, X, Moon, Sun, NotebookIcon, Globe2Icon} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import ProjectCard from "@/components/project-card"
import TechIcon from "@/components/tech-icon"
import ParticleBackground from "@/components/particle-background"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"
import CustomCursor from "@/components/custom-cursor"
import { LuCodeXml } from "react-icons/lu";
import { Toaster } from "@/components/ui/toaster"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiGit,
  SiFigma,
  SiPostman,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiSpringboot,
  SiFirebase,
  SiShadcnui,
  SiSequelize,
  SiMongoose,
  SiPrisma,
  SiBootstrap
} from "react-icons/si";

import { FaJava } from "react-icons/fa";



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [cursorVariant, setCursorVariant] = useState("default")
  const { toast } = useToast()
  const isMobile = useMobile()

  const sections = ["home", "projects", "tech", "about", "contact"]
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  // Register section refs
  const registerSection = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref
    }
  }

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = sectionRefs.current[section]
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  // Scroll to section
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = sectionRefs.current[id]
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("rayyanasghar9@gmail.com")
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    })
  }

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Connectify: Chat Application",
      description:
        "Built an end-to-end application like a messenger application in which you can create your profile, add friends, create groups, etc",
      image: "/connect.png",
      technologies: ["React", "Node.js", "MySQL", "Typscript","Express JS"],
      demoUrl: "https://connectify-two-phi.vercel.app/",
      githubUrl: "https://github.com/rayyanbey/connectify",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description: "Created a complete dashboard that manages a travel company’s website’s content",
      image: "/admin.png",
      technologies: ["Next.js", "Shadcn-UI", "Tailwind CSS", "Vercel","MySQL"],
      demoUrl: "https://admin-dashboard-green-sigma.vercel.app/",
      githubUrl: "https://github.com/rayyanbey/admin-dashboard",
    },
    {
      id: 3,
      title: "Dar-el-mecca: Travel Agency",
      description: "Created a complete server side of this company's main website in next js",
      image: "/darelmecca.png",
      technologies: ["Next.js", "Shadcn-UI", "Tailwind CSS", "Vercel","MySQL"],
      demoUrl: "https://dar-el-mecca.vercel.app/",
      githubUrl: "https://github.com/rayyanbey/dar-el-mecca",
    },
    {
      id: 4,
      title: "Cusine Control: Restaurant Management System",
      description:
        "Built an end-to-end application for managing recipes and ingredients, involving full stack development. This project taught me web development using Java and Spring Boot.",
      image: "/cuisine.png",
      technologies: ["Spring Boot", "bootstrap", "Thymleaf", "PostgreSQL"],
      demoUrl: "https://github.com/rayyanbey/Cuisine-Control",
      githubUrl: "https://github.com/rayyanbey/Cuisine-Control",
    },
    {
      id: 5,
      title: "Streamify: Video streaming application",
      description:
        "Developed the first iteration of a video-sharing platform similar to YouTube.Implemented key features, including profile creation, updating, subscription, and video sharing with thumbnails and descriptions.",
      image: "/stream.png",
      technologies: ["React", "Node.js", "MongoDB", "eraser.io","Express JS"],
      demoUrl: "https://github.com/rayyanbey/streamify_backend",
      githubUrl: "https://github.com/rayyanbey/streamify_backend",
    },
    {
      id: 6,
      title: "Codeinsight-IDE",
      description:
        "Your coding partner",
      image: "/codeinsight.png",
      technologies: ["React", "Node.js", "MongoDB","Express JS","Postman"],
      demoUrl: "https://web-project-frontend-main.vercel.app/",
      githubUrl: "https://github.com/rabiuddin/Web_Project_Backend",
    },
    {
      id: 7,
      title: "Gen-1",
      description:
        "Agency website for a company that provides Digital Solution",
      image: "/Gen1.png",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn-UI", "Vercel"],
      demoUrl: "https://gen1-design.vercel.app/",
      githubUrl: "https://github.com/rayyanbey/gen1",
    }
  ]

  // Tech stack data
  const techStack = {
    frontend: [
      { name: "React", icon: <SiReact />, experience: "2+ years" },
      { name: "Next.js", icon: <SiNextdotjs />, experience: "2+ years" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, experience: "2+ years" },
      { name: "ShadCN", icon: <SiShadcnui />, experience: "1+ years" },
      { name: "Bootstrap", icon: <SiBootstrap />, experience: "1+ years" },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, experience: "2+ years" },
      { name: "Express js", icon: <SiExpress />, experience: "2+ years" },
      { name: "SpringBoot", icon: <SiSpringboot />, experience: "1+ years" },
      { name: "Next.js", icon: <SiNextdotjs />, experience: "2+ years" }
    ],
    databases:[
      {name: "PostgreSQL", icon: <SiPostgresql />, experience: "1+ years"},
      {name: "MySQL", icon: <SiMysql />, experience: "1+ years"},
      {name: "Firebase", icon: <SiFirebase />, experience: "1+ years"},
      { name: "MongoDB", icon: <SiMongodb />, experience: "2+ years" }
    ],
    ORMS:[
      { name: "Sequelize", icon: <SiSequelize />, experience: "0.5 years" },
      { name: "Mongoose", icon: <SiMongoose />, experience: "1+ years" },
      { name: "Prisma", icon: <SiPrisma />, experience: "0.5 years" },
    ],
    devops: [
      { name: "Vercel", icon: <SiVercel />, experience: "2+ years" },
    ],
    tools: [
      { name: "Git", icon: <SiGit />, experience: "3+ years" },
      { name: "Figma", icon: <SiFigma />, experience: "1+ years" },
      { name: "Postman", icon: <SiPostman />, experience: "3+ years" },
      { name: "V0 dev", icon: <SiVercel/>, experience: "1+ years" }
    ],
    languages: [
      { name: "JavaScript", icon: <SiJavascript />, experience: "2+ years" },
      { name: "SQL", icon: <SiMysql />, experience: "2+ years" },
       { name: "Java", icon: <FaJava />, experience: "2+ years" },
      { name: "Python", icon: <SiPython />, experience: "1+ years" },
      { name: "C++", icon: <SiCplusplus />, experience: "3+ years" },
    ]
  }
  

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        toast({
          title: "Sending message...",
          description: "Please wait while we process your message.",
        })

        // Replace with your actual API endpoint
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
          })
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          })
        } else {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          })
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        })
      }
    }
  }

  // Cursor handlers
  const handleMouseEnter = () => {
    setCursorVariant("hover")
  }

  const handleMouseLeave = () => {
    setCursorVariant("default")
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-gray-950 text-white transition-colors duration-300",
        darkMode ? "dark-theme" : "light-theme",
      )}
    >
      {!isMobile && <CustomCursor variant={cursorVariant} />}

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LuCodeXml color="#00ff66" size={30}/>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {sections.map((section) => (
                <motion.button
                  key={section}
                  className={cn(
                    "text-sm uppercase tracking-wider hover:text-[#00ff66] transition-colors",
                    activeSection === section ? "text-[#00ff66]" : "text-gray-400",
                  )}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {section}
                </motion.button>
              ))}
            </nav>

            
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {sections.map((section) => (
                  <button
                    key={section}
                    className={cn(
                      "text-sm uppercase tracking-wider py-2 hover:text-[#00ff66] transition-colors",
                      activeSection === section ? "text-[#00ff66]" : "text-gray-400",
                    )}
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        ref={(el) => registerSection("home", el)}
      >
        <ParticleBackground />

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Muhammad Rayyan</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turning ideas into reality through code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-gray-900 font-bold text-lg shadow-lg shadow-[#00eeff]/20 hover:shadow-[#00eeff]/40 transition-all"
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px 0 rgba(0, 238, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                View My Work
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ChevronUp className="h-8 w-8 text-[#00ff66]" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative" ref={(el) => registerSection("projects", el)}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text">
                My Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check out some of my recent work and personal projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-gray-900/50 relative" ref={(el) => registerSection("tech", el)}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with on a daily basis.
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <div key={category} className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold capitalize text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  {category}
                </motion.h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {technologies.map((tech, techIndex) => (
                    <TechIcon
                      key={tech.name}
                      tech={tech}
                      index={techIndex}
                      categoryIndex={categoryIndex}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 relative" ref={(el) => registerSection("about", el)}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text">
                  About Me
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
              <motion.div
                className="relative mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-[#00eeff]/30 shadow-lg shadow-[#00eeff]/20">
                  <Image
                    src="/me.png"
                    alt="Muhammad Rayyan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-900 px-4 py-2 rounded-lg border border-[#00ff66]/30 shadow-lg shadow-[#00ff66]/20">
                  <p className="text-[#00ff66] font-mono">Full Stack Developer</p>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl text-gray-300">
                  Hi there! I'm Muhammad Rayyan, a passionate Full Stack Developer with a love for creating beautiful,
                  functional, and user-friendly web applications.
                </p>

                <p className="text-lg text-gray-400">
                  With over 2 years of experience in web development, I specialize in building modern web applications
                  using the latest technologies. I'm passionate about clean code, performance optimization, and creating
                  exceptional user experiences.
                </p>

                <p className="text-lg text-gray-400">
                  When I'm not coding, you can find me exploring new technologies, reading books,
                  or enjoying outdoor activities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-gray-900/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { icon: <Github className="h-6 w-6" />, label: "GitHub", url: "https://github.com/rayyanbey" },
                { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", url: "https://www.linkedin.com/in/rayyan-asghar-4520262a5/" },
                { icon: <NotebookIcon className="h-6 w-6" />, label: "Hashnode", url: "https://hashnode.com/@rayyanbey" },
                { icon: <Mail className="h-6 w-6" />, label: "Email", action: copyEmail, },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {social.url ? (
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" className="block">
                      <motion.div
                        className="flex flex-col items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700 shadow-lg shadow-[#00eeff]/10 hover:shadow-[#00eeff]/30 transition-all">
                          <div className="text-[#00eeff]">{social.icon}</div>
                        </div>
                        <span className="text-gray-400 text-sm">{social.label}</span>
                      </motion.div>
                    </Link>
                  ) : (
                    <button onClick={social.action} className="block w-full">
                      <motion.div
                        className="flex flex-col items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700 shadow-lg shadow-[#00eeff]/10 hover:shadow-[#00eeff]/30 transition-all">
                          <div className="text-[#00eeff]">{social.icon}</div>
                        </div>
                        <span className="text-gray-400 text-sm">{social.label}</span>
                      </motion.div>
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative" ref={(el) => registerSection("contact", el)}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-transparent bg-clip-text">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.form
              className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 shadow-xl"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-gray-800 border text-white focus:outline-none focus:ring-2 transition-all",
                      formErrors.name
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-gray-700 focus:border-[#00eeff] focus:ring-[#00eeff]/20",
                    )}
                    placeholder="Your name"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-gray-800 border text-white focus:outline-none focus:ring-2 transition-all",
                      formErrors.email
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-gray-700 focus:border-[#00eeff] focus:ring-[#00eeff]/20",
                    )}
                    placeholder="Your email"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-gray-800 border text-white focus:outline-none focus:ring-2 transition-all",
                      formErrors.message
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-gray-700 focus:border-[#00eeff] focus:ring-[#00eeff]/20",
                    )}
                    placeholder="Your message"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00eeff] to-[#00ff66] text-gray-900 font-bold shadow-lg shadow-[#00eeff]/20 hover:shadow-[#00eeff]/40 transition-all"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px 0 rgba(0, 238, 255, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              &copy; {new Date().getFullYear()} Muhammad Rayyan. All rights reserved.
            </motion.p>

            <motion.p
              className="text-gray-500 text-sm italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              "Code is like humor. When you have to explain it, it's bad." – Cory House
            </motion.p>
          </div>
        </div>

        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 border border-gray-700 shadow-lg shadow-[#00eeff]/10 hover:shadow-[#00eeff]/30 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ChevronUp className="h-5 w-5 text-[#00ff66]" />
        </motion.button>
      </footer>

      <Toaster />
    </div>
  )
}
