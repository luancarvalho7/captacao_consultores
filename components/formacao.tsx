import { Brain, LineChart, ClipboardList, Network } from "lucide-react"

const steps = [
  {
    icon: Brain,
    number: "01",
    title: "Mentalidade e postura profissional",
    description:
      "Como se apresentar, criar vínculo e conduzir conversas sobre dinheiro com empatia e autoridade.",
  },
  {
    icon: LineChart,
    number: "02",
    title: "Análise financeira na prática",
    description:
      "Fluxo de caixa, patrimônio, dívidas e investimentos. Tudo que você precisa saber para entregar um diagnóstico profissional.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Metodologia de atendimento",
    description:
      "O processo ATOM do início ao fim. Você aprende fazendo, com casos práticos supervisionados.",
  },
  {
    icon: Network,
    number: "04",
    title: "Captação e construção de carteira",
    description:
      "Como transformar sua rede em clientes reais, sem abordagem forçada ou script engessado.",
  },
]

export function Formacao() {
  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance leading-tight mb-4">
            Você não começa{" "}
            <span className="font-serif italic text-foreground/60">sozinho.</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Antes de atender seu primeiro cliente, você passa pela Formação ATOM, um treinamento completo que vai da mentalidade do consultor financeiro até a condução de cada etapa dos atendimentos.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="bg-card border border-border rounded-[24px] p-6 md:p-7 flex gap-5 hover:border-[#75A4C3]/30 transition-colors duration-300"
              >
                <div className="shrink-0">
                  <div className="w-11 h-11 bg-background rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#75A4C3]" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">{step.number}</p>
                  <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing line */}
        <div className="mt-8 md:mt-10 pt-7 border-t border-border text-center">>
        </div>
      </div>
    </section>
  )
}
