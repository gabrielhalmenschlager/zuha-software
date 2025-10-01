"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Desenvolvimento Web",
    description: "Plataforma completa de e-commerce com painel administrativo",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    title: "SaaS Dashboard",
    category: "Aplicação Web",
    description: "Dashboard analítico para gestão de dados empresariais",
    image: "/analytics-dashboard-dark.jpg",
  },
  {
    title: "Landing Page Corporativa",
    category: "Landing Page",
    description: "Landing page de alta conversão para startup de tecnologia",
    image: "/corporate-landing-page.jpg",
  },
  {
    title: "App Mobile Banking",
    category: "Desenvolvimento Mobile",
    description: "Aplicativo de banco digital com design moderno",
    image: "/mobile-banking-app.png",
  },
  {
    title: "Portal de Notícias",
    category: "CMS",
    description: "Sistema de gerenciamento de conteúdo para portal de notícias",
    image: "/news-portal-website.png",
  },
  {
    title: "Marketplace",
    category: "Plataforma",
    description: "Marketplace conectando prestadores de serviço e clientes",
    image: "/marketplace-platform.jpg",
  },
]

export function PortfolioSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
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
              className={`group overflow-hidden hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 cursor-pointer ${
                visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground" />
                </div>
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
