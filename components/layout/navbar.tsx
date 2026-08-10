"use client"

import Link from "next/link"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { IconBrandGithub, IconBrandX, IconStarFilled } from "@tabler/icons-react"
import DocumentSearch from "./search"
import { cn } from "@/lib/utils"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav
      className={cn(
        "w-full transition-all border-b border-neutral-300 dark:border-neutral-800/50 dark:bg-black bg-white  backdrop-blur-md sticky top-0 z-50 duration-300",
      )}
    >
      <div className="mx-auto max-w-8xl mr-2 sm:mr-4 lg:mr-12 ml-2 sm:ml-4 lg:ml-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className=" flex items-center p-2 m-2 mr-4 space-x-2">

              <span className='text-2xl  space-x-2.5 font-bold'>cursorui</span>
            </Link>
          </div>

          <div

            className="hidden md:flex items-center space-x-4"
          >
            <div className="flex items-center ml-24 mr-6 gap-4">
              <DocumentSearch />

              <Link
                href="https://github.com/Dhruv7Tripathi/cursorui"
                target="_blank"
                rel="noreferrer"
                aria-label="Star on GitHub"
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 text-sm font-medium text-black transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
              >
                <IconBrandGithub size={18} />
                <span>Star</span>
                <IconStarFilled size={14} className="text-yellow-400" />
              </Link>

              <Link
                href="https://x.com/dhruvtripathi77"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-white text-black transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900"
              >
                <IconBrandX size={18} />
              </Link>
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </div>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t bg-background/95 backdrop-blur-sm overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 py-4 space-y-2"
              >
                <div
                  className="pt-4 border-t space-y-2"
                >
                  <div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
