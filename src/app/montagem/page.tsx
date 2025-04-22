"use client";

import Image from "next/image";
import GaleriaDeTrabalhos from "../../components/GaleriaDeTrabalhos";
import Galeria2 from "../../components/Galeria2";
import GaleriaC from "../../components/GaleriaC";
import GaleriaM from "../../components/GaleriaM";
import Bio from "../../components/Bio";
import Roda from "../../components/Roda";
import Menu from "../../components/Menu";






export default function Montagem() {
  return (
    

    <div>
      {/* SEÇÃO 1 — VÍDEO COM TEXTO CENTRALIZADO */}
      <section className="hero">
        <video className="video-fundo" autoPlay playsInline loop muted>
          <source src="/imagens/5.mp4" type="video/mp4" />
        </video>
        <Menu />
        <Bio />
        {/* TEXTO CENTRAL */}
        <div className="hero-texto">
          <h1>Montagem</h1>
          <p> • Cesar Gananian •</p>
        </div>
      </section>
      {/* GALERIAS */}
      <div className="Galeria1">
        <GaleriaDeTrabalhos />
      </div>

      <div className="Galeria">
        <Galeria2 />
      </div>

      <div className="Galeria">
        <GaleriaC />
      </div>

      <div className="Galeria">
        <GaleriaM />
      </div>
    <Roda />
    </div>
  );
}
