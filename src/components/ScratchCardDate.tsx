import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, CheckCircle } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const ScratchCardDate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);
  const scratchCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);

    // Rich metallic gold gradient
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#d7a94f");
    gradient.addColorStop(0.3, "#f7df9d");
    gradient.addColorStop(0.5, "#d4af37");
    gradient.addColorStop(0.7, "#f5e2a8");
    gradient.addColorStop(1, "#9e711d");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative border on scratch layer
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, rect.width - 12, rect.height - 12);

    // Ornate gold text
    ctx.fillStyle = "#4a2d13";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 11px Marcellus, serif";
    ctx.fillText("SCRATCH TO REVEAL OUR DATE", rect.width / 2, rect.height / 2 - 10);

    ctx.font = "24px serif";
    ctx.fillText("❋ ੴ ❋", rect.width / 2, rect.height / 2 + 18);
  }, []);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    scratchCount.current += 1;
    if (scratchCount.current > 32 && !revealed) {
      setRevealed(true);
      canvas.style.transition = "opacity 0.6s ease";
      canvas.style.opacity = "0";
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate?.([30, 40, 50]);
      }
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratch(e);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  return (
    <section className="relative px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-lg"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8e775f]">
          Save The Sacred Date
        </span>

        {/* Title from requirement: "A Gentle ceremony of prayer and celebration" */}
        <h2 className="mt-3 font-serif text-3xl font-medium text-[#3d121e] sm:text-4xl">
          A Gentle ceremony of prayer and celebration
        </h2>

        <p className="mt-2 font-serif text-sm italic text-[#6e5845]">
          A sacred union sealed with eternal devotion
        </p>

        {/* Scratch Card Box */}
        <div className="relative mx-auto mt-8 h-48 w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-[#d4af37]/40 bg-[#fffdf8] shadow-[0_20px_50px_rgba(61,18,30,0.12)]">
          {/* Revealed Date Content Underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
            <span className="font-serif text-sm uppercase tracking-[0.24em] text-[#8a7258]">
              {weddingData.date.day}
            </span>
            <div className="my-1 flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl font-bold leading-none text-[#b58b1a]">
                {weddingData.date.dayNum}
              </span>
              <span className="font-script text-3xl text-[#3d121e]">th</span>
            </div>
            <span className="font-serif text-lg font-medium tracking-wide text-[#3d121e]">
              {weddingData.date.month} · {weddingData.date.year}
            </span>
            <span className="mt-1 font-display text-[11px] uppercase tracking-[0.26em] text-[#705b46]">
              Ludhiana, Punjab
            </span>
          </div>

          {/* Canvas Scratch Surface */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={scratch}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className={`absolute inset-0 h-full w-full cursor-crosshair touch-none ${
              revealed ? "pointer-events-none" : ""
            }`}
          />
        </div>

        {/* Hint message below card */}
        <p className="mt-4 font-display text-xs uppercase tracking-widest text-[#947d66]">
          {revealed ? (
            <span className="inline-flex items-center gap-2 text-[#b58b1a] font-semibold">
              <CheckCircle size={14} />
              We cannot wait to celebrate with you ♡
            </span>
          ) : (
            "Use your finger or cursor to scratch & uncover the date"
          )}
        </p>
      </motion.div>
    </section>
  );
};

