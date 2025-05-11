'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaixaDecorativa from '../components/FaixaDecorativa';

const trabalhos = [
  {
    thumb: '/imagens/contos.jpg',
    video: '/imagens/contos.mp4',
    label: 'Cantos De Um Livro Sagrado / Premio É Tudo Verdade',
    descricao: `Melhor Curta Brasileiro no Festival É Tudo Verdade\nSeleção Oficial no Rotterdam Film Festival\nDireção: Cassiana Der Haroutiounian & Cesar Gananian\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/FS.jpg',
    video: '/imagens/FS.mp4',
    label: 'Filme Som',
    descricao: `Direção : Cesar Gananian e Alexandre Moura
    Premio Itamaraty no Festival Internacional de Curtas de SP.
Seleção Oficial Clermont Ferrand `,
  },
  {
    thumb: '/imagens/ot1.jpeg',
    video: '/imagens/outrostempos.mp4',
    label: 'Outros Tempos / MAX',
    descricao: `Produção: Pródigo/ HBO MAX\nDireção : João Wainer e Cesar Gananian\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/ad1.png',
    video: '/imagens/ad1.mp4',
    label: 'O ANTES E O DEPOIS / Uol',
    descricao: `Produção: Uol
Direção: Cesar Gananian e João Waine`,
  },
  {
    thumb: '/imagens/TR.webp',
    video: '/imagens/TR.mp4',
    label: 'Rapsodia Armenia',
    descricao: `Direção : Cassiana der Haroutiounian, Cesar Gananian e Gary Gananian
Prêmio de Melhor Filme no Golden Apricot Yerevan`,
  },

  {
    thumb: '/imagens/AN.jpg',
    video: '/imagens/AN.mp4',
    label: 'A arvore',
    descricao: `Direção : João Wainer e Ester Laccava
Co-direção e Montagem: Cesar Gananian`,
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