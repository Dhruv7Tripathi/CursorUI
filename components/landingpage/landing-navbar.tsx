import { SiX, SiGithub } from "react-icons/si";
import { Menu, Moon, X } from 'lucide-react'
import Link from 'next/link'
import { Themetoggle } from '../ui/themetoggle';

export function OrbitNavbar() {
  return (
    <header className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-8 sm:pt-7 lg:px-10">
      <nav aria-label="Main navigation" className="flex items-center justify-between">
        <Link href="#top" className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <span className="text-lg font-semibold tracking-tight text-foreground sm:text-base">OrbitUI</span>
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
