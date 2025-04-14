'use client'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header className="w-full px-6 py-6 flex justify-between items-center bg-black text-[#d1cfa3] tracking-widest text-25px uppercase z-50 relative">
        <div className="font-serif font-semibold">Cesar Gananian</div>

        <div className="hidden md:flex flex-col items-center text-sm uppercase tracking-widest">
  <span>montador | assistente de montagem | editor | assistant editor | roteirista</span>
  <div className="border-t border-[#d1cfa3] w-full mt-1" />
</div>


        {/* Botão Hamburguer */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 w-6 h-6 flex flex-col justify-between items-center"
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-[#d1cfa3] transition-transform ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#d1cfa3] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#d1cfa3] transition-transform ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </header>

      {/* MENU MODAL FULLSCREEN */}
      {menuOpen && (
  <div className="fixed inset-0 bg-black/95 text-[#d1cfa3] flex flex-col items-center justify-center z-40 text-xl tracking-widest uppercase space-y-6">
    <a href="/montagem" onClick={() => setMenuOpen(false)}>Montagem</a>
    <a href="/direcao" onClick={() => setMenuOpen(false)}>Direção</a>
    <a href="/roteiro" onClick={() => setMenuOpen(false)}>Roteiro</a>
    <a href="/galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
    <a href="/sobre" onClick={() => setMenuOpen(false)}>About Me</a>

    <div className="flex space-x-6 mt-10 text-lg lowercase">
      <a href="https://www.instagram.com/cesargananian/" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.imdb.com/pt/name/nm3758500/" target="_blank" rel="noopener noreferrer">IMDb</a>
      <a href="https://www.youtube.com/user/cesargananian" target="_blank" rel="noopener noreferrer">YouTube</a>
    </div>
  </div>
)}
    </>
  )
}
