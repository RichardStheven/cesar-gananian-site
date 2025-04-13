'use client'

export default function DirecaoPage() {
  return (

    <main>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <iframe
        src="https://www.youtube.com/watch?v=vnAsE05kN30"
        title="Direção"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay escuro (opcional para dar contraste no texto) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Conteúdo por cima do vídeo */}
      <div className="relative z-20 flex justify-between items-start h-full px-12 pt-20 pb-10 text-[#dad1a0]">
        {/* Título + trilha */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-2">Direção</h1>
          <p className="uppercase text-sm tracking-widest opacity-60">
            Demo Reels • Direção
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
    <div>
      <iframe
        src="https://www.youtube.com/embed/Bey4XXJAqS8"
        className="w-full h-48 md:h-60 lg:h-72 rounded"
        allowFullScreen
        title="Video 1"
      />
      <p className="mt-2 text-center text-sm opacity-70">Lifestyle</p>
    </div>
    <div>
      <iframe
        src="https://www.youtube.com/embed/ZXsQAXx_ao0"
        className="w-full h-48 md:h-60 lg:h-72 rounded"
        allowFullScreen
        title="Video 2"
      />
      <p className="mt-2 text-center text-sm opacity-70">Documentary</p>
    </div>
    <div>
      <iframe
        src="https://www.youtube.com/embed/QFtXT1KMQ1U"
        className="w-full h-48 md:h-60 lg:h-72 rounded"
        allowFullScreen
        title="Video 3"
      />
      <p className="mt-2 text-center text-sm opacity-70">Commercial</p>
    </div>
    <div>
      <iframe
        src="https://www.youtube.com/embed/TcMBFSGVi1c"
        className="w-full h-48 md:h-60 lg:h-72 rounded"
        allowFullScreen
        title="Video 4"
      />
      <p className="mt-2 text-center text-sm opacity-70">All Demo Reels</p>
    </div>
  </div>
</section>










  </main>
  )
}