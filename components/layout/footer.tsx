"use client"

import React from "react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-neutral-200/80 bg-white text-neutral-600 transition-colors duration-300 dark:border-neutral-800/80 dark:bg-black dark:text-neutral-400">
      {/* Subtle top glow effect in dark mode */}
      <div className="absolute inset-x-0 -top-px -z-10 h-[100px] bg-gradient-to-b from-neutral-100 to-transparent opacity-40 dark:from-neutral-900/20 dark:to-transparent" />

      {/* Main Container: Centered, responsive padding */}
      <div className="mx-auto ml-8 px-6 py-12 sm:px-8 lg:px-12">
        {/* Navigation & Branding Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 py-10">

          {/* Brand & Social Column (Left side) */}
          <div className="flex flex-col space-y-5 md:col-span-1">
            <Link
              href="/"
              aria-label="CursorXUI Home"
              className="group flex items-center space-x-2.5 max-w-fit"
            >

              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none tracking-tight text-neutral-900 dark:text-white">
                  Cursor<span className="text-neutral-500 dark:text-neutral-400">X</span>UI
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
              High-fidelity copy-paste components for Next.js, React, and Tailwind.
            </p>

            <div>
              <Link
                href="https://x.com/dhruvtripathi77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border-dotted border border-neutral-200 bg-neutral-50/50 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-200 dark:hover:bg-neutral-850 dark:hover:text-white"
              >
                <span>Share your thoughts on</span>
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828v.026L521.697 619.96L144.011 79.72H306.615l304.797 435.991l47.468 67.894L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side Links Container (Documentation and Legal aligned right on md/lg screens) */}
          <div className="md:col-span-2 flex justify-start md:justify-end md:pr-8">
            <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 md:gap-x-28">

              {/* Docs Column */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  Documentation
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/docs/introduction"
                      className="group relative inline-block py-0.5 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <span>Docs Introduction</span>
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-bottom-right scale-x-0 bg-neutral-900 transition-transform duration-250 group-hover:origin-bottom-left group-hover:scale-x-100 dark:bg-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/installation"
                      className="group relative inline-block py-0.5 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <span>Getting Started</span>
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-bottom-right scale-x-0 bg-neutral-900 transition-transform duration-250 group-hover:origin-bottom-left group-hover:scale-x-100 dark:bg-white" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="flex flex-col space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  Legal
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/terms"
                      className="group relative inline-block py-0.5 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <span>Terms & Conditions</span>
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-bottom-right scale-x-0 bg-neutral-900 transition-transform duration-250 group-hover:origin-bottom-left group-hover:scale-x-100 dark:bg-white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="group relative inline-block py-0.5 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <span>Privacy Policy</span>
                      <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-bottom-right scale-x-0 bg-neutral-900 transition-transform duration-250 group-hover:origin-bottom-left group-hover:scale-x-100 dark:bg-white" />
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} CursorXUI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-neutral-50/50 px-3 py-1.5 text-xs font-semibold text-neutral-800 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:text-neutral-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>All systems operational</span>
            </div>

            {/* Version indicator */}
            <div className="text-xs font-medium text-neutral-400 dark:text-neutral-600">
              v1.0.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}