import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const DayUnfolds: React.FC = () => {
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

    // Decorative inner border
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, rect.width - 12, rect.height - 12);

    // Ornate gold text
    ctx.fillStyle = "#4a2d13";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 11px Marcellus, serif";
    ctx.fillText("SCRATCH TO REVEAL OUR DATE", rect.width / 2, rect.height / 2 - 10);

    ctx.font = "22px serif";
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
    if (scratchCount.current > 30 && !revealed) {
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

  const downloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Gurjas & Shubhpreet Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:wedding-gurjas-shubhpreet-2026@invitestory.in",
      "DTSTAMP:20261103T120000Z",
      "DTSTART:20261212T120000Z",
      "DTEND:20261212T173000Z",
      "SUMMARY:Gurjas & Shubhpreet - Wedding Celebration",
      "DESCRIPTION:Roka Ceremony, Ardaas, Fixing of Marriage Date and Dinner celebration at 96-F, SBS Nagar, Pakhowal Road, Ludhiana.",
      "LOCATION:96-F, SBS Nagar, Pakhowal Road, Ludhiana, Punjab - 141013",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "gurjas-shubhpreet-wedding.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6">
      {/* Decorative Title Above Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex flex-col items-center gap-2 text-center"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8e775f]">
          Save The Sacred Date
        </span>
        <h2 className="font-serif text-3xl font-medium text-[#3d121e] sm:text-4xl">
          A Gentle ceremony of prayer and celebration
        </h2>
        <p className="font-serif text-sm italic text-[#6e5845]">
          A sacred union sealed with eternal devotion
        </p>
        <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent" />
      </motion.div>

      {/* Main Combined Card: Scratch Card at Top + The Day Unfolds below */}
      <div className="relative mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#fffaf4]/90 px-6 pb-12 pt-10 shadow-[0_30px_80px_rgba(60,45,30,0.08)] ring-1 ring-[rgba(26,24,20,0.08)] sm:px-10"
        >
          {/* Subtle Inner Ring */}
          <div className="pointer-events-none absolute inset-3 rounded-[2.1rem] ring-1 ring-[rgba(26,24,20,0.06)]" />

          {/* TOP PART: Interactive Scratch Card (Replaces the static date header as requested) */}
          <div className="relative mx-auto max-w-sm text-center">
            {/* The Scratch Box */}
            <div className="relative mx-auto h-44 w-full overflow-hidden rounded-[1.8rem] border-2 border-[#d4af37]/40 bg-[#fffdf8] shadow-[0_15px_35px_rgba(61,18,30,0.08)]">
              {/* Revealed Content Behind the Scratch Canvas */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none">
                <span className="font-serif text-xs uppercase tracking-[0.24em] text-[#8a7258]">
                  {weddingData.date.day}
                </span>
                <div className="my-0.5 flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold leading-none text-[#b58b1a]">
                    {weddingData.date.dayNum}
                  </span>
                  <span className="font-script text-2xl text-[#3d121e]">th</span>
                </div>
                <span className="font-serif text-base font-semibold tracking-wide text-[#3d121e]">
                  {weddingData.date.month} &bull; {weddingData.date.year}
                </span>
                <span className="mt-1 font-display text-[11px] text-[#705b46]">
                  {weddingData.venue.address}
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

            {/* Hint message below scratch box */}
            <p className="mt-3 font-display text-[11px] uppercase tracking-wider text-[#947d66]">
              {revealed ? (
                <span className="inline-flex items-center gap-1.5 text-[#b58b1a] font-semibold">
                  <CheckCircle size={13} />
                  We cannot wait to celebrate with you ♡
                </span>
              ) : (
                "Scratch above to uncover the date"
              )}
            </p>
          </div>

          <div className="mx-auto my-9 h-px w-24 bg-[#1a1814]/15" />

          {/* BOTTOM PART: Exact Ivory "The Day Unfolds" Timeline */}
          <div className="relative mx-auto max-w-sm">
            <p className="mb-8 text-center text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]">
              The day unfolds
            </p>

            <div className="relative pl-2">
              {/* Vertical connecting line */}
              <motion.div
                className="absolute bottom-2 left-[13px] top-2 w-[1.5px] origin-top bg-gradient-to-b from-[#1a1814]/30 via-[#1a1814]/15 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Event Steps */}
              <div className="flex flex-col gap-7">
                {weddingData.program.map((step, i) => (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: 0.15 + i * 0.09,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 4 }}
                    className="flex cursor-default items-start gap-4 pl-1 group"
                  >
                    {/* Glowing Bullet Dot */}
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#1a1814]/75 ring-4 ring-[#f3ede3] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#d4af37]" />

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-lg font-medium text-[#2c261f]">
                          {step.name}
                        </p>
                        {step.time && (
                          <p className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-[#7a6d60]">
                            {step.time}
                          </p>
                        )}
                      </div>
                      {step.description && (
                        <p className="mt-0.5 font-serif text-sm italic text-[#806f5f]">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons: Add to Calendar & Maps */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#1a1814]/10">
            <button
              type="button"
              onClick={downloadICS}
              className="inline-flex items-center gap-2 rounded-full border border-[#1a1814]/15 bg-[#1a1814] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#f6f0e6] shadow-sm transition-all hover:bg-[#3d121e]"
            >
              <Calendar size={14} />
              <span>Add to Calendar</span>
            </button>
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a1814]/20 bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-[#3d2f21] shadow-sm transition-all hover:bg-[#f5ecdd]"
            >
              <MapPin size={14} className="text-[#b58b1a]" />
              <span>Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
