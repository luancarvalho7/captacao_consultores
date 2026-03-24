import { TrendingUp, BarChart3, Gift } from "lucide-react"

const points = [
  {
    icon: TrendingUp,
    title: "Sem teto de ganhos",
    description: "Sua renda cresce com sua carteira de clientes.",
  },
  {
    icon: BarChart3,
    title: "Plano de carreira estruturado",
    description: "De consultor júnior a líder de equipe, cada etapa tem critérios claros de progressão.",
  },
  {
    icon: Gift,
    title: "Bônus por indicação",
    description: "Consultores que formam novos consultores são recompensados por isso.",
  },
]

export function Remuneracao() {
  return (
    <section className="bg-background py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Remuneração</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
            Remuneração competitiva,{" "}
            <span className="font-serif italic text-foreground/60">carreira com futuro</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm">
            A ATOM oferece um modelo de remuneração variável baseado na sua carteira de clientes  sem teto de ganhos.
            Os detalhes completos são apresentados na etapa de seleção.
          </p>
        </div>

        {/* Connected cards  outer wrapper gets 24px corners, inner cards are flush */}
        <div className="rounded-[24px] overflow-hidden border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {points.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.title} className="bg-card p-7 md:p-8 flex flex-col items-center gap-3 text-center">
                  <div className="w-11 h-11 bg-secondary rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#75A4C3]" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground/50">
          * Os valores e estrutura completa de remuneração são apresentados durante o processo seletivo.
        </p>
      </div>
    </section>
  )
}
