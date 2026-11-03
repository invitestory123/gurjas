import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const DayUnfolds: React.FC = () => {
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
    <section className="relative overflow-hidden px-6 py-24">
      {/* Decorative Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 flex flex-col items-center gap-3 text-center"
      >
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]">
          The Ceremony & Festivities
        </span>
        <h2 className="font-script text-5xl text-[#1a1814] sm:text-6xl">
          Celebration Timeline
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent" />
      </motion.div>

      {/* Main Ivory-Style Card */}
      <div className="relative mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.2rem] bg-[#fffaf4]/85 px-6 pb-12 pt-12 shadow-[0_30px_80px_rgba(60,45,30,0.08)] ring-1 ring-[rgba(26,24,20,0.08)] sm:px-10"
        >
          {/* Subtle Frame */}
          <div className="pointer-events-none absolute inset-3 rounded-[1.8rem] ring-1 ring-[rgba(26,24,20,0.06)]" />

          {/* Date Header Badge */}
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]">
              {weddingData.date.day}
            </p>
            <p className="mt-2 font-display text-8xl font-medium leading-none text-[#1a1814]">
              {weddingData.date.dayNum}
            </p>
            <p className="mt-2 font-display text-xl tracking-[0.18em] text-[#4a4036]">
              {weddingData.date.month} {weddingData.date.year}
            </p>
            <p className="mt-2 text-sm tracking-wide text-[#736353]">
              {weddingData.venue.address}
            </p>
          </div>

          <div className="mx-auto my-9 h-px w-20 bg-[#1a1814]/15" />

          {/* Exact Ivory "The Day Unfolds" Timeline */}
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

