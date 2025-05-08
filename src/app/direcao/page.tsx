"use client";

import Image from "next/image";
import BioD from "../../components/BioD";
import RodaD from "../../components/RodaD";
import Menu from "../../components/Menu";
import FaixaDecorativa from "../../components/FaixaDecorativa";
import Gld1 from "../../components/Gld1";
import Glm from "../../components/Glm";

export default function Montagem() {
  return (
    <div>
      {/* MENU */}
      <Menu />

      {/* SEÇÃO 1 — TÍTULO, SUBTÍTULO, FAIXA */}
      <section className="bg-black text-white flex flex-col items-center justify-center pt-24 pb-0">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold">Direção</h1>
    <p className="text-lg md:text-2xl mt-4">• Cesar Gananian •</p>

    {/* Faixa decorativa separadora */}
    <div className="w-full max-w-7xl h-px bg-[#dad1a0] mt-10 mb-16"></div>
    <BioD />
  </div>
</section>

      {/* GALERIAS */}
      <div className="Galeria1">
        <Gld1 />
      </div>

      <div className="Galeria">
        <Glm />
      </div>

      <RodaD />
    </div>
  );
}
