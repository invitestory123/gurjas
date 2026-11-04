import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { weddingData } from "../data/weddingData";
import { ChevronDown, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Script name revealed letter by letter like in Ghibli template */
function ScriptName({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="inline-block whitespace-nowrap">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: delay + i * 0.045, ease: EASE }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export const HeroCouple: React.FC = () => {
  /* Mouse/pointer parallax like in Ghibli template */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  
  const couplePX = useTransform(sx, (v) => v * 16);
  const couplePY = useTransform(sy, (v) => v * 10);
  const glowX = useTransform(sx, (v) => v * 35);
  const glowY = useTransform(sy, (v) => v * 25);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative px-4 pt-12 pb-24 sm:px-6 overflow-hidden">
      {/* Warm Ghibli ambient sunlight glow that tracks pointer */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-[32%] h-[70vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(245,212,126,0.28),transparent)] blur-3xl"
      />

      {/* TOP: SAVE THE DATE (Exact Ghibli Styling) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="relative z-10 mx-auto flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.45em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="font-display text-[12px] font-medium uppercase text-[#8c7457]"
        >
          Save The Date
        </motion.span>
        
        {/* Animated Hairline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="mt-3 h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent"
        />
      </motion.div>

      {/* CENTER: GHIBLI COUPLE ILLUSTRATION (NO WHITE BACKGROUND, NO BOX) */}
      <motion.div
        style={{ x: couplePX, y: couplePY }}
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.2, ease: EASE }}
        className="relative z-10 mx-auto mt-6 flex max-w-md items-center justify-center"
      >
        {/* Transparent PNG couple seamlessly blending into page background */}
        <img
          src="/ghibli-couple-transparent.png"
          alt="Gurjas and Shubhpreet in Studio Ghibli watercolor anime style"
          className="relative max-h-[460px] w-auto max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(61,18,30,0.12)] transition-transform duration-700 hover:scale-[1.02]"
        />
      </motion.div>

      {/* BOTTOM: DATE, TAGLINE & LETTER-BY-LETTER NAMES */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.45, ease: EASE }}
        className="relative z-10 mx-auto mt-6 flex flex-col items-center text-center"
      >
        {/* Date text */}
        <p className="font-display text-xs uppercase tracking-[0.34em] text-[#856e58]">
          Saturday, December 12th, 2026
        </p>

        {/* Tagline */}
        <p className="mt-2.5 font-serif text-lg italic text-[#544131] sm:text-xl">
          “Together since childhood. Forever begins now.”
        </p>

        {/* Calligraphy Names revealed letter-by-letter */}
        <h1 className="mt-3 font-script text-6xl text-[#3d121e] sm:text-7xl leading-tight">
          <ScriptName text={weddingData.couple.groomShort} delay={0.6} />
          <span className="mx-3 inline-block font-serif text-3xl font-light italic text-[#d4af37] sm:text-4xl">
            &amp;
          </span>
          <ScriptName text={weddingData.couple.brideShort} delay={0.9} />
        </h1>

        <p className="mt-1 font-display text-[12px] uppercase tracking-[0.26em] text-[#8f7760]">
          {weddingData.couple.groom} &bull; {weddingData.couple.bride}
        </p>

        {/* Gentle Bouncing Scroll Cue */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-7 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.34em] text-[#a18c77]"
        >
          <span>Scroll</span>
          <ChevronDown size={14} className="text-[#b58b1a]" />
        </motion.div>
      </motion.div>

      {/* 1st UPLOADED FAMILY PHOTO */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="relative mx-auto mt-24 max-w-lg text-center"
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
