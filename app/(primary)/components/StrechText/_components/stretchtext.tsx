import React, { useRef } from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function StretchContact() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const word = "CONTACT";

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Calculate normalized mouse X position relative to the container width (0 to 1)
    const relativeX = (e.clientX - rect.left) / rect.width;

    const spans = container.querySelectorAll('.stretch-letter');
    spans.forEach((el, index) => {
      const span = el as HTMLSpanElement;
      // Normalized letter position (0 to 1)
      const letterPos = index / (spans.length - 1);
      // Distance between mouse and letter
      const dist = Math.abs(relativeX - letterPos);

      // Effect parameters
      const radius = 0.35; // Area of influence (35% of the total width)
      const maxScale = 1.8; // Maximum stretch scale at cursor

      // Calculate vertical scale using a smooth sine curve
      if (dist < radius) {
        const factor = 1 - dist / radius; // 1 at cursor, 0 at boundary
        const smoothFactor = Math.sin(factor * Math.PI / 2); // Smooth ease-out shape
        const scale = 1 + (maxScale - 1) * smoothFactor;
        span.style.transform = `scaleY(${scale})`;
      } else {
        span.style.transform = 'scaleY(1)';
      }
    });
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll('.stretch-letter');
    spans.forEach((el) => {
      const span = el as HTMLSpanElement;
      // Smoothly animate back to normal height
      span.style.transform = 'scaleY(1)';
    });
  };

  // Touch support for mobile devices
  const handleTouchMove = (e: React.TouchEvent<HTMLHeadingElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const relativeX = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));

    const spans = container.querySelectorAll('.stretch-letter');
    spans.forEach((el, index) => {
      const span = el as HTMLSpanElement;
      const letterPos = index / (spans.length - 1);
      const dist = Math.abs(relativeX - letterPos);

      const radius = 0.35;
      const maxScale = 1.8;

      if (dist < radius) {
        const factor = 1 - dist / radius;
        const smoothFactor = Math.sin(factor * Math.PI / 2);
        const scale = 1 + (maxScale - 1) * smoothFactor;
        span.style.transform = `scaleY(${scale})`;
      } else {
        span.style.transform = 'scaleY(1)';
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8 overflow-hidden select-none">
      <div className="flex flex-col items-center justify-center py-20 cursor-default">
        {/* Subtitle */}
        <span className="text-xs md:text-sm tracking-[0.3em] text-neutral-500 font-sans uppercase mb-6 transition-colors duration-300">
          Contact us and let's bring your vision to life
        </span>

        {/* Bounding box for interactive height to prevent page layout jumps */}
        <div className="overflow-visible h-[14vw] flex items-center justify-center">
          <h1
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            className={`${bebasNeue.className} text-[15vw] leading-none text-white flex`}
          >
            {word.split('').map((char, index) => (
              <span
                key={index}
                className="stretch-letter inline-block origin-top transition-transform duration-200 ease-out cursor-pointer hover:text-neutral-200"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </main>
  );
}