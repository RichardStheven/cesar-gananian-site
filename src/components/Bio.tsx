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
        Bio Montador
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
                  src="/imagens/FT4.jpeg"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-16 flex flex-col justify-center"
            >
              <h2 className="text-4xl font-bold mb-10 text-center md:text-left">Cesar Gananian - Bio Montador</h2>

              <div className="space-y-6 text-justify text-base leading-relaxed max-w-2xl">
                <p>
                  Cesar Gananian é um montador experiente, com mais de duas décadas de atuação em projetos de destaque, abrangendo ficção, documentários, videoclipes e publicidade. Reconhecido pela precisão e criatividade, colaborou com grandes nomes como HBO Max, Buena Vista e Paris Filmes, agregando valor narrativo às produções.
                </p>
                <p>
                  Em 2025, foi montador-chefe da série Meu Ayrton / Por Adriane Galisteu (dir. João Wainer, HBO), e assinou a montagem do longa-metragem Aqui Não Entra Luz (dir. Karol Maia) vencedor do Prêmio de Melhor Direção no Festival de Brasília. No mesmo ano, editou três filmes publicitários da Google Gemini, reforçando sua versatilidade entre o cinema autoral e o mercado internacional.
                </p>
                <p>
                  Em 2024, liderou a montagem do longa-metragem Bandida - A Número Um, dirigido por João Wainer, que se tornou o filme brasileiro mais assistido na Netflix naquele ano. Também assinou a montagem da série Helipa - Um Autorretrato, da Griffa Filmes e lançado pela MTV.
                </p>
                <p>
                  Entre seus trabalhos premiados, destaca-se Cantos de um Livro Sagrado (2022), vencedor do prêmio de Melhor Curta Brasileiro no Festival É Tudo Verdade, e A Jaula (2020), estrelado por Chay Suede e Alexandre Nero.
                </p>
                <p>
                  Na música, montou clipes emblemáticos como Boa Esperança (Emicida), Vida Loka (Bonde Rolê), Elevação Mental (Triz) e O que se Cala (Elza Soares).
                </p>
                <p>
                  De 2012 a 2014, integrou a equipe do TV Folha (TV Cultura), conquistando o Prêmio Esso de Jornalismo, e montou o documentário Junho, lançado pela O2 Play.
                </p>
                <p>
                  Formado em Cinema pela FAAP (SP), com especialização no Lee Strasberg Institute (NY) e na Septima Ars (Madrid), Cesar desenvolveu uma assinatura de montagem que valoriza a visão dos cineastas e impacta o público.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
