export const title = "Fluid Cube Grid";
export const routepoint = "fluid-cube-grid";
export const description =
  "Interactive 3D voxel grid built with React Three Fiber and Three.js.";

export const cliscript = "add @orbitui/registry/fluid-cube-grid";

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

const packagescript =
  "three @react-three/fiber clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const animatedFormProps = [
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional wrapper classes.",
  },
];

export const democode = `
import FluidCubeGrid from "@/components/fluidCubeGrid";

export function FluidCubeGridExample() {
  return <FluidCubeGrid />;
}
`;

export const code = `"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type GravityMode = "normal" | "orbit" | "chaos";
export type WellType    = "attract" | "repel" | "hole";

export interface GravityWellProps {
  /** Canvas height in px */
  height?: number;
  /** Number of floating particles */
  particleCount?: number;
  /** Physics mode */
  mode?: GravityMode;
  /** Background color */
  background?: string;
  /** Extra className on wrapper */
  className?: string;
  /** Called when user creates a well */
  onWell?: (x: number, y: number, type: WellType) => void;
}

// ─── Internal types ───────────────────────────────────────────────────────────

type RGB = [number, number, number];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; g: number; b: number;
  size: number;
  trail: [number, number][];
}

interface Well {
  x: number; y: number;
  type: WellType;
  age: number;
  life: number;
  radius: number;
  strength: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS: RGB[] = [
  [100, 180, 255],
  [80,  255, 200],
  [200, 120, 255],
  [255, 180, 80 ],
  [255, 80,  140],
  [80,  255, 130],
];

const TRAIL_LEN  = 18;
const MAX_SPEED  = 9;
const DAMPING    = 0.985;

// ─── Utils ────────────────────────────────────────────────────────────────────

const rnd    = (a: number, b: number) => a + Math.random() * (b - a);
const pick   = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// ─── Component ────────────────────────────────────────────────────────────────


export default function GravityWell({
  height        = 480,
  particleCount = 220,
  mode          = "normal",
  background    = "#060810",
  className     = "",
  onWell,
}: GravityWellProps) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const state = useRef({
    W: 0, H: height,
    particles: [] as Particle[],
    wells:     [] as Well[],
    mode,
    raf: 0,
  });

  // ── spawn ─────────────────────────────────────────────────────────────────

  const spawnParticle = useCallback((): Particle => {
    const { W, H } = state.current;
    const [r, g, b] = pick(COLORS);
    return {
      x: rnd(0, W), y: rnd(0, H),
      vx: rnd(-1, 1), vy: rnd(-1, 1),
      r, g, b,
      size: rnd(1.5, 3.5),
      trail: [],
    };
  }, []);

  const init = useCallback(() => {
    state.current.particles = Array.from({ length: particleCount }, spawnParticle);
    state.current.wells     = [];
  }, [particleCount, spawnParticle]);

  // ── well creation ─────────────────────────────────────────────────────────

  const addWell = useCallback((x: number, y: number, type: WellType) => {
    state.current.wells.push({
      x, y, type,
      age:      0,
      life:     type === "hole" ? 400 : 220,
      radius:   type === "hole" ? 22  : 14,
      strength: type === "hole" ? 380 : type === "repel" ? 160 : 240,
    });
    onWell?.(x, y, type);
  }, [onWell]);

  // ── physics update ────────────────────────────────────────────────────────

  const update = useCallback(() => {
    const s = state.current;
    const { W, H, particles, wells } = s;

    for (const w of wells) {
      w.age++;
      if (w.type === "hole") w.radius = 22 * Math.min(1, w.age / 30);
    }

    for (const p of particles) {
      let ax = 0, ay = 0;

      for (const w of wells) {
        const dx   = w.x - p.x, dy = w.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;

        if (w.type === "hole" && dist < w.radius + 2) {
          Object.assign(p, spawnParticle());
          continue;
        }

        const force = w.strength / (dist * dist + 200);
        const sign  = w.type === "repel" ? -1 : 1;

        if (s.mode === "orbit") {
          ax += ((-dy / dist) * force * sign * 120) + ((dx / dist) * force * sign * 0.2);
          ay += (( dx / dist) * force * sign * 120) + ((dy / dist) * force * sign * 0.2);
        } else {
          ax += (dx / dist) * force * sign;
          ay += (dy / dist) * force * sign;
        }
      }

      if (s.mode === "chaos") {
        ax += (Math.random() - 0.5) * 0.4;
        ay += (Math.random() - 0.5) * 0.4;
      }

      p.vx = (p.vx + ax) * DAMPING;
      p.vy = (p.vy + ay) * DAMPING;

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > MAX_SPEED) { p.vx = p.vx / speed * MAX_SPEED; p.vy = p.vy / speed * MAX_SPEED; }

      p.trail.push([p.x, p.y]);
      if (p.trail.length > TRAIL_LEN) p.trail.shift();

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) { p.x = 0; p.vx *= -0.6; }
      if (p.x > W) { p.x = W; p.vx *= -0.6; }
      if (p.y < 0) { p.y = 0; p.vy *= -0.6; }
      if (p.y > H) { p.y = H; p.vy *= -0.6; }
    }

    s.wells = wells.filter(w => w.age < w.life);
  }, [spawnParticle]);

  // ── render ────────────────────────────────────────────────────────────────

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const { W, H, particles, wells } = state.current;

    ctx.fillStyle = "rgba(6,8,16,0.22)";
    ctx.fillRect(0, 0, W, H);

    // wells
    for (const w of wells) {
      const progress = w.age / w.life;
      const alpha    = w.type === "hole" ? 0.9 : (1 - progress) * 0.85;
      const pulseR   = w.radius * (1 + Math.sin(w.age * 0.15) * 0.12);

      if (w.type === "hole") {
        const g = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, pulseR * 4);
        g.addColorStop(0,   "rgba(0,0,0,0.98)");
        g.addColorStop(0.4, "rgba(80,0,160,0.6)");
        g.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(w.x, w.y, pulseR * 4, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(w.x, w.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(160,60,255,\${alpha * 0.9})\`; ctx.fill();
      } else {
        const [r, g2, b] = w.type === "repel" ? [255, 100, 80] : [80, 160, 255];
        const gr = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, pulseR * 5);
        gr.addColorStop(0,   \`rgba(\${r},\${g2},\${b},\${alpha * 0.5})\`);
        gr.addColorStop(0.4, \`rgba(\${r},\${g2},\${b},\${alpha * 0.12})\`);
        gr.addColorStop(1,   \`rgba(\${r},\${g2},\${b},0)\`);
        ctx.beginPath(); ctx.arc(w.x, w.y, pulseR * 5, 0, Math.PI * 2);
        ctx.fillStyle = gr; ctx.fill();
        ctx.beginPath(); ctx.arc(w.x, w.y, pulseR, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(\${r},\${g2},\${b},\${alpha * 0.8})\`; ctx.fill();
        for (let ring = 1; ring <= 3; ring++) {
          ctx.beginPath(); ctx.arc(w.x, w.y, pulseR * (1 + ring * 0.7), 0, Math.PI * 2);
          ctx.strokeStyle = \`rgba(\${r},\${g2},\${b},\${alpha * 0.08 * (4 - ring)})\`;
          ctx.lineWidth   = 0.5; ctx.stroke();
        }
      }
    }

    // particles + trails
    for (const p of particles) {
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const glow  = Math.min(1, speed / 5);

      if (p.trail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0][0], p.trail[0][1]);
        for (let i = 1; i < p.trail.length; i++) ctx.lineTo(p.trail[i][0], p.trail[i][1]);
        ctx.strokeStyle = \`rgba(\${p.r},\${p.g},\${p.b},\${glow * 0.25})\`;
        ctx.lineWidth   = p.size * 0.5;
        ctx.lineCap     = "round"; ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 + glow * 0.8), 0, Math.PI * 2);
      ctx.fillStyle = \`rgba(\${p.r},\${p.g},\${p.b},\${0.5 + glow * 0.5})\`;
      ctx.fill();
    }
  }, []);

  // ── loop ──────────────────────────────────────────────────────────────────

  const loop = useCallback(() => {
    update(); draw();
    state.current.raf = requestAnimationFrame(loop);
  }, [update, draw]);

  // ── mount ─────────────────────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap   = wrapRef.current!;
    const s      = state.current;

    const resize = () => {
      s.W = wrap.getBoundingClientRect().width || wrap.offsetWidth;
      s.H = height;
      canvas.width  = s.W;
      canvas.height = s.H;
    };

    const pos = (e: MouseEvent | Touch): [number, number] => {
      const r = canvas.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };

    let dblGuard = false;

    const onClick = (e: MouseEvent) => {
      if (dblGuard) return;
      const [x, y] = pos(e); addWell(x, y, "attract");
    };
    const onDbl = (e: MouseEvent) => {
      dblGuard = true;
      const [x, y] = pos(e); addWell(x, y, "repel");
      setTimeout(() => { dblGuard = false; }, 300);
    };
    const onCtx = (e: MouseEvent) => {
      e.preventDefault();
      const [x, y] = pos(e); addWell(x, y, "hole");
    };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      const [x, y] = pos(e.touches[0]); addWell(x, y, "attract");
    };

    canvas.addEventListener("click",       onClick);
    canvas.addEventListener("dblclick",    onDbl);
    canvas.addEventListener("contextmenu", onCtx);
    canvas.addEventListener("touchstart",  onTouch, { passive: false });

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    setTimeout(resize, 0);
    init();
    s.raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(s.raf);
      canvas.removeEventListener("click",       onClick);
      canvas.removeEventListener("dblclick",    onDbl);
      canvas.removeEventListener("contextmenu", onCtx);
      canvas.removeEventListener("touchstart",  onTouch);
      ro.disconnect();
    };
  }, [height, init, loop, addWell]);

  // sync mode without reinit
  useEffect(() => { state.current.mode = mode; }, [mode]);

  return (
    <div
      ref={wrapRef}
      className={\`relative w-full overflow-hidden rounded-xl cursor-crosshair \${className}\`}
      style={{ height, background }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}

`;
