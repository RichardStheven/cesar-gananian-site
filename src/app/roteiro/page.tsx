"use client";

import Image from "next/image";
import BioR from "../../components/BioR";
import RodaR from "../../components/RodaR";
import Menu from "../../components/Menu";
import FaixaDecorativa from "../../components/FaixaDecorativa";
import Glr from "../../components/Glr";
import Glr1 from "../../components/Glr1";

export default function Montagem() {
  return (
    <div>
      {/* MENU */}
      <Menu />

      {/* SEÇÃO 1 — TÍTULO, SUBTÍTULO, FAIXA */}
      <section className="bg-black text-white flex flex-col items-center justify-center pt-24 pb-0">
  <div className="text-center">
    <h1 className="text-4xl md:text-6xl font-bold">Roteiro</h1>
    <p className="text-lg md:text-2xl mt-4">• Cesar Gananian •</p>

    {/* Faixa decorativa separadora */}
    <div className="w-full max-w-7xl h-px bg-[#dad1a0] mt-10 mb-16"></div>
    <BioR />
  </div>
</section>

      {/* GALERIAS */}
      <div className="Galeria1">
        <Glr />
      </div>

      <div className="Galeria">
        <Glr1 />
      </div>

      <RodaR />
    </div>
  );
}
