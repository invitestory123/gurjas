import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { Heart, Sparkles } from "lucide-react";

export const CoupleGallery: React.FC = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-xl flex-col items-center text-center"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8c7457]">
          Our Precious Memories
        </span>
        <h2 className="mt-3 font-script text-5xl text-[#3d121e] sm:text-6xl">
          Captured in Love
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#d4af37]/50" />
          <Heart size={16} className="fill-[#d4af37] text-[#d4af37]" />
          <div className="h-px w-12 bg-[#d4af37]/50" />
        </div>
      </motion.div>

      {/* Featured Couple Photo (2nd Uploaded Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-12 max-w-md"
      >
        {/* Ornate Gold Picture Frame */}
        <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-[#d4af37]/45 bg-[#fffdf9] p-3.5 shadow-[0_25px_60px_-15px_rgba(61,18,30,0.18)]">
          <div className="relative overflow-hidden rounded-[1.8rem] bg-[#f5ede2]">
            <img
              src={weddingData.photos.couplePhoto}
              alt="Gurjas and Shubhpreet smiling together"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Photo Caption */}
          <div className="px-4 py-5 text-center">
            <p className="font-script text-3xl text-[#3d121e]">
              Gurjas & Shubhpreet
            </p>
            <p className="mt-1 font-serif text-sm italic text-[#735e4b]">
              "From shared laughter to cherished dreams — a lifetime together begins."
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#9e8770]">
              <Sparkles size={12} className="text-[#d4af37]" />
              <span>December 2026</span>
              <Sparkles size={12} className="text-[#d4af37]" />
            </div>
          </div>

          {/* Ornate Gold Corners */}
          <div className="pointer-events-none absolute top-3 left-3 text-xs text-[#d4af37]">✦</div>
          <div className="pointer-events-none absolute top-3 right-3 text-xs text-[#d4af37]">✦</div>
          <div className="pointer-events-none absolute bottom-3 left-3 text-xs text-[#d4af37]">✦</div>
          <div className="pointer-events-none absolute bottom-3 right-3 text-xs text-[#d4af37]">✦</div>
        </div>
      </motion.div>
    </section>
  );
};

