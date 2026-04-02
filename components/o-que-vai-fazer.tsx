"use client"

import { Building2, BookOpen, Award, ArrowRight } from "lucide-react"

const points = [
  {
    icon: Building2,
    title: "Sua carteira, seu negócio",
    description: "Você atende, acompanha e cresce. Com autonomia total sobre sua atuação.",
  },
  {
    icon: BookOpen,
    title: "Metodologia pronta",
    description: "Processo de atendimento estruturado, material de apoio e formação completa antes de começar.",
  },
  {
    icon: Award,
    title: "Marca e credibilidade",
    description: "Você chega ao cliente como Consultor ATOM, com tudo que isso representa.",
  },
]

export function OQueVaiFazer() {
  const scrollToForm = () => {
    document.getElementById("candidatura")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left  Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance leading-tight mb-5">
              Você constrói.{" "}
              <span className="font-serif italic text-foreground/60">A ATOM estrutura.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
              Como consultor, você constrói sua carteira de clientes e realiza as consultorias. A ATOM entra com a formação completa e toda a estrutura para você atender clientes reais e alcançar resultados lucrativos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              É o modelo ideal para quem quer{" "}
              <strong className="text-foreground/80">empreender sem abrir uma empresa do zero.</strong>
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#75A4C3] to-[#5170AC] text-white text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Quero fazer parte
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right  Points */}
          <div className="flex flex-col gap-3">
            {points.map((point, i) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="flex items-start gap-4 bg-card border border-border rounded-[24px] p-5 md:p-6">
                  <div className="shrink-0 w-10 h-10 bg-background rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#75A4C3]" />
                  </div>
                  <div className="pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                      <h3 className="text-sm font-bold text-foreground">{point.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
