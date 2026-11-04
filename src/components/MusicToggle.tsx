import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX, Sparkles } from "lucide-react";

interface MusicToggleProps {
  autoPlay?: boolean;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ autoPlay }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;

    // Listen to global open invitation event
    const handleStartMusic = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };

    window.addEventListener("start-wedding-music", handleStartMusic);
    if (autoPlay) {
      handleStartMusic();
    }

    return () => {
      window.removeEventListener("start-wedding-music", handleStartMusic);
    };
  }, [autoPlay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause celebration music" : "Play celebration music"}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-[#d4af37]/60 bg-[#fffdfa]/95 px-4 py-3 text-[#3d121e] shadow-[0_10px_30px_rgba(61,18,30,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {playing ? (
          <>
            {/* Animated Equalizer soundbars */}
            <div className="flex items-end gap-[3px] h-4">
              <span className="w-1 bg-[#d4af37] rounded-full animate-[soundbar_0.8s_ease-in-out_infinite]" />
              <span className="w-1 bg-[#b58b1a] rounded-full animate-[soundbar_1.2s_ease-in-out_infinite_0.2s]" />
              <span className="w-1 bg-[#3d121e] rounded-full animate-[soundbar_0.9s_ease-in-out_infinite_0.4s]" />
              <span className="w-1 bg-[#d4af37] rounded-full animate-[soundbar_1.1s_ease-in-out_infinite_0.1s]" />
            </div>
            <span className="font-display text-[11px] font-semibold tracking-wider text-[#541624]">
              Playing Music
            </span>
          </>
        ) : (
          <>
            <VolumeX size={18} className="text-[#8c7457]" />
            <span className="font-display text-[11px] font-semibold tracking-wider text-[#8c7457]">
              Play Music
            </span>
          </>
        )}
      </button>
    </>
  );
};
