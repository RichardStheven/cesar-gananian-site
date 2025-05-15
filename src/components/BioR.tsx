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
        Bio Roteiro
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
                  src="/imagens/BR.jpeg"
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
              <h2 className="text-4xl font-bold mb-10 text-center md:text-left">Cesar Gananian - Bio Roteirista</h2>

              <div className="space-y-6 text-justify text-base leading-relaxed max-w-2xl">
                <p>
                  Cesar Gananian atua como roteirista, desenvolvendo projetos tanto na ficção quanto no documentário, com originalidade, humor e uma abordagem fundamentada em extensa pesquisa cinematográfica.
                </p>
                <p>
                  Foi roteirista, ao lado de Thaís Nunes e João Wainer, do longametragem <strong>Bandida</strong>, produzido pela Paris Filmes. O filme foi o mais assistido no Brasil pela Netflix em 2024 e alcançou o segundo lugar no ranking mundial da plataforma entre os filmes de língua não inglesa.
                </p>
                <p>
                  No documentário, dirigiu e roteirizou <strong>Cantos de um Livro Sagrado</strong>, em parceria com Cassiana Der Haroutiounian. A obra venceu o prêmio de Melhor Documentário Brasileiro de Curta-Metragem no Festival É Tudo Verdade e integrou a seleção oficial de festivais internacionais como Rotterdam Film Festival, BIFF London e Vancouver Film Festival.
                </p>
                <p>
                  Entre 2012 e 2013, foi roteirista e editor do programa <strong>TV Folha</strong>, responsável por mais de 50 reportagens no Brasil e nos Estados Unidos, atuando como enviado especial. Seu trabalho sobre as manifestações de junho de 2013 recebeu o Prêmio EXXO Jornalístico daquele ano.
                </p>
                <p>
                  Sua formação inclui o curso de roteiro com <strong>Robert McKee</strong> (NY), atuação no <strong>Lee Strasberg Institute</strong> (NY), direção cinematográfica na <strong>Escuela de Cine y Televisión Séptima Ars</strong>, em Madrid, e cinema pela <strong>FAAP</strong>, em São Paulo.
                </p>
                <p>
                  Sua graphic novel <strong>O Filme Perdido</strong> foi publicada pela Companhia das Letras e lançada no Cinesesc durante a Mostra de Cinema de 2022, acompanhada por uma exposição das obras originais. A HQ foi indicada ao Prêmio Jabuti e ao HQ MIX em 2023 e foi selecionada como um dos cem quadrinhos brasileiros mais emblemáticos da última década pelo Itamaraty.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}