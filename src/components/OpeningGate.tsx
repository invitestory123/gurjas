import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";

interface OpeningGateProps {
  onOpen: () => void;
}

export const OpeningGate: React.FC<OpeningGateProps> = ({ onOpen }) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          key="gate-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden px-6 py-10 text-center select-none"
          style={{
            background: "radial-gradient(ellipse at center, #fffdf8 0%, #fbf5eb 50%, #f5ead6 100%)",
          }}
        >
          {/* Subtle noise / paper texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
            style={{
              backgroundImage:
                "radial-gradient(#d4af37 0.75px, transparent 0.75px), radial-gradient(#d4af37 0.75px, #fbf5eb 0.75px)",
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0, 15px 15px",
            }}
          />

          {/* Top Section: Sacred Gold Ek Onkar Image (1st Uploaded Image) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center pt-2"
          >
            {/* The 1st Uploaded Image: Ornate 3D Gold Ek Onkar Medallion */}
            <div className="relative mb-3 flex items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-[#d4af37]/25 blur-xl animate-pulse" />
              <img
                src={weddingData.photos.ekOnkar}
                alt="Sacred Ek Onkar"
                className="relative h-24 w-24 rounded-full object-cover shadow-[0_8px_30px_rgba(212,175,55,0.4)] ring-2 ring-[#d4af37]/60"
              />
            </div>

            <p className="font-display text-[11px] uppercase tracking-[0.38em] text-[#8e7a63]">
              With God's Grace
            </p>
            <h1 className="mt-2 font-script text-4xl text-[#3d121e] sm:text-5xl">
              {weddingData.couple.groomShort} & {weddingData.couple.brideShort}
            </h1>
            <p className="mt-2 max-w-xs font-serif text-sm italic tracking-wide text-[#705e4d]">
              Open with grace — A Sacred begining awaits...
            </p>
          </motion.div>

          {/* Center Bouquet — Tap the bouquet to open invitation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative z-10 my-auto flex flex-col items-center"
          >
            {/* Golden pulsating aura around the bouquet */}
            <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-[#d4af37]/15 to-[#ffedd5]/40 blur-2xl" />

            {/* Clickable bouquet container */}
            <motion.div
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group relative cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label="Tap the bouquet to open the invitation"
            >
              <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
                {/* Floating floral animation */}
                <motion.img
                  src={weddingData.photos.bouquet}
                  alt="Wedding Flower Bouquet"
                  className="h-full w-full object-contain drop-shadow-[0_20px_35px_rgba(61,18,30,0.18)] transition-transform duration-700 ease-out group-hover:rotate-1"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Sparkling accent */}
                <motion.div
                  className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#d4af37] shadow-sm backdrop-blur"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} />
                </motion.div>
              </div>

              {/* Pulsing ring indicator */}
              <div
                className="pointer-events-none absolute inset-0 -m-3 rounded-full border border-[#d4af37]/30 opacity-70 animate-ping"
                style={{ animationDuration: "3.5s" }}
              />
            </motion.div>

            {/* Tap cue button */}
            <motion.button
              type="button"
              onClick={handleOpen}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/50 bg-gradient-to-r from-[#3d121e] to-[#591e2f] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#faf5eb] shadow-[0_12px_30px_rgba(61,18,30,0.25)] transition-all hover:shadow-[0_16px_40px_rgba(61,18,30,0.35)]"
            >
              <span>Open Invitation</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/30 text-white">
                →
              </span>
            </motion.button>
            <p className="mt-3 font-display text-[10px] uppercase tracking-[0.24em] text-[#9c8975]">
              Tap the bouquet to enter
            </p>
          </motion.div>

          {/* Footer date notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative z-10 pb-2 text-center"
          >
            <div className="h-px w-20 mx-auto mb-2 bg-[#d4af37]/30" />
            <p className="font-serif text-xs tracking-widest text-[#7a6755] uppercase">
              {weddingData.date.displayDate} · Ludhiana, Punjab
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
