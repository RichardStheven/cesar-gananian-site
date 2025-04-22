'use client'

import { FaInstagram, FaYoutube, FaImdb, FaWhatsapp } from 'react-icons/fa'

export default function IconesSociaisCentrados() {
  return (
    <div className="w-full z-300 flex justify-center items-center py-8">
      <div className="flex gap-8 text-[#dad1a0] text-2xl">
        <a href="https://www.instagram.com/cesargananian" target="_blank" rel="noopener" className="hover:scale-110 transition">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@cesargananian" target="_blank" rel="noopener" className="hover:scale-110 transition">
          <FaYoutube />
        </a>
        <a href="https://www.imdb.com/name/nm3758500/" target="_blank" rel="noopener" className="hover:scale-110 transition">
          <FaImdb />
        </a>
        <a href="https://wa.me/5511996918254" target="_blank" rel="noopener" className="hover:scale-110 transition">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  )
}