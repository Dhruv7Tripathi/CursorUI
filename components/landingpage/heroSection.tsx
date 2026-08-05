import { ArrowRight, GitFork } from 'lucide-react'
import Link from 'next/link'
import { OrbitNavbar } from '@/components/landingpage/landing-navbar'
import { OrbitPreview } from '@/components/landingpage/orbit-preview'

export default function Page() {
    return (
        <main id="top" className="orbit-grid min-h-screen overflow-hidden bg-white dark:bg-black text-foreground">
            <OrbitNavbar />
            <section className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-16 pt-24 text-center sm:px-8 sm:pb-24 sm:pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pb-32">
                <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl sm:top-32" />
                <div className="relative z-[1] flex max-w-4xl flex-col items-center gap-7">
                    <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">The UI Library for Modern Web Experiences</h1>
                    <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">Beautifully crafted components for ambitious products. Ship faster with an adaptable system made for teams who care about every detail.</p>
                    <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                        <Link href="#components" className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto">
                            Explore components <ArrowRight className="size-4" />
                        </Link>
                        <Link href="https://github.com" className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto">
                            <GitFork className="size-4" /> Star on GitHub
                        </Link>
                    </div>
                    <p className="pt-3 text-sm text-muted-foreground/80">Free and open source. Designed for the way you build.</p>
                </div>
                <OrbitPreview />
            </section>
        </main>
    )
}
