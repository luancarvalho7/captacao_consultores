"use client"

const items = [
  "SELEÇÃO ABERTA",
  "VAGAS LIMITADAS",
  "FORMAÇÃO ATOM",
  "PLANO DE CARREIRA",
  "SEM TETO DE GANHOS",
  "METODOLOGIA PRÓPRIA",
]

export function Ticker() {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className="bg-foreground text-background overflow-hidden py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4 text-xs font-bold tracking-[0.25em] uppercase">
            {item}
            <span className="text-background/30 text-lg leading-none">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
