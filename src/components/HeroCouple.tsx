import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { ChevronDown, Sparkles } from "lucide-react";

export const HeroCouple: React.FC = () => {
  return (
    <section className="relative px-4 pt-10 pb-20 sm:px-6">
      {/* Subtle Warm Amber Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-full max-w-lg -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent)] blur-3xl" />

      {/* Top Header: SAVE THE DATE (Exactly like Image 2) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex flex-col items-center text-center"
      >
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.44em] text-[#917961]">
          Save The Date
        </span>
        <div className="mt-3 h-px w-28 bg-[#d4af37]/45" />
      </motion.div>

      {/* Center: The Ghibli Couple (Turban Groom & Punjabi Suit Bride, holding Childhood Photos - Image 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-8 max-w-md"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-transparent via-[#faf4ea]/60 to-[#faf4ea] p-2">
          <img
            src={weddingData.photos.ghibliCouple}
            alt="Gurjas & Shubhpreet in Studio Ghibli watercolor style holding childhood photos"
            className="mx-auto h-auto w-full max-w-[380px] object-contain drop-shadow-[0_15px_30px_rgba(61,18,30,0.12)] transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      {/* Bottom Text: Date, Tagline, & Names (Exactly like Image 2) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-6 flex flex-col items-center text-center"
      >
        {/* Date text */}
        <p className="font-display text-xs uppercase tracking-[0.32em] text-[#856e58]">
          Saturday, December 12th, 2026
        </p>

        {/* Tagline text */}
        <p className="mt-2.5 font-serif text-lg italic text-[#544131] sm:text-xl">
          “Together since childhood. Forever begins now.”
        </p>

        {/* Couple Names in Large Elegant Script (Requirement 3) */}
        <h1 className="mt-3 font-script text-6xl text-[#3d121e] sm:text-7xl leading-tight">
          {weddingData.couple.groomShort}{" "}
          <span className="font-serif text-3xl font-light italic text-[#d4af37] sm:text-4xl">
            &amp;
          </span>{" "}
          {weddingData.couple.brideShort}
        </h1>

        <p className="mt-1 font-display text-[12px] uppercase tracking-[0.24em] text-[#8f7760]">
          {weddingData.couple.groom} &bull; {weddingData.couple.bride}
        </p>

        {/* Scroll Cue */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-6 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-[#a18c77]"
        >
          <span>Scroll</span>
          <ChevronDown size={14} className="text-[#b58b1a]" />
        </motion.div>
      </motion.div>

      {/* The 1st Uploaded Family Photo */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-20 max-w-lg text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-2 text-[#d4af37]">
          <Sparkles size={16} />
          <span className="font-display text-[11px] uppercase tracking-[0.34em] text-[#8a7259]">
            United With Family
          </span>
          <Sparkles size={16} />
        </div>

        <h2 className="font-serif text-3xl font-medium text-[#3d121e] sm:text-4xl">
          Blessed by Love &amp; Elders
        </h2>

        <p className="mx-auto mt-2 max-w-md font-serif text-sm leading-relaxed text-[#6b5847]">
          With the divine grace of Almighty God and the joyous blessings of our parents and siblings, two families celebrate as one.
        </p>

        {/* Family Photo Card */}
        <div className="relative mx-auto mt-7 overflow-hidden rounded-[2.2rem] border-2 border-[#d4af37]/35 bg-[#fffaf2] p-3.5 shadow-[0_20px_50px_rgba(61,18,30,0.12)]">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <img
              src={weddingData.photos.familyPhoto}
              alt="Gurjas and Shubhpreet Family Portrait"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="px-3 py-4 text-center">
            <p className="font-script text-3xl text-[#3d121e]">
              The Layal &amp; Singh Families
            </p>
            <p className="mt-1 font-display text-[10px] uppercase tracking-[0.24em] text-[#8a735c]">
              Warmth &bull; Togetherness &bull; Joy
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
