"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-background/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  <GraduationCap size={40} className="text-primary" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold">Bachelor of Science in Computer Science (BSCS)</h3>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    Government College University Faisalabad (GCUF)
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:gap-6 text-foreground/70 mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar size={16} className="mr-2" />
                      <span>Graduated</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>Lahore, Pakistan</span>
                    </div>
                  </div>

                  <p className="text-foreground/80">
                    Completed my Bachelor's degree in Computer Science with a focus on software development and web
                    technologies. Gained a strong foundation in programming principles, algorithms, data structures, and
                    various programming languages. Participated in coding competitions and developed several academic
                    projects.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

