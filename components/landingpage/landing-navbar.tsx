"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { Themetoggle } from '../ui/themetoggle';
import { SiX, SiGithub } from "react-icons/si";
import { navItems } from "@/contants"
import { cn } from "@/lib/utils"
import { StackedLayersLogo } from "@/components/icons/logo"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <nav
      className={cn(
        "w-full transition-all border-t sticky top-0 z-50 duration-300",
        isScrolled
          ? "border-b border-neutral-300 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-900/40 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="mx-auto max-w-8xl ml-2 lg:ml-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className=" flex items-center p-2 m-2 mr-4 space-x-2">
              <StackedLayersLogo />
              {/* <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-sm" /> */}
              <span className='text-2xl  space-x-2.5 font-bold'>OrbitUI</span>
            </Link>

            <div

              className="hidden md:flex space-x-6"
            >
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div

            className="hidden md:flex items-center space-x-4"
          >
            <div className="flex items-center ml-24 mr-24 gap-4 ">
              <Link href="https://github.com/dhruv7tripathi" >
                <SiGithub size={20} />
              </Link>
              <Link
                className="ml-2"
                href="https://twitter.com/dhruvtripathi77">
                <SiX size={18} />
              </Link>
              <Themetoggle />
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
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary dark:text-primary font-medium hover:text-black dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div
                  className="pt-4 border-t space-y-2"
                >
                  {/* <div >
                    <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                      <Link href="#" onClick={() => setIsMenuOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                  </div>
                  <div >
                    <Button size="sm" className="w-full" asChild>
                      <Link href="#" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div> */}
                  <div>
                    <Link href="https://github.com/dhruv7tripathi" >
                      <SiGithub size={20} />
                    </Link>
                    <Link
                      className="ml-2"
                      href="https://twitter.com/dhruvtripathi77">
                      <SiX size={18} />
                    </Link>
                    <Themetoggle />

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
