"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const trabalhos = [
  {
    thumb: "/imagens/outrostempos.jpg",
    video: "/imagens/outrostempos.mp4",
    label: "Outros Tempos",
    descricao: `Produção: Pródigo/ HBO MAX
Direção : João Wainer e Cesar Gananian
Montagem: Cesar Gananian`,
  },
  {
    thumb: "/imagens/junho.jpg",
    video: "/imagens/junho.mp4",
    label: "Junho",
    descricao: `Produção: Folha de São Paulo
Direção : João Wainer
Montagem: Cesar Gananian`,
  },
  {
    thumb: "/imagens/contos.jpg",
    video: "/imagens/contos.mp4",
    label: "Cantos De Um Livro Sagrado",
    descricao: `Melhor Curta Brasileiro no Festival É Tudo Verdade
Seleção Oficial no Rotterdam Film Festival
Direção: Cassiana Der Haroutiounian
& Cesar Gananian
Montagem: Cesar Gananian
`,
  },
  {
    thumb: "/imagens/Inaudito.jpg",
    video: "/imagens/Inaudito.mp4",
    label: "Inaudito",
    descricao: `Premio de Melhor Filme no Festival de Tiradentes
Direção : Gregorio Gananian
Montagem: Cesar Gananian, Danielly O.M.M.
Gregorio Gananian

`,
  },
];


export default function GaleriaMotion() {
  const [ativo, setAtivo] = useState<number | null>(null);
  const isMobile = useMediaQuery("only screen and (max-width: 100%)");
  const colunas = isMobile ? 1 : 6;

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {renderList.map((item, i) => {
          if (item.ocultar) return null;

          return (
            <div key={item.label + i} className="relative">
              <motion.div
                transition={{ duration: 0.7, ease: "easeInOut" }}
                layout
                className="bg-black rounded overflow-hidden shadow w-full max-w-[1080px] object-cover cursor-pointer"
                onClick={() => setAtivo(item.originalIndex)}
              >
                {/* Imagem quadrada */}
                <img
                  src={item.thumb}
                  alt={item.label}
                  className="aspect-square w-full object-cover rounded"
                />
                <p className="p-2 text-center text-sm opacity-70">{item.label}</p>
              </motion.div>

              {/* Card expandido com vídeo retangular */}
              {ativo === item.originalIndex && (
    <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute top-0 left-0 w-full md:w-[calc(450%+1.5rem)] bg-black rounded shadow overflow-hidden z-50 flex flex-col md:flex-row"
  >
    {/* VÍDEO RETANGULAR */}
    <div className="w-full md:w-2/3">
      <video
        src={item.video}
        controls
        className="aspect-video w-full object-cover"
        poster={item.thumb}
      />
    </div>

    {/* TEXTO AO LADO OU ABAIXO */}
   {/* TEXTO AO LADO OU ABAIXO */}
<div className="w-full md:w-1/3 p-6 flex flex-col">
  <div className="mt-auto mb-auto">
    <h2 className="text-lg md:text-xl font-semibold text-white mb-2">{item.label}</h2>
    <p className="text-sm md:text-base text-white whitespace-pre-line break-words">
      {item.descricao}
    </p>
  </div>
  <button
    className="text-sm mt-6 text-[#dad1a0] underline self-start"
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
