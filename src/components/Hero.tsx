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
      y: 400,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 120%',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section className="relative h-[200vh] bg-black text-white overflow-hidden">

      {/* Título em duas linhas, alinhado à esquerda */}
      <div className="absolute top-24 left-12 z-10 text-left leading-none">
        <h1 className="text-6xl md:text-8xl font-extrabold">O Filme</h1>
        <h1 className="text-6xl md:text-8xl font-extrabold">Perdido</h1>
      </div>

      {/* SVG gigante, alinhado à direita */}
      <img
        ref={svgRef}
        src="/imagens/o-filme-perdido.svg"
        alt="O Filme Perdido"
        className="absolute top-1/2 right-0 w-[140vw] md:w-[120vw] h-auto -translate-y-1/2 z-0"
      />
    </section>
  )
}
