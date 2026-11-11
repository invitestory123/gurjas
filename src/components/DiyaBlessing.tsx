import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface ReleasedLantern {
  id: number;
  x: number;
  drift: number;
  tilt: number;
  scale: number;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
  depth: "far" | "middle" | "near";
}

export const DiyaBlessing: React.FC = () => {
  const [lit, setLit] = useState(false);
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [blessingCount, setBlessingCount] = useState(108);
  const [released, setReleased] = useState<ReleasedLantern[]>([]);
  const idRef = useRef(0);

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

    // Generate batch of exact seashell watercolor lanterns
    const batch: ReleasedLantern[] = Array.from({ length: 24 }, (_, index) => {
      const depth: "far" | "middle" | "near" =
        index < 8 ? "far" : index < 18 ? "middle" : "near";
      const depthScale = depth === "far" ? 0.38 : depth === "middle" ? 0.65 : 0.98;

      return {
        id: idRef.current++,
        x: 4 + Math.random() * 92,
        drift: -90 + Math.random() * 180,
        tilt: -8 + Math.random() * 16,
        scale: depthScale * (0.8 + Math.random() * 0.4),
        duration: depth === "far" ? 7.6 : depth === "middle" ? 6.4 : 5.4,
        delay: Math.random() * 1.5,
        blur: depth === "far" ? 1.4 : depth === "middle" ? 0.4 : 0,
        opacity: depth === "far" ? 0.6 : depth === "middle" ? 0.85 : 1,
        depth,
      };
    });

    setReleased((current) => [...current.slice(-48), ...batch]);

    // Clean up after flight
    window.setTimeout(() => {
      const batchIds = new Set(batch.map((entry) => entry.id));
      setReleased((current) => current.filter((entry) => !batchIds.has(entry.id)));
    }, 10000);
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 text-center isolate">
      {/* Night Sky Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#2b0e17]/25 to-transparent" />

      {/* Seashell Constellation Background Glow */}
      <img
        src="/lantern-constellation.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-[115%] w-auto opacity-35 select-none"
      />

      {/* Exact Seashell Watercolor Sky Lanterns Floating into the Night Sky */}
      {released.map((entry) => (
        <img
          key={entry.id}
          src="/watercolor-lantern.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          className={`wish-lantern-flight pointer-events-none absolute bottom-[-14rem] select-none ${
            entry.depth === "near"
              ? "z-20 w-28 drop-shadow-[0_12px_24px_rgba(212,175,55,0.45)]"
              : entry.depth === "middle"
              ? "z-10 w-20 drop-shadow-[0_8px_18px_rgba(212,175,55,0.35)]"
              : "z-0 w-14 drop-shadow-[0_6px_12px_rgba(212,175,55,0.25)]"
          }`}
          style={
            {
              left: `${entry.x}%`,
              opacity: entry.opacity,
              filter: `blur(${entry.blur}px)`,
              "--wish-tilt": `${entry.tilt}deg`,
              "--wish-drift": `${entry.drift}px`,
              "--wish-scale": entry.scale,
              "--wish-duration": `${entry.duration}s`,
              "--wish-delay": `${entry.delay}s`,
            } as React.CSSProperties
          }
        />
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

        {/* The Diya Interactive Target */}
        <div className="relative mx-auto mt-8 flex h-64 w-64 items-center justify-center">
          {/* Flame Ambient Halo */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-full transition-all duration-1000 ${
              lit
                ? "bg-[#d4af37]/35 blur-3xl scale-125"
                : holding
                ? "bg-[#d4af37]/20 blur-xl scale-110"
                : "opacity-0"
            }`}
          />

          {/* SVG Progress Arc (Holding indicator) */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90">
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

          {/* Touch-and-Hold Button - prevents context menu and copy/save image popup */}
          <button
            type="button"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerCancel={endHold}
            onPointerLeave={endHold}
            onContextMenu={(e) => e.preventDefault()}
            className="group relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-[#d4af37]/45 bg-gradient-to-b from-[#fffbf4] to-[#f5ead6] p-4 shadow-[0_15px_40px_rgba(61,18,30,0.18)] transition-transform duration-300 active:scale-95 select-none focus:outline-none touch-none"
            style={{
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              userSelect: "none",
              touchAction: "none",
            }}
            aria-label="Press and hold the diya to send your blessing"
          >
            {/* The 3rd Uploaded Image: Terracotta Diya with Golden Flame (Click-shielded from save image) */}
            <div
              className="pointer-events-none relative flex flex-col items-center justify-center select-none"
              style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
            >
              {/* Extra golden flame aura when lit or holding */}
              <div
                className={`pointer-events-none absolute -top-4 h-16 w-16 rounded-full bg-amber-400/40 blur-xl transition-opacity duration-500 ${
                  lit ? "opacity-100 animate-pulse" : holding ? "opacity-70" : "opacity-0"
                }`}
              />

              <motion.img
                src="/diya-lamp.png"
                alt="Ceremonial Diya Lamp"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className={`pointer-events-none relative h-28 w-auto object-contain transition-all duration-500 select-none ${
                  lit
                    ? "scale-105 filter drop-shadow-[0_0_24px_rgba(245,158,11,0.9)]"
                    : holding
                    ? "scale-100 filter drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                    : "scale-95 opacity-85 filter drop-shadow-[0_4px_10px_rgba(61,18,30,0.15)]"
                }`}
                style={{
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
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
            <span className="pointer-events-none mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8c6b4d] select-none">
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
