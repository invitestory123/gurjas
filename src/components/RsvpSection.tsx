import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Heart, CheckCircle2 } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const RsvpSection: React.FC = () => {
  const [guestName, setGuestName] = useState("");
  const [attending, setAttending] = useState<"yes" | "regret">("yes");

  const handleWhatsAppRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    const statusText =
      attending === "yes"
        ? "Delighted to accept and celebrate with you!"
        : "Sending warm wishes and blessings from afar.";
    const namePart = guestName.trim() ? ` from ${guestName.trim()}` : "";

    const text = `Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh! Warm congratulations to Gurjas & Shubhpreet on their Roka Ceremony! RSVP${namePart}: ${statusText} (12th December 2026)`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative px-4 py-20 sm:px-6">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-lg"
      >
        {/* RSVP Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d4af37]/40 bg-[#fffdfa] p-8 shadow-[0_20px_50px_rgba(61,18,30,0.08)] sm:p-10 text-center">
          {/* Subtle Inner Border */}
          <div className="pointer-events-none absolute inset-2.5 rounded-[2.2rem] border border-[#d4af37]/20" />

          {/* Section Overline */}
          <div className="flex items-center justify-center gap-2 text-[#b58b1a]">
            <span className="h-px w-8 bg-[#d4af37]/50" />
            <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8f7457]">
              RSVP
            </span>
            <span className="h-px w-8 bg-[#d4af37]/50" />
          </div>

          <h2 className="mt-2 font-script text-5xl text-[#3d121e] sm:text-6xl">
            Celebrate With Us
          </h2>

          <p className="mx-auto mt-2 max-w-sm font-serif text-sm leading-relaxed text-[#665241]">
            Your presence will make our celebration complete. Kindly let us know if you will be joining us via WhatsApp.
          </p>

          <form onSubmit={handleWhatsAppRsvp} className="mt-7 flex flex-col gap-4">
            {/* Optional Guest Name Input */}
            <div>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name (optional)"
                className="w-full rounded-full border border-[#d4af37]/40 bg-[#fffaf2] px-5 py-3 text-center text-sm font-serif text-[#3d121e] placeholder:text-[#9c8570] focus:border-[#b58b1a] focus:outline-none focus:ring-1 focus:ring-[#b58b1a]/50"
              />
            </div>

            {/* Attendance Toggle */}
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setAttending("yes")}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  attending === "yes"
                    ? "border border-[#b58b1a] bg-[#3d121e] text-[#fbf5eb] shadow-sm"
                    : "border border-[#d4af37]/40 bg-white text-[#705b46] hover:bg-[#faf4e8]"
                }`}
              >
                <CheckCircle2 size={13} className={attending === "yes" ? "text-[#fde047]" : "text-transparent"} />
                <span>Attending with Joy</span>
              </button>

              <button
                type="button"
                onClick={() => setAttending("regret")}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  attending === "regret"
                    ? "border border-[#b58b1a] bg-[#3d121e] text-[#fbf5eb] shadow-sm"
                    : "border border-[#d4af37]/40 bg-white text-[#705b46] hover:bg-[#faf4e8]"
                }`}
              >
                <Heart size={13} className={attending === "regret" ? "text-[#fde047]" : "text-transparent"} />
                <span>Warm Blessings</span>
              </button>
            </div>

            {/* WhatsApp RSVP Button */}
            <button
              type="submit"
              className="mt-3 inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-[#25D366]/40 bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#128C7E] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle size={18} className="fill-white text-transparent" />
              <span>Confirm on WhatsApp</span>
            </button>
          </form>

          <p className="mt-4 font-display text-[10px] uppercase tracking-[0.22em] text-[#9c8774]">
            Instant reply &bull; Singh &amp; Layal Families
          </p>
        </div>
      </motion.div>
    </section>
  );
};

