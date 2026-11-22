import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

export const SeashellVows: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-center">
      {/* Soft watercolor paper background styling */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#e5d5be_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-xl"
      >
        {/* Title: Forever begins now in calligraphy font */}
        <h2 className="mb-7 font-script text-5xl text-[#3d121e] sm:text-6xl">
          Forever begins now
        </h2>

        {/* Story description - both paragraphs unified in same font */}
        <div className="relative space-y-6 font-serif text-lg leading-relaxed text-[#5a4838] sm:text-xl">
          <p>
            Sometimes, all it takes is a nudge from a friend to change your life. What began with an unexpected hello blossomed into endless conversations, a beautiful friendship and eventually, love.
          </p>
          <p>
            With our families by our side and hearts full of joy, we invite you to our Roka Ceremony as we begin our journey to Forever.
          </p>
        </div>

        {/* Decorative Golden Heart and Lines */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[#d4af37]">
          <span className="h-px w-16 bg-[#d4af37]/40" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#fffdf8] shadow-sm">
            <Heart size={18} className="fill-[#d4af37] text-[#d4af37]" />
          </div>
          <span className="h-px w-16 bg-[#d4af37]/40" />
        </div>

        {/* Gentle Bouncing Scroll Cue */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.34em] text-[#a18c77]"
        >
          <span>Scroll Down</span>
          <ChevronDown size={14} className="text-[#b58b1a]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

