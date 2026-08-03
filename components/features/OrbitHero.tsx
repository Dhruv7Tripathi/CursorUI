'use client';

import React from 'react';

export default function OrbitHero() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center animate-float">
      {/* Decorative Star/Space Background Glow */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl animate-pulse-glow" />
      <div className="absolute w-[60%] h-[60%] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl animate-pulse-glow" style={{ animationDelay: '-3s' }} />

      {/* Central Core */}
      <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 shadow-2xl flex flex-col items-center justify-center p-4">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 absolute top-3 animate-ping" />
        <span className="font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 text-base md:text-lg">
          OrbitUI
        </span>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono mt-1">
          v1.0.0
        </span>
      </div>

      {/* Ring 1 (Inner Orbit - Clockwise) */}
      <div className="absolute w-[55%] h-[55%] rounded-full border border-dashed border-neutral-300 dark:border-white/10 animate-orbit-cw">
        {/* Orbiting Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono font-semibold bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-md flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          Button.tsx
        </div>
      </div>

      {/* Ring 2 (Middle Orbit - Counter-Clockwise) */}
      <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-neutral-300 dark:border-white/10 animate-orbit-ccw">
        {/* Orbiting Badge 1 */}
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono font-semibold bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-md flex items-center gap-1.5 text-purple-600 dark:text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          GSAP
        </div>

        {/* Orbiting Badge 2 */}
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono font-semibold bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-zinc-800 shadow-md flex items-center gap-1.5 text-teal-600 dark:text-teal-400">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          TypeScript
        </div>
      </div>

      {/* Ring 3 (Outer Orbit - Clockwise) */}
      <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-neutral-200 dark:border-white/5 animate-orbit-cw" style={{ animationDuration: '45s' }}>
        {/* Orbiting Badge */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-semibold bg-indigo-600 text-white shadow-lg shadow-indigo-600/10 dark:shadow-none flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          $15 Library
        </div>
      </div>
    </div>
  );
}