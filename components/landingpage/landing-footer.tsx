// "use client"

// import Link from "next/link"
// import { StackedLayersLogo } from "@/components/icons/logo"
// export const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-black">
//       <div className="border-t ">
//         <div className="mx-auto max-w-8xl ml-12 border-t px-4 py-12 lg:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
//             <div className="lg:col-span-1">
//               <Link
//                 href="/"
//                 aria-label="home"
//                 className=" flex items-center space-x-4">
//                 <StackedLayersLogo />
//                 <span className='text-2xl font-bold'>OrbitUI</span>
//               </Link>
//               <div className="mr-2 mt-4 max-w-fit">
//                 <Link
//                   href="https://x.com/dhruvtripathi77"
//                   target="_blank"
//                 >
//                   <div className="flex flex-row items-center gap-2 rounded-md bg-neutral-200 px-3 py-2 text-zinc-900 dark:bg-neutral-800 dark:text-zinc-200">
//                     Share Your Thoughts On
//                     <svg
//                       height="14"
//                       viewBox="0 0 1200 1227"
//                       fill="currentColor"
//                       width="14"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
//                     </svg>
//                   </div>
//                 </Link>
//               </div>
//               <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400">
//                 © {new Date().getFullYear()} OrbitUI. All rights reserved.
//               </p>
//             </div>

//             <div className="flex justify-end mr-28 mx-auto lg:col-span-2">
//               <div className="flex space-x-24">
//                 <ul className="space-y-3 text-sm">
//                   <li>
//                     <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/components" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Components Pack
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Templates
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/intro" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Docs
//                     </Link>
//                   </li>
//                 </ul>

//                 <ul className="space-y-3 text-sm">
//                   <li>
//                     <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Getting Started
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Terms & Conditions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
//                       Privacy Policy
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden w-full items-center justify-center md:flex">
//         <h1 className="select-none pb-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-neutral-700 dark:to-neutral-900 md:text-7xl lg:text-[15rem]">
//           Orbit UI
//         </h1>
//       </div>
//       <div className="border-t-border-gray-200">
//         <div className="mx-auto max-w-6xl px-6 py-6 flex justify-center items-center">
//           <h1 className="flex items-center gap-2 text-center">
//             Made with
//             <span className="animate-pulse">❤️</span>
//             by
//             <Link href="https://dhruvtripathi.in" target="_blank" rel="noreferrer" className="hover:text-foreground">
//               Dhruv Tripathi
//             </Link>
//           </h1>
//         </div>
//       </div>
//     </footer>
//   )
// }


"use client"

import Link from "next/link"
import { footerLinks } from "@/contants"
import Image from "next/image"
import { SiDiscord, SiGithub, SiLinkerd, SiX } from "react-icons/si"

export default function Footer() {
  return (
    <div>
      <footer className="relative border-t border-neutral-200 dark:border-neutral-800/50 bg-white dark:bg-black dark:text-neutral-50 text-neutral-900 overflow-hidden">
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16">

            {/* Branding & Description */}
            <div className="flex flex-col space-y-4 lg:max-w-sm">
              <Link href="/" className="flex space-x-2 items-center">
                {/* <Image
                  width={40}
                  height={40}
                  src={"/logo.png"}
                  alt="Linear Logo"
                  quality={100}
                  priority={true}
                  className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 dark:invert rounded-xl object-cover"
                /> */}
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">cursorxui</h3>
              </Link>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                Orbit UI is an animated component library built for modern interfaces, delivering smooth interactions, polished motion, and reusable UI for fast-moving teams.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

              {/* Pages */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Pages</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.pages.map((link, index) => (
                    <li key={`pages-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold dark:text-neutral-100 text-neutral-900 mb-3 sm:mb-4">Register</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.register.map((link, index) => (
                    <li key={`register-${index}`}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Social Links & Status */}
      <div className="flex flex-col sm:flex-row border-t border-neutral-200 dark:border-neutral-900 justify-between items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6 gap-4 sm:gap-0">

        {/* Social Links */}
        <div className="flex space-x-6 sm:space-x-8 text-xl sm:text-2xl text-gray-500 dark:text-gray-400">
          <Link
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiDiscord size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://github.com/dhruv7tripathi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://x.com/dhruvtripathi77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiX size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <SiLinkerd size={20} className="sm:w-[22px] sm:h-[22px]" />
          </Link>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <h1 className="text-green-600 text-xs sm:text-sm font-medium">All Systems Operational</h1>
        </div>
      </div>

      {/* Legal Links */}
      <div className='flex flex-col space-x-4 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 border-t border-neutral-200 dark:border-neutral-900 py-3 sm:py-4'>
        <Link
          href={"#"}
          className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
        >
          Terms of Services
        </Link>
        <span className='hidden sm:block dark:bg-white bg-black w-1.5 h-1.5 rounded-full' />
        <Link
          href={"#"}
          className='text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200'
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}