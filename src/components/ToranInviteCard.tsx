import React from "react";
import { motion } from "framer-motion";
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

            {/* Floral Motif (like in Image 3) */}
            <div className="mx-auto my-5 flex items-center justify-center gap-3 text-[#b58b1a]">
              <span className="h-px w-10 bg-[#deb87a]/60" />
              <span className="text-base select-none">❧</span>
              <span className="h-px w-10 bg-[#deb87a]/60" />
            </div>

            {/* SON OF */}
            <div className="mt-6">
              <span className="font-sans text-[10px] font-semibold tracking-[0.34em] text-[#9c7953] uppercase">
                Son of
              </span>
              <p className="mt-1.5 font-serif text-2xl font-semibold tracking-wide text-[#5c1324] sm:text-3xl">
                {weddingData.family.groom.father}
                <br />
                <span className="text-xl sm:text-2xl font-medium">&amp; {weddingData.family.groom.mother}</span>
              </p>
              <p className="mt-1 text-[11px] tracking-wider text-[#7d6550]">
                Brother of {weddingData.family.groom.siblings.join(", ")}
              </p>
            </div>

            {/* DAUGHTER OF */}
            <div className="mt-8">
              <span className="font-sans text-[10px] font-semibold tracking-[0.34em] text-[#9c7953] uppercase">
                Daughter of
              </span>
              <p className="mt-1.5 font-serif text-2xl font-semibold tracking-wide text-[#5c1324] sm:text-3xl">
                {weddingData.family.bride.father}
                <br />
                <span className="text-xl sm:text-2xl font-medium">&amp; {weddingData.family.bride.mother}</span>
              </p>
              <p className="mt-1 text-[11px] tracking-wider text-[#7d6550]">
                Sister of {weddingData.family.bride.siblings.join(" & ")}
              </p>
            </div>

            {/* • • • (Three Dots like Image 3) */}
            <div className="my-8 flex items-center justify-center gap-2 text-base text-[#deb87a]">
              <span>&bull;</span>
              <span>&bull;</span>
              <span>&bull;</span>
            </div>

            {/* request the pleasure of your company at the wedding of */}
            <p className="mx-auto max-w-sm font-serif text-lg italic leading-relaxed text-[#4d3827] sm:text-xl">
              request the pleasure of your company at the wedding of
            </p>

            {/* BOLD NAMES IN TORAN STYLE (Image 3) */}
            <div className="mt-7 space-y-1">
              <h2 className="font-serif text-4xl font-extrabold uppercase tracking-tight text-[#5c1324] sm:text-5xl">
                {weddingData.couple.groomShort}
              </h2>
              <span className="block font-script text-3xl lowercase text-[#b58b1a] sm:text-4xl">
                and
              </span>
              <h2 className="font-serif text-4xl font-extrabold uppercase tracking-tight text-[#5c1324] sm:text-5xl">
                {weddingData.couple.brideShort}
              </h2>
            </div>

            {/* Note: In accordance with prompt: "in that dont need of venue snd date", venue and date are omitted here */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
