'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaixaDecorativa from '../components/FaixaDecorativa';

const trabalhos = [
  {
    thumb: '/imagens/Bandida-o-filme.webp',
    video: '/imagens/bandida.mp4',
    label: 'Bandida / Paris Filmes e Netflix',
    descricao: `Produção: Paris Filmes / Netflix
Direção: João Wainer
Roteiro: Cesar Gananian, João Wainer , Thaís Nunes e Patricia Andrade`,
  },
  {
    thumb: '/imagens/contos.jpg',
    video: '/imagens/contos.mp4',
    label: 'Cantos De Um Livro Sagrado / Premio É Tudo Verdade',
    descricao: `Melhor Curta Brasileiro no Festival É Tudo Verdade
Seleção Oficial no Rotterdam Film Festival
Direção e Roteiro : Cassiana Der Haroutiounian & Cesar Gananian`,
  },
  {
    thumb: '/imagens/junho.jpg',
    video: '/imagens/junho.mp4',
    label: 'Junho / Folha de São Paulo',
    descricao: `Produção: Folha de São Paulo
Direção : João Wainer
Roteiro : Cesar Gananian`,
  },
  {
    thumb: '/imagens/TR.webp',
    video: '/imagens/TR.mp4',
    label: 'Rapsodia Armenia',
    descricao: `Direção e Roteiro: Cassiana der Haroutiounian, Cesar Gananian e Gary Gananian
Prêmio de Melhor Filme no Golden Apricot Yerevan`,
  },
  {
    thumb: '/imagens/ad1.png',
    video: '/imagens/ad1.mp4',
    label: 'O ANTES E O DEPOIS / Uol',
    descricao: `Produção: Uol
Direção e Roteiro: Cesar Gananian e João Waine`,
  },


  {
    thumb: '/imagens/HP.webp',
    video: '/imagens/HP.mp4',
    label: 'Cidadão K/ Tv Folha',
    descricao: `Roteiro e montagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/IC.jpg',
    video: '/imagens/IC.mp4',
    label: 'Inri Cristo',
    descricao: `Roteiro e montagem: Cesar Gananian`,
  },

  {
    thumb: '/imagens/DM.jpg',
    video: '/imagens/DM.mp4',
    label: 'O Discreto Charme da Maçonaria',
    descricao: `Roteiro e montagem: Cesar Gananian`,
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