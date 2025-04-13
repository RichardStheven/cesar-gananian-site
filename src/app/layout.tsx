import Header from '../components/Header'
import '../styles/globals.css'
import { Playfair_Display } from 'next/font/google'

// ⏬ Carregando a fonte Playfair Display
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Cesar Gananian',
  description: 'Portfólio de Montagem, Roteiro, Direção e Galeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={playfair.variable}>
<body className={`${playfair.variable} bg-black text-[#dad1a0] w-full h-full overflow-x-hidden`}>
  <Header />
  <main className="min-h-screen w-full">{children}</main>
</body>

    </html>
  )
}
