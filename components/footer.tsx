"use client"

export function Footer() {
  return (
    <footer className="bg-[#0E0F14] border-t border-border py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <img
            src="https://www.atomconsultoriafinanceira.com.br/atom_logo.webp"
            alt="ATOM Logo"
            className="h-10 mb-2"
          />
          <p className="text-xs text-muted-foreground/40 mt-1">Formação de Especialistas Financeiros</p>
        </div>
        <p className="text-xs text-muted-foreground/40">
          &copy; {new Date().getFullYear()} ATOM. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
