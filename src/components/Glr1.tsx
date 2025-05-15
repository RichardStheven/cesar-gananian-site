'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  {
    title: 'EP 01 – Impressionismo',
    url: 'https://www.dropbox.com/scl/fi/1rk2r2xvdq147p3eo04l1/ep01_IMPRESSIONISMO.mp4?rlkey=6n5ot76yjl3yab5abscfd8r4d&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/1rk2r2xvdq147p3eo04l1/ep01_IMPRESSIONISMO.mp4?rlkey=6n5ot76yjl3yab5abscfd8r4d&raw=1#t=2'
  },
  {
    title: 'EP 02 – Cinema Noir',
    url: 'https://www.dropbox.com/scl/fi/pa8rv3u7euak1doahi3sz/ep02_CINEMA-NOIR.mp4?rlkey=1rmrwjoe3mteco3yxo42kfq34&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/pa8rv3u7euak1doahi3sz/ep02_CINEMA-NOIR.mp4?rlkey=1rmrwjoe3mteco3yxo42kfq34&raw=1#t=2'
  },
  {
    title: 'EP 03 – Cinema Coreano',
    url: 'https://www.dropbox.com/scl/fi/v2c7l2utvccnswtkes393/ep03_CINEMA-COREANO.mp4?rlkey=kmyxl6a18ri2z2xj3bqmthth2&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/v2c7l2utvccnswtkes393/ep03_CINEMA-COREANO.mp4?rlkey=kmyxl6a18ri2z2xj3bqmthth2&raw=1#t=2'
  },

  {
    title: 'EP 04 – Invenção Brasileira',
    url: 'https://www.dropbox.com/scl/fi/jjuoavlqjqvf3eokx1ri5/ep04_CINEMA-DE-INVENCAO-BRASILEIRO.mp4?rlkey=txufomt7xqg27yhocrwxqsnkd&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/jjuoavlqjqvf3eokx1ri5/ep04_CINEMA-DE-INVENCAO-BRASILEIRO.mp4?rlkey=txufomt7xqg27yhocrwxqsnkd&raw=1#t=2'
  },
  
  {
    title: 'EP 05 – Nouvelle Vague Japonesa',
    url: 'https://www.dropbox.com/scl/fi/o1k5apjsm0wqj6l3e13nk/ep05_nouvellevaguejaponesa.mp4?rlkey=9mfjmcocnxrkycylm1u8ft2om&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/o1k5apjsm0wqj6l3e13nk/ep05_nouvellevaguejaponesa.mp4?rlkey=9mfjmcocnxrkycylm1u8ft2om&raw=1#t=2'
  },

  {
    title: 'EP 06 – Cinema Soviético',
    url: 'https://www.dropbox.com/scl/fi/3n9w8skawhq9q3e2257eq/ep06_sovietico.mp4?rlkey=yihnkem7lh0vaz32on7hb1l5l&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/3n9w8skawhq9q3e2257eq/ep06_sovietico.mp4?rlkey=yihnkem7lh0vaz32on7hb1l5l&raw=1#t=2'
  },

  {
    title: 'EP 07 – Animações Tchecas',
    url: 'https://www.dropbox.com/scl/fi/d6m6rr22qr4urxmzqf1fl/ep07_animacoestchecas.mp4?rlkey=hu27e1n5lkdrcdxfryx4brmpx&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/d6m6rr22qr4urxmzqf1fl/ep07_animacoestchecas.mp4?rlkey=hu27e1n5lkdrcdxfryx4brmpx&raw=1#t=2'
  },
  {
    title: 'EP 08 – Cinema Armênio',
    url: 'https://www.dropbox.com/scl/fi/q64c9h517061nxd7fwcuy/ep08_cinemaarmenio.mp4?rlkey=i61dsw7bbv9kfpquex70frd50&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/q64c9h517061nxd7fwcuy/ep08_cinemaarmenio.mp4?rlkey=i61dsw7bbv9kfpquex70frd50&raw=1#t=2'
  },
  {
    title: 'EP 09 – Final',
    url: 'https://www.dropbox.com/scl/fi/l8dxzeim04uaqolmqzqsw/ep09_final-1.mp4?rlkey=ablsnq8h1loajqaakwq4ktiyh&raw=1',
    thumb: 'https://www.dropbox.com/scl/fi/l8dxzeim04uaqolmqzqsw/ep09_final-1.mp4?rlkey=ablsnq8h1loajqaakwq4ktiyh&raw=1#t=2'
  },
      

];

export default function GaleriaVideos() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black px-5 text-white">
    <div className="flex items-center mt-20 mb-10">
      <span className="text-xs uppercase tracking-widest text-[#888]"> O Filme Perdido </span>
      <div className="flex-grow border-t border-[#dad1a0] ml-4" />
    </div>

      <div className="relative">
  <button
    onClick={scrollLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full z-10 hover:bg-white hover:text-black"
  >←</button>

  <button
    onClick={scrollRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full z-10 hover:bg-white hover:text-black"
  >→</button>

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
        <video
          src={video.thumb}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover group-hover:opacity-80 transition-all"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-4 py-3 text-sm">
          {video.title}
        </div>
      </div>
    ))}
  </div>
</div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-w-[480px] w-full aspect-[9/16]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <video src={selected.url} controls autoPlay className="w-full h-full object-cover rounded" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
