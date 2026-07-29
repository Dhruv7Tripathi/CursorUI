// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import Navbar from "./landing-navbar"
// import { motion } from "framer-motion"
// import TextShimmer from "@/components/code/textshimmer";
// import { Footer } from "./landing-footer"
// import { Button as B2 } from "../ui/moving-border"
// import Nextjs from "../icons/Nextjs"
// import ReactIcon from "../icons/React"
// import Motion from "../icons/Motion"
// import TailwindIcon from "../icons/tailwind"
// import ShadcnIcon from "../icons/Shadcn"
// import { ChevronRight, ChevronRightIcon } from 'lucide-react';
// import { ComponentPackCard } from "@/components/landingpage/componentsCards";
// import Image from "next/image"
// // import Cta from "./cta"
// export const HeroSection = () => {
//     return (
//         <div className="bg-white/[0.96] dark:bg-black ">
//             <Navbar />
//             {/* <Spotlight /> */}
//             <div
//                 aria-hidden
//                 className="z-[2] absolute inset-0 pointer-events-none isolate opacity-40 contain-strict hidden lg:block"
//             >
//                 <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(220,70%,85%,.12)_0,hsla(220,50%,55%,.04)_50%,hsla(220,30%,45%,0)_80%)]" />
//                 <div className="h-[80rem] absolute right-0 top-0 w-56 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(280,70%,85%,.08)_0,hsla(280,50%,45%,.03)_80%,transparent_100%)] translate-x-1/2 -translate-y-1/2" />
//                 <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(200,70%,85%,.06)_0,hsla(200,50%,45%,.02)_80%,transparent_100%)]" />
//             </div>

//             <main className="relative z-10">

//                 <section className="px-4 sm:px-6 min-h-screen py-16 sm:py-20 lg:py-32">
//                     <div className="mx-auto  mt-14 text-center">

//                         <motion.h1
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                             className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl"
//                         >
//                             {/* Ship <Cover className="font-serif">Faster</Cover>
//                             <br />
//                             with Stunning UI Blocks */}
//                             Create Interfaces That Stand Out
//                         </motion.h1>

//                         <motion.p
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
//                             className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground lg:mt-8 px-4"
//                         >
//                             Focus on your ideas, not boilerplate code. LayrdUI provides elegant, customizable blocks to bring your projects to life quickly.
//                         </motion.p>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
//                             className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:mt-12 px-4"
//                         >
//                             <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
//                                 <Button
//                                     size="lg"
//                                     className="text-lg px-8 py-5 w-[18rem] sm:w-auto"
//                                 >
//                                     <Link href="/templates">Start Building</Link>
//                                 </Button>
//                             </motion.div>

//                             <motion.div
//                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                             >
//                                 <Button
//                                     size="lg"
//                                     className="text-lg w-full sm:w-auto bg-background hover:bg-background dark:bg-background text-neutral-900 dark:text-neutral-100 group"
//                                 >
//                                     <Link href="/intro" className="flex items-center">
//                                         Browse Docs
//                                         <motion.span
//                                             whileHover={{ x: 4 }}
//                                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                                         >
//                                             <ChevronRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-3" />
//                                         </motion.span>
//                                     </Link>
//                                 </Button>
//                             </motion.div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
//                             className="mt-12 sm:mt-16 lg:mt-16"
//                         >
//                             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-6 ">
//                                 <Nextjs fontSize={30} />
//                                 <ReactIcon fontSize={30} />
//                                 <Motion fontSize={30} />
//                                 <TailwindIcon />
//                                 <ShadcnIcon fontSize={30} />
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>



//                 <div className="relative z-10">
//                     {/* <div className="h-150 mt-30">

//                         <Cta />
//                     </div> */}
//                     <Footer />
//                 </div>
//             </main>
//         </div>
//     )
// }
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Button as B2 } from "../ui/moving-border"
import { SiDiscord } from "react-icons/si"

const HeroSection = () => {
    return (
        <div className="border-b border-neutral-200 dark:border-neutral-900">
            <motion.section
                className="flex items-center min-h-[calc(60vh)] mb-12 sm:mb-16 md:mb-20 lg:mb-24 justify-center text-black dark:text-white"
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6 px-4 sm:px-6 lg:px-8">
                    <B2
                        borderRadius="0.5rem"
                        className="bg-white rounded-lg dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800"
                    >
                        Public beta is live <ChevronRight className="ml-2 mt-0.5 size-4" />
                    </B2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-7 md:mt-8 font-sans font-bold">
                        Build the future with Linear
                    </h1>
                    <p className="max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] mx-auto font-semibold text-neutral-800 dark:text-neutral-300 text-sm sm:text-base md:text-lg">
                        A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS. Perfect for
                        startups and SaaS products.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 md:mt-12 gap-3 sm:gap-4">
                        <Button
                            size="lg"
                            className="bg-black dark:bg-neutral-50 dark:text-neutral-950 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300 w-full sm:w-auto min-w-[180px]"
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            size="lg"
                            className="text-base rounded-3xl bg-white border border-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 dark:bg-black text-neutral-900 dark:text-neutral-100 flex items-center w-full sm:w-auto min-w-[180px]"
                        >
                            <SiDiscord className="mr-2 h-5 w-5" />
                            Community
                        </Button>
                    </div>
                </div>
            </motion.section>

            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 rounded-2xl sm:rounded-3xl w-full max-w-[320px] h-[200px] sm:max-w-[600px] sm:h-[375px] md:max-w-[900px] md:h-[560px] lg:max-w-[1200px] lg:h-[750px] xl:max-w-[1300px] xl:h-[800px] bg-neutral-900/60 backdrop-blur-md mx-auto mt-6 sm:mt-8 overflow-hidden">
                    <Image
                        src="/dash.png"
                        alt="AI-powered SaaS Dashboard"
                        fill
                        className="rounded-2xl sm:rounded-3xl object-cover"
                        priority
                        quality={100}
                    />
                    <div className="absolute bottom-0 left-0 h-[120px] sm:h-[240px] md:h-[360px] lg:h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
                </div>
            </div>

            <div className="opacity-10 mb-5" />
        </div>
    )
}

export default HeroSection