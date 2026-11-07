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
    // Dispatch music start event
    window.dispatchEvent(new CustomEvent("start-wedding-music"));
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center select-none"
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

          {/* Central Sacred Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center max-w-md w-full my-auto"
          >
            {/* Top: With God's Grace */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-display text-xs sm:text-sm uppercase tracking-[0.42em] text-[#8e7a63] mb-6"
            >
              With God's Grace
            </motion.p>

            {/* Middle: Ek Onkar PNG Enlarged with Sacred Glow */}
            <motion.div
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer flex items-center justify-center"
              role="button"
              tabIndex={0}
              aria-label="Tap to open the invitation"
            >
              {/* Outer Golden Pulsing Aura */}
              <div className="absolute -inset-8 rounded-full bg-[#d4af37]/25 blur-2xl animate-pulse" />
              <div
                className="pointer-events-none absolute inset-0 -m-4 rounded-full border border-[#d4af37]/35 opacity-75 animate-ping"
                style={{ animationDuration: "3.5s" }}
              />

              {/* The Enlarged Gold Ek Onkar Medallion */}
              <div className="relative flex items-center justify-center">
                <img
                  src={weddingData.photos.ekOnkar}
                  alt="Sacred Ek Onkar"
                  className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full object-cover shadow-[0_16px_50px_rgba(212,175,55,0.5)] ring-4 ring-[#d4af37]/75 transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Sparkling accent */}
                <motion.div
                  className="absolute -top-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#d4af37] shadow-md backdrop-blur"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={18} />
                </motion.div>
              </div>
            </motion.div>

            {/* Below Ek Onkar: Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-7 max-w-xs sm:max-w-sm font-serif text-base sm:text-lg italic tracking-wide text-[#705e4d]"
            >
              A Sacred beginning awaits...
            </motion.p>

            {/* Beneath that: Tap to open */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-6"
            >
              <motion.button
                type="button"
                onClick={handleOpen}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#d4af37]/50 bg-gradient-to-r from-[#3d121e] to-[#591e2f] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.28em] text-[#faf5eb] shadow-[0_12px_30px_rgba(61,18,30,0.25)] transition-all hover:shadow-[0_16px_40px_rgba(61,18,30,0.35)]"
              >
                <span>Tap to open</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/30 text-white text-xs">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
