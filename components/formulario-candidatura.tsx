"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

const situacoes = [
  "Empregado CLT",
  "Autônomo",
  "Empreendedor",
  "Desempregado",
  "Outro",
]

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validatePhone(value: string): boolean {
  const digits = value.replace(/\D/g, "")
  return digits.length === 10 || digits.length === 11
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function FormularioCandidatura() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState({ email: "", whatsapp: "" })
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cidade: "",
    situacao: "",
    motivacao: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "whatsapp") {
      setForm({ ...form, whatsapp: formatPhone(value) })
      if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }))
    } else {
      setForm({ ...form, [name]: value })
      if (name === "email" && errors.email) setErrors((prev) => ({ ...prev, email: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")

    const emailValid = validateEmail(form.email)
    const phoneValid = validatePhone(form.whatsapp)

    if (!emailValid || !phoneValid) {
      setErrors({
        email: emailValid ? "" : "Digite um e-mail válido.",
        whatsapp: phoneValid ? "" : "Digite um número de WhatsApp brasileiro válido.",
      })
      return
    }

    setLoading(true)
    try {
      const res = await fetch(
        "https://n8nsemfila.iatom.site/webhook/consultoria/capcatcaoconsultores/apply",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      )
      if (!res.ok) throw new Error("Erro no envio")
      setSubmitted(true)
    } catch {
      setSubmitError("Ocorreu um erro ao enviar sua candidatura. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground/50 px-4 py-3 rounded-[12px] focus:outline-none focus:border-[#75A4C3]/60 focus:ring-1 focus:ring-[#75A4C3]/30 transition-colors duration-200"

  return (
    <section id="candidatura" className="bg-background py-16 md:py-20 px-4 md:px-10 border-t border-border">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs tracking-[0.3em] bg-gradient-to-r from-[#75A4C3] to-[#5170AC] bg-clip-text text-transparent uppercase font-bold mb-3">Candidatura</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground text-balance leading-tight mb-4">
            Pronto para dar o{" "}
            <span className="font-serif italic text-foreground/60">primeiro passo?</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Preencha o formulário abaixo. Nossa equipe vai analisar seu perfil e entrar em contato
            para uma conversa sobre a próxima etapa.
          </p>
        </div>

        {submitted ? (
          /* Success state */
          <div className="bg-card border border-border rounded-[24px] p-10 md:p-12 text-center flex flex-col items-center gap-5">
            <CheckCircle2 className="w-12 h-12 text-[#75A4C3]" />
            <h3 className="text-xl font-black text-foreground">Candidatura enviada!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Recebemos sua candidatura. Nossa equipe analisará seu perfil e entrará em contato
              em até <strong className="text-foreground/80">3 dias úteis.</strong>
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-[24px] p-6 md:p-8 flex flex-col gap-5">
            {/* Nome */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Nome completo
              </label>
              <input
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className={inputClass}
              />
            </div>

            {/* Email + Whatsapp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seuemail@email.com"
                  className={`${inputClass} ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-0.5">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  WhatsApp
                </label>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="(11) 99999-0000"
                  className={`${inputClass} ${errors.whatsapp ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
                />
                {errors.whatsapp && (
                  <span className="text-xs text-red-500 mt-0.5">{errors.whatsapp}</span>
                )}
              </div>
            </div>

            {/* Cidade + Situação */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Cidade e estado
                </label>
                <input
                  name="cidade"
                  required
                  value={form.cidade}
                  onChange={handleChange}
                  placeholder="São Paulo, SP"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                  Situação atual
                </label>
                <select
                  name="situacao"
                  required
                  value={form.situacao}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  {situacoes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Motivação */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Por que você quer se tornar consultor financeiro?
              </label>
              <textarea
                name="motivacao"
                required
                value={form.motivacao}
                onChange={handleChange}
                rows={4}
                placeholder="Conte um pouco sobre sua motivação..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            {submitError && (
              <p className="text-center text-xs text-red-500">{submitError}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#75A4C3] to-[#5170AC] text-white font-black text-sm tracking-widest uppercase py-4 rounded-full hover:opacity-90 disabled:opacity-60 transition-opacity duration-200 mt-1"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar candidatura
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Note */}
            <p className="text-center text-xs text-muted-foreground/50 leading-relaxed">
              Após o envio, nossa equipe analisará seu perfil e entrará em contato em até 3 dias úteis.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
