"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Ali",
    position: "Project Manager at Crective",
    content:
      "Ambar is an exceptional developer who consistently delivers high-quality work. Her attention to detail and problem-solving skills make her a valuable asset to any team.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Qamar Zia",
    position: "Lead Developer at TheMillionsBit",
    content:
      "During her internship, Ambar demonstrated remarkable growth and dedication. She quickly grasped complex concepts and contributed meaningfully to our projects.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Hussnain Khan",
    position: "UI/UX Designer",
    content:
      "Working with Ambar was a pleasure. She has a keen eye for design implementation and always ensures the final product matches the design specifications perfectly.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              >
                <ChevronLeft size={24} />
              </Button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="p-8 bg-background/50 backdrop-blur-sm">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6 text-primary">
                          <Quote size={40} />
                        </div>

                        <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

                        <div className="flex items-center flex-col">
                          <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-foreground/70 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-background/80 backdrop-blur-sm shadow-md"
              >
                <ChevronRight size={24} />
              </Button>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

