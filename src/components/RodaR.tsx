'use client'

import Icon from "./Icon";
import BioR from "./BioR";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function RodapeCesar() {
  return (
    <footer className="w-full bg-black text-white mt-1 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 py-10 px-6">
        {/* LINHA DE CONTATO PRINCIPAL */}
        <p className="text-base text-white/80">Entre em contato</p>

        {/* ÍCONES CENTRAIS ATUALIZADOS */}
        <div className="flex gap-8 text-[#dad1a0] text-2xl">
          <a href="https://www.instagram.com/cesargananian" target="_blank" rel="noopener" className="hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5511996918254" target="_blank" rel="noopener" className="hover:scale-110 transition">
            <FaWhatsapp />
          </a>
          <a href="mailto:cesargananian@hotmail.com" target="_blank" rel="noopener" className="hover:scale-110 transition">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/cesar-gananian-b44897182/" target="_blank" rel="noopener" className="hover:scale-110 transition">
            <FaLinkedin />
          </a>
        </div>

        {/* BOTÃO DA BIOGRAFIA */}
        <BioR />

        {/* DIVISOR E CRÉDITO */}
        <div className="w-full h-px bg-white/10 mt-6" />
        <p className="text-xs text-white/40">Criado por Brava Comunicação • © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}