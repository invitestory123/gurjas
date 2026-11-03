import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { MapPin, Calendar, Clock } from "lucide-react";

export const ToranInviteCard: React.FC = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6">
      {/* Background Motifs */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-xl"
      >
        {/* The Toran / Deckle Parchment Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#d4af37]/35 bg-[#fffdf8] px-6 py-12 text-center shadow-[0_30px_70px_rgba(61,18,30,0.12)] sm:px-12 sm:py-16">
          {/* Subtle Inner Border Filigree */}
          <div className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-[#d4af37]/25" />

          {/* Sacred Gurmukhi Emblem */}
          <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#faf5eb] text-2xl font-bold text-[#b58b1a]">
            ੴ
          </div>

          <p className="mt-4 font-display text-[11px] uppercase tracking-[0.38em] text-[#87725a]">
            With the divine grace of Almighty God
          </p>

          <p className="mt-1 font-script text-2xl text-[#3d121e]">
            Together with their families
          </p>

          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

          {/* Parents & Siblings Blocks */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-center">
            {/* Groom's Family Side */}
            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#faf6ee]/70 p-4">
              <span className="font-display text-[10px] uppercase tracking-[0.28em] text-[#8f7961]">
                Groom's Parents
              </span>
              <p className="mt-2 font-serif text-lg font-medium text-[#3d121e]">
                {weddingData.family.groom.father}
                <br />
                <span className="text-base text-[#5c4a39]">&amp; {weddingData.family.groom.mother}</span>
              </p>
              <div className="mt-3 pt-3 border-t border-[#d4af37]/15">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#917d69]">
                  Groom's Sibling
                </span>
                <p className="mt-1 font-serif text-sm font-normal text-[#4a3b2e]">
                  {weddingData.family.groom.siblings.join(", ")}
                </p>
              </div>
            </div>

            {/* Bride's Family Side */}
            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#faf6ee]/70 p-4">
              <span className="font-display text-[10px] uppercase tracking-[0.28em] text-[#8f7961]">
                Bride's Parents
              </span>
              <p className="mt-2 font-serif text-lg font-medium text-[#3d121e]">
                {weddingData.family.bride.father}
                <br />
                <span className="text-base text-[#5c4a39]">&amp; {weddingData.family.bride.mother}</span>
              </p>
              <div className="mt-3 pt-3 border-t border-[#d4af37]/15">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#917d69]">
                  Bride's Siblings
                </span>
                <p className="mt-1 font-serif text-sm font-normal text-[#4a3b2e]">
                  {weddingData.family.bride.siblings.join(" & ")}
                </p>
              </div>
            </div>
          </div>

          {/* Formal Invitation Text */}
          <p className="mx-auto mt-8 max-w-md font-serif text-base italic leading-relaxed text-[#614e3e]">
            request the honour of your presence and warm blessings at the joyous celebration of the wedding ceremonies of their beloved
          </p>

          {/* Bride & Groom Large Royal Names */}
          <div className="mt-6">
            <h3 className="font-script text-5xl leading-none text-[#3d121e] sm:text-6xl">
              {weddingData.couple.groom}
            </h3>
            <span className="my-2 block font-serif text-xl italic text-[#d4af37]">
              with
            </span>
            <h3 className="font-script text-5xl leading-none text-[#3d121e] sm:text-6xl">
              {weddingData.couple.bride}
            </h3>
          </div>

          <div className="mx-auto my-7 h-px w-28 bg-[#d4af37]/35" />

          {/* Toran Three-Column Date Banner */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="text-right">
              <span className="block font-serif text-sm tracking-[0.2em] text-[#705b46] uppercase">
                {weddingData.date.day}
              </span>
              <span className="font-display text-xs text-[#96826d]">5:30 PM Onwards</span>
            </div>

            <div className="h-12 w-px bg-[#d4af37]/40" />

            <div className="text-center">
              <span className="block font-display text-5xl leading-none font-semibold text-[#b58b1a]">
                {weddingData.date.dayNum}
              </span>
              <span className="block font-sans text-[10px] tracking-[0.28em] text-[#78644e] uppercase">
                {weddingData.date.month} {weddingData.date.year}
              </span>
            </div>

            <div className="h-12 w-px bg-[#d4af37]/40" />

            <div className="text-left">
              <span className="block font-serif text-sm tracking-[0.2em] text-[#705b46] uppercase">
                Ludhiana
              </span>
              <span className="font-display text-xs text-[#96826d]">Punjab, India</span>
            </div>
          </div>

          {/* Venue Details */}
          <div className="mt-8 rounded-2xl bg-[#fdf9f2] p-4 text-center border border-[#d4af37]/20">
            <p className="font-display text-[10px] uppercase tracking-[0.32em] text-[#8f775d]">
              Celebration Venue
            </p>
            <p className="mt-1 font-serif text-base font-semibold text-[#3d121e]">
              {weddingData.venue.address}
            </p>
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fffdf8] px-5 py-2 text-xs font-medium text-[#7d644e] transition-all hover:bg-[#3d121e] hover:text-white"
            >
              <MapPin size={14} className="text-[#d4af37]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

