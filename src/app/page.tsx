'use client'

import Link from 'next/link'

const links = [
  { href: '/montagem', label: 'Montagem' },
  { href: '/roteiro', label: 'Roteiro' },
  { href: '/direcao', label: 'Direção' },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center gap-12 px-6 py-20 overflow-hidden">
      {/* VIDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      >
        <source src="/imagens/hf.mp4" type="video/mp4" />
      </video>

      {/* CONTEÚDO SOBRE O VÍDEO */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold">Cesar Gananian</h1>

        <nav className="mt-10 flex flex-col md:flex-row gap-4 md:gap-8 text-lg justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#dad1a0] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}