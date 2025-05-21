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
      "German Guest Post is a specialized platform that offers high-quality guest posting and backlink services on German websites. Tailored for SEO professionals, agencies, and businesses targeting the German market, this platform ensures authoritative link placement that boosts search rankings and domain credibility. With a curated list of German blogs and niche websites, users can choose placements that align with their industry. The platform features an intuitive interface, quick turnaround times, and reliable support to streamline the link-building process. It's a trusted solution for driving organic traffic and enhancing online visibility in the German-speaking world.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://germanguestpost.com/en",
    technologies: ["Next.js",  "shadcn ui" , "Express.js", "postgresql"],
  },
  {
    title: "Auto Publish",
    description: "Automated content publishing platform with scheduling features.",
    longDescription:
      "AutoPublish is an all-in-one platform designed to streamline the process of publishing guest posts and building high-quality backlinks. It allows users to submit articles to a wide range of websites automatically, saving time and boosting SEO efforts. The system ensures content is published quickly and efficiently with minimal manual intervention. Whether you're an agency, SEO expert, or website owner, AutoPublish helps you scale your link-building strategy with ease. The user-friendly interface and real-time status tracking make it a valuable tool for digital marketers.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://autopublish.fun/",
    technologies: ["Next.js", "shadcn ui", "Express.js" ,"mongodb"],
  },
  {
    title: "Rezepte Täglich",
    description: "Easy and delicious daily recipe ideas.",
    longDescription:
      "Rezepte Täglich is a German website offering a wide variety of simple, quick, and delicious recipes for everyday cooking. From healthy meals to sweet treats, the platform caters to all tastes and occasions. Each recipe is easy to follow, making it perfect for both beginners and experienced home cooks. The site focuses on time-saving and nutritious meal options for busy individuals and families. Whether you're cooking after work or planning a weekend meal, Rezepte Täglich provides fresh inspiration every day.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://xn--rezeptetglich-ifb.de/",
    technologies: ["React.js", "material ui"],
  },
  {
    title: " Papr Blog",
    description: "Modern and responsive blog platform for articles.",
    longDescription:
      "Muhafiz Oxygen is a corporate website for a company that provides oxygen solutions. The website showcases their products, services, and company information with a modern, responsive design. I developed the front-end interface during my internship at TheMillionsBit, focusing on creating an engaging user experience and ensuring the site was fully responsive across all devices.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://papr-blog.netlify.app/",
    technologies: ["Next.Js", "material ui"],
  },
  {
    title: "LinqBuzz",
    description: "Interactive link-sharing and bio profile platform.",
    longDescription:
      "LinqBuzz is a stylish and responsive bio link platform designed to help users share multiple links through a single, customizable profile page. It’s perfect for influencers, creators, and professionals who want to showcase their portfolio, social media, and websites all in one place. The interface is sleek and user-friendly, built with a mobile-first approach to ensure seamless performance on all devices. Features include customizable themes, social media integration, and analytics support. LinqBuzz offers a smart way to connect your audience with everything you offer through a single link.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://linqbuzz.netlify.app/",
    technologies: ["React.js", "material ui"],
  },
  {
    title: "Benqu Blog",
    description: "Minimal and elegant tech-focused blog platform.",
    longDescription:
      "Benqu Blog is a clean, content-first blogging platform built for tech writers and enthusiasts. It features a minimalist design that emphasizes readability and user experience. The platform supports well-organized post layouts, responsive typography, and seamless navigation across categories. Built with modern web technologies, Benqu Blog offers fast load times, responsive design, and easy customization options. Whether you're sharing tutorials, opinions, or updates, Benqu Blog provides a distraction-free environment for both readers and writers.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "https://benqu-blog.netlify.app/",
    technologies: ["React.js", "material ui"],
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
          <div className="w-20 h-1 bg-[#004E3F] mx-auto mb-12"></div>

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
              <Button onClick={loadMore} variant="outline" size="lg" className="border border-gray-500 bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)]">
                Load More Projects
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

