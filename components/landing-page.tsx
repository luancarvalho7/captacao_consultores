"use client"

import { useState } from "react"
import {
  Clock, ArrowRight, User, TrendingUp, MapPin, DollarSign,
  Briefcase, Users, Building2, BookOpen, Award,
  BarChart3, Gift, Brain, LineChart, ClipboardList, Network,
  CheckCircle2, Loader2,
} from "lucide-react"

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroChips = [
  { icon: User, label: "Perfil" },
  { icon: TrendingUp, label: "Plano de Carreira" },
  { icon: MapPin, label: "Autonomia" },
  { icon: DollarSign, label: "Ganhos" },
]

const paraQuemCards = [
  {
    icon: Briefcase,
    title: "Você quer uma renda extra real",
    description: "Trabalha, mas sente que seu tempo livre poderia gerar mais. Quer uma atividade paralela que pague bem e faça sentido  não apenas mais uma renda extra qualquer.",
  },
  {
    icon: TrendingUp,
    title: "Você quer iniciar uma carreira em finanças",
    description: "Sempre teve interesse em finanças pessoais, mas nunca teve um caminho claro de entrada. A ATOM oferece formação completa e clientes reais desde o início.",
  },
  {
    icon: Users,
    title: "Você já trabalha com pessoas e quer mais",
    description: "Vendas, RH, coaching, educação  você sabe se comunicar, criar vínculo e conduzir conversas difíceis. Esse é o perfil que mais se destaca na consultoria financeira.",
  },
]

const oQuePoints = [
  { icon: Building2, title: "Sua carteira, seu negócio", description: "Você atende, acompanha e cresce. Com autonomia total sobre sua atuação." },
  { icon: BookOpen, title: "Metodologia pronta", description: "Processo de atendimento estruturado, material de apoio e formação completa antes de começar." },
  { icon: Award, title: "Marca e credibilidade", description: "Você chega ao cliente como Consultor ATOM, com tudo que isso representa." },
]

const remuneracaoPoints = [
  { icon: TrendingUp, title: "Sem teto de ganhos", description: "Sua renda cresce com sua carteira de clientes." },
  { icon: BarChart3, title: "Plano de carreira estruturado", description: "De consultor júnior a líder de equipe, cada etapa tem critérios claros de progressão." },
  { icon: Gift, title: "Bônus por indicação", description: "Consultores que formam novos consultores são recompensados por isso." },
]

const formacaoSteps = [
  { icon: Brain, number: "01", title: "Mentalidade e postura profissional", description: "Como se apresentar, criar vínculo e conduzir conversas sobre dinheiro com empatia e autoridade." },
  { icon: LineChart, number: "02", title: "Análise financeira na prática", description: "Fluxo de caixa, patrimônio, dívidas e investimentos  tudo que você precisa saber para entregar um diagnóstico real." },
  { icon: ClipboardList, number: "03", title: "Metodologia de atendimento", description: "O processo ATOM do início ao fim. Você aprende fazendo, com casos práticos supervisionados." },
  { icon: Network, number: "04", title: "Captação e construção de carteira", description: "Como transformar sua rede em clientes reais, sem abordagem forçada ou script engessado." },
]

const tickerItems = ["SELEÇÃO ABERTA", "VAGAS LIMITADAS", "FORMAÇÃO ATOM", "PLANO DE CARREIRA", "SEM TETO DE GANHOS", "METODOLOGIA PRÓPRIA"]
const situacoes = ["Empregado CLT", "Autônomo", "Empreendedor", "Desempregado", "Outro"]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const inputClass =
  "w-full bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground/50 px-4 py-3 rounded-[12px] focus:outline-none focus:border-[#75A4C3]/60 focus:ring-1 focus:ring-[#75A4C3]/30 transition-colors duration-200"

