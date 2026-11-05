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
        {/* Title: Our Forever Begins */}
        <h2 className="font-script text-5xl text-[#3d121e] sm:text-6xl">
          Our Forever Begins
        </h2>

        {/* Story description */}
        <div className="relative mt-7 space-y-5 font-serif text-base leading-relaxed text-[#5a4838] sm:text-lg">
          <p>
            Sometimes, all it takes is a nudge from a friend to change your life. What began with an unexpected hello blossomed into endless conversations, a beautiful friendship and eventually, love.
          </p>
          <p className="font-light italic text-[#78614d]">
            Now, with our families by our side and hearts full of joy, we invite you to our Roka Ceremony as we officially begin our journey to Forever.
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

