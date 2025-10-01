"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users, Zap, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const commitments = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Código limpo, testado e documentado. Garantimos a qualidade do seu projeto desde o primeiro dia.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description: "Cumprimos prazos e mantemos você informado sobre o progresso do projeto em todas as etapas.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Award,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais modernas tecnologias e melhores práticas do mercado para seu projeto.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Suporte Contínuo",
    description: "Estamos aqui para ajudar mesmo após a entrega. Suporte técnico e manutenção quando precisar.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Seu site será rápido, responsivo e otimizado para todos os dispositivos e motores de busca.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Heart,
    title: "Parceria de Confiança",
    description: "Construímos relacionamentos duradouros baseados em transparência, comunicação e resultados.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

export function TestimonialsSection() {
  const [visibleCommitments, setVisibleCommitments] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            commitments.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCommitments((prev) => [...prev, index])
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
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-accent/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Compromissos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            O que você pode esperar ao trabalhar conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <Card
                key={index}
                className={`group transition-all duration-700 hover:shadow-lg hover:shadow-foreground/5 ${
                  visibleCommitments.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${commitment.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${commitment.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{commitment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
