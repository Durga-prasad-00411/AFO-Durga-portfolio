"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Database,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Get background and text classes based on theme
  const getThemeClasses = () => {
    if (!mounted) return "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"

    if (theme === "light") {
      return "bg-white"
    } else if (theme === "dark") {
      return "bg-black"
    } else {
      return "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    }
  }

  const getNavClasses = () => {
    if (!mounted) return "bg-black/20 border-white/10"

    if (theme === "light") {
      return "bg-white/90 border-gray-200"
    } else if (theme === "dark") {
      return "bg-black/90 border-gray-800"
    } else {
      return "bg-black/20 border-white/10"
    }
  }

  const getTextClasses = () => {
    if (!mounted) return "text-white"

    if (theme === "light") {
      return "text-black"
    } else if (theme === "dark") {
      return "text-white"
    } else {
      return "text-white"
    }
  }

  const getSecondaryTextClasses = () => {
    if (!mounted) return "text-white/70"

    if (theme === "light") {
      return "text-gray-600"
    } else if (theme === "dark") {
      return "text-gray-300"
    } else {
      return "text-white/70"
    }
  }

  const getCardClasses = () => {
    if (!mounted) return "bg-white/5 border-white/10"

    if (theme === "light") {
      return "bg-gray-50 border-gray-200 hover:bg-gray-100"
    } else if (theme === "dark") {
      return "bg-gray-900 border-gray-800 hover:bg-gray-800"
    } else {
      return "bg-white/5 border-white/10 hover:bg-white/10"
    }
  }

  const getSectionBgClasses = (alternate = false) => {
    if (!mounted) return alternate ? "bg-black/20" : ""

    if (theme === "light") {
      return alternate ? "bg-gray-100" : ""
    } else if (theme === "dark") {
      return alternate ? "bg-gray-900" : ""
    } else {
      return alternate ? "bg-black/20" : ""
    }
  }

  // System theme background animations and graphics
  const SystemThemeBackground = () => {
    if (theme !== "system" && theme !== undefined) return null

    return (
      <>
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/25 to-blue-500/25 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.path
            d="M100,200 Q250,150 400,200 T700,200"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulsing dots grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${(i % 10) * 10 + 5}%`,
                top: `${Math.floor(i / 10) * 20 + 10}%`,
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Rotating rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-white/5 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 border border-blue-400/10 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-purple-400/10 rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </>
    )
  }

  // Static data for the portfolio
  const displayData = {
    name: "Manojigari Durga Prasad",
    headline: "Electrical & Electronics Engineering Student | Full Stack Developer | Problem Solver",
    experience: [
      {
        title: "Electrical Intern",
        company: "Sannidhi Elevators Pvt. Ltd.",
        duration: "Feb 2025 - Apr 2025",
        description:
          "Worked as an Electrical Engineering Intern at Sannidhi Elevators Pvt. Ltd., assisting in the installation, testing, and maintenance of elevator systems while gaining hands-on experience in electrical operations and safety compliance.",
      },
    ],
    education: [
      {
        institution: "PES University",
        degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
        duration: "Aug. 2021 – June 2025",
        location: "Bangalore, Karnataka",
      },
      {
        institution: "Sri Chaitanya Academy",
        degree: "Board of Intermediate Education",
        duration: "May. 2019 – March 2021",
        location: "Andhra Pradesh",
      },
      {
        institution: "Edify School",
        degree: "Central Board of Secondary Education",
        duration: "May. 2018 – April 2019",
        location: "Andhra Pradesh",
      },
    ],
    skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL", "NodeJS", "Bootstrap", "SpringBoot"],
    contact: {
      email: "durgaprasad2003m@gmail.com",
      phone: "+91 9492855319",
      linkedin: "https://www.linkedin.com/in/durga-prasad-0b6699318/",
    },
  }

  if (isLoading) {
    return (
      <div className={`min-h-screen ${getThemeClasses()} flex items-center justify-center`}>
        <SystemThemeBackground />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className={`w-16 h-16 border-4 ${theme === "light" ? "border-black border-t-transparent" : "border-white border-t-transparent"} rounded-full mx-auto mb-4`}
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`${getTextClasses()} text-xl font-semibold`}
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${getThemeClasses()} transition-colors duration-500`}>
      <SystemThemeBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 ${getNavClasses()} backdrop-blur-md transition-colors duration-300`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 whileHover={{ scale: 1.05 }} className={`text-2xl font-bold ${getTextClasses()}`}>
              DurgaPrasad
            </motion.h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {["hero", "about", "experience", "projects", "skills", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize ${getSecondaryTextClasses()} hover:${getTextClasses()} transition-colors ${
                      activeSection === section ? "text-blue-600" : ""
                    }`}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center z-10 px-6 relative"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 relative">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/profile-photo.jpg"
                  alt={displayData.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className={`text-5xl md:text-7xl font-bold ${getTextClasses()} mb-4`}>
            {displayData.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl ${getSecondaryTextClasses()} mb-8 max-w-2xl mx-auto`}
          >
            {displayData.headline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className={`${theme === "light" ? "border-gray-400 text-black hover:bg-gray-100" : theme === "dark" ? "border-gray-600 text-white hover:bg-gray-800" : "border-white/30 text-white hover:bg-white/10"} px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300`}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={displayData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${getSecondaryTextClasses()} hover:text-blue-600 transition-colors`}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${displayData.contact.email}`}
              className={`${getSecondaryTextClasses()} hover:text-green-600 transition-colors`}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={`tel:${displayData.contact.phone}`}
              className={`${getSecondaryTextClasses()} hover:text-yellow-600 transition-colors`}
            >
              <Phone size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className={`${getSecondaryTextClasses()} w-8 h-8`} />
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="about" className={`py-20 px-6 relative ${getSectionBgClasses()}`}>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${getTextClasses()} mb-4`}>Education Journey</h2>
            <p className={`${getSecondaryTextClasses()} text-lg max-w-2xl mx-auto`}>
              My academic path in Electrical & Electronics Engineering
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {displayData.education.map((edu: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card
                  className={`${getCardClasses()} backdrop-blur-sm transition-all duration-300 transform hover:scale-105`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        className="text-3xl"
                      >
                        {index === 0 ? "🎓" : index === 1 ? "📚" : "🏫"}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${getTextClasses()} mb-2`}>{edu.institution}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{edu.degree}</p>
                        <div className={`flex items-center space-x-4 ${getSecondaryTextClasses()} text-sm`}>
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {edu.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 relative ${getSectionBgClasses(true)}`}>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${getTextClasses()} mb-4`}>Experience</h2>
            <p className={`${getSecondaryTextClasses()} text-lg max-w-2xl mx-auto`}>
              Hands-on experience in electrical engineering and system maintenance
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {displayData.experience.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`${getCardClasses()} backdrop-blur-sm transition-all duration-500 transform hover:scale-105`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                      >
                        <Wrench className="text-white" size={20} />
                      </motion.div>
                      <div>
                        <CardTitle className={`text-2xl ${getTextClasses()}`}>{exp.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-semibold">{exp.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`flex items-center space-x-2 mb-4 ${getSecondaryTextClasses()}`}>
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <p className={`${getSecondaryTextClasses()} leading-relaxed`}>{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 relative ${getSectionBgClasses()}`}>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${getTextClasses()} mb-4`}>Featured Projects</h2>
            <p className={`${getSecondaryTextClasses()} text-lg max-w-2xl mx-auto`}>
              Innovative solutions combining hardware and software expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Fault Detection in Underground Cables",
                description:
                  "Advanced microcontroller-based system for detecting and localizing faults in underground cable networks",
                tech: ["Microcontroller", "UART/I2C", "LCD Display", "Embedded Systems"],
                date: "March 2025",
                features: [
                  "Real-time fault detection (short circuit, open circuit, earth faults)",
                  "Accurate distance calculation using voltage drop analysis",
                  "User-friendly LCD interface for monitoring",
                  "High reliability under simulated conditions",
                ],
                color: "from-red-500 to-orange-500",
              },
              {
                title: "AFO ecommerce",
                description: "Full-stack responsive ecommerce platform with real-time inventory management",
                tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
                date: "May 2024",
                features: [
                  "Responsive design with Bootstrap framework",
                  "Real-time inventory tracking system",
                  "Secure MySQL backend for data management",
                  "Dynamic JavaScript features for smooth UX",
                ],
                color: "from-green-500 to-teal-500",
              },
              {
                title: "AFO (DOCai)",
                description:
                  "Full-stack web app starter built with Next.js, integrated with Google AI and Firebase services",
                tech: [
                  "Next.js",
                  "Tailwind CSS",
                  "Google AI",
                  "React Hook Form",
                  "TypeScript",
                  "npm",
                  "Turbopack",
                  "ESLint",
                ],
                date: "January 2025",
                features: [
                  "Next.js + Firebase Integration using Firebase Studio",
                  "Google AI Support via Genkit for AI-powered features",
                  "Radix UI Components with form handling",
                  "Hot Reload and Watch Mode with TypeScript & Linting",
                ],
                color: "from-blue-500 to-indigo-500",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className={`${getCardClasses()} backdrop-blur-sm transition-all duration-500 h-full`}>
                  <CardHeader>
                    <div className={`w-full h-2 bg-gradient-to-r ${project.color} rounded-full mb-4`} />
                    <CardTitle className={`text-xl ${getTextClasses()} group-hover:text-blue-600 transition-colors`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className={getSecondaryTextClasses()}>{project.description}</CardDescription>
                    <div className={`flex items-center space-x-2 text-sm ${getSecondaryTextClasses()}`}>
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className={`${getTextClasses()} font-semibold mb-2`}>Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`${getSecondaryTextClasses()} text-sm flex items-start`}
                            >
                              <span className="text-blue-600 mr-2">•</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className={`${getTextClasses()} font-semibold mb-2`}>Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className={`${theme === "light" ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : theme === "dark" ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-white/10 text-white/80 hover:bg-white/20"} transition-colors`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 relative ${getSectionBgClasses(true)}`}>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${getTextClasses()} mb-4`}>Technical Skills</h2>
            <p className={`${getSecondaryTextClasses()} text-lg max-w-2xl mx-auto`}>
              Proficient in various programming languages, frameworks, and tools
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Languages",
                  icon: <Code className="w-8 h-8" />,
                  skills: displayData.skills.filter((skill: string) =>
                    ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"].includes(skill),
                  ),
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  category: "Frameworks & Libraries",
                  icon: <Database className="w-8 h-8" />,
                  skills: displayData.skills.filter((skill: string) =>
                    ["NodeJS", "Bootstrap", "SpringBoot"].includes(skill),
                  ),
                  color: "from-green-500 to-emerald-500",
                },
                {
                  category: "Developer Tools",
                  icon: <Wrench className="w-8 h-8" />,
                  skills: ["VS Code", "Eclipse", "IntelliJ"],
                  color: "from-purple-500 to-pink-500",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className={`${getCardClasses()} backdrop-blur-sm transition-all duration-500 h-full`}>
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </motion.div>
                      <CardTitle className={`text-xl ${getTextClasses()}`}>{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.skills.map((skill: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 10 }}
                            className={`flex items-center space-x-3 p-2 rounded-lg ${theme === "light" ? "hover:bg-gray-200" : theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white/5"} transition-all duration-300`}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                            <span className={getSecondaryTextClasses()}>{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 relative ${getSectionBgClasses()}`}>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${getTextClasses()} mb-4`}>Get In Touch</h2>
            <p className={`${getSecondaryTextClasses()} text-lg max-w-2xl mx-auto`}>
              Let's connect and discuss opportunities or collaborations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className={`text-2xl font-bold ${getTextClasses()} mb-6`}>Contact Information</h3>

                {[
                  {
                    icon: <Phone className="w-6 h-6" />,
                    label: "Phone",
                    value: displayData.contact.phone,
                    href: `tel:${displayData.contact.phone}`,
                    color: "hover:text-green-600",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: "Email",
                    value: displayData.contact.email,
                    href: `mailto:${displayData.contact.email}`,
                    color: "hover:text-blue-600",
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    label: "LinkedIn",
                    value: "durga-prasad-0b6699318",
                    href: displayData.contact.linkedin,
                    color: "hover:text-blue-600",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg ${getCardClasses()} transition-all duration-300 ${getSecondaryTextClasses()} ${contact.color} group`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`${getSecondaryTextClasses()} group-hover:text-current`}
                    >
                      {contact.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <p className={`text-sm ${getSecondaryTextClasses()}`}>{contact.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={`${getCardClasses()} backdrop-blur-sm`}>
                  <CardHeader>
                    <CardTitle className={getTextClasses()}>Send a Message</CardTitle>
                    <CardDescription className={getSecondaryTextClasses()}>
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full p-3 rounded-lg ${theme === "light" ? "bg-white border-gray-300 text-black placeholder-gray-500" : theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white/10 border-white/20 text-white placeholder-white/50"} border focus:outline-none focus:border-blue-400 transition-colors`}
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full p-3 rounded-lg ${theme === "light" ? "bg-white border-gray-300 text-black placeholder-gray-500" : theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white/10 border-white/20 text-white placeholder-white/50"} border focus:outline-none focus:border-blue-400 transition-colors`}
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className={`w-full p-3 rounded-lg ${theme === "light" ? "bg-white border-gray-300 text-black placeholder-gray-500" : theme === "dark" ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white/10 border-white/20 text-white placeholder-white/50"} border focus:outline-none focus:border-blue-400 transition-colors resize-none`}
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Send Message
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-6 border-t ${theme === "light" ? "border-gray-200 bg-gray-100" : theme === "dark" ? "border-gray-800 bg-gray-900" : "border-white/10 bg-black/20"} relative`}
      >
        <div className="container mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={getSecondaryTextClasses()}
          >
            © 2025 {displayData.name}. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
