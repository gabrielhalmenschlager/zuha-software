"use client"

import { Target, Eye, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sobre a ZuHa
            </h2>
            <p
              className={`text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Somos uma empresa especializada em criar soluções digitais inovadoras que transformam negócios e conectam
              pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div
              className={`text-center transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolver soluções web de excelência que impulsionam o crescimento dos nossos clientes através da
                tecnologia.
              </p>
            </div>

            <div
              className={`text-center transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em desenvolvimento de software, reconhecida pela qualidade e inovação das nossas
                soluções.
              </p>
            </div>

            <div
              className={`text-center transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Equipe</h3>
              <p className="text-muted-foreground leading-relaxed">
                Profissionais experientes e apaixonados por tecnologia, dedicados a entregar resultados excepcionais.
              </p>
            </div>
          </div>

          <div
            className={`bg-card border border-border rounded-xl p-8 md:p-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">30+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">98%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
