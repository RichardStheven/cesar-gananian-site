"use client";

import Image from "next/image";
import GaleriaDeTrabalhos from "../../components/GaleriaDeTrabalhos";
import Galeria2 from "../../components/Galeria2";
import GaleriaC from "../../components/GaleriaC";
import GaleriaM from "../../components/GaleriaM";
import Bio from "../../components/Bio";
import Roda from "../../components/Roda";
import Menu from "../../components/Menu";
import FaixaDecorativa from "../../components/FaixaDecorativa";

export default function Montagem() {
  return (
    <div>
      {/* MENU */}
      <Menu />

      {/* SEÇÃO 1 — TÍTULO, SUBTÍTULO, FAIXA */}
      <section className="bg-black text-white flex flex-col items-center justify-center pt-24 pb-0">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold">Montagem</h1>
    <p className="text-lg md:text-2xl mt-4"> Cesar Gananian </p>

    {/* Faixa decorativa separadora */}
    <div className="w-full max-w-7xl h-px bg-[#dad1a0] mt-10 mb-16"></div>
    <Bio />
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
