'use client'

export default function DirecaoPage() {
  return (

    <main>
    <div className="relative w-full h-screen overflow-hidden">
  {/* Vídeo de fundo */}
  <video
    autoPlay
    loop
    muted
    controls
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/imagens/ofilmeperdido.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>

  {/* Overlay escuro para contraste */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

      {/* Conteúdo por cima do vídeo */}
      <div className="relative z-20 flex justify-between items-start h-full px-12 pt-20 pb-10 text-[#dad1a0]">
        {/* Título + trilha */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-2">Roteiro</h1>
          <p className="uppercase text-sm tracking-widest opacity-60">
            Demo Reels • Roteiro
          </p>
        </div>

        {/* Clientes */}
        <div className="text-sm uppercase text-right opacity-80 leading-relaxed max-w-xs">
          <span className="block font-semibold mb-1">Clientes</span>
          <p>
            Brava Filmes, CineBr, Estúdio Aurora, Tempo Produções, BrasilFrame, Ocaso Filmes
          </p>
        </div>
      </div>
    </div>
    <section className="bg-black text-[#dad1a0] w-full px-12 py-20">
  <div className="flex flex-col md:flex-row justify-between gap-12">
    
    {/* Texto principal */}
    <div className="max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Seamless collaboration between our directors and artists. Integrated music and visual storytelling.
      </h2>
    </div>

    {/* Lista de clientes */}
    <div className="text-sm uppercase opacity-70 leading-relaxed">
      <span className="block font-semibold mb-2">Featured Clients</span>
      <p>
        Recall Ltd., Kappa One, Quantam, Greenlight, Vantage, LTX, Blue Moon, Corpus
      </p>
    </div>
  </div>

  {/* Divider com texto */}
  <div className="flex items-center mt-16 mb-10">
    <span className="text-xs uppercase tracking-widest">View More Work</span>
    <div className="flex-grow border-t border-[#dad1a0] ml-4" />
  </div>

  {/* Grade com vídeos ou imagens */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {[
    { src: "/imagens/triz.mp4", label: "Lifestyle" },
    { src: "/imagens/triz.mp4", label: "Documentary" },
    { src: "/imagens/triz.mp4", label: "Commercial" },
    { src: "/imagens/triz.mp4", label: "All Demo Reels" }
  ].map((item, index) => (
    <div key={index}>
      <video
        src={item.src}
        className="w-full h-48 md:h-60 lg:h-72 rounded"
        loop
        autoPlay
        muted
        controls
      />
      <p className="mt-2 text-center text-sm opacity-70">{item.label}</p>
    </div>
  ))}
</div>
</section>










  </main>
  )
}