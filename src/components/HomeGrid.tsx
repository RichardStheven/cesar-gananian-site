'use client'

import Link from 'next/link'

export default function HomeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      
      {/* MONTAGEM */}
      <Link href="/montagem">
  <div className="group bg-[#171919] text-[#dad1a0] flex flex-col justify-center items-center h-screen px-12 py-10 transition-transform duration-300 hover:scale-[1.02]">
    <iframe
      src="https://www.youtube.com/embed/ZXsQAXx_ao0"
      title="Montagem"
      className="w-[90%] h-[60%] mb-6 rounded-md shadow-md transition-opacity group-hover:opacity-90"
      allowFullScreen
    />
    <h2 className="text-3xl font-bold group-hover:underline">Montagem</h2>
    <p className="text-sm mt-2 opacity-70 group-hover:opacity-100">See More →</p>
  </div>
</Link>

      {/* ROTEIRO */}
      <Link href="/roteiro">
  <div className="group bg-[#996300] text-[#dad1a0] flex flex-col justify-center items-center h-screen px-12 py-10 transition-transform duration-300 hover:scale-[1.02]">
    <iframe
      src="https://www.youtube.com/embed/ZXsQAXx_ao0"
      title="Roteiro"
      className="w-[90%] h-[60%] mb-6 rounded-md shadow-md transition-opacity group-hover:opacity-90"
      allowFullScreen
    />
    <h2 className="text-3xl font-bold group-hover:underline">Roteiro</h2>
    <p className="text-sm mt-2 opacity-70 group-hover:opacity-100">See More →</p>
  </div>
</Link>

      {/* DIREÇÃO */}
      <Link href="/direcao">
  <div className="group bg-[#43433f] text-[#dad1a0] flex flex-col justify-center items-center h-screen px-12 py-10 transition-transform duration-300 hover:scale-[1.02]">
    <iframe
      src="https://www.youtube.com/embed/ZXsQAXx_ao0"
      title="Direção"
      className="w-[90%] h-[60%] mb-6 rounded-md shadow-md transition-opacity group-hover:opacity-90"
      allowFullScreen
    />
    <h2 className="text-3xl font-bold group-hover:underline">Direção</h2>
    <p className="text-sm mt-2 opacity-70 group-hover:opacity-100">See More →</p>
  </div>
</Link>

      {/* GALERIA */}
      <Link href="/Galeria">
  <div className="group bg-[#2e434d] text-[#dad1a0] flex flex-col justify-center items-center h-screen px-12 py-10 transition-transform duration-300 hover:scale-[1.02]">
    <iframe
      src="https://www.youtube.com/embed/ZXsQAXx_ao0"
      title="Galeria"
      className="w-[90%] h-[60%] mb-6 rounded-md shadow-md transition-opacity group-hover:opacity-90"
      allowFullScreen
    />
    <h2 className="text-3xl font-bold group-hover:underline">Galeria</h2>
    <p className="text-sm mt-2 opacity-70 group-hover:opacity-100">See More →</p>
  </div>
</Link>


    </div>
  )
}
