import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const SeashellVows: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      {/* Soft watercolor paper background styling */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#e5d5be_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-xl"
      >
        {/* Overline: Our Invitation */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#d4af37]/50" />
          <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8c7457]">
            Our Invitation
          </span>
          <div className="h-px w-12 bg-[#d4af37]/50" />
        </div>

        {/* Title: A Love written in tides */}
        <h2 className="mt-4 font-script text-5xl text-[#3d121e] sm:text-6xl">
          A Love Written in Tides
        </h2>

        {/* Poetic description */}
        <div className="relative mt-7 space-y-4 font-serif text-lg leading-relaxed text-[#5a4838] sm:text-xl">
          <p>
            Like the quiet strength of the sea and the gentle grace of the shore,
            two souls found solace, laughter, and an eternal home in each other.
          </p>
          <p className="font-light italic text-[#78614d]">
            With hearts brimming with gratitude and love, we invite you to be part
            of our sacred beginning as we unite in prayers, tradition, and lifelong joy.
          </p>
        </div>

        {/* Decorative Rings / Hearts Emblem */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[#d4af37]">
          <span className="h-px w-16 bg-[#d4af37]/40" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#fffdf8] shadow-sm">
            <Heart size={18} className="fill-[#d4af37] text-[#d4af37]" />
          </div>
          <span className="h-px w-16 bg-[#d4af37]/40" />
        </div>

        <p className="mt-4 font-script text-3xl text-[#b58b1a]">
          {weddingData.couple.groomShort} & {weddingData.couple.brideShort}
        </p>
      </motion.div>
    </section>
  );
};

