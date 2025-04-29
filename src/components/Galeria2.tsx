'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const trabalhos = [
  {
    thumb: '/imagens/ot1.jpeg',
    video: '/imagens/outrostempos.mp4',
    label: 'Outros Tempos/ MAX',
    descricao: `Produção: Pródigo/ HBO MAX\nDireção : João Wainer e Cesar Gananian\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/junho.jpg',
    video: '/imagens/junho.mp4',
    label: 'Junho / Folha de São Paulo',
    descricao: `Produção: Folha de São Paulo\nDireção : João Wainer\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/contos.jpg',
    video: '/imagens/contos.mp4',
    label: 'Cantos De Um Livro Sagrado Premio É Tudo Verdade',
    descricao: `Melhor Curta Brasileiro no Festival É Tudo Verdade\nSeleção Oficial no Rotterdam Film Festival\nDireção: Cassiana Der Haroutiounian & Cesar Gananian\nMontagem: Cesar Gananian`,
  },
  {
    thumb: '/imagens/Inaudito.jpg',
    video: '/imagens/Inaudito.mp4',
    label: 'Inaudito Melhor Filme Festival de Tiradentes',
    descricao: `Premio de Melhor Filme no Festival de Tiradentes\nDireção : Gregorio Gananian\nMontagem: Cesar Gananian, Danielly O.M.M., Gregorio Gananian`,
  },
];

export default function GaleriaNova2() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <div className="px-6 py-10">
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