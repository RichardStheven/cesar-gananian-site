"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import FaixaDecorativa from "../components/FaixaDecorativa";

const trabalhos = [
  {
    thumb: "/imagens/4.webp",
    video: "/imagens/triz.mp4",
    label: "Lifestyle",
    descricao: "Vídeo sobre cotidiano urbano.",
  },
  {
    thumb: "/imagens/4.webp",
    video: "/imagens/triz.mp4",
    label: "Documentary",
    descricao: "Documentário poético sobre memória.",
  },
  {
    thumb: "/imagens/2.jpg",
    video: "/imagens/triz.mp4",
    label: "Commercial",
    descricao: "Campanha de moda experimental.",
  },
  {
    thumb: "/imagens/2.jpg",
    video: "/imagens/triz.mp4",
    label: "All Demo Reels",
    descricao: "Compilado de projetos diversos.",
  },
];

export default function GaleriaMotion() {
  const [ativo, setAtivo] = useState<number | null>(null);
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  const colunas = isMobile ? 1 : 4;

  const getRenderList = () => {
    if (ativo === null) {
      return trabalhos.map((item, i) => ({
        ...item,
        index: i,
        originalIndex: i,
        ocultar: false,
      }));
    }

    const linha = Math.floor(ativo / colunas);
    const start = linha * colunas;
    const end = start + colunas;

    const isUltimoDaLinha = ativo === end - 1 || ativo === trabalhos.length - 1;

    let novaOrdem = [...trabalhos];

    if (!isMobile && isUltimoDaLinha) {
      const [ultimo] = novaOrdem.splice(ativo, 1);
      novaOrdem.splice(start, 0, ultimo);
    }

    return novaOrdem.map((item, i) => {
      const estaNaMesmaLinha = Math.floor(i / colunas) === linha;
      const ocultar = ativo !== null && estaNaMesmaLinha && trabalhos[ativo] !== item;

      return {
        ...item,
        index: i,
        originalIndex: trabalhos.indexOf(item),
        ocultar,
      };
    });
  };

  const renderList = getRenderList();

  return (
    <div className="px-6">
      <FaixaDecorativa />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {renderList.map((item, i) => {
          if (item.ocultar) return null;

          return (
            <div key={item.label + i} className="relative">
              <motion.div
              transition={{ duration: 0.7, ease: "easeInOut" }}
                layout
                className="bg-black rounded overflow-hidden shadow w-full max-w-[1080px] max-h-[1080px] object-cover cursor-pointer"
                onClick={() => setAtivo(item.originalIndex)}
              >
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="w-full h-48 md:h-60 lg:h-72 max-w-[1080px] max-h-[1080px] object-cover rounded"
                />
                <p className="p-2 text-center text-sm opacity-70">{item.label}</p>
              </motion.div>

              {ativo === item.originalIndex && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full md:w-[calc(450%+1.5rem)] bg-black rounded shadow flex flex-col md:flex-row overflow-hidden z-50"
                >
                  <video
                    src={item.video}
                    controls
                    className="w-full md:min-w-[300px] md:max-w-[300px] h-auto object-cover"
                    poster={item.thumb}
                  />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-2">{item.label}</h2>
                    <p className="text-sm text-white">{item.descricao}</p>
                    <button
                      className="mt-4 text-sm text-[#dad1a0]"
                      onClick={() => setAtivo(null)}
                    >
                      Fechar
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 