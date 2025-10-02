"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const scrollRaf = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current)
      scrollRaf.current = requestAnimationFrame(() => {
        const sectionIds = ["services", "portfolio", "about", "contact"]
        let current: string = ""
        let minDistance = Infinity
        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const distance = Math.abs(rect.top)
          if (distance < minDistance) {
            minDistance = distance
            current = id
          }
        }
        setActiveSection(current)
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md"
            aria-label="Ir para o topo"
          >
            <Image
              src="/placeholder-logo1.png"
              alt="ZuHa Software Logo"
              width={90}
              height={90}
              className="w-18 h-18 md:w-20 md:h-20 select-none"
            />
          </button>

          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Navegação principal">
            <HeaderLink label="Serviços" active={activeSection === "services"} onClick={() => scrollToSection("services")} />
            <HeaderLink label="Portfólio" active={activeSection === "portfolio"} onClick={() => scrollToSection("portfolio")} />
            <HeaderLink label="Sobre Nós" active={activeSection === "about"} onClick={() => scrollToSection("about")} />
            <HeaderLink label="Contato" active={activeSection === "contact"} onClick={() => scrollToSection("contact")} />
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-md hover:shadow-lg transition-shadow"
            >
              Solicite um Orçamento
            </Button>
          </div>

          <button
            className="md:hidden text-foreground p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2" role="navigation" aria-label="Menu móvel">
            <MobileLink label="Serviços" active={activeSection === "services"} onClick={() => scrollToSection("services")} />
            <MobileLink label="Portfólio" active={activeSection === "portfolio"} onClick={() => scrollToSection("portfolio")} />
            <MobileLink label="Sobre Nós" active={activeSection === "about"} onClick={() => scrollToSection("about")} />
            <MobileLink label="Contato" active={activeSection === "contact"} onClick={() => scrollToSection("contact")} />
            <Button onClick={() => scrollToSection("contact")} className="mt-2 w-full bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              Solicite um Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

type HeaderLinkProps = {
  label: string
  active?: boolean
  onClick: () => void
}

function HeaderLink({ label, active, onClick }: HeaderLinkProps) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative px-1 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <span>{label}</span>
      <span
        className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
          active ? "bg-primary opacity-100" : "bg-primary/60 opacity-0 group-hover:opacity-100"
        }`}
      />
    </button>
  )
}

function MobileLink({ label, active, onClick }: HeaderLinkProps) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`text-left py-2 px-1 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
        active ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  )
}
