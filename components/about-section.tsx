"use client"

import { Target, Eye, Users, Code, Zap, Heart, Lightbulb, Rocket } from "lucide-react"
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_0%_0%,hsl(var(--primary)/0.12),transparent_60%),radial-gradient(1000px_500px_at_100%_100%,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)] bg-[linear-gradient(to_right,hsl(var(--foreground)/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
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
            <div
              className={`h-1 w-16 md:w-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/70 to-primary/30 transition-all duration-700 origin-center ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
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
              className={`text-center transition-all duration-700 delay-200 rounded-xl p-6 border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg/10 motion-reduce:transition-none ${
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
              className={`text-center transition-all duration-700 delay-300 rounded-xl p-6 border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg/10 motion-reduce:transition-none ${
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
              className={`text-center transition-all duration-700 delay-400 rounded-xl p-6 border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg/10 motion-reduce:transition-none ${
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
            className={`group bg-card border border-border rounded-xl p-8 md:p-12 backdrop-blur-sm transition-all duration-700 delay-500 hover:border-primary/30 hover:shadow-xl/20 hover:-translate-y-0.5 motion-reduce:transition-none ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Por que escolher a ZuHa?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Somos uma empresa nova, mas com uma abordagem inovadora e comprometida com a excelência
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Code className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Código Limpo</h4>
                <p className="text-sm text-muted-foreground">Desenvolvimento com as melhores práticas e padrões de qualidade</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Agilidade</h4>
                <p className="text-sm text-muted-foreground">Processos otimizados para entregas rápidas e eficientes</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Inovação</h4>
                <p className="text-sm text-muted-foreground">Soluções criativas e tecnologias de ponta para seu projeto</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Dedicação</h4>
                <p className="text-sm text-muted-foreground">Compromisso total com o sucesso do seu projeto</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 motion-reduce:transition-none">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Prontos para decolar seu projeto!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
