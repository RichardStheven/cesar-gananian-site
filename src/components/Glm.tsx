'use client'

import { useState } from 'react'
import Image from 'next/image'
import FaixaDecorativa from "../components/FaixaDecorativaM";
import FaixaDecorativaM from '../components/FaixaDecorativaM';

const videos = [
  {
    thumb: '/imagens/va.jpg',
    video: '/imagens/va.mp4',
    titulo: 'Violão Athayde',
    descricao: `Direção: Cesar Gananian`,
  },
  {
    thumb: '/imagens/es.jpg',
    video: '/imagens/es.mp4',
    titulo: 'Elza Soares - O Que Se Cala',
    descricao: `Produção: Ana Lisboa
Direção : Ana Julia Travia e Cesar Gananian
Montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/tz.jpg',
    video: '/imagens/tz.mp4',
    titulo: 'Triz - Elevação Mental',
    descricao: `Produção: Ana Lisboa
Direção e montagem: Cesar Gananian
`,
  },
  {
    thumb: '/imagens/SA.jpg',
    video: '/imagens/SVA.mp4',
    titulo: 'O som vem assim (TRIZ)',
    descricao: `Direção : Cesar Gananian
`,
  },
  {
    thumb: '/imagens/tz1.jpg',
    video: '/imagens/tz1.mp4',
    titulo: 'Pra Berlin (Triz)',
    descricao: `Direção : Cesar Gananian
`,
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
    <section className="w-full px-6 py-24 bg-black text-white">
      <FaixaDecorativaM />
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