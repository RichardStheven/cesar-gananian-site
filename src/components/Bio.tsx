'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaImdb, FaWhatsapp } from 'react-icons/fa'

export default function BioCesar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* BOTÃO VISÍVEL SUTIL */}
      <button
        className="text-white text-sm border border-white/30 rounded px-4 py-2 bg-black/50 backdrop-blur-md hover:brightness-110 transition"
        onClick={() => setOpen(true)}
      >
        Biografia
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full max-w-3xl bg-black text-white z-50 shadow-xl overflow-y-auto p-6"
          >
            <div className="relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-6">Cesar Gananian</h2>

              {/* IMAGEM DE FUNDO */}
              <div className="relative w-full h-64 mb-6 rounded overflow-hidden">
                <Image
                  src="/imagens/ft3.png"
                  alt="Cesar Gananian"
                  fill
                  className="object-cover opacity-90"
                />
              </div>

              <p className="text-sm whitespace-pre-line leading-relaxed">
Cesar Gananian é um montador experiente, com mais de duas décadas de atuação em projetos de destaque que abrangem ficção, documentários, videoclipes e publicidade. Reconhecido pela precisão e criatividade na montagem, Cesar já colaborou com grandes nomes como HBO Max, Buena Vista e Paris Filmes, sempre agregando valor narrativo às produções.

Em 2024, liderou a montagem de dois projetos de grande relevância: o longa- metragem Bandida - A Número Um, dirigido por João Wainer, que se tornou o filme brasileiro mais assistido na Netflix naquele ano; e a série Helipa - Um Autorretrato, produção da Griffa Filmes para a MTV, dirigida por Karol Maia.

Entre seus trabalhos premiados, destaca-se Cantos de um Livro Sagrado (2022), que lhe rendeu o prêmio de Melhor Curta Brasileiro no Festival É Tudo Verdade, além de integrar a seleção oficial do Rotterdam International Film Festival. Como montador, também deu vida à ficção A Jaula (2020), estrelada por Chay Suede e Alexandre Nero.

Na cena musical, Cesar trabalhou na montagem de clipes emblemáticos, como Boa Esperança, de Emicida, e Vida Loka, do Bonde Rolê, vencedores do Prêmio Multishow de Melhor Clipe. Ele também montou videoclipes de grande impacto, como Elevação Mental, do artista Triz, com mais de 17 milhões de visualizações, e O que se Cala, da icônica Elza Soares.

Entre 2012 e 2014, como montador do programa TV Folha (TV Cultura), contribuiu para conteúdos que receberam mais de três milhões de visualizações no YouTube e conquistaram o Prêmio Esso de Jornalismo. Foi também o responsável pela montagem do documentário Junho, lançado pela O2 Play em mais de 14 salas de cinema no Brasil.

Formado em Cinema pela FAAP (São Paulo), Cesar aprofundou sua formação no Lee Strasberg Institute (Nova York) e na Escuela de Cine y Televisión Septima Ars (Madrid). Ao longo de sua carreira, desenvolveu uma assinatura única como montador, destacando sua habilidade em valorizar a visão dos cineastas em resultados finais que inspirem e impactem o público.
              </p>

              {/* REDES SOCIAIS COMO ÍCONES */}
              <div className="mt-8 flex gap-6 text-[#dad1a0] text-xl">
                <a href="https://www.instagram.com/cesargananian" target="_blank" rel="noopener">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@cesargananian" target="_blank" rel="noopener">
                  <FaYoutube />
                </a>
                <a href="https://www.imdb.com/name/nm3758500/" target="_blank" rel="noopener">
                  <FaImdb />
                </a>
                <a href="https://wa.me/5511996918254" target="_blank" rel="noopener">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}