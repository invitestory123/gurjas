import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const ForeverClosing: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#200a11] to-[#120409] px-6 pt-24 pb-16 text-center text-[#fbf7ee]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-xl"
      >
        {/* Sacred Ek Onkar Motif */}
        <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/40 bg-white/5 text-3xl font-bold text-[#fde047] shadow-[0_0_25px_rgba(212,175,55,0.3)] backdrop-blur">
          ੴ
        </div>

        {/* Closing Title from Requirement 9 */}
        <p className="font-display text-xs uppercase tracking-[0.45em] text-[#d4af37]">
          An Eternal Union
        </p>

        <h2 className="mt-4 font-script text-6xl text-[#fffef0] sm:text-7xl drop-shadow-md">
          Forever Begins Now
        </h2>

        <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

        <p className="font-serif text-2xl font-light text-[#fef3c7]">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </p>

        <p className="mt-3 font-display text-xs uppercase tracking-[0.3em] text-[#d6c4a8]">
          {weddingData.date.displayDate} · Ludhiana, Punjab
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="font-serif text-base italic leading-relaxed text-[#fef9ec]/90">
            "We thank you with all our hearts for your love, prayers, and presence as we embark on this sacred journey of lifelong companionship."
          </p>
          <p className="mt-4 font-display text-[11px] uppercase tracking-[0.28em] text-[#e5d4b8]">
            — Layal &amp; Singh Families
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-[#a8957e]">
          <span>Made with</span>
          <Heart size={12} className="fill-[#e11d48] text-[#e11d48]" />
          <span>for Gurjas &amp; Shubhpreet</span>
        </div>
      </motion.div>
    </footer>
  );
};

