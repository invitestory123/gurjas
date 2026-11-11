import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const ForeverClosing: React.FC = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#fffbf3] to-[#f7eedc] px-6 pt-20 pb-16 text-center text-[#3d121e]">
      {/* Seashell Floral Sprays in corners */}
      <img
        src="/floral-spray.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-6 w-36 opacity-35 animate-float-slow"
      />
      <img
        src="/floral-spray.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-20 w-36 -scale-x-100 opacity-35 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Warm Ambient Radial Halo */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-xl"
      >
        {/* Sacred Gold Ek Onkar Medallion (1st Uploaded Image) */}
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          <div className="absolute -inset-3 rounded-full bg-[#d4af37]/25 blur-lg" />
          <img
            src={weddingData.photos.ekOnkar}
            alt="Sacred Ek Onkar"
            className="relative h-20 w-20 rounded-full object-cover shadow-[0_6px_20px_rgba(212,175,55,0.3)] ring-2 ring-[#d4af37]/50"
          />
        </div>

        {/* Closing Title */}
        <p className="font-display text-[12px] uppercase tracking-[0.44em] text-[#8f7457]">
          An Eternal Union
        </p>

        <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

        <p className="font-serif text-2xl font-medium tracking-wide text-[#591626]">
          {weddingData.couple.groom} &bull; {weddingData.couple.bride}
        </p>

        <p className="mt-2 font-display text-xs uppercase tracking-[0.28em] text-[#806752]">
          {weddingData.date.displayDate} &bull; Ludhiana, Punjab
        </p>

        {/* Message Card in Seashell Linen Paper Style */}
        <div className="mx-auto mt-8 max-w-md rounded-[2rem] border border-[#d4af37]/35 bg-[#fffdf9]/95 p-6 shadow-[0_15px_40px_rgba(61,18,30,0.06)] backdrop-blur">
          <p className="font-serif text-base italic leading-relaxed text-[#594432]">
            "We thank you with all our hearts for your love, prayers, and presence as we embark on this sacred journey of lifelong companionship."
          </p>
          <div className="mx-auto my-3 h-px w-16 bg-[#d4af37]/30" />
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-[#856c56]">
            &mdash; Singh &amp; Layal Families
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#99816b]">
          <span>Made with</span>
          <Heart size={12} className="fill-[#e11d48] text-[#e11d48]" />
          <span>for Gurjas &amp; Shubhpreet</span>
        </div>
      </motion.div>
    </footer>
  );
};
