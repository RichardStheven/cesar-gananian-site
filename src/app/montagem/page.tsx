"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import fotoCesar from "@/public/2.jpg";
import GaleriaDeTrabalhos from "../../components/GaleriaDeTrabalhos";

export default function Montagem() {
  const [mostrarBio, setMostrarBio] = useState(false);

  return (
    <div>
      {/* SEÇÃO 1 — VÍDEO COM TEXTO CENTRALIZADO */}
      <section className="hero">
        <video className="video-fundo" autoPlay playsInline loop muted>
          <source src="/imagens/5.mp4" type="video/mp4" />
        </video>

        {/* TEXTO CENTRAL */}
        <div className="hero-texto">
          <h1>Montagem</h1>
          <p> • Cesar Gananian •</p>
        </div>

        {/* BOTÃO FORA DO BLOCO DE TEXTO */}
        <div className="botao-wrapper">
          <button className="bot" onClick={() => setMostrarBio(true)}>biografia...</button>
        </div>
      </section>

<AnimatePresence>
  {mostrarBio && (
    <motion.section
      className="bio-modal"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bio-modal-container">
        <div className="bio-texto">
          <div className="coluna">
            <p>
              Cesar Gananian é montador e assistente de montagem com sensibilidade
              narrativa, atuando em obras que exploram o tempo e a imagem como ritmo.
            </p>
            <p>
              Trabalhou em longas documentais e ficções experimentais, colaborando com
              diretores e artistas de múltiplas linguagens.
            </p>
          </div>
          <div className="coluna">
            <p>
              Seu olhar de montagem não se limita à técnica — há um cuidado com a
              respiração entre as cenas, com o não-dito, com a textura do silêncio.
            </p>
            <p>
              Atualmente desenvolve projetos autorais e atua em parcerias de cinema e
              arte contemporânea.
            </p>
          </div>
        </div>
        <button className="fechar" onClick={() => setMostrarBio(false)}>fechar</button>

        <div className="imagem-com-mascara">
  <Image
    src="/imagens/ft3.png"
    alt="Cesar Gananian"
    fill
    className="img-ajuste"
  />
  <div className="mascara-sobre-imagem" />
      
      
      </div>
      </div>
    </motion.section>
  )}
</AnimatePresence>


     {/* GALERIA */}
{!mostrarBio && (
  <>
    <div className="Galeria1">
      <GaleriaDeTrabalhos />
    </div>

    <div className="Galeria">
      <GaleriaDeTrabalhos />
    </div>

    <div className="Galeria">
      <GaleriaDeTrabalhos />
    </div>
  </>
)}

</div> // fecha a <div> principal do return
); // fecha o return

} // fecha o componente Montagem
