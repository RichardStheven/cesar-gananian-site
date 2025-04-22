'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/montagem', label: 'Montagem' },
  { href: '/roteiro', label: 'Roteiro' },
  { href: '/direcao', label: 'Direção' },
  { href: '/sobre', label: 'Sobre' },
]

export default function MenuPrincipal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-6 left-6 z-50">
      {/* Botão do menu */}
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 bg-white/20 hover:bg-[#dad1a0] transition-colors duration-300 rounded-sm"
        aria-label="Abrir menu"
      />

      {/* Menu aberto */}
      {open && (
        <div className="mt-4 bg-black/90 backdrop-blur-sm text-white text-sm rounded shadow-lg py-3 px-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#dad1a0] transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
