"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-[#298248] mx-auto mb-8"></div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(2,90,74,1)] via-[rgba(2,90,74,1)] to-[rgba(2,90,74,1)] rounded-lg transform rotate-3 opacity-70"></div>

                <img
                  src="/profile1.jpeg"
                  alt="Aqsa Iftikhar"
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-300"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="p-6 bg-background/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#8FFFC1] via-[#72F5D2] to-[#A8FFE0] bg-clip-text text-transparent">Who am I?</h3>
                <p className="text-foreground/80 mb-4">
                  I'm Aqsa Iftikhar, a Junior Full Stack Developer with over 6 months of industrial experience. I'm
                  passionate about creating efficient, user-friendly web applications using modern technologies.
                </p>
                <p className="text-foreground/80 mb-4">
                  My journey in web development started during my BSCS studies at Government College University
                  Faisalabad (GCUF), where I developed a strong foundation in computer science principles and
                  programming.
                </p>
                <p className="text-foreground/80 mb-6">
                  I specialize in front-end technologies like React, Next.js, and various CSS frameworks, as well as
                  back-end technologies including Node.js, Express, and Adonis.js.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild  className="bg-[#0A140E] hover:bg-[#0A140E] border  border-[1px] border-[#CBFFDB] text-[#CBFFDE]" variant="outline">
                    <a href="#experience">My Experience</a>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)]">
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

