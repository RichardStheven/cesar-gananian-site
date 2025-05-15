'use client'

import { useState } from 'react'
import Image from 'next/image'
import FaixaDecorativa from "../components/FaixaDecorativaP";
import FaixaDecorativaP from '../components/FaixaDecorativaP';

const videos = [
  {
    thumb: '/imagens/ng1.jpg',
    video: '/imagens/ng1.mp4',
    titulo: 'Nossa Gente/ Ep 01 /Banco do Brasil',
    descricao: `Produção: Vudoo Filmes
Direção: Luciano Cian
Montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/ng2.jpg',
    video: '/imagens/ng2.mp4',
    titulo: 'Nossa Gente/ Ep 02 /Banco do Brasil',
    descricao: `Produção: Vudoo Filmes
Direção: Luciano Cian
Montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/ng3.jpg',
    video: '/imagens/ng3.mp4',
    titulo: 'Nossa Gente/ Ep 03 /Banco do Brasil',
    descricao: `Produção: Vudoo Filmes
Direção: Luciano Cian
Montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/lp1.jpeg',
    video: '/imagens/ofilmeperdido.mp4',
    titulo: 'O Fime Perdido/ Companhia das Letras',
    descricao: `Produção: Companhia das Letras
Direção e montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/va.jpg',
    video: '/imagens/va.mp4',
    titulo: 'Rosa/ Lutheria Athayde',
    descricao: `Direção e montagem: Cesar Gananian`,
  },

  {
    thumb: '/imagens/sp.jpg',
    video: '/imagens/sp.mp4',
    titulo: 'A Folha Que Pensa',
    descricao: `Produção: Folha de São Paulo
Direção : João Wainer
Montagem: Cesar Gananian`,
  },
]

export default function GaleriaCarrossel() {
  const [index, setIndex] = useState(0)
  const [aberto, setAberto] = useState(false)

  const abrirModal = (i: number) => {
    setIndex(i)
    setAberto(true)
  }

  const atual = videos[index]

  return (
    <section className="w-full px-6 bg-black text-white">
      <FaixaDecorativaP />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {videos.map((item, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => abrirModal(i)}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={item.thumb}
                alt={item.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-light tracking-wide opacity-70 group-hover:opacity-100 transition">
                {item.titulo}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {aberto && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="w-full max-w-6xl bg-black rounded shadow-lg flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-2/3 aspect-video">
              <video
                src={atual.video}
                controls
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col">
              <div className="mt-auto mb-auto">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {atual.titulo}
                </h2>
                <p className="whitespace-pre-line text-sm md:text-base leading-relaxed text-white/90">
                  {atual.descricao}
                </p>
              </div>
              <button
                className="text-sm mt-6 text-[#dad1a0] underline self-start"
                onClick={() => setAberto(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}