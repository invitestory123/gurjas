import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const ToranInviteCard: React.FC = () => {
  return (
    <section className="relative px-4 py-16 sm:px-6">
      {/* Background Soft Golden Halo */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 28 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-lg"
      >
        {/* Outer Golden Framed Container to match light theme with Toran aesthetic */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#f3e3c3] via-[#e8d1a4] to-[#deb87a] p-[3px] shadow-[0_25px_60px_-15px_rgba(61,18,30,0.15)]">
          {/* Inner Deckle-Edge Card (Referencing 3rd Uploaded Image) */}
          <div className="relative overflow-hidden rounded-[2.35rem] bg-[#fffdf9] px-6 py-14 text-center sm:px-12 sm:py-16">
            
            {/* Top Wave/Deckle Shape SVG accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#deb87a]/20 to-transparent" />

            {/* TOGETHER WITH THEIR FAMILIES */}
            <p className="font-sans text-[11px] font-semibold tracking-[0.38em] text-[#8c6b45] uppercase">
              Together With Their Families
            </p>

            {/* Floral Motif */}
            <div className="mx-auto my-5 flex items-center justify-center gap-3 text-[#b58b1a]">
              <span className="h-px w-10 bg-[#deb87a]/60" />
              <span className="text-base select-none">❧</span>
              <span className="h-px w-10 bg-[#deb87a]/60" />
            </div>

            {/* GROOM'S PARENTS (Mother first, then Father - Same font size) */}
            <div className="mt-6">
              <p className="font-serif text-2xl font-semibold tracking-wide text-[#5c1324] sm:text-3xl leading-relaxed">
                {weddingData.family.groom.mother}
                <br />
                &amp; {weddingData.family.groom.father}
              </p>
            </div>

            {/* Small Flower Separator between parents */}
            <div className="my-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#deb87a]/60" />
              <img
                src="/floral-spray.png"
                alt="flower decoration"
                className="h-7 w-7 object-contain opacity-80"
              />
              <span className="h-px w-10 bg-[#deb87a]/60" />
            </div>

            {/* BRIDE'S PARENTS (Mother first, then Father - Same font size) */}
            <div className="mt-5">
              <p className="font-serif text-2xl font-semibold tracking-wide text-[#5c1324] sm:text-3xl leading-relaxed">
                {weddingData.family.bride.mother}
                <br />
                &amp; {weddingData.family.bride.father}
              </p>
            </div>

            {/* • • • (Three Dots) */}
            <div className="my-8 flex items-center justify-center gap-2 text-base text-[#deb87a]">
              <span>&bull;</span>
              <span>&bull;</span>
              <span>&bull;</span>
            </div>

            {/* request the pleasure of your company at the roka ceremony of */}
            <p className="mx-auto max-w-sm font-serif text-base italic leading-relaxed text-[#4d3827] sm:text-lg">
              request the pleasure of your company at the roka ceremony of
            </p>

            {/* GROOM & BRIDE NAMES - MUCH SMALLER TO GIVE IMPORTANCE TO PARENTS */}
            <div className="mt-6 space-y-1">
              <h2 className="font-serif text-xl font-bold uppercase tracking-widest text-[#5c1324] sm:text-2xl">
                {weddingData.couple.groomShort}
              </h2>
              <span className="block font-script text-xl lowercase text-[#b58b1a] sm:text-2xl">
                and
              </span>
              <h2 className="font-serif text-xl font-bold uppercase tracking-widest text-[#5c1324] sm:text-2xl">
                {weddingData.couple.brideShort}
              </h2>
            </div>
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
