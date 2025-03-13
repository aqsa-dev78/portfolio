"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import ProjectCard from "./project-card"

const projects = [
  {
    title: "German Guest Post",
    description: "A platform for guest posting and content publishing in German.",
    longDescription:
      "German Guest Post is a comprehensive platform that connects content creators with German websites for guest posting opportunities. The platform features a user-friendly interface for submitting, reviewing, and publishing guest posts, along with analytics to track performance. I implemented the front-end using Next.js and integrated it with a custom CMS backend.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://germanguestpost.com/en",
    technologies: ["Next.js", "Tailwind CSS", "AntDesign", "Node.Js"],
  },
  {
    title: "Auto Publish",
    description: "Automated content publishing platform with scheduling features.",
    longDescription:
      "Auto Publish is an innovative platform that allows users to schedule and automate content publishing across multiple channels. The system features an intuitive dashboard for managing content calendars, automated publishing workflows, and detailed analytics. I developed the front-end interface using React and implemented the scheduling functionality with Node.js and Express on the backend.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://autopublish.fun/",
    technologies: ["React", "Node.js", "Express.js"],
  },
  {
    title: "Maristo Chats",
    description: "A French chat and messaging platform with real-time features.",
    longDescription:
      "Maristo Chats is a real-time messaging platform designed for French users, featuring instant messaging, group chats, and media sharing capabilities. The application includes end-to-end encryption for secure communications and a responsive design that works across all devices. I implemented the real-time functionality using Socket.io and built the UI with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://maristochats.fr/",
    technologies: ["React.js", "Tailwind CSS", "Python"],
  },
  {
    title: "Muhafiz Oxygen",
    description: "Website for Muhafiz Oxygen company showcasing their products and services.",
    longDescription:
      "Muhafiz Oxygen is a corporate website for a company that provides oxygen solutions. The website showcases their products, services, and company information with a modern, responsive design. I developed the front-end interface during my internship at TheMillionsBit, focusing on creating an engaging user experience and ensuring the site was fully responsive across all devices.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://www.muhafizoxygen.com/",
    technologies: ["Next.Js", "CSS", "Tailwind CSS",],
  },
  {
    title: "The Prominente",
    description: "German news and media website featuring prominent personalities.",
    longDescription:
      "The Prominente is a German news and media website that focuses on prominent personalities, celebrities, and influencers. The site features news articles, interviews, and media galleries with a clean, modern design. I implemented the front-end using Next.js and integrated it with a headless CMS for content management.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://theprominente.de/",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "The Berlin Mag",
    description: "Online magazine focused on Berlin culture, events, and lifestyle.",
    longDescription:
      "The Berlin Mag is an online magazine dedicated to Berlin's culture, events, and lifestyle. The website features articles, event listings, and city guides with a stylish, modern design. I developed the front-end interface using React and implemented custom content management features to make it easy for editors to publish new content.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://theberlinmag.de/",
    technologies: ["React", "Node.js", "CSS"],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Projects
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

