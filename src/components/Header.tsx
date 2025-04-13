'use client'

export default function Header() {
  return (
    <header className="w-full px-6 py-8 flex justify-between items-center bg-black text-[#d1cfa3] tracking-widest text-lg uppercase">
      {/* Nome do site (à esquerda) */}
      <div className="font-serif font-semibold">
        Cesar Gananian
      </div>

      {/* Ícone do menu (à direita) */}
      <button aria-label="Menu" className="space-y-1">
        <div className="w-6 h-[2px] bg-[#d1cfa3]" />
        <div className="w-6 h-[2px] bg-[#290eb0]" />
      </button>
    </header>
  )
}
