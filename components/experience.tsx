"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Crective",
    position: "Full Stack Developer",
    period: "November 2024 - Present",
    location: "OnSite",
    description:
      "Working on multiple live projects including germanguestpost.com, autopublish.fun, xn--rezeptetglich-ifb.de, linqbuzz.netlify.app , /papr-blog.netlify.app, and techbios.netlify.app Developing responsive front-end interfaces and implementing back-end functionality.",
    projects: [
      { name: "German Guest Post", url: "https://germanguestpost.com/en" },
      { name: "Auto Publish", url: "https://autopublish.fun/" },
      { name: "Rezepte Täglich", url: "https://xn--rezeptetglich-ifb.de/" },
      { name: "Linqbuzz", url: "https://linqbuzz.netlify.app/" },
      { name: "Papr blog", url: "https://papr-blog.netlify.app/" },
      { name: "Tech bios", url: "https://techbios.netlify.app/" },
    ],
    skills: ["React.js", "Next.js", "Node.js", "Express.js","MUI" , "Tailwind CSS"],
  },
  {
    company: "Smart Web Labs",
    position: "Frontend Developer Intern",
    period: "April 2024 - May 2024",
    location: "Remote",
    description:
      "Completed internship working on practice projects . Focused on creating responsive user interfaces and implementing design requirements.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
          <div className="w-20 h-1 bg-[#004E3F]  mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-[#004E3F]/30 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-12 w-6 h-6 bg-[#004E3F] rounded-full border-4 border-[#004E3F]"></div>
                  <Card className="p-6 bg-background/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <h4 className="text-lg font-medium text-[#004E3F]">{exp.company}</h4>
                      </div>
                      <div className="mt-2 md:mt-0 text-foreground/70">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                   {exp.company === "Crective" && exp.projects && exp.projects.length > 0 && (
  <div className="mb-4">
    <h5 className="font-medium mb-2">Projects:</h5>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {exp.projects.map((project, idx) => (
        <li key={idx}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-[#FED688] hover:underline"
          >
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}


                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

