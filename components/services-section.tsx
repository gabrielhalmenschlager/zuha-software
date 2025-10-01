"use client"

import { Code, Layout, Globe, Zap, Shield, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Soluções personalizadas e escaláveis para atender às necessidades específicas do seu negócio.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão com design moderno e otimizadas para resultados.",
  },
  {
    icon: Globe,
    title: "Soluções Web",
    description: "Aplicações web completas com tecnologias de ponta e arquitetura robusta.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Experiências perfeitas em todos os dispositivos, do mobile ao desktop.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização avançada para carregamento rápido e experiência fluida.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Implementação de melhores práticas de segurança para proteger seus dados.",
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
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
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferecemos soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