// ─── SECTIONS ────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0E0F14] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex items-center gap-2 text-xs text-foreground/90 truncate">
              <img
                src="https://www.atomconsultoriafinanceira.com.br/atom_logo.webp"
                alt="ATOM Logo"
                className="h-4 shrink-0"
              />
              <span className="text-muted-foreground shrink-0">|</span>
              <span className="hidden sm:inline truncate">Seleção de Consultores  </span>
              <span className="bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent font-semibold italic shrink-0">Vagas limitadas</span>
            </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="truncate">Candidaturas abertas por tempo limitado</span>
          </div>
        </div>
        <button
          onClick={() => scrollTo("candidatura")}
          className="shrink-0 bg-foreground text-background text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Candidatar-se
        </button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden pt-12"
      style={{ backgroundColor: "#0E0F14" }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/ending.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(14,15,20,0.72)" }}
        />
        {/* Bottom fade to black — covers headline + bottom area */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "70%", background: "linear-gradient(to top, #0E0F14 45%, transparent)" }}
        />
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, #0E0F14, transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pb-16 md:pb-24">
        {/* Logo + Badge row */}
        <div className="flex items-center gap-5 mb-8">
          <img
            src="https://www.atomconsultoriafinanceira.com.br/atom_logo.webp"
            alt="ATOM Logo"
            className="h-12"
          />
          <div className="hidden md:inline-flex items-center border border-white/20 bg-white/5 text-white/55 text-[11px] tracking-[0.18em] uppercase font-sans px-4 py-1.5 rounded-full">
            Formação de Consultores Financeiros
          </div>
        </div>

        {/* Full-width Headline */}
        <h1 className="font-serif font-normal text-[2.6rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] leading-[1.05] text-white w-full mb-10">
          Ajude pessoas a transformarem a relação com o dinheiro{" "}
          <span className="italic" style={{ color: "#A48B6D" }}>
            e construa uma carreira sólida
          </span>{" "}
          fazendo isso.
        </h1>

        {/* Bottom row: subtitle left, CTAs right */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-white/55 leading-relaxed flex-1 max-w-xl">
            A ATOM forma e certifica consultores financeiros com metodologia própria,
            remuneração competitiva e plano de carreira estruturado.{" "}
            <strong className="text-white/75 font-semibold">
              Experiência com pessoas é mais importante do que experiência com finanças.
            </strong>
          </p>

          {/* CTAs + Urgency */}
          <div className="flex flex-col gap-3 md:shrink-0">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("candidatura")}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0E0F14] font-sans font-black text-[12px] tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:bg-white/90 transition-opacity duration-200"
              >
                Quero me candidatar
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("jornada")}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/65 font-sans font-semibold text-[12px] tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
              >
                Entender como funciona
              </button>
            </div>
            <p className="font-sans text-sm text-white/40">
              Vagas extremamente limitadas. Candidaturas encerram em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems]
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

