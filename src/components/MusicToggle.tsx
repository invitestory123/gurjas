import React, { useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

export const MusicToggle: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://media.invitestory.in/diya-haveli/r1.mp3"
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play celebration music"}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#fffdfa]/90 text-[#3d121e] shadow-[0_8px_25px_rgba(61,18,30,0.2)] backdrop-blur transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {playing ? (
          <div className="relative flex items-center justify-center">
            <Music size={18} className="text-[#b58b1a] animate-bounce" />
            <span className="absolute -inset-1 rounded-full border border-[#d4af37]/40 animate-ping" />
          </div>
        ) : (
          <VolumeX size={18} className="text-[#8c7457]" />
        )}
      </button>
    </>
  );
};

