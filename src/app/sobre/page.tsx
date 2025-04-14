// src/app/sobre/page.tsx

export default function Sobre() {
    return (
      <main className="bg-black text-[#d1cfa3]">
        
        {/* Seção de introdução */}
        <section className="pt-8 pb-8 px-4 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#dad1a0] uppercase tracking-wider">
            Sobre mim
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-[#d1cfa3] tracking-normal">
          Eu sou Cesar Gananian. Trabalho com montagem, direção e roteiro, mas é na montagem que encontro minha escuta mais profunda.  
            Gosto de pensar a imagem pelo ritmo, pelo respiro, pela sugestão.  
            Mais do que contar uma história, tento montar uma sensação.
          </p>
        </section>
  
        {/* Imagem grande de destaque */}
        <section className="w-full relative">
  <img
    src="/imagens/1.jpg"
    alt="Cesar Gananian"
    className="w-full h-auto object-cover"
  />
</section>
  
        {/* Linha separadora */}
        <div className="border-t border-[#dad1a0] w-full my-12 mx-auto max-w-screen-xl" />
  
        {/* Seção final com imagem e texto lado a lado */}
        <section className="w-full bg-black text-[#d1cfa3] py-20 px-6 md:px-16 border-t border-[#d1cfa3]/30">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* Imagem à esquerda */}
    <div className="w-full md:w-1/2">
      <img
        src="/imagens/2.jpg"
        alt="Cesar Gananian"
        className="w-full h-auto object-cover rounded-sm shadow-md"
      />
    </div>

    {/* Texto à direita */}
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#dad1a0] leading-snug">
        Mais de duas décadas de vivência no audiovisual, com dedicação à montagem e à criação de narrativas que dialogam com o sensível e o poético.
      </h2>
      <p className="text-base md:text-lg text-[#bdb78f] leading-relaxed">
        Ao longo da minha trajetória, participei de filmes, documentários e projetos independentes que me permitiram explorar novas formas de contar histórias. 
        Com uma escuta ativa e atenção ao detalhe, busco respeitar o ritmo interno de cada obra.
      </p>
      <p className="text-xs text-[#9c9570] uppercase tracking-widest mt-2">
        Atuação desde 2000
      </p>
    </div>

  </div>
</section>

<section className="w-full bg-black text-[#d1cfa3] px-6 md:px-16 py-20 border-t border-[#d1cfa3]/30">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm md:text-base">
    
    <div>
      <h3 className="font-semibold text-[#dad1a0] mb-2 uppercase tracking-wider">Onde estou localizado?</h3>
      <p className="text-[#bdb78f] leading-relaxed">
        Trabalho com projetos em todo o Brasil, com base em São Paulo. Estou disponível para demandas remotas ou presenciais.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#dad1a0] mb-2 uppercase tracking-wider">Com quanto tempo devo entrar em contato?</h3>
      <p className="text-[#bdb78f] leading-relaxed">
        Quanto antes, melhor. Projetos maiores demandam mais planejamento. Para prazos curtos, entre em contato para verificar disponibilidade.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#dad1a0] mb-2 uppercase tracking-wider">Quais são os valores?</h3>
      <p className="text-[#bdb78f] leading-relaxed">
        Os valores variam conforme o projeto. Podemos conversar sobre pacotes ou formatos personalizados de acordo com a proposta.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-[#dad1a0] mb-2 uppercase tracking-wider">Oferece outros serviços?</h3>
      <p className="text-[#bdb78f] leading-relaxed">
        Além da montagem, também trabalho com assistência de edição, roteiro e consultoria criativa para projetos audiovisuais.
      </p>
    </div>

  </div>

  {/* Linha decorativa */}
  <div className="w-24 h-[1px] bg-[#d1cfa3]/40 mt-16 mx-auto" />
</section>



  
      </main>
    )
  }
  