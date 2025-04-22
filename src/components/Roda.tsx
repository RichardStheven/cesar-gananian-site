'use client'

import Icon from "./Icon";

export default function RodapeCesar() {
  return (
    <footer className="w-full bg-black text-white mt-1 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 py-10 px-6">
        {/* LINHA DE CONTATO PRINCIPAL */}
        <p className="text-base text-white/80">Entre em contato</p>

        {/* ÍCONES CENTRAIS */}
        <Icon />

        {/* DIVISOR E CRÉDITO */}
        <div className="w-full h-px bg-white/10 mt-6" />
        <p className="text-xs text-white/40">Criado por Brava Comunicação • © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}