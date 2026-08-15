"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-white text-neutral-600 transition-colors duration-300 dark:bg-black dark:text-neutral-400">

      {/* Premium background grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-neutral-200/40 blur-3xl dark:bg-neutral-800/10 sm:h-[450px] sm:w-[450px]" />

      {/* Top Header Logo */}
      <header className="px-6 py-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="CursorXUI Home"
          className="group inline-flex items-center space-x-2.5"
        >
          <span className="text-md font-bold tracking-tight text-neutral-900 dark:text-white">
            Cursor<span className="text-neutral-500 dark:text-neutral-400">X</span>UI
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">

        {/* Custom Visual Illustration: Cursor coordinates failing */}
        <div className="relative flex items-center justify-center w-full h-44 sm:h-52 select-none">
          {/* Internal gradient blur to emphasize coordinate art */}
          <div className="absolute w-36 h-36 rounded-full bg-neutral-100/60 dark:bg-neutral-900/40 blur-2xl" />

          <svg
            className="w-full h-full max-w-sm text-neutral-800 dark:text-neutral-200"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid background lines */}
            <line x1="20" y1="60" x2="180" y2="60" className="stroke-neutral-200/80 dark:stroke-neutral-800/80" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100" y1="15" x2="100" y2="105" className="stroke-neutral-200/80 dark:stroke-neutral-800/80" strokeWidth="1" strokeDasharray="4 4" />

            {/* Concentric coordinate targets */}
            <circle cx="100" cy="60" r="32" className="stroke-neutral-300/80 dark:stroke-neutral-700/80" strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="100" cy="60" r="16" className="stroke-neutral-200/80 dark:stroke-neutral-800/80" strokeWidth="1" />

            {/* Disjointed vector segments */}
            <path d="M42 32L78 50" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="2" strokeLinecap="round" />
            <path d="M122 70L158 88" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="2" strokeLinecap="round" />

            {/* Error indicators (X marks) */}
            <path d="M75 47L81 53M81 47L75 53" className="stroke-neutral-400 dark:stroke-neutral-500" strokeWidth="1.5" />
            <path d="M119 67L125 73M125 67L119 73" className="stroke-neutral-400 dark:stroke-neutral-500" strokeWidth="1.5" />

            {/* Pulse waves from the center coordinate */}
            <circle cx="100" cy="60" r="8" className="stroke-neutral-400/30 dark:stroke-neutral-500/30 fill-none animate-ping" />

            {/* Hover pointer element */}
            <g className="animate-[bounce_2.5s_infinite_ease-in-out]">
              <path d="M100 60L122 82" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="1" strokeDasharray="3 3" />
              <path
                d="M122 82L129 104L135 96.5L144 105L149 100L140 91.5L147 88.5L122 82Z"
                className="fill-neutral-950 stroke-neutral-950 dark:fill-white dark:stroke-white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* Text Copy */}
        <div className="mt-6 max-w-md">
          {/* Big Error Code */}
          <span className="text-sm font-bold tracking-widest text-neutral-400 dark:text-neutral-600 uppercase">
            Error Code 404
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-neutral-100 dark:to-neutral-400">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
            We couldn't point our cursor to the file or layout path you requested. It might have been relocated, deleted, or never written.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-100"
          >
            Go Back Home
          </Link>
          <Link
            href="/docs/introduction"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-neutral-200/80 bg-neutral-50/50 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-200 dark:hover:bg-neutral-850 dark:hover:text-white"
          >
            Explore Docs
          </Link>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="px-6 py-6 text-center text-xs text-neutral-400 dark:text-neutral-600">
        &copy; {new Date().getFullYear()} CursorXUI. All rights reserved.
      </footer>
    </div>
  )
}