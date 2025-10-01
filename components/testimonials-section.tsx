"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    content:
      "A ZuHa transformou nossa visão em realidade. O profissionalismo e a qualidade do trabalho superaram todas as expectativas.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora de Marketing, InnovaCorp",
    content:
      "Excelente parceria! A equipe é extremamente competente e sempre disponível para ajudar. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    role: "Fundador, StartupHub",
    content:
      "Trabalhar com a ZuHa foi uma experiência incrível. Entregaram um produto de altíssima qualidade no prazo combinado.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTestimonials((prev) => [...prev, index])
              }, index * 150)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-accent/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Depoimentos de quem confia no nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 ${
                visibleTestimonials.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
