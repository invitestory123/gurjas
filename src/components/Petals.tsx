import React, { useMemo } from "react";

export const Petals: React.FC<{ count?: number }> = ({ count = 18 }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 9 + Math.random() * 11;
        const colors = ["#fbcfe8", "#fde68a", "#fef3c7", "#fed7aa", "#f5d0fe"];
        return {
          id: i,
          left: Math.random() * 100,
          size,
          color: colors[i % colors.length],
          duration: 12 + Math.random() * 10,
          delay: -Math.random() * 20,
          drift: (Math.random() - 0.5) * 160,
          opacity: 0.35 + Math.random() * 0.45,
          rotate: Math.random() * 360,
        };
      }),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 0.85}px`,
              background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7), transparent 60%), ${p.color}`,
              borderRadius: "60% 40% 65% 35% / 70% 30% 70% 30%",
              "--petal-duration": `${p.duration}s`,
              "--petal-delay": `${p.delay}s`,
              "--petal-drift": `${p.drift}px`,
              "--petal-opacity": p.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

