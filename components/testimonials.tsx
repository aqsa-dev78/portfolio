"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Areeba Fatima",
    position: "Frontend Developer at DevSpark",
    content:
      "Aqsa’s enthusiasm for learning and clean coding practices make her stand out. She's reliable, creative, and always ready to take on new challenges.",
    avatar: "/avatars/areeba-fatima.jpg",
  },
  {
    name: "Bilal Ahmed",
    position: "Senior Backend Engineer at CodeCraft",
    content:
      "Aqsa is very efficient in backend integration and database structuring. Her ability to work under pressure and still deliver quality work is commendable.",
    avatar: "/avatars/bilal-ahmed.jpg",
  },
  {
    name: "Sana Riaz",
    position: "Product Owner at NexTech",
    content:
      "Aqsa brings a great balance of technical skills and communication. She collaborates well across teams and understands the bigger picture of product development.",
    avatar: "/avatars/sana-riaz.jpg",
  },
];


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
          <div className="w-20 h-1 bg-[#004E3F] mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-[#004E3F]/80 backdrop-blur-sm shadow-md"
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
                        <div className="mb-6 text-[#004E3F]">
                          <Quote size={40} />
                        </div>

                        <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

                        <div className="flex items-center flex-col">
                          <div className="w-16 h-16 rounded-full bg-[#004E3F] text-white flex items-center justify-center text-xl font-bold mb-3">
  {testimonial.name.charAt(0)}
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
                className="rounded-full bg-[#004E3F]/80 backdrop-blur-sm shadow-md"
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
                    index === currentIndex ? "bg-[#004E3F]" : "bg-[#004E3F]/30"
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

