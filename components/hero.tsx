"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
 <section id="home" className="relative min-h-screen flex items-center">
  <Navbar />

  {/* Background - white for light, gradient for dark */}
  <div className="absolute inset-0 bg-white dark:bg-[#030A06]">
    <div className="absolute inset-0 hidden dark:block bg-grid-white/[0.05] bg-[size:60px_60px]" />
  </div>

  <div className="container mx-auto px-4 pt-20 relative z-10">
    <div className="max-w-3xl mx-auto text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
         <span className="bg-gradient-to-r from-[#8FFFC1] via-[#72F5D2] to-[#A8FFE0] bg-clip-text text-transparent">
  Hello, I'm
</span>
 <br />
          Aqsa Iftkhar
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto md:mx-0">
         Passionate about developing responsive, user-friendly web applications using modern technologies, with expertise in React, Next.js, and Node.js.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
          <Button
            asChild
            size="lg"
            className=" border border-gray-500 bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)]"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
  variant="outline"
  size="lg"
  asChild
  className="bg-transparent border border-[#CBFFDB] text-[#CBFFDB] hover:bg-[#0F2F24]/50 hover:shadow-md backdrop-blur-md transition duration-200"
>
  <a href="#projects">View My Work</a>
</Button>

        </div>

        <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
          <a
            href="https://github.com/aqsaiftkhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#CBFFDB] transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aqsa-iftkhar-6357b6356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#CBFFDB] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aqsaiftkhar868@gmail.com"
            className="text-foreground/70 hover:text-[#CBFFDB] transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  </div>

  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <a href="#about" className="text-foreground/50 hover:text-[#79F7CE] transition-colors">
      <ArrowDown size={24} />
    </a>
  </div>
</section>


  )
}

