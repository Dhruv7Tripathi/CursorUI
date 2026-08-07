import { ArrowUpRight, Check, Code2, Layers3, Sparkles } from 'lucide-react'

export function OrbitPreview() {
  return (
    <div id="components" className="orbit-preview relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-card/80 text-left shadow-2xl shadow-background/80 sm:mt-20 lg:mt-24">
      <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-brand" />
          <span className="font-mono text-[11px] text-muted-foreground">OrbitUI</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 className="size-3.5" />
          <span className="font-mono text-[10px] uppercase tracking-wider">preview</span>
        </div>
      </div>
      <div className="grid min-h-72 gap-8 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex size-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
            <Layers3 className="size-5" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Built to compose</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Your interface, in orbit.</h2>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Purposeful primitives that give every product a polished starting point.</p>
          </div>
          <button type="button" className="flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            Explore the system <ArrowUpRight className="size-4" />
          </button>
        </div>
        <div className="grid content-center gap-3 rounded-xl border border-border bg-background/70 p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground"><Sparkles className="size-4 text-brand" /> Component surface</div>
            <span className="rounded-full bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">v0.1</span>
          </div>
          {['Accessible by default', 'Composable architecture', 'Responsive by design'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-border/70 bg-card px-3 py-3 text-sm text-muted-foreground">
              <span className="flex size-5 items-center justify-center rounded-full bg-brand/15 text-brand"><Check className="size-3" /></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
