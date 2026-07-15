"use client"

import Link from "next/link"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { Themetoggle } from '../ui/themetoggle';
import { useSession } from 'next-auth/react';
import DocumentSearch from "./search"
// import { LayrdUISignInModal } from "../ui/signin-model"
import { navItems } from "@/contants"
import { cn } from "@/lib/utils"
import { StackedLayersLogo } from "@/components/icons/logo"
import UserAccountNav from "../(auth)/userAccountNav"
import SignInButton from "../(auth)/SignInButton"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession();
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
              <StackedLayersLogo />

              <span className='text-2xl  space-x-2.5 font-bold'>LayrdUI</span>
            </Link>

            <div

              className="hidden md:flex space-x-6"
            >
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
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
            <div className="flex items-center ml-24 mr-6 gap-4 ">
              <DocumentSearch />
              <div className="flex items-center justify-between">
                {/* <span className="text-gray-700 font-medium">Login</span> */}
                <div>
                  {session?.user ? (
                    <UserAccountNav user={session.user} />
                  ) : (
                    <SignInButton text="Get All Access" />
                  )}
                </div>
              </div>
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
                      className="text-primary dark:text-primary font-medium dark:hover:text-white hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div
                  className="pt-4 border-t space-y-2"
                >
                  <div>
                    {/* <Link href="https://github.com/dhruv7tripathi" >
                      <SiGithub size={20} />
                    </Link>
                    <Link
                      className="ml-2"
                      href="https://twitter.com/dhruvtripathi77">
                      <SiX size={18} />
                    </Link> */}
                    {session?.user ? (
                      <UserAccountNav user={session.user} />
                    ) : (
                      <SignInButton text="Get All Access" />
                    )}
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
