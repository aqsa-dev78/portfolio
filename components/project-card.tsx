"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info, X } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    liveUrl: string
    technologies: string[]
    longDescription?: string
  }
}


export default function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      {/* <Card className="h-full flex flex-col overflow-hidden group"> */}
      <Card className="h-full flex flex-col overflow-hidden group bg-gradient-to-b from-[rgba(39,102,75,0.6)] via-[rgba(34,82,62,0.4)] to-[rgba(3,12,7,0.4)] backdrop-blur-md border border-white/10 rounded-xl shadow-lg">

        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-foreground/70 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="border border-white">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="flex gap-3">
            <Button asChild size="sm" variant="outline">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white gap-2 bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)]">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
            {project.longDescription && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowDetails(true)}
                className="flex items-center text-white gap-2 border border-white bg-[#0A140E] hover:bg-[#0A140E]"
              >
                <Info size={16} />
                Details
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Project Details Modal */}
      {showDetails && project.longDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-background border border-border rounded-lg shadow-lg">
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowDetails(false)}>
                <X size={20} />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="p-6">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <p className="text-foreground/80 mb-4">{project.longDescription}</p>

              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)]">
                  <ExternalLink size={16} />
                  Visit Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

