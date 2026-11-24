import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";

const EASE = [0.22, 1, 0.36, 1] as const;

export const FamilyBlessing: React.FC = () => {
  return (
    <section className="relative px-4 pb-20 pt-4 sm:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="relative mx-auto max-w-lg text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-2 text-[#d4af37]">
          <Sparkles size={16} />
          <span className="font-display text-[11px] uppercase tracking-[0.34em] text-[#8a7259]">
            Two Families, One Beautiful Beginning
          </span>
          <Sparkles size={16} />
        </div>

        <h2 className="font-serif text-3xl font-medium text-[#3d121e] sm:text-4xl">
          Blessed by love of elders
        </h2>

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
              The Hora &amp; Layal Families
            </p>
          </div>
        </div>

        {/* Gentle Bouncing Scroll Cue */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.34em] text-[#a18c77]"
        >
          <span>Scroll Down</span>
          <ChevronDown size={14} className="text-[#b58b1a]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

