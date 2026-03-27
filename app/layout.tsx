import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Seleção de Consultores ATOM',
  description: 'A ATOM forma e certifica futuros consultores financeiros com metodologia própria, remuneração competitiva e plano de carreira estruturado.',
  generator: 'v0.app',
  icons: {
    icon: 'https://www.atomconsultoriafinanceira.com.br/atom_logo.webp',
    apple: 'https://www.atomconsultoriafinanceira.com.br/atom_logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