function ParaQuem() {
  return (
    <section id="jornada" className="bg-white py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Perfil ideal</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-[#1A1B21] text-balance">
            Essa oportunidade é pra você{" "}
            <span className="italic" style={{ color: "#A48B6D" }}>se...</span>
          </h2>
          <p className="mt-4 text-[#5A5B63] max-w-xl mx-auto leading-relaxed text-base">
            Para cada pessoa, existe um momento. A ATOM identifica potencial onde outros veem falta de experiência.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paraQuemCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="bg-[#F5F5F7] border border-[#E5E5E7] rounded-[24px] p-6 md:p-7 flex flex-col gap-4 hover:border-[#75A4C3]/60 transition-colors duration-300">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-[#5170AC]" />
                </div>
                <h3 className="text-base font-bold text-[#1A1B21] leading-snug">{card.title}</h3>
                <p className="text-sm text-[#5A5B63] leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OQueVaiFazer() {
  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">O que você vai fazer</p>
            <h2 className="font-serif font-normal text-4xl md:text-5xl text-foreground text-balance leading-tight mb-5">
              Você constrói.{" "}
              <span className="italic" style={{ color: "#A48B6D" }}>A ATOM estrutura.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3 text-base">
              Como Consultor ATOM, você constrói sua carteira de clientes e conduz todo o processo de consultoria
              com a metodologia da empresa. A ATOM entra com a formação completa, o processo estruturado e a
              estrutura para você atender com profissionalismo e entregar resultado real.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              É o modelo ideal para quem quer{" "}
              <strong className="text-foreground/80">empreender sem abrir uma empresa do zero.</strong>
            </p>
            <button
              onClick={() => scrollTo("candidatura")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#75A4C3] to-[#5170AC] text-[#0E0F14] text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Quero fazer parte
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {oQuePoints.map((point, i) => {
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

function Remuneracao() {
  return (
    <section className="bg-background py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Remuneração</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-foreground text-balance">
            Remuneração competitiva,{" "}
            <span className="italic" style={{ color: "#A48B6D" }}>carreira com futuro</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed text-base">
            A ATOM oferece um modelo de remuneração variável baseado na sua carteira de clientes  sem teto de ganhos.
            Os detalhes completos são apresentados na etapa de seleção.
          </p>
        </div>
        <div className="rounded-[24px] overflow-hidden border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {remuneracaoPoints.map((point) => {
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
        <p className="text-center text-xs text-muted-foreground/50">
          * Os valores e estrutura completa de remuneração são apresentados durante o processo seletivo.
        </p>
      </div>
    </section>
  )
}

function Formacao() {
  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Formação</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Você não começa{" "}
            <span className="italic" style={{ color: "#A48B6D" }}>sozinho.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Antes de atender seu primeiro cliente, você passa pela Formação ATOM  um treinamento completo que cobre
            desde a mentalidade do consultor financeiro até a condução de cada etapa do atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {formacaoSteps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="bg-card border border-border rounded-[24px] p-6 md:p-7 flex gap-5 hover:border-[#75A4C3]/30 transition-colors duration-300">
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
        <div className="mt-8 md:mt-10 pt-7 border-t border-border text-center">
          <p className="text-sm font-serif font-normal italic" style={{ color: "#A48B6D" }}>
            "A formação é o seu ponto de partida. O crescimento é seu."
          </p>
        </div>
      </div>
    </section>
  )
}

function FormularioCandidatura() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "", cidade: "", situacao: "", motivacao: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="candidatura" className="bg-background py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Candidatura</p>
          <h2 className="font-serif font-normal text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            Pronto para dar o{" "}
            <span className="italic" style={{ color: "#A48B6D" }}>primeiro passo?</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Preencha o formulário abaixo. Nossa equipe vai analisar seu perfil e entrar em contato para uma conversa sobre a próxima etapa.
          </p>
        </div>

        {submitted ? (
          <div className="bg-card border border-border rounded-[24px] p-10 md:p-12 text-center flex flex-col items-center gap-5">
            <CheckCircle2 className="w-12 h-12 text-[#75A4C3]" />
            <h3 className="font-serif font-normal text-xl text-foreground">Candidatura enviada!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Recebemos sua candidatura. Nossa equipe analisará seu perfil e entrará em contato em até{" "}
              <strong className="text-foreground/80">3 dias úteis.</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-[24px] p-6 md:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Nome completo</label>
              <input name="nome" required value={form.nome} onChange={handleChange} placeholder="Seu nome" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">E-mail</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="seuemail@email.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">WhatsApp</label>
                <input name="whatsapp" type="tel" required value={form.whatsapp} onChange={handleChange} placeholder="(11) 99999-0000" className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Cidade e estado</label>
                <input name="cidade" required value={form.cidade} onChange={handleChange} placeholder="São Paulo, SP" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Situação atual</label>
                <select name="situacao" required value={form.situacao} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="" disabled>Selecione...</option>
                  {situacoes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Por que você quer se tornar consultor financeiro?</label>
              <textarea name="motivacao" required value={form.motivacao} onChange={handleChange} rows={4} placeholder="Conte um pouco sobre sua motivação..." className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#75A4C3] to-[#5170AC] text-[#0E0F14] font-black text-sm tracking-widest uppercase py-4 rounded-full hover:opacity-90 disabled:opacity-60 transition-opacity duration-200 mt-1"
            >
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" />Enviando...</>) : (<>Enviar candidatura<ArrowRight className="w-4 h-4" /></>)}
            </button>
            <p className="text-center text-xs text-muted-foreground/50 leading-relaxed">
              Após o envio, nossa equipe analisará seu perfil e entrará em contato em até 3 dias úteis.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0E0F14] border-t border-border py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <img
            src="https://www.atomconsultoriafinanceira.com.br/atom_logo.webp"
            alt="ATOM Logo"
            className="h-7 mb-1"
          />
          <p className="text-xs text-muted-foreground/40">Formação de Especialistas Financeiros</p>
        </div>
        <p className="text-xs text-muted-foreground/40">&copy; {new Date().getFullYear()} ATOM. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export function LandingPage() {
  return (
    <main>
      <TopBar />
      <Hero />
      <Ticker />
      <ParaQuem />
      <OQueVaiFazer />
      <Remuneracao />
      <Formacao />
      <FormularioCandidatura />
      <Footer />
    </main>
  )
}
