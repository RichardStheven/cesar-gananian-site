'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaixaDecorativa from '../components/FaixaDecorativa';

const trabalhos = [
  {
    thumb: '/imagens/Bandida-o-filme.webp',
    video: '/imagens/bandida.mp4',
    label: 'Bandida/ Paris Filmes e Netflix',
    descricao: `Produção: Paris Filmes / Netflix\nDireção: João Wainer\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/ajaula1.jpeg',
    video: '/imagens/ajaula.mp4',
    label: 'A JAULA / Star+',
    descricao: `Produção: TX Filmes / Buena Vista International\nDireção: João Wainer\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/rac1.jpeg',
    video: '/imagens/helipa.mp4',
    label: 'Helipa/ MTV',
    descricao: `Produção: Griffa Filmes\nDireção: Karol Maia\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/cartas-marcadas.jpg',
    video: '/imagens/CM11.mp4',
    label: 'Cartas Marcadas/ Discovery Brasil',
    descricao: `Produção: Discovery Brasil\nDireção: Karol Maia\nMontagem: Cesar Gananian`,
  },
];

export default function GaleriaNova() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <div className="px-6 py-10">
      <FaixaDecorativa />

      {/* GRID ou MODAL */}
      <AnimatePresence>
        {ativo === null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {trabalhos.map((item, i) => (
              <div
                key={i}
                className="relative bg-black rounded overflow-hidden shadow cursor-pointer"
                onClick={() => setAtivo(i)}
              >
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="aspect-square w-full object-cover hover:scale-105 transition-transform"
                />
                <p className="p-2 text-center text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black flex flex-col md:flex-row z-50 p-6 overflow-y-auto"
          >
            {/* PLAYER */}
            <div className="w-full md:w-2/3 flex items-center justify-center">
              <video
                src={trabalhos[ativo].video}
                controls
                className="aspect-video w-full max-w-4xl object-cover"
                poster={trabalhos[ativo].thumb}
              />
            </div>

            {/* TEXTO */}
            <div className="w-full md:w-1/3 flex flex-col justify-center p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4">{trabalhos[ativo].label}</h2>
              <p className="whitespace-pre-line text-sm leading-relaxed">{trabalhos[ativo].descricao}</p>

              <button
                onClick={() => setAtivo(null)}
                className="mt-8 text-sm text-[#dad1a0] underline self-start"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}