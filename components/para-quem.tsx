import { Briefcase, TrendingUp, Users } from "lucide-react"

const cards = [
  {
    icon: Briefcase,
    title: "Você quer uma renda extra real",
    description:
      "Trabalha, mas sente que seu tempo livre poderia gerar mais. Quer uma atividade paralela que pague bem e faça sentido  não apenas mais uma \"renda extra qualquer\".",
  },
  {
    icon: TrendingUp,
    title: "Você quer iniciar uma carreira em finanças",
    description:
      "Sempre teve interesse em finanças pessoais, mas nunca teve um caminho claro de entrada. A ATOM oferece formação completa e clientes reais desde o início.",
  },
  {
    icon: Users,
    title: "Você já trabalha com pessoas e quer mais",
    description:
      "Vendas, RH, coaching, educação  você sabe se comunicar, criar vínculo e conduzir conversas difíceis. Esse é o perfil que mais se destaca na consultoria financeira.",
  },
]

export function ParaQuem() {
  return (
    <section id="jornada" className="bg-background py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Perfil ideal</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance">
            Essa oportunidade é pra você{" "}
            <span className="font-serif italic text-foreground/70">se...</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm">
            Para cada pessoa, existe um momento. A ATOM identifica potencial onde outros veem falta de experiência.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-card border border-border rounded-[24px] p-6 md:p-7 flex flex-col gap-4 hover:border-[#75A4C3]/40 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#75A4C3]" />
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
