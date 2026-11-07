import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Copy, Check } from "lucide-react";
import { weddingData } from "../data/weddingData";

export const SeashellVenue: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.venue.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative px-5 py-20 sm:px-6">
      {/* Background Floral Accents */}
      <img
        src="/floral-spray.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-10 w-32 opacity-30 animate-float-slow"
      />
      <img
        src="/floral-spray.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-10 w-32 -scale-x-100 opacity-30 animate-float-slow"
        style={{ animationDelay: "2.5s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-lg"
      >
        {/* Section Heading like Seashell */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="font-display text-[11px] uppercase tracking-[0.42em] text-[#8c7457]">
            Find Your Way
          </span>
          <h2 className="mt-2 font-script text-5xl text-[#3d121e] sm:text-6xl">
            The Venue
          </h2>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
        </div>

        {/* Seashell Map & Venue Card */}
        <div className="overflow-hidden rounded-[2.2rem] border border-[#d4af37]/35 bg-[#fffdfa] shadow-[0_20px_50px_rgba(61,18,30,0.08)]">
          {/* Venue Image (2nd Uploaded Image: Illuminated Venue Residence) */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#faf4ea]">
            <img
              src="/venue-night.jpg"
              alt="Singh Residence Illuminated Venue"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle Gradient Veil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fffdfa] via-transparent to-transparent opacity-80" />
            
            {/* Pulsing Map Pin Emblem */}
            <div className="absolute right-4 bottom-4 flex items-center justify-center">
              <span className="absolute -inset-2 rounded-full bg-[#d4af37]/40 animate-ping" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#3d121e]/90 text-white shadow-lg backdrop-blur">
                <MapPin size={18} className="text-[#fde047]" />
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="px-6 pb-8 pt-5 text-center sm:px-8">
            <span className="font-display text-[11px] uppercase tracking-[0.38em] text-[#917a63]">
              Celebration
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-[#3d121e] sm:text-3xl">
              {weddingData.venue.name}
            </h3>
            
            <p className="mx-auto mt-2 max-w-sm font-serif text-sm leading-relaxed text-[#6b5644]">
              {weddingData.venue.address}
            </p>

            {/* Action Buttons: Open in Google Maps & Copy Address */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href={weddingData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#3d121e] to-[#5a1b2d] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#fbf6ec] shadow-[0_8px_20px_rgba(61,18,30,0.2)] transition-all hover:scale-105 active:scale-95"
              >
                <Navigation size={15} className="text-[#fde047]" />
                <span>Open in Google Maps</span>
              </a>

              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#fdfaf4] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#634e3b] shadow-sm transition-all hover:bg-[#f6eee0] active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-700">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[#b58b1a]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
