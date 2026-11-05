import React, { useEffect, useState } from "react";

interface BurstPetal {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
}

export const PetalTapBurst: React.FC = () => {
  const [petals, setPetals] = useState<BurstPetal[]>([]);

  useEffect(() => {
    const handleTap = (e: MouseEvent | TouchEvent) => {
      // Don't burst on interactive buttons or canvas
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("canvas") || target.closest("a")) return;

      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const colors = ["#fbcfe8", "#fde68a", "#fef3c7", "#fed7aa", "#f5d0fe"];
      const newBatch: BurstPetal[] = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 6 + (Math.random() - 0.5) * 0.5;
        const speed = 25 + Math.random() * 35;
        return {
          id: Date.now() + i,
          x: clientX,
          y: clientY,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed - 15,
          size: 8 + Math.random() * 8,
          color: colors[i % colors.length],
        };
      });

      setPetals((prev) => [...prev.slice(-18), ...newBatch]);

      setTimeout(() => {
        setPetals((prev) => prev.filter((p) => !newBatch.some((nb) => nb.id === p.id)));
      }, 1000);
    };

    window.addEventListener("click", handleTap);
    return () => window.removeEventListener("click", handleTap);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal-burst absolute rounded-full transition-transform"
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size * 0.8}px`,
              background: `radial-gradient(circle at 35% 35%, #fff, transparent 60%), ${p.color}`,
              borderRadius: "60% 40% 70% 30%",
              transform: `translate(${p.dx}px, ${p.dy}px) rotate(${p.dx * 3}deg)`,
              opacity: 0.85,
              animation: "petalBurstFade 1s cubic-bezier(0.2, 0.8, 0.4, 1) forwards",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

