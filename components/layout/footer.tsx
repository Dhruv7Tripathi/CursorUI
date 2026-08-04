"use client"

import Link from "next/link"
// import { StackedLayersLogo } from "@/components/icons/logo"
export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="border-t ">
        <div className="mx-auto max-w-8xl ml-12 border-t px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1">
              <Link
                href="/"
                aria-label="home"
                className=" flex items-center space-x-2">
                {/* <StackedLayersLogo /> */}
                <span className='text-2xl font-bold'>OrbitUI</span>
              </Link>
              <div className="mr-2 mt-4 max-w-fit">
                <Link
                  href="https://x.com/dhruvtripathi77"
                  target="_blank"
                >
                  <div className="flex flex-row items-center gap-2 rounded-md bg-neutral-200 px-3 py-2 text-zinc-900 dark:bg-neutral-800 dark:text-zinc-200">
                    Share Your Thoughts On
                    <svg
                      height="14"
                      viewBox="0 0 1200 1227"
                      fill="currentColor"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} OrbitUI. All rights reserved.
              </p>
            </div>

            <div className="flex justify-end mr-28 mx-auto lg:col-span-2">
              <div className="flex space-x-24">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">
                      Components Pack
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/introduction" className="text-muted-foreground hover:text-foreground transition-colors">
                      Docs
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/docs/installation" className="text-muted-foreground hover:text-foreground transition-colors">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
