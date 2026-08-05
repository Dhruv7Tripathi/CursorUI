// // "use client"

// // import Link from "next/link"
// // import { useState, useEffect } from "react"
// // import { IconMenu2, IconX } from "@tabler/icons-react"
// // import { motion, AnimatePresence } from "framer-motion"
// // import { Themetoggle } from '../ui/themetoggle';
// // import { SiX, SiGithub } from "react-icons/si";
// // import { navItems } from "@/contants"
// // import { cn } from "@/lib/utils"
// // import { StackedLayersLogo } from "@/components/icons/logo"
// // import Image from "next/image"
// // export default function Navbar() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// //   const [isScrolled, setIsScrolled] = useState(false)


// //   function handleScroll() {
// //     if (window.scrollY > 0) {
// //       return setIsScrolled(true);
// //     }

// //     return setIsScrolled(false);
// //   }

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [])

// //   return (
// //     <nav
// //       className={cn(
// //         "w-full transition-all border-t sticky top-0 z-50 duration-300",
// //         isScrolled
// //           ? "border-b border-neutral-300 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-900/40 shadow-lg backdrop-blur-md"
// //           : "border-transparent bg-transparent shadow-none backdrop-blur-none",
// //       )}
// //     >
// //       <div className="mx-auto max-w-8xl ml-2 lg:ml-8 ">
// //         <div className="flex h-16 items-center justify-between">
// //           <div className="flex items-center">
// //             <Link
// //               href="/"
// //               aria-label="home"
// //               className=" flex items-center p-2 m-2 mr-4 space-x-2">
// //               {/* <StackedLayersLogo /> */}
// //               <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-sm dark:invert" />
// //               <span className='text-2xl  space-x-2.5 font-bold'>OrbitUI</span>
// //             </Link>

// //             <div

// //               className="hidden md:flex space-x-6"
// //             >
// //               {navItems.map((item) => (
// //                 <div key={item.href}>
// //                   <Link
// //                     href={item.href}
// //                     className="text-gray-700 dark:text-gray-300 font-medium hover:text-black dark:hover:text-white transition-colors"
// //                   >
// //                     {item.name}
// //                   </Link>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div

// //             className="hidden md:flex items-center space-x-4"
// //           >
// //             <div className="flex items-center ml-24 mr-24 gap-4 ">
// //               <Link href="https://github.com/dhruv7tripathi" >
// //                 <SiGithub size={20} />
// //               </Link>
// //               <Link
// //                 className="ml-2"
// //                 href="https://twitter.com/dhruvtripathi77">
// //                 <SiX size={18} />
// //               </Link>
// //               <Themetoggle />
// //             </div>
// //           </div>

// //           <button
// //             className="md:hidden p-2"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             aria-label="Toggle menu"
// //           >
// //             <div >
// //               {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
// //             </div>
// //           </button>
// //         </div>
// //         <AnimatePresence>
// //           {isMenuOpen && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.3, ease: "easeInOut" }}
// //               className="md:hidden border-t bg-background/95 backdrop-blur-sm overflow-hidden"
// //             >
// //               <motion.div
// //                 initial={{ y: -20 }}
// //                 animate={{ y: 0 }}
// //                 exit={{ y: -20 }}
// //                 transition={{ duration: 0.3, delay: 0.1 }}
// //                 className="px-2 py-4 space-y-2"
// //               >
// //                 {navItems.map((item) => (
// //                   <div key={item.href}>
// //                     <Link
// //                       href={item.href}
// //                       className="text-primary dark:text-primary font-medium hover:text-black dark:hover:text-white transition-colors"
// //                     >
// //                       {item.name}
// //                     </Link>
// //                   </div>
// //                 ))}
// //                 <div
// //                   className="pt-4 border-t space-y-2"
// //                 >
// //                   {/* <div >
// //                     <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
// //                       <Link href="#" onClick={() => setIsMenuOpen(false)}>
// //                         Sign In
// //                       </Link>
// //                     </Button>
// //                   </div>
// //                   <div >
// //                     <Button size="sm" className="w-full" asChild>
// //                       <Link href="#" onClick={() => setIsMenuOpen(false)}>
// //                         Get Started
// //                       </Link>
// //                     </Button>
// //                   </div> */}
// //                   <div>
// //                     <Link href="https://github.com/dhruv7tripathi" >
// //                       <SiGithub size={20} />
// //                     </Link>
// //                     <Link
// //                       className="ml-2"
// //                       href="https://twitter.com/dhruvtripathi77">
// //                       <SiX size={18} />
// //                     </Link>
// //                     <Themetoggle />

// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </nav>
// //   )
// // }

// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"
// import { Themetoggle } from "../ui/themetoggle"
// import Image from "next/image"
// import { ChevronDown, Menu } from "lucide-react"
// import { SiGithub } from "react-icons/si"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// // const products = [
// //   {
// //     title: "Linear Temp — UI Template",
// //     href: "#uitemplate",
// //     src: "https://layrdui.in/products/linear.png",
// //     description: "A clean, responsive Next.js + Tailwind template designed for fast product launches and consistent UI.",
// //   },
// //   {
// //     title: "Linear Temp — Docs Kit",
// //     href: "#docskit",
// //     src: "https://layrdui.in/products/polar-auth.png",
// //     description: "Documentation and component guidelines for shipping polished docs, changelogs, and marketing pages quickly.",
// //   },
// //   {
// //     title: "Linear Temp — Blog Starter",
// //     href: "#blogstarter",
// //     src: "https://layrdui.in/products/linear1.png",
// //     description: "Content-first blog layout with MDX support, SEO optimizations, and ready-to-use post templates.",
// //   },
// //   {
// //     title: "Linear Temp — Dashboard",
// //     href: "#dashboard",
// //     src: "https://layrdui.in/products/linear2.png",
// //     description: "Admin and analytics dashboard patterns with reusable components for monitoring and insights.",
// //   },
// // ]

// export const Navbar = () => {
//   const [isProductOpen, setIsProductOpen] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)
//   const dropdownRef = useRef<HTMLDivElement | null>(null)
//   const buttonRef = useRef<HTMLButtonElement | null>(null)

//   // useEffect(() => {
//   //   const handleMouseMove = (e: MouseEvent) => {
//   //     if (!isProductOpen) return

//   //     const dropdown = dropdownRef.current
//   //     const button = buttonRef.current

//   //     if (!dropdown || !button) return

//   //     const { clientX, clientY } = e
//   //     const dropdownBounds = dropdown.getBoundingClientRect()
//   //     const buttonBounds = button.getBoundingClientRect()

//   //     const bufferZone = 20

//   //     const isOverButton =
//   //       clientX >= buttonBounds.left &&
//   //       clientX <= buttonBounds.right &&
//   //       clientY >= buttonBounds.top &&
//   //       clientY <= buttonBounds.bottom + bufferZone

//   //     const isOverDropdown =
//   //       clientX >= dropdownBounds.left &&
//   //       clientX <= dropdownBounds.right &&
//   //       clientY >= dropdownBounds.top - bufferZone &&
//   //       clientY <= dropdownBounds.bottom

//   //     if (!isOverButton && !isOverDropdown) {
//   //       setIsProductOpen(false)
//   //     }
//   //   }

//   return (
//     <nav
//       className={cn(
//         "w-full transition-all border-b-2 dark:border-neutral-900 border-neutral-200 duration-300 bg-white dark:bg-black backdrop-blur-md fixed top-0 left-0 right-0 z-50",
//       )}
//     >
//       <div className="w-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3">
//         {/* Left: Logo and Nav */}
//         <div className="flex items-center space-x-2 sm:space-x-4">
//           <Link href="/" className="flex space-x-1.5 sm:space-x-2 items-center">
//             {/* <Image
//               width={500}
//               height={500}
//               src={"/logo.png"}
//               alt="Linear Logo"
//               quality={100}
//               priority={true}
//               className="h-8 w-8 sm:h-9 sm:w-9 dark:invert lg:h-10 lg:w-10 flex-shrink-0 rounded-xl object-cover"
//             /> */}
//             <h3 className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-white">OrbitUI</h3>
//           </Link>

//           {/* Desktop Navigation - Hidden on mobile and small tablets */}
//           <div className="hidden lg:flex px-4 xl:px-8 text-sm font-semibold space-x-4 xl:space-x-6 text-neutral-800 dark:text-neutral-200">
//             {/* Products Dropdown */}
//             <div className="relative z-50">
//               <Link
//                 href="/components"

//                 className="flex items-center gap-1 font-semibold hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//               >
//                 Components
//                 {/* <motion.div animate={{ rotate: isProductOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                   <ChevronDown className="w-4 h-4" />
//                 </motion.div> */}
//               </Link>


//             </div>

//             <a
//               href="#pricing"
//               className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//               onMouseEnter={() => setIsProductOpen(false)}
//             >
//               Pricing
//             </a>
//             <a
//               href="#faq"
//               className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//               onMouseEnter={() => setIsProductOpen(false)}
//             >
//               FAQ
//             </a>
//             <a
//               href="#blog"
//               className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//               onMouseEnter={() => setIsProductOpen(false)}
//             >
//               Blog
//             </a>
//             <a
//               href="#contact"
//               className="hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//               onMouseEnter={() => setIsProductOpen(false)}
//             >
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Right: Actions */}
//         <div className="flex items-center ml-auto space-x-1.5 sm:space-x-2 md:space-x-3">
//           {/* GitHub Link - Visible on sm and up */}
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hidden sm:flex p-1.5 sm:p-2 rounded-lg flex-row items-center space-x-1.5 sm:space-x-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
//           >
//             <SiGithub size={18} className="sm:w-5 sm:h-5" />
//             <span className="hidden md:block text-neutral-950 font-semibold dark:text-neutral-50 text-sm">23.5K</span>
//           </a>

