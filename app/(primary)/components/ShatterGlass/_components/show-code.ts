export const title = "Shatter Glass";
export const routepoint = "shatter-glass";
export const description =
  "Interactive glass shattering canvas component with realistic fragments and customizable physics.";

export const cliscript = "add https://cursorxui.vercel.app/registry/shatterglass.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun shadcn@latest ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript = "clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const animatedFormProps = [
  { prop: "height", type: "number", default: "420", description: "Canvas height." },
  { prop: "color", type: '"ice" | "ember" | "jade" | "gold"', default: '"ice"', description: "Glass color palette." },
  { prop: "background", type: "string", default: '"#0a0a0f"', description: "Background color." },
  { prop: "fragmentCount", type: "[number, number]", default: "[14,22]", description: "Fragment count range." },
  { prop: "gravity", type: "number", default: "0.35", description: "Gravity applied to fragments." },
  { prop: "className", type: "string", default: '""', description: "Additional classes." },
];

export const democode = `
import ShatterGlass from "@/components/shatter-glass";

export default function Demo() {
  return <ShatterGlass />;
}
`;

export const code = `"use client";

import { useEffect, useRef, useCallback } from "react";

export type GlassColor = "ice" | "ember" | "jade" | "gold";

export interface ShatterGlassProps {
  height?: number;
  color?: GlassColor;
  background?: string;
  className?: string;
  fragmentCount?: [min: number, max: number];
  gravity?: number;
  onShatter?: (x: number, y: number, explosive: boolean) => void;
}

const PALETTES: Record<GlassColor, [string, string, string]> = {
  ice:   ["rgba(180,210,255,", "rgba(140,180,255,", "rgba(200,230,255,"],
  ember: ["rgba(255,180,180,", "rgba(255,140,120,", "rgba(255,210,180,"],
  jade:  ["rgba(180,255,200,", "rgba(140,255,180,", "rgba(200,255,220,"],
  gold:  ["rgba(255,240,160,", "rgba(255,200,100,", "rgba(255,255,180,"],
};

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const rndInt = (a: number, b: number) => Math.floor(rnd(a, b + 1));

function convexHull(pts: [number, number][]): [number, number][] {
  if (pts.length < 3) return pts;
  const sorted = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const lower: [number, number][] = [];
  const upper: [number, number][] = [];
  const cross = (
    o: [number, number],
    a: [number, number],
    b: [number, number]
  ) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  for (const p of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)
      lower.pop();
    lower.push(p);
  }
  for (const p of [...sorted].reverse()) {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)
      upper.pop();
    upper.push(p);
  }
  return [...lower.slice(0, -1), ...upper.slice(0, -1)];
}

interface Fragment {
  cx: number; cy: number;
  pixels: [number, number][];
  vx: number; vy: number;
  rot: number; rotV: number;
  alpha: number; life: number; age: number;
  col: string;
}

interface Crack {
  pts: [number, number][];
  alpha: number; life: number; age: number;
}

export default function ShatterGlass({
  height = 420,
  color = "ice",
  background = "#0a0a0f",
  className = "",
  fragmentCount = [14, 22],
  gravity = 0.35,
  onShatter,
}: ShatterGlassProps) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const state = useRef({
    W: 0,
    H: height,
    fragments: [] as Fragment[],
    cracks:    [] as Crack[],
    raf:       0,
    // BUG FIX 2 & 3: track pointer state properly
    pointerDown:    false,
    moved:          false,
    downTime:       0,
    lastX:          0,
    lastY:          0,
    palette:        PALETTES[color],
    grav:           gravity,
  });

  const voronoi = useCallback((
    cx: number, cy: number,
    n: number, spread: number
  ): Fragment[] => {
    const { W, H, palette } = state.current;
    const pts: [number, number][] = [[cx, cy]];
    for (let i = 1; i < n; i++) {
      const a = rnd(0, Math.PI * 2);
      const d = rnd(spread * 0.1, spread);
      pts.push([cx + Math.cos(a) * d, cy + Math.sin(a) * d]);
    }
    const pad = 200;
    const borders: [number, number][] = [
      [-pad, -pad], [W / 2, -pad], [W + pad, -pad],
      [-pad, H / 2], [W + pad, H / 2],
      [-pad, H + pad], [W / 2, H + pad], [W + pad, H + pad],
    ];
    const all = [...pts, ...borders];
    const cells: [number, number][][] = pts.map(() => []);
    const step = 6;
    for (let x = -pad; x < W + pad; x += step) {
      for (let y = -pad; y < H + pad; y += step) {
        let best = 0, bestD = Infinity;
        for (let i = 0; i < all.length; i++) {
          const dx = all[i][0] - x, dy = all[i][1] - y;
          const d = dx * dx + dy * dy;
          if (d < bestD) { bestD = d; best = i; }
        }
        if (best < pts.length) cells[best].push([x, y]);
      }
    }
    return pts.map((p, i) => ({
      cx: p[0], cy: p[1],
      pixels: cells[i] as [number, number][],
      vx: rnd(-3, 3),
      vy: rnd(-6, -1),
      rot: 0, rotV: rnd(-0.06, 0.06),
      alpha: 1,
      life: rnd(60, 140),
      age: 0,
      col: palette[rndInt(0, 2)],
    }));
  }, []);

  const addCrack = useCallback((cx: number, cy: number, branches: number) => {
    const s = state.current;
    for (let b = 0; b < branches; b++) {
      const angle = rnd(0, Math.PI * 2);
      const len   = rnd(40, 140);
      const pts: [number, number][] = [[cx, cy]];
      let x = cx, y = cy, a = angle;
      for (let i = 0; i < 12; i++) {
        a += rnd(-0.5, 0.5);
        x += Math.cos(a) * (len / 12);
        y += Math.sin(a) * (len / 12);
        pts.push([x, y]);
      }
      s.cracks.push({ pts, alpha: 1, age: 0, life: rnd(80, 180) });
    }
  }, []);

  const shatter = useCallback((cx: number, cy: number, explosive: boolean) => {
    const s = state.current;
    const n      = explosive ? rndInt(28, 42) : rndInt(fragmentCount[0], fragmentCount[1]);
    const spread = explosive ? rnd(280, 400) : rnd(100, 180);
    const frags  = voronoi(cx, cy, n, spread);
    if (explosive) frags.forEach(f => { f.vx *= 2.5; f.vy = rnd(-12, -2); });
    s.fragments.push(...frags);
    addCrack(cx, cy, explosive ? 8 : 4);
    onShatter?.(cx, cy, explosive);
  }, [voronoi, addCrack, fragmentCount, onShatter]);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const s = state.current;
    const { W, H } = s;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, W, H);

    for (const c of s.cracks) {
      ctx.beginPath();
      ctx.moveTo(c.pts[0][0], c.pts[0][1]);
      for (let i = 1; i < c.pts.length; i++) ctx.lineTo(c.pts[i][0], c.pts[i][1]);
      ctx.strokeStyle = \`rgba(200,220,255,\${c.alpha * 0.4})\`;
      ctx.lineWidth   = 0.7;
      ctx.stroke();
      c.alpha -= 1 / c.life;
    }
    s.cracks = s.cracks.filter(c => c.alpha > 0);

    for (const f of s.fragments) {
      const hull = convexHull(
        f.pixels.length > 2
          ? f.pixels
          : [[f.cx - 10, f.cy - 10], [f.cx + 10, f.cy], [f.cx, f.cy + 10]]
      );
      if (hull.length < 3) continue;
      const pcx = hull.reduce((sum, p) => sum + p[0], 0) / hull.length;
      const pcy = hull.reduce((sum, p) => sum + p[1], 0) / hull.length;

      ctx.save();
      ctx.translate(pcx, pcy);
      ctx.rotate(f.rot);
      ctx.translate(-pcx, -pcy);
      ctx.beginPath();
      ctx.moveTo(hull[0][0], hull[0][1]);
      for (let i = 1; i < hull.length; i++) ctx.lineTo(hull[i][0], hull[i][1]);
      ctx.closePath();
      ctx.fillStyle   = f.col + f.alpha * 0.18 + ")";
      ctx.fill();
      ctx.strokeStyle = f.col + f.alpha * 0.7 + ")";
      ctx.lineWidth   = 0.8;
      ctx.stroke();
      ctx.restore();

      f.pixels = f.pixels.map(p => [p[0] + f.vx, p[1] + f.vy]);
      f.cx += f.vx; f.cy += f.vy;
      f.vy += s.grav;
      f.rot += f.rotV;
      f.alpha -= 1 / f.life;
    }
    s.fragments = s.fragments.filter(f => f.alpha > 0);
    s.raf = requestAnimationFrame(loop);
  }, [background]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap   = wrapRef.current!;
    const s      = state.current;

    // BUG FIX 1: ResizeObserver on the wrapper so W is never 0
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      s.W = rect.width  || wrap.offsetWidth;
      s.H = height;
      canvas.width  = s.W;
      canvas.height = s.H;
    };

    const pos = (e: MouseEvent | TouchEvent): [number, number] => {
      const r   = canvas.getBoundingClientRect();
      const src = "touches" in e ? e.touches[0] : e;
      return [src.clientX - r.left, src.clientY - r.top];
    };

    // BUG FIX 2 & 3: unified pointer tracking — no global mouseup shatter
    const onPointerDown = (e: MouseEvent) => {
      s.pointerDown = true;
      s.moved       = false;
      s.downTime    = Date.now();
      [s.lastX, s.lastY] = pos(e);
    };

    const onPointerMove = (e: MouseEvent) => {
      if (!s.pointerDown) return;
      const [x, y] = pos(e);
      const dx = x - s.lastX, dy = y - s.lastY;
      if (dx * dx + dy * dy > 400) {
        s.moved = true;
        addCrack(x, y, 2);
        s.lastX = x; s.lastY = y;
      }
    };

    // BUG FIX 3: dblclick guard — ignore the second mouseup of a dblclick
    let dblPending = false;

    const onPointerUp = (e: MouseEvent) => {
      if (!s.pointerDown) return;
      s.pointerDown = false;
      if (dblPending) { dblPending = false; return; } // skip — dblclick already handled
      const [x, y] = pos(e);
      shatter(x, y, false);
    };

    const onDblClick = (e: MouseEvent) => {
      dblPending = true;
      const [x, y] = pos(e);
      shatter(x, y, true);
      setTimeout(() => { dblPending = false; }, 300);
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const [x, y] = pos(e);
      shatter(x, y, false);
    };

    canvas.addEventListener("mousedown",  onPointerDown);
    canvas.addEventListener("mousemove",  onPointerMove);
    canvas.addEventListener("mouseup",    onPointerUp);
    canvas.addEventListener("dblclick",   onDblClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });

    // BUG FIX 1: observe the wrapper div, not window resize
    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);

    // Call resize immediately AND after a microtask (layout may not be done yet)
    resize();
    setTimeout(resize, 0);

    s.raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(s.raf);
      canvas.removeEventListener("mousedown",  onPointerDown);
      canvas.removeEventListener("mousemove",  onPointerMove);
      canvas.removeEventListener("mouseup",    onPointerUp);
      canvas.removeEventListener("dblclick",   onDblClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      ro.disconnect();
    };
  }, [height, loop, shatter, addCrack]);

  useEffect(() => { state.current.palette = PALETTES[color]; }, [color]);
  useEffect(() => { state.current.grav    = gravity;         }, [gravity]);

  const reset = useCallback(() => {
    state.current.fragments = [];
    state.current.cracks    = [];
  }, []);

  return (
    // BUG FIX 1: w-full on the wrapper so ResizeObserver sees a real width
    <div
      ref={wrapRef}
      className={\`relative w-full overflow-hidden rounded-xl cursor-crosshair \${className}\`}
      style={{ height, background }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}`;
