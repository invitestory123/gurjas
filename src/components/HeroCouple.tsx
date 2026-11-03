import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { Heart, Sparkles } from "lucide-react";

export const HeroCouple: React.FC = () => {
  return (
    <section className="relative px-4 pt-12 pb-20 sm:px-6">
      {/* Decorative Golden Rays / Radial Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-[#ffedd5]/10 to-transparent blur-3xl" />

      {/* Ek Onkar & Header Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-xl flex-col items-center text-center"
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-[#d4af37]/60" />
          <span className="font-serif text-2xl font-bold text-[#b58b1a]">ੴ</span>
          <div className="h-px w-10 bg-[#d4af37]/60" />
        </div>

        <span className="mt-3 font-display text-[11px] uppercase tracking-[0.42em] text-[#8c7456]">
          Save The Date
        </span>

        <h1 className="mt-3 font-script text-5xl leading-tight text-[#3d121e] sm:text-7xl">
          {weddingData.couple.groomShort}
          <span className="mx-3 font-serif text-3xl font-light italic text-[#d4af37] sm:text-4xl">
            &
          </span>
          {weddingData.couple.brideShort}
        </h1>

        <p className="mt-2 font-display text-base tracking-[0.18em] text-[#5c4a39]">
          {weddingData.couple.groom} & {weddingData.couple.bride}
        </p>

        <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-[#947d67]">
          <span>Ludhiana</span>
          <span>•</span>
          <span>{weddingData.date.displayDate}</span>
          <span>•</span>
          <span>Punjab</span>
        </div>
      </motion.div>

      {/* Part A: The Ghibli Style Couple Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-10 max-w-md"
      >
        {/* Soft gold frame with inner bevel */}
        <div className="relative overflow-hidden rounded-[2.2rem] border-2 border-[#d4af37]/40 bg-gradient-to-b from-[#fffcf7] to-[#f7eedc] p-3 shadow-[0_25px_60px_-15px_rgba(61,18,30,0.2)]">
          <div className="relative overflow-hidden rounded-[1.8rem]">
            <img
              src={weddingData.photos.ghibliCouple}
              alt="Gurjas and Shubhpreet in Studio Ghibli art style"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Soft gradient bottom overlay for seamless transition */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#20150f]/80 via-transparent to-transparent" />
            
            <div className="absolute inset-x-0 bottom-4 text-center text-white">
              <p className="font-script text-2xl text-[#fde047] drop-shadow-md sm:text-3xl">
                Gurjas & Shubhpreet
              </p>
              <p className="text-[10px] uppercase tracking-[0.26em] text-white/90">
                Studio Ghibli Illustrated Portrait
              </p>
            </div>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="pointer-events-none absolute top-4 left-4 text-[#d4af37]/60">✦</div>
          <div className="pointer-events-none absolute top-4 right-4 text-[#d4af37]/60">✦</div>
          <div className="pointer-events-none absolute bottom-4 left-4 text-[#d4af37]/60">✦</div>
          <div className="pointer-events-none absolute bottom-4 right-4 text-[#d4af37]/60">✦</div>
        </div>

        <p className="mt-4 text-center font-serif text-sm italic text-[#786350]">
          "The Groom in Royal Turban Suit & The Bride in Graceful Punjabi Suite"
        </p>
      </motion.div>

      {/* Part B: The 1st Uploaded Family Photo */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-20 max-w-lg text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-2 text-[#d4af37]">
          <Sparkles size={16} />
          <span className="font-display text-[11px] uppercase tracking-[0.34em] text-[#8a7259]">
            United With Family
          </span>
          <Sparkles size={16} />
        </div>

        <h2 className="font-serif text-3xl font-medium text-[#3d121e] sm:text-4xl">
          Blessed by Love & Elders
        </h2>
        
        <p className="mx-auto mt-2 max-w-md font-serif text-sm leading-relaxed text-[#6b5847]">
          With the divine grace of Almighty God and the joyous blessings of our parents and siblings, two families celebrate as one.
        </p>

        {/* Family Photo Card */}
        <div className="relative mx-auto mt-7 overflow-hidden rounded-[2rem] border border-[#d4af37]/35 bg-[#fffaf2] p-3 shadow-[0_20px_50px_rgba(61,18,30,0.15)]">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              src={weddingData.photos.familyPhoto}
              alt="Gurjas and Shubhpreet Family Portrait"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          
          <div className="px-3 py-4 text-center">
            <p className="font-script text-2xl text-[#3d121e]">
              The Layal & Singh Families
            </p>
            <p className="mt-1 font-display text-[10px] uppercase tracking-[0.24em] text-[#8a735c]">
              Warmth · Togetherness · Joy
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

