import React, { useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { OpeningGate } from "./components/OpeningGate";
import { HeroCouple } from "./components/HeroCouple";
import { SeashellVows } from "./components/SeashellVows";
import { FamilyBlessing } from "./components/FamilyBlessing";
import { ToranInviteCard } from "./components/ToranInviteCard";
import { DayUnfolds } from "./components/DayUnfolds";
import { SeashellVenue } from "./components/SeashellVenue";
import { DiyaBlessing } from "./components/DiyaBlessing";
import { RsvpSection } from "./components/RsvpSection";
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

      {/* 1) Sacred Ek Onkar Opening Gate (Enlarged logo, tap to open) */}
      {!hasOpened && (
        <OpeningGate onOpen={() => setHasOpened(true)} />
      )}

      {/* Main Roka Invitation Experience */}
      {hasOpened && (
        <main className="relative mx-auto max-w-2xl bg-[#faf7f2] shadow-2xl transition-opacity duration-1000">
          {/* Interactive Tap Petal Burst */}
          <PetalTapBurst />

          {/* Drifting Petals Atmospheric Overlay */}
          <Petals count={18} />

          {/* Floating Audio Controller */}
          <MusicToggle autoPlay={true} />

          {/* 1) Ghibli Couple Illustration & Save The Date */}
          <HeroCouple />

          {/* 2) Our Forever Begins (Placed above Elders Blessed section) */}
          <SeashellVows />

          {/* 3) Blessed by Love & Elders Family Photo */}
          <FamilyBlessing />

          {/* 4) Toran Style Family Card: Parents (Mother first, then Father) */}
          <ToranInviteCard />

          {/* 5) Scratch Card & Day Unfolds Timeline with Google Calendar redirect */}
          <DayUnfolds />

          {/* 6) Dedicated Celebration Venue with Illuminated Residence Photo */}
          <SeashellVenue />

          {/* 7) Diya Ceremony: Terracotta Lamp & Floating Seashell Sky Lanterns */}
          <DiyaBlessing />

          {/* 8) WhatsApp RSVP Section */}
          <RsvpSection />

          {/* 9) Sacred Closing Grand Finale */}
          <ForeverClosing />
        </main>
      )}
    </div>
  );
}

export default App;
