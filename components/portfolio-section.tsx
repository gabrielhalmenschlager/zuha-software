"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Car Sales Website",
    category: "Desenvolvimento Web",
    description: "Website para venda de carros com interface moderna e responsiva",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    githubUrl: "https://github.com/gabrielhalmenschlager/car-sales-website",
  },
  {
    title: "Sistema Biblioteca Senac",
    category: "Sistema de Gestão",
    description: "Sistema completo de gestão de biblioteca com controle de empréstimos",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    githubUrl: "https://github.com/gabrielhalmenschlager/sistemaBibliotecaSenac",
  },
  {
    title: "Controle de Ativos Senac",
    category: "Sistema de Gestão",
    description: "Sistema para controle e gestão de ativos empresariais",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    githubUrl: "https://github.com/gabrielhalmenschlager/controle-de-ativos-senac",
  },
  {
    title: "Sieg Gestão Escolar",
    category: "Sistema de Gestão",
    description: "Sistema completo de gestão escolar com CRUD para professores, alunos e cursos",
    images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
    githubUrl: "https://github.com/gabrielhalmenschlager/Senac.SiegGestaoEscolar",
  },
]

export function PortfolioSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index])
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

  const nextImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const project = projects[projectIndex]
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: (prev[projectIndex] || 0 + 1) % project.images.length
    }))
  }

  const prevImage = (projectIndex: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const project = projects[projectIndex]
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: prev[projectIndex] === 0 ? project.images.length - 1 : (prev[projectIndex] || 0) - 1
    }))
  }

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-accent/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Projetos Recentes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 ${
                visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.images[currentImageIndex[index] || 0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Navigation arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => prevImage(index, e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronLeft className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={(e) => nextImage(index, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full ${
                          (currentImageIndex[index] || 0) === imgIndex 
                            ? 'bg-foreground' 
                            : 'bg-foreground/50'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* GitHub button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, '_blank')
                  }}
                  className="absolute top-2 right-2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </button>
              </div>
              <CardContent className="p-6">
                <span className="text-sm text-muted-foreground">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
