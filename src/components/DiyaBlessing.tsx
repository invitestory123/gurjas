import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface FloatingLantern {
  id: number;
  x: number;
  drift: number;
  scale: number;
  duration: number;
  delay: number;
}

export const DiyaBlessing: React.FC = () => {
  const [lit, setLit] = useState(false);
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [blessingCount, setBlessingCount] = useState(108);
  const [lanterns, setLanterns] = useState<FloatingLantern[]>([]);

  const holdTimer = useRef<number | null>(null);
  const progressInterval = useRef<number | null>(null);

  const startHold = () => {
    if (lit) return;
    setHolding(true);
    setProgress(0);

    const startTime = Date.now();
    const duration = 1100;

    progressInterval.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        completeBlessing();
      }
    }, 16);
  };

  const endHold = () => {
    if (lit) return;
    setHolding(false);
    setProgress(0);
    if (progressInterval.current) clearInterval(progressInterval.current);
    if (holdTimer.current) clearTimeout(holdTimer.current);
  };

  const completeBlessing = () => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    setHolding(false);
    setProgress(100);
    setLit(true);
    setBlessingCount((c) => c + 1);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.([20, 35, 45]);
    }

    // Generate batch of floating seashell lanterns
    const batch: FloatingLantern[] = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: 8 + Math.random() * 84,
      drift: -45 + Math.random() * 90,
      scale: 0.65 + Math.random() * 0.65,
      duration: 6.5 + Math.random() * 4.5,
      delay: Math.random() * 1.6,
    }));
    setLanterns(batch);
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 text-center">
      {/* Night Sky Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#2b0e17]/25 to-transparent" />

      {/* Floating Seashell Sky Lanterns drifting upwards */}
      {lanterns.map((lantern) => (
        <motion.div
          key={lantern.id}
          initial={{
            y: "40vh",
            x: `${lantern.x}vw`,
            scale: lantern.scale * 0.7,
            opacity: 0,
          }}
          animate={{
            y: "-85vh",
            x: `calc(${lantern.x}vw + ${lantern.drift}px)`,
            scale: lantern.scale,
            opacity: [0, 0.95, 0.9, 0],
          }}
          transition={{
            duration: lantern.duration,
            delay: lantern.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="pointer-events-none absolute z-20 flex flex-col items-center"
        >
          {/* Seashell-style floating lantern design */}
          <div className="relative flex flex-col items-center filter drop-shadow-[0_0_18px_rgba(251,191,36,0.85)]">
            <svg width="44" height="48" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id={`glow-${lantern.id}`} cx="50%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </radialGradient>
              </defs>
              {/* Scalloped Seashell Dome */}
              <path
                d="M24 4 C12 4 4 14 4 28 C4 38 14 44 24 44 C34 44 44 38 44 28 C44 14 36 4 24 4 Z"
                fill={`url(#glow-${lantern.id})`}
                stroke="#fef08a"
                strokeWidth="1.2"
              />
              {/* Seashell Fluted Ribs */}
              <path
                d="M24 4 L24 44 M18 6 C20 18 20 32 20 44 M30 6 C28 18 28 32 28 44 M11 12 C16 22 17 34 18 42 M37 12 C32 22 31 34 30 42 M6 20 C12 28 15 36 17 40 M42 20 C36 28 33 36 31 40"
                stroke="#fff7ed"
                strokeWidth="0.9"
                opacity="0.75"
              />
              {/* Radiant Inner Core */}
              <circle cx="24" cy="27" r="5" fill="#ffffff" />
              {/* Base Ring & Silk Tassel */}
              <ellipse cx="24" cy="44" rx="8" ry="2.5" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
              <line x1="24" y1="46" x2="24" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-lg"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#917961]">
          Ritual of Blessings
        </span>

        <h2 className="mt-3 font-script text-5xl text-[#3d121e] sm:text-6xl">
          Light the Lamp of Blessings
        </h2>

        <p className="mx-auto mt-2 max-w-md font-serif text-sm leading-relaxed text-[#665241]">
          {lit
            ? "The sacred flame is shining bright. Your heartfelt prayers have reached the couple."
            : "Press and hold the ceremonial diya to ignite the flame and release floating lanterns into the night sky."}
        </p>

        {/* The Diya / Lantern Interactive Target */}
        <div className="relative mx-auto mt-8 flex h-64 w-64 items-center justify-center">
          {/* Flame Ambient Halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              lit
                ? "bg-[#d4af37]/35 blur-3xl scale-125"
                : holding
                ? "bg-[#d4af37]/20 blur-xl scale-110"
                : "opacity-0"
            }`}
          />

          {/* SVG Progress Arc (Holding indicator) */}
          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="100"
              className="fill-none stroke-[#d4af37]/20"
              strokeWidth="3"
            />
            <circle
              cx="128"
              cy="128"
              r="100"
              className="fill-none stroke-[#d4af37]"
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 100}
              strokeDashoffset={2 * Math.PI * 100 * (1 - progress / 100)}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 30ms linear" }}
            />
          </svg>

          {/* Touch-and-Hold Button */}
          <button
            type="button"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerCancel={endHold}
            onPointerLeave={endHold}
            className="group relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-[#d4af37]/45 bg-gradient-to-b from-[#fffbf4] to-[#f5ead6] p-4 shadow-[0_15px_40px_rgba(61,18,30,0.18)] transition-transform duration-300 active:scale-95 select-none focus:outline-none"
            aria-label="Press and hold the diya to send your blessing"
          >
            {/* The 3rd Uploaded Image: Terracotta Diya with Golden Flame */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Extra golden flame aura when lit or holding */}
              <div
                className={`pointer-events-none absolute -top-4 h-16 w-16 rounded-full bg-amber-400/40 blur-xl transition-opacity duration-500 ${
                  lit ? "opacity-100 animate-pulse" : holding ? "opacity-70" : "opacity-0"
                }`}
              />

              <motion.img
                src="/diya-lamp.png"
                alt="Ceremonial Diya Lamp"
                className={`relative h-28 w-auto object-contain transition-all duration-500 ${
                  lit
                    ? "scale-105 filter drop-shadow-[0_0_24px_rgba(245,158,11,0.9)]"
                    : holding
                    ? "scale-100 filter drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                    : "scale-95 opacity-85 filter drop-shadow-[0_4px_10px_rgba(61,18,30,0.15)]"
                }`}
                animate={
                  lit
                    ? {
                        y: [0, -3, 0],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Instruction Cue / State Badge */}
            <span className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8c6b4d]">
              {lit ? "Blessed ♡" : holding ? "Lighting..." : "Hold to Light"}
            </span>
          </button>
        </div>

        {/* Counter & Status */}
        <div className="mt-8 flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#806852]">
            <Sparkles size={14} className="text-[#b58b1a]" />
            <span>{blessingCount} Blessings Sent</span>
            <Sparkles size={14} className="text-[#b58b1a]" />
          </div>
          <AnimatePresence>
            {lit && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#fffcf5] px-4 py-1.5 text-xs text-[#785b3b] shadow-sm"
              >
                <Heart size={13} className="fill-[#e11d48] text-[#e11d48]" />
                <span>Thank you for sending your prayers &amp; love!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