//           {/* Theme Toggle */}
//           <Themetoggle />

//           {/* Login Button - Hidden on mobile, visible on md and up */}
//           <button className="hidden md:block dark:hover:bg-neutral-900 font-semibold hover:bg-neutral-100 rounded-lg py-1.5 px-3 lg:py-2 lg:px-4 text-sm">
//             Login
//           </button>

//           {/* Sign Up Button - Always visible but responsive sizing */}
//           <button className="dark:bg-neutral-900 font-semibold ring ring-neutral-300 dark:ring-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-50 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-black border border-neutral-200 dark:border-neutral-950 hover:border-white dark:hover:border-black transition-colors duration-300 text-xs sm:text-sm">
//             Sign Up
//           </button>

//           {/* Mobile Menu - Visible on lg and below */}
//           <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
//             <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-md p-1.5 sm:p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle menu</span>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[400px]">
//               <SheetHeader>
//                 <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col space-y-4 mt-8">
//                 {/* Mobile Products Section */}
//                 <div className="space-y-3 ml-1.5 sm:ml-2">
//                   <Link
//                     href="/components"
//                     className="flex items-center gap-1 font-semibold hover:bg-neutral-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-900 dark:text-neutral-50 text-neutral-950"
//                   >
//                     Components
//                   </Link>

//                 </div>

//                 {/* Mobile Navigation Links */}
//                 <div className="space-y-2 pt-4 border-t">
//                   <a
//                     href="#pricing"
//                     className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
//                     onClick={() => setIsMobileOpen(false)}
//                   >
//                     Pricing
//                   </a>
//                   <a
//                     href="#faq"
//                     className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
//                     onClick={() => setIsMobileOpen(false)}
//                   >
//                     FAQ
//                   </a>
//                   <a
//                     href="#blog"
//                     className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
//                     onClick={() => setIsMobileOpen(false)}
//                   >
//                     Blog
//                   </a>
//                   <a
//                     href="#contact"
//                     className="block py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base"
//                     onClick={() => setIsMobileOpen(false)}
//                   >
//                     Contact
//                   </a>
//                 </div>

//                 {/* Mobile Login Button - Only show on small devices where desktop login is hidden */}
//                 <div className="pt-4 border-t md:hidden">
//                   <button className="w-full py-2 px-3 sm:px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium text-sm sm:text-base">
//                     Login
//                   </button>
//                 </div>

//                 {/* Mobile GitHub Link - Only show on very small devices */}
//                 <div className="pt-4 border-t sm:hidden">
//                   <a
//                     href="https://github.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center space-x-2 py-2 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium"
//                     onClick={() => setIsMobileOpen(false)}
//                   >
//                     <SiGithub size={18} />
//                     <span>23.5K Stars</span>
//                   </a>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   )
// }
import { SiX, SiGithub } from "react-icons/si";
import { Menu, Moon, X } from 'lucide-react'
import Link from 'next/link'
import { Themetoggle } from '../ui/themetoggle';

export function OrbitNavbar() {
  return (
    <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
      <nav aria-label="Main navigation" className="flex items-center justify-between">
        <Link href="#top" className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">OrbitUI</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/components/AnimatedNetWorks" className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Components</Link>
          <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Pricing</Link>
          <span aria-hidden="true" className="h-6 w-px bg-border" />
          <Link aria-label="OrbitUI on GitHub" href="https://github.com/dhruv7tripathi" className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <SiGithub className="size-4" />
          </Link>
          <Link aria-label="OrbitUI on Twitter" href="https://twitter.com/dhruvtripathi77" className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <SiX className="size-4" />
          </Link>
          {/* <button aria-label="Toggle color theme" type="button" className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"> */}
          <Themetoggle />
          {/* </button> */}
        </div>

        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand [&::-webkit-details-marker]:hidden">
            <Menu className="size-4 group-open:hidden" />
            <X className="hidden size-4 group-open:block" />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <div className="absolute right-0 top-12 flex w-48 flex-col gap-1 rounded-xl border border-border bg-card p-2 shadow-2xl shadow-background/50">
            <Link href="/components/AnimatedNetWorks" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">Components</Link>
            <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">Pricing</Link>
            <Link href="https://github.com/dhruv7tripathi" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">GitHub</Link>
          </div>
        </details>
      </nav>
    </header>
  )
}
