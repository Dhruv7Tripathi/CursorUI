"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "./landing-navbar"
import { motion } from "framer-motion"
import TextShimmer from "@/components/code/textshimmer";
import { Footer } from "./landing-footer"
import { Button as B2 } from "../ui/moving-border"
import Nextjs from "../icons/Nextjs"
import ReactIcon from "../icons/React"
import Motion from "../icons/Motion"
import TailwindIcon from "../icons/tailwind"
import ShadcnIcon from "../icons/Shadcn"
import { ChevronRight, ChevronRightIcon } from 'lucide-react';
import { ComponentPackCard } from "@/components/landingpage/componentsCards";
import Image from "next/image"
// import Cta from "./cta"
export const HeroSection = () => {
    return (
        <div className="bg-white/[0.96] dark:bg-black ">
            <Navbar />
            {/* <Spotlight /> */}
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-40 contain-strict hidden lg:block"
            >
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.12)_0,hsla(220,50%,55%,.04)_50%,hsla(220,30%,45%,0)_80%)]" />
                <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,70%,85%,.08)_0,hsla(280,50%,45%,.03)_80%,transparent_100%)] translate-x-1/2 -translate-y-1/2" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(200,70%,85%,.06)_0,hsla(200,50%,45%,.02)_80%,transparent_100%)]" />
            </div>

            <main className="relative z-10">

                <section className="px-4 sm:px-6 min-h-screen py-16 sm:py-20 lg:py-32">
                    <div className="mx-auto  mt-14 text-center">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl"
                        >
                            {/* Ship <Cover className="font-serif">Faster</Cover>
                            <br />
                            with Stunning UI Blocks */}
                            Create Interfaces That Stand Out
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground lg:mt-8 px-4"
                        >
                            Focus on your ideas, not boilerplate code. LayrdUI provides elegant, customizable blocks to bring your projects to life quickly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:mt-12 px-4"
                        >
                            <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-5 w-[18rem] sm:w-auto"
                                >
                                    <Link href="/templates">Start Building</Link>
                                </Button>
                            </motion.div>

                            <motion.div
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Button
                                    size="lg"
                                    className="text-lg w-full sm:w-auto bg-background hover:bg-background dark:bg-background text-neutral-900 dark:text-neutral-100 group"
                                >
                                    <Link href="/intro" className="flex items-center">
                                        Browse Docs
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <ChevronRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-3" />
                                        </motion.span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            className="mt-12 sm:mt-16 lg:mt-16"
                        >
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-6 ">
                                <Nextjs fontSize={30} />
                                <ReactIcon fontSize={30} />
                                <Motion fontSize={30} />
                                <TailwindIcon />
                                <ShadcnIcon fontSize={30} />
                            </div>
                        </motion.div>
                    </div>
                </section>



                <div className="relative z-10">
                    {/* <div className="h-150 mt-30">

                        <Cta />
                    </div> */}
                    <Footer />
                </div>
            </main>
        </div>
    )
}
