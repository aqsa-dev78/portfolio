"use client"

import { useState, useEffect } from "react"
import { X, Download, ExternalLink, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-background border border-border rounded-lg shadow-lg">
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b">
          <h2 className="text-xl font-bold">Ambar Zara - Resume</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download size={16} className="mr-2" />
                Download PDF
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={20} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Ambar Zara</h1>
            <h2 className="text-xl font-medium mb-4">Full Stack Developer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span>ambarzara58@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span>+92 301 722 9367</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                <span>Faisalabad, Pakistan</span>
              </div>
              <div className="flex items-center">
                <ExternalLink size={16} className="mr-2 text-primary" />
                <span>github.com/ambarzara2772</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Professional Summary</h3>
            <p className="text-foreground/80">
              Junior Full Stack Developer with 6+ months of industrial experience, specializing in building responsive
              and user-friendly web applications. Proficient in front-end technologies like React, Next.js, and various
              CSS frameworks, as well as back-end technologies including Node.js, Express, and Adonis.js.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Material UI",
                    "Ant Design",
                    "Bootstrap",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "Adonis.js", "RESTful APIs", "MongoDB", "SQL"].map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Work Experience</h3>

            <div className="space-y-6">
              {/* Crective */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full"></div>
                <div className="mb-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-base font-semibold">Full Stack Developer</h4>
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar size={14} className="mr-1" />
                      <span>October 2023 - Present</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <Briefcase size={14} className="mr-1" />
                    <span className="font-medium">Crective</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-2">
                  Working on multiple live projects, developing responsive front-end interfaces and implementing
                  back-end functionality.
                </p>

                <div className="mb-2">
                  <h5 className="text-sm font-medium">Key Projects:</h5>
                  <ul className="text-sm list-disc list-inside text-foreground/80">
                    <li>German Guest Post (germanguestpost.com)</li>
                    <li>Auto Publish (autopublish.fun)</li>
                    <li>Maristo Chats (maristochats.fr)</li>
                    <li>Joaquin Sabina (joaquinsabina.net)</li>
                    <li>The Prominente (theprominente.de)</li>
                    <li>The Berlin Mag (theberlinmag.de)</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* TheMillionsBit */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full"></div>
                <div className="mb-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-base font-semibold">Frontend Developer Intern</h4>
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar size={14} className="mr-1" />
                      <span>August 2023 - October 2023</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <Briefcase size={14} className="mr-1" />
                    <span className="font-medium">TheMillionsBit</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-2">
                  Completed internship working on practice projects and contributed to the development of Muhafiz
                  Oxygen's website. Focused on creating responsive user interfaces and implementing design requirements.
                </p>

                <div className="mb-2">
                  <h5 className="text-sm font-medium">Key Projects:</h5>
                  <ul className="text-sm list-disc list-inside text-foreground/80">
                    <li>Muhafiz Oxygen (muhafizoxygen.com)</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Education</h3>

            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full"></div>
              <div className="mb-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-base font-semibold">Bachelor of Science in Computer Science (BSCS)</h4>
                  <div className="flex items-center text-sm text-foreground/70">
                    <Calendar size={14} className="mr-1" />
                    <span>Graduated</span>
                  </div>
                </div>
                <div className="flex items-center text-primary">
                  <GraduationCap size={14} className="mr-1" />
                  <span className="font-medium">Government College University Faisalabad (GCUF)</span>
                </div>
              </div>

              <p className="text-sm text-foreground/80">
                Completed Bachelor's degree with a focus on software development and web technologies. Gained a strong
                foundation in programming principles, algorithms, data structures, and various programming languages.
              </p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">Languages</h3>
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-medium">English</span>
                <span className="text-foreground/70 ml-2">Professional Working Proficiency</span>
              </div>
              <div>
                <span className="font-medium">Urdu</span>
                <span className="text-foreground/70 ml-2">Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

