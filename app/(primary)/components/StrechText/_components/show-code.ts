export const title = "Stretch Text";
export const routepoint = "stretch-text";
export const description = "Interactive stretch text component with mouse and touch support.";

export const cliscript = "add @orbitui/stretch-text";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "motion react-icons clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const democode = `import StretchContact from "@/components/textStretch";';

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <StretchContact />
  
  )
}
`;
export const code = `"use client";

import React, { useRef } from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function StretchContact() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const word = "CONTACT";

  const updateLetters = (relativeX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll(".stretch-letter");

    spans.forEach((el, index) => {
      const span = el as HTMLSpanElement;

      const letterPos = index / (spans.length - 1);
      const dist = Math.abs(relativeX - letterPos);

      const radius = 0.35;
      const maxScale = 1.8;

      if (dist < radius) {
        const factor = 1 - dist / radius;
        const smoothFactor = Math.sin((factor * Math.PI) / 2);
        const scale = 1 + (maxScale - 1) * smoothFactor;

        span.style.transform = \`scaleY(\${scale})\`;
      } else {
        span.style.transform = "scaleY(1)";
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;

    updateLetters(relativeX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLHeadingElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];

    const relativeX = Math.max(
      0,
      Math.min(1, (touch.clientX - rect.left) / rect.width)
    );

    updateLetters(relativeX);
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll(".stretch-letter");

    spans.forEach((el) => {
      (el as HTMLSpanElement).style.transform = "scaleY(1)";
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8 overflow-hidden select-none">
      <div className="flex flex-col items-center justify-center py-20 cursor-default">
        <span className="mb-6 text-xs md:text-sm tracking-[0.3em] text-neutral-500 uppercase">
          Contact us and let's bring your vision to life
        </span>

        <div className="h-[14vw] flex items-center justify-center overflow-visible">
          <h1
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            className={\`\${bebasNeue.className} text-[15vw] leading-none flex text-white\`}
          >
            {word.split("").map((char, index) => (
              <span
                key={index}
                className="stretch-letter inline-block origin-top transition-transform duration-200 ease-out hover:text-neutral-200"
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
`;