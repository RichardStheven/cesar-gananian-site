'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const svgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    gsap.to(svgRef.current, {
      y: 900,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  }, [])

  return (

  
    <section className="relative h-screen bg-black text-white overflow-hidden flex items-center px-8 md:px-16">
      
      {/* Coluna esquerda - conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center md:items-start gap-6 w-full max-w-[420px] ml-10">
        <h1 className="text-6xl self-center md:text-7xl font-extrabold leading-tight text-center md:text-left">
          O Filme<br />Perdido
        </h1>

        <img
          src="/imagens/o-filme-perdido.jpg"
          alt="Capa do livro O Filme Perdido"
          className="w-[190px] md:w-[260px] self-center mx-auto md:mx-0"
        />

        <a
          href="https://www.amazon.com.br/dp/6584953289?ref_=cm_sw_r_apin_dp_049Y902PHD57348ER8BD"
          target="_blank"
          rel="noopener noreferrer"
className="self-center mt-4 px-8 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition-colors"        >
          Comprar na Amazon
        </a>
      </div>




      {/* SVG animado à direita */}
      <div className="hidden md:block absolute right-0 top-0 w-[65%] h-full overflow-hidden z-0">
        <img
          ref={svgRef}
          src="/imagens/o-filme-perdido.svg"
          alt="Arte animada"
          className="absolute max-w-none object-contain"
          style={{
            right: '0',
            transform: 'translateX(5%) translateY(-50%)',
            width: '200%',
            height: '350%',
          }}
        />
      </div>
    </section>
  )
}
