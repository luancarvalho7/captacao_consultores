"use client"

import { Clock } from "lucide-react"

export function TopBar() {
  const scrollToForm = () => {
    document.getElementById("candidatura")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.07_0_0)] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Left: notices */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-2 text-xs text-foreground/90 truncate">
            <span className="font-semibold tracking-wide shrink-0">            <img
              src="https://www.atomconsultoriafinanceira.com.br/atom_logo.webp"
              alt="ATOM Logo"
              className="h-10 mb-2"
            /></span>
            <span className="text-muted-foreground shrink-0">|</span>
            <span className="hidden sm:inline truncate">Seleção de Consultores  </span>
            <span className="bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent font-semibold italic shrink-0">Vagas limitadas</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="truncate">Candidaturas abertas por tempo limitado</span>
          </div>
        </div>

        {/* Right: CTA */}
        <button
          onClick={scrollToForm}
          className="shrink-0 bg-foreground text-background text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Candidatar-se
        </button>
      </div>
    </div>
  )
}
