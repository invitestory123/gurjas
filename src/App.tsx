import React, { useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { OpeningGate } from "./components/OpeningGate";
import { HeroCouple } from "./components/HeroCouple";
import { SeashellVows } from "./components/SeashellVows";
import { ToranInviteCard } from "./components/ToranInviteCard";
import { DayUnfolds } from "./components/DayUnfolds";
import { SeashellVenue } from "./components/SeashellVenue";
import { CoupleGallery } from "./components/CoupleGallery";
import { DiyaBlessing } from "./components/DiyaBlessing";
import { ForeverClosing } from "./components/ForeverClosing";
import { Petals } from "./components/Petals";
import { PetalTapBurst } from "./components/PetalTapBurst";
import { MusicToggle } from "./components/MusicToggle";

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen bg-[#faf7f2] font-sans text-[#221e1a] antialiased selection:bg-[#d4af37]/20 selection:text-[#3d121e]">
      {/* Golden Thread Scroll Progress Bar */}
      {hasOpened && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d4af37] via-[#f5d77f] to-[#b58b1a] origin-left z-50 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
          style={{ scaleX }}
        />
      )}

      {/* 1) Ghibli Bouquet Opening Gate with Gold Ek Onkar Image */}
      {!hasOpened && (
        <OpeningGate onOpen={() => setHasOpened(true)} />
      )}

      {/* Main Wedding Invitation Experience */}
      {hasOpened && (
        <main className="relative mx-auto max-w-2xl bg-[#faf7f2] shadow-2xl transition-opacity duration-1000">
          {/* Interactive Tap Petal Burst */}
          <PetalTapBurst />

          {/* Drifting Petals Atmospheric Overlay */}
          <Petals count={18} />

          {/* Floating Audio Controller (Loops YouTube short audio) */}
          <MusicToggle autoPlay={true} />

          {/* 2 & 3) Ghibli Couple (Turban & Punjabi Suit holding childhood photos, transparent PNG, parallax, letter-by-letter names) & 1st Uploaded Family Photo */}
          <HeroCouple />

          {/* 3) Seashell Vows: Our Invitation & A Love written in tides */}
          <SeashellVows />

          {/* 4) Toran Style Family Card: Parents & Siblings with Golden Theme (no venue/date) */}
          <ToranInviteCard />

          {/* 5 & 6) Scratch Card embedded at top of Day Unfolds Timeline */}
          <DayUnfolds />

          {/* 3) Dedicated Seashell Venue Section with Google Maps Link & Map Card */}
          <SeashellVenue />

          {/* 7) Couple Gallery with 2nd Uploaded Couple Image (Rotated 180°) */}
          <CoupleGallery />

          {/* 8) Diya Ceremony: Press to give blessings & release lanterns */}
          <DiyaBlessing />

          {/* 9) 'Forever Begins Now' Grand Finale in Seashell Style */}
          <ForeverClosing />
        </main>
      )}
    </div>
  );
}

export default App;
