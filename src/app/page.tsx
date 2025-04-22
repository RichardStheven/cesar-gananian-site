'use client'

import Link from 'next/link'

const links = [
  { href: '/montagem', label: 'Montagem' },
  { href: '/roteiro', label: 'Roteiro' },
  { href: '/direcao', label: 'Direção' },
  { href: '/sobre', label: 'Sobre' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-12 px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">
        Cesar Gananian
      </h1>

      <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg">
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
    </main>
  )
}