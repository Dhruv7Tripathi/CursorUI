"use client";

import { ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Navbar } from "@/components/landingpage/landing-navbar";

export default function Page() {
    return (
        <main
            id="top"
            className="orbit-grid min-h-screen overflow-hidden bg-white text-foreground dark:bg-black"
        >
            <Navbar />

            <section className="relative mt-48 sm:mt-0 mx-auto flex max-w-7xl justify-center flex-col items-center px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pb-32 xl:pt-44">
                {/* Background glow */}
                <div className="absolute left-1/2 top-20 -z-0 h-56 w-56 -translate-x-1/2 rounded-full bg-brand/10 blur-2xl sm:top-32 sm:h-72 sm:w-72 sm:blur-3xl lg:h-80 lg:w-80 xl:h-96 xl:w-96" />

                <div className="relative z-[1] flex max-w-4xl flex-col items-center gap-6 sm:gap-7">
                    {/* Hero heading */}
                    <h1 className="max-w-2xl mt-48 sm:mt-0 text-balance text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        The UI Library for{" "}
                        <span className="text-brand">Modern Web Experiences</span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:max-w-2xl sm:text-lg sm:leading-8">
                        Beautifully crafted, accessible, and customizable React components
                        built with TypeScript and Tailwind CSS. Build faster and ship
                        interfaces that feel exceptional.
                    </p>

                    {/* CTA */}
                    <div className="flex w-full max-w-xs flex-col items-center justify-center gap-3 xs:max-w-sm sm:w-auto sm:max-w-none sm:flex-row">
                        <Link
                            href="components/AnimatedNetWorks"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto"
                        >
                            Explore components
                            <ArrowRight className="size-4" />
                        </Link>

                        <Link
                            href="https://github.com/Dhruv7Tripathi/CursorUI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto"
                        >
                            <SiGithub className="size-4" />
                            View on GitHub
                        </Link>
                    </div>

                    {/* Open source message */}
                    <p className="pt-1 text-xs text-muted-foreground/80 sm:pt-2 sm:text-sm">
                        Free and open source. Built for the dev community.
                    </p>
                </div>

                {/* Component preview */}
                {/* <OrbitPreview /> */}
            </section>
        </main>
    );
}