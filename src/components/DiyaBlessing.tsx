import React, { useState, useRef, useEffect } from "react";
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

    // Generate batch of floating lanterns
    const batch: FloatingLantern[] = Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + i,
      x: 10 + Math.random() * 80,
      drift: -40 + Math.random() * 80,
      scale: 0.6 + Math.random() * 0.7,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 1.5,
    }));
    setLanterns(batch);
  };

  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">
      {/* Night Sky Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#2b0e17]/25 to-transparent" />

      {/* Floating lanterns in flight */}
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
            y: "-80vh",
            x: `calc(${lantern.x}vw + ${lantern.drift}px)`,
            scale: lantern.scale,
            opacity: [0, 0.95, 0.85, 0],
          }}
          transition={{
            duration: lantern.duration,
            delay: lantern.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="pointer-events-none absolute z-20 flex flex-col items-center"
        >
          {/* Lantern Silhouette & Glow */}
          <div className="relative flex h-14 w-10 flex-col items-center justify-between rounded-t-lg rounded-b-md border border-[#fef08a]/60 bg-gradient-to-b from-[#f59e0b] to-[#d97706] p-1 shadow-[0_0_20px_rgba(251,191,36,0.8)]">
            <div className="h-1.5 w-6 rounded-full bg-[#fde68a]" />
            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_10px_#fff]" />
            <div className="h-1.5 w-6 rounded-full bg-[#b45309]" />
          </div>
          <div className="h-2 w-0.5 bg-[#fde68a]/50" />
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
          Sacred Ritual of Blessings
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
        <div className="relative mx-auto mt-10 flex h-60 w-60 items-center justify-center">
          {/* Flame Ambient Halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              lit
                ? "bg-[#d4af37]/30 blur-2xl scale-125"
                : holding
                ? "bg-[#d4af37]/20 blur-xl scale-110"
                : "opacity-0"
            }`}
          />

          {/* SVG Progress Arc (Holding indicator) */}
          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle
              cx="120"
              cy="120"
              r="90"
              className="fill-none stroke-[#d4af37]/20"
              strokeWidth="3"
            />
            <circle
              cx="120"
              cy="120"
              r="90"
              className="fill-none stroke-[#d4af37]"
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 90}
              strokeDashoffset={2 * Math.PI * 90 * (1 - progress / 100)}
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
            className="group relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[#d4af37]/40 bg-gradient-to-b from-[#fffbf2] to-[#f4e8d3] p-4 shadow-[0_15px_35px_rgba(61,18,30,0.18)] transition-transform duration-300 active:scale-95 select-none focus:outline-none"
            aria-label="Press and hold the diya to send your blessing"
          >
            {/* The Diya / Lantern SVG */}
            <div className="relative flex flex-col items-center">
              {/* Flame (animated when lit or holding) */}
              <div
                className={`relative mb-1 flex items-center justify-center transition-all duration-500 ${
                  lit
                    ? "opacity-100 scale-125"
                    : holding
                    ? "opacity-80 scale-95"
                    : "opacity-35 scale-75"
                }`}
              >
                <div
                  className={`h-9 w-6 rounded-full bg-gradient-to-t from-[#ea580c] via-[#f59e0b] to-[#fef08a] shadow-[0_0_20px_#f59e0b] ${
                    lit ? "diya-flame-anim" : ""
                  }`}
                  style={{ borderRadius: "50% 50% 35% 35% / 70% 70% 30% 30%" }}
                />
                <div className="absolute bottom-1 h-3 w-2 rounded-full bg-white opacity-90 blur-[1px]" />
              </div>

              {/* Brass Diya Bowl SVG */}
              <svg viewBox="0 0 100 50" className="h-10 w-20 text-[#b58b1a] drop-shadow">
                <defs>
                  <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f3d078" />
                    <stop offset="50%" stopColor="#c5992a" />
                    <stop offset="100%" stopColor="#7a5509" />
                  </linearGradient>
                </defs>
                <ellipse cx="50" cy="15" rx="42" ry="10" fill="url(#brassGrad)" />
                <path d="M 8 15 Q 8 40 50 40 Q 92 40 92 15 Z" fill="url(#brassGrad)" />
                <ellipse cx="50" cy="13" rx="38" ry="7" fill="#5c3f08" opacity="0.6" />
              </svg>
            </div>

            {/* Percentage or Label */}
            <span className="mt-2 font-display text-[11px] font-semibold tracking-wider text-[#7a5f45]">
              {lit ? "BLESSED ✦" : holding ? `${progress}%` : "HOLD TO BLESS"}
            </span>
          </button>
        </div>

        {/* Blessings Counter */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs tracking-wider text-[#826e5a]">
          <Heart size={14} className="fill-[#b58b1a] text-[#b58b1a]" />
          <span>
            <strong className="font-semibold text-[#3d121e]">{blessingCount}</strong> hearts have offered blessings
          </span>
        </div>
      </motion.div>
    </section>
  );
};

