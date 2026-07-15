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
                <section className="ml-4 lg:ml-8 mr-4 lg:mr-8">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        {/* <span className="text-sm font-semibold text-neutral-500">Build</span> */}
                        <TextShimmer
                            className="cursor-default  text-sm"
                            repeatDelay={0.5}
                            delay={1.5}
                        >
                            Build
                        </TextShimmer>

                        <h1 className="text-5xl font-semibold p-2 text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent">
                            Let&apos;s build something amazing
                        </h1>

                        <p className="text-base text-neutral-400 max-w-xl">
                            LayrdUI templates built with Next.js, TypeScript, and Tailwind CSS. Together, we can create something truly special.
                        </p>
                    </div>

                    <motion.section
                        className="relative border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-20"
                    >
                        <div className="mx-auto  px-6">
                            <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

                                <div className="max-w-3xl space-y-3">
                                    <div className="flex items-center space-x-4">
                                        <h1 className="text-xl font-semibold sm:text-4xl">Polar Auth</h1>
                                        <B2
                                            borderRadius="0.5rem"
                                            className="bg-white px-2 py-1 rounded-sm dark:bg-black font-bold text-black dark:text-white border border-neutral-200 dark:border-neutral-800"
                                        >
                                            Premium
                                        </B2>
                                    </div>
                                    <div className='dark:text-white  text-black'>
                                        <h1 className='text-sm'>Get Access with -
                                            <span className='font-bold '>

                                                $29
                                            </span>
                                        </h1>
                                    </div>

                                    <p className="dark:text-neutral-200 text-neutral-800 max-w-[80%] text-[15px]">
                                        Polar Auth is a modern authentication and Payment gateway Boilerplate designed for startups and creators. Built with Next.js , Tailwind CSS , NextAuth and Polar.sh, it features elegant layouts, and easy customization.
                                    </p>
                                    <div className="flex space-x-2 ">
                                        <Button
                                            asChild
                                            className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md "
                                        >
                                            <Link href="/templates/polar-auth">View Template</Link>
                                        </Button>
                                    </div>

                                </div>
                                {[
                                    { alt: "Deployment dashboard screenshot", src: "/products/polar-auth.png" },
                                    { alt: "Integrations and analytics screenshot", src: "/products/polar-auth-1.png" },
                                    { alt: "Pricing page screenshot", src: "/products/polar-auth-2.png" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative"
                                    >
                                        <div className="overflow-hidden rounded-lg">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={1000}
                                                height={500}
                                                quality={100}
                                                className="aspect-[16/11]  border dark:border-neutral-900 border-neutral-100 rounded-lg transition-transform duration-300 ease-out"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </motion.div>
                                ))}

                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        className="relative text-neutral-900 dark:text-neutral-50 border-b border-neutral-200 dark:border-neutral-800 py-20"
                    >
                        <div className="mx-auto max-w-8xl px-6">
                            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
                                {/* Left Text Block */}
                                <div className="max-w-3xl space-y-4">
                                    <h1 className="text-xl font-semibold sm:text-4xl">Linear</h1>
                                    <div className="flex items-center  mt-2">
                                        <Link
                                            href={"https://github.com/Dhruv7Tripathi/linear-template"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-sm"
                                        >
                                            {/* <Github size={18} /> */}
                                            <span className="font-bold">Open Source</span>
                                        </Link>
                                    </div>
                                    <p className="dark:text-neutral-200 text-neutral-800  max-w-[80%] text-[15px]">
                                        The Linear Template empowers you to launch intelligent, interactive web experiences with ease. Built for modern startups, it features a sleek design, seamless chat UI, and robust integration options.
                                    </p>
                                    <Button
                                        asChild
                                        className="pointer-events-auto  mt-3 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md "
                                    >
                                        <Link href="/templates/linear-template">View Template</Link>
                                    </Button>
                                </div>
                                {[
                                    {
                                        alt: "Deployment dashboard screenshot",
                                        src: "/products/linear.png",
                                    },
                                    {
                                        alt: "Integrations and analytics screenshot",
                                        src: "/products/linear1.png",
                                    },
                                    {
                                        alt: "Pricing page screenshot",
                                        src: "/products/linear2.png",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative rounded-lg"
                                    >
                                        <div className="overflow-hidden rounded-xl">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={560}
                                                height={320}
                                                className="aspect-[16/11] border dark:border-neutral-900 border-neutral-100 rounded-lg transition-transform duration-300 ease-out"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        className="relative border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-20"
                    >
                        <div className="mx-auto  max-w-8xl px-6">
                            <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

                                <div className="max-w-3xl space-y-4">
                                    <h1 className="text-xl font-semibold sm:text-4xl">Bloggify</h1>
                                    <div className="flex items-center  mt-2">
                                        <Link
                                            href={"https://github.com/Dhruv7Tripathi/bloggify-template"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-sm"
                                        >
                                            {/* <Github size={18} /> */}
                                            <span className="font-bold">Open Source</span>
                                        </Link>
                                    </div>
                                    <p className="dark:text-neutral-200 text-neutral-800  max-w-[80%] text-[15px]">
                                        Bloggify is a modern, minimalistic blog template designed for startups and creators. Built with Next.js and Tailwind CSS, it features elegant layouts, and easy customization.
                                    </p>
                                    <Button
                                        asChild
                                        className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md "
                                    >
                                        <Link href="/templates/bloggify-template">View Template</Link>
                                    </Button>
                                </div>
                                {[
                                    {
                                        alt: "Deployment dashboard screenshot",
                                        src: "/products/bloggify.png",
                                    },
                                    {
                                        alt: "Integrations and analytics screenshot",
                                        src: "/products/bloggify1.png",
                                    },
                                    {
                                        alt: "Pricing page screenshot",
                                        src: "/products/bloggify2.png",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative rounded-xl"
                                    >
                                        <div className="overflow-hidden rounded-lg">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={1000}
                                                height={500}
                                                className="aspect-[16/11] border dark:border-neutral-900 border-neutral-100 rounded-lg transition-transform duration-300 ease-out"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                    <motion.section
                        className="relative text-neutral-900 dark:text-neutral-50 py-20"
                    >
                        <div className="mx-auto max-w-8xl px-6">
                            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
                                <div className="max-w-3xl space-y-4">
                                    <h1 className="text-xl font-semibold sm:text-4xl">Pheonix Portfolio</h1>
                                    <div className="flex items-center  mt-2">
                                        <Link
                                            href={"https://github.com/Dhruv7Tripathi/pheonix-portfolio"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-sm"
                                        >
                                            {/* <Github size={18} /> */}
                                            <span className="font-bold">Open Source</span>
                                        </Link>
                                    </div>
                                    <p className="dark:text-neutral-200 text-neutral-800  max-w-[80%] text-[15px]">
                                        Pheonix Portfolio is a simple, modern portfolio template built with Tailwind CSS and TypeScript on Next.js.
                                    </p>
                                    <Button
                                        asChild
                                        className="pointer-events-auto mt-2 rounded-sm border-1 border-neutral-200 dark:border-neutral-700 bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md hover:bg-background "
                                    >
                                        <Link href="/templates/pheonix-portfolio">View Template</Link>
                                    </Button>
                                </div>
                                {[
                                    {
                                        alt: "Deployment dashboard screenshot",
                                        src: "/products/pheonix.png",
                                    },
                                    {
                                        alt: "Integrations and analytics screenshot",
                                        src: "/products/pheonix1.png",
                                    },
                                    {
                                        alt: "Pricing page screenshot",
                                        src: "/products/pheonix2.png",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group relative rounded-xl"
                                    >
                                        <div className="overflow-hidden">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={560}
                                                height={320}
                                                className="aspect-[16/11] object-cover border dark:border-neutral-900 border-neutral-100 rounded-lg transition-transform duration-300 ease-out"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                    <div className="text-center relative z-10">
                        <Link href={"/templates"}>
                            <Button
                                variant="secondary"
                                size="lg"
                                className="group ring-2 ring-neutral-300/40 dark:ring-white/10 w-50 items-center gap-3 text-nowrap rounded-sm bg-background py-[10px] pl-3 pr-2 text-[0.9rem] text-sm text-neutral-800 dark:text-neutral-200 transition-all duration-300 hover:bg-neutral-900/[1.98] "
                            >
                                Show more
                                <div className="relative overflow-hidden font-medium">
                                    <span className="invisible">
                                        <ChevronRightIcon size={14} />
                                    </span>
                                    <span className="absolute left-0 top-0.5 text-neutral-800   dark:text-neutral-200 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full hover:text-black dark:group-hover:text-white">
                                        <ChevronRightIcon size={14} />
                                    </span>
                                    <span className="absolute left-0 top-0.5 -translate-x-full text-neutral-800 dark:text-neutral-100 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 hover:text-black dark:group-hover:text-white">
                                        <ChevronRightIcon size={14} />
                                    </span>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </section>

                <div className="min-h-screen max-w-8xl mt-12 bg-neutral-900/[1.98] mr-8 ml-8 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="relative z-10 mb-16 flex flex-col items-center justify-center text-center px-4">
                            <div className="max-w-3xl">
                                <h1 className="text-6xl font-bold mb-4">
                                    <span className="text-neutral-900 dark:text-neutral-50 font-semibold">Component Packs</span>
                                </h1>
                                <p className="text-neutral-800 dark:text-neutral-300 max-w-xl text-sm mx-auto">
                                    LayrdUI component packs are curated and designed to speed up development. Each pack includes  themeable components built with Next.js, TypeScript, and Tailwind CSS.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {componentPacks.map((pack) => (
                                <ComponentPackCard key={pack.id} {...pack} />
                            ))}
                        </div>
                        {/* <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" /> */}


                    </div>
                </div>
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

const componentPacks = [
    {
        id: "hero-sections",
        title: "Hero Sections",
        description: "A collection of hero sections that are modern and stand out with micro interactions and minimal animations",
        componentCount: 9,
        originalPrice: 18,
        currentPrice: 12,
        previewImage: "/products/aiagent.png",
        href: "/components/hero-sections",
    },
    {
        id: "footers",
        title: "Footers",
        description: "A collection of logo clouds with micro interactions and minimal animations",
        componentCount: 3,
        originalPrice: 15,
        currentPrice: 10,
        previewImage: "/others/footers.png",
        href: "/components/footers",
    },
    {
        id: "pricing-sections",
        title: "Pricing Sections",
        description: "A set of feature sections ranging from bento grids to simple layouts",
        componentCount: 4,
        originalPrice: 14,
        currentPrice: 9,
        previewImage: "/others/pricing.png",
        href: "/components/pricing-sections",
    },
    {
        id: "faqs",
        title: "FAQs",
        description: "FAQ sections with interactive elements and clean design with subtle animations.",
        componentCount: 6,
        originalPrice: 15,
        currentPrice: 9,
        previewImage: "/others/faqs.png",
        href: "/components/faqs",
    },
    {
        id: "bento-grids",
        title: "Bento Grids",
        description: "A set of bento grids for unique layouts with micro interactions and minimal animations",
        componentCount: 3,
        originalPrice: 18,
        currentPrice: 12,
        previewImage: "/others/bento-grid.png",
        href: "/components/bento-grids",
    },
    {
        id: "cta",
        title: "CTAs",
        description: "Engaging sections to encourage user interaction and conversions with micro interactions and minimal animations",
        componentCount: 2,
        originalPrice: 15,
        currentPrice: 9,
        previewImage: "/others/cta.png",
        href: "/components/CTA-Sections",
    },
]
