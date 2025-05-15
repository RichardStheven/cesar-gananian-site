'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function BioCesar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* BOTÃO CENTRALIZADO */}
      <button
        className="flex items-center gap-2 text-white text-lg border border-white/30 rounded px-8 py-3 bg-black/50 backdrop-blur-md hover:brightness-110 transition"
        onClick={() => setOpen(true)}
      >
        Bio Direção
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black text-white z-50 overflow-y-auto flex flex-col md:flex-row p-8 md:p-16"
          >
            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white text-2xl z-50"
            >
              ✕
            </button>

            {/* FOTO + CONTATO */}
            <div className="relative w-full md:w-1/2 flex flex-col items-center">
              <div className="relative w-80 h-80 mb-6">
                <Image
                  src="/imagens/BD.jpeg"
                  alt="Cesar Gananian"
                  fill
                  className="object-contain rounded"
                />
              </div>

              <div className="flex gap-6 text-[#dad1a0] text-2xl">
                <a href="https://www.instagram.com/cesargananian" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/5511996918254" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="mailto:cesargananian@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/cesar-gananian-b44897182/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* TEXTO */}
{/* TEXTO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-16 flex flex-col justify-center text-sm leading-relaxed"
>
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Cesar Gananian – Bio Direção</h2>

  <div className="space-y-3 text-justify max-w-2xl">
    <p>
      Cesar Gananian é diretor de ficção e documentários, com obras premiadas e exibidas em dezenas de festivais nacionais e internacionais. Em seu trabalho, busca explorar a linguagem cinematográfica com originalidade, criando narrativas que ampliam as possibilidades estéticas e expressivas do cinema.
    </p>
    <p>
      Em 2022, seu filme <strong>Cantos de um Livro Sagrado</strong>, dirigido com Cassiana Der Haroutiounian, venceu o É Tudo Verdade e integrou a seleção oficial do Rotterdam International Film Festival. O filme também foi pré-selecionado para o Oscar na categoria Best Documentary Short Film.
    </p>
    <p>
      Com <strong>Filme Som</strong>, percorreu mais de trinta festivais internacionais e recebeu Menção Honrosa no Prêmio Itamaraty do Festival Internacional de Curtas de São Paulo.
    </p>
    <p>
      Dirigiu o clipe <strong>Elevação Mental</strong> (Triz), com mais de 17 milhões de views. Em seguida, co-dirigiu <strong>O Que Se Cala</strong> com Elza Soares.
    </p>
    <p>
      Em 2020, co-dirigiu <strong>A Árvore</strong> (dir. Ester Laccava e João Wainer), estrelado por Alessandra Negrini, e foi montador e co-diretor do episódio <strong>Cenas de Casamento</strong> da série <strong>Outros Tempos</strong>, da HBO MAX.
    </p>
    <p>
      Em 2012, dirigiu com Cassiana Der Haroutiounian e Gary Gananian o doc <strong>Rapsódia Armênia</strong>, que ficou 3 meses em cartaz em SP e venceu Melhor Filme no Golden Apricot Festival (Yerevan).
    </p>
    <p>
      Foi diretor de segunda unidade do longa <strong>Bandida</strong> (dir. João Wainer), produzido pela Paris Filmes, filmado no RJ em 2023.
    </p>
    <p>
      Formado em atuação pelo <strong>Lee Strasberg Institute</strong> (NY), Direção Cinematográfica na <strong>Séptima Ars</strong> (Madrid) e Cinema pela <strong>FAAP</strong> (SP).
    </p>
  </div>
</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}