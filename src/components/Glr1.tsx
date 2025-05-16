'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  { videoId: 'wrDdQXhg-SE' },
  { videoId: 'M8EP5pyOHas' },
  { videoId: 'KrFMPYhDT3s' },
  { video: '/imagens/ep3.mp4' }, // vídeo local
  { videoId: 'WSGF8xuNSoc' },
  { videoId: 'C0dX494EyvM' },
  { videoId: 'xinmx80FVuU' },
  { videoId: '-CjAJhtTNQE' },
  { videoId: 'Z_S1wDN8z_c' },
  { videoId: 'B4K2Tvqb2ZY' },
];

export default function GaleriaVideos() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

  return (
    <section className="relative bg-black px-5 text-white">
      <div className="flex items-center mt-20 mb-10">
        <span className="text-xs uppercase tracking-widest text-[#888]">O Filme Perdido</span>
        <div className="flex-grow border-t border-[#dad1a0] ml-4" />
      </div>

      {/* Botões */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full z-10 hover:bg-white hover:text-black"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full z-10 hover:bg-white hover:text-black"
        >
          →
        </button>

        {/* Galeria */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelected(video)}
              className="snap-start flex-shrink-0 w-[240px] h-[380px] bg-black text-center relative cursor-pointer group"
            >
              {video.videoId ? (
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-all"
                />
              ) : (
                <video
                  src={video.video}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-all"
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 text-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal do vídeo */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-[400px] aspect-[9/16] bg-black rounded overflow-hidden shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selected.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
