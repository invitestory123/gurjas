import React, { useState } from "react";
import { OpeningGate } from "./components/OpeningGate";
import { HeroCouple } from "./components/HeroCouple";
import { SeashellVows } from "./components/SeashellVows";
import { ToranInviteCard } from "./components/ToranInviteCard";
import { ScratchCardDate } from "./components/ScratchCardDate";
import { DayUnfolds } from "./components/DayUnfolds";
import { CoupleGallery } from "./components/CoupleGallery";
import { DiyaBlessing } from "./components/DiyaBlessing";
import { ForeverClosing } from "./components/ForeverClosing";
import { Petals } from "./components/Petals";
import { MusicToggle } from "./components/MusicToggle";

export function App() {
  const [hasOpened, setHasOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#faf7f2] font-sans text-[#221e1a] antialiased selection:bg-[#d4af37]/20 selection:text-[#3d121e]">
      {/* 1) Ghibli Bouquet Opening Gate */}
      {!hasOpened && (
        <OpeningGate onOpen={() => setHasOpened(true)} />
      )}

      {/* Main Wedding Invitation Experience */}
      {hasOpened && (
        <main className="relative mx-auto max-w-2xl bg-[#faf7f2] shadow-2xl transition-opacity duration-1000">
          {/* Drifting Petals Atmospheric Overlay */}
          <Petals count={16} />

          {/* Floating Audio Controller */}
          <MusicToggle />

          {/* 2) Ghibli Couple Portrait & 1st Uploaded Family Photo */}
          <HeroCouple />

          {/* 3) Seashell Vows: Our Invitation & A Love written in tides */}
          <SeashellVows />

          {/* 4) Toran Style Parents, Siblings & Formal Invitation Card */}
          <ToranInviteCard />

          {/* 5) Lantern Madurai Scratch Card to Reveal Dates */}
          <ScratchCardDate />

          {/* 6) Ivory Style 'The Day Unfolds' Timeline */}
          <DayUnfolds />

          {/* 7) Couple Gallery with 2nd Uploaded Couple Image */}
          <CoupleGallery />

          {/* 8) Diya Ceremony: Press to give blessings & release lanterns */}
          <DiyaBlessing />

          {/* 9) 'Forever Begins Now' Grand Finale */}
          <ForeverClosing />
        </main>
      )}
    </div>
  );
}

export default App;

