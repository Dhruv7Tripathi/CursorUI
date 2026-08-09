export const title = "Verlet Rope";
export const routepoint = "verlet-rope";
export const description =
  "Interactive physics rope simulation built with Canvas using Verlet integration.";

export const cliscript = "add @orbitxui/verletrope";

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
  { prop: "segments", type: "number", default: "18", description: "Number of rope segments." },
  { prop: "stiffness", type: "number", default: "8", description: "Constraint stiffness." },
  { prop: "gravity", type: "number", default: "12", description: "Gravity strength." },
  { prop: "damping", type: "number", default: "0.985", description: "Velocity damping." },
  { prop: "height", type: "number", default: "360", description: "Canvas height." },
  { prop: "color", type: "string", default: '"currentColor"', description: "Rope color." },
  { prop: "nodeRadius", type: "number", default: "4", description: "Node radius." },
  { prop: "showNodes", type: "boolean", default: "true", description: "Show rope nodes." },
  { prop: "windTrigger", type: "number", default: "undefined", description: "Trigger a wind burst." },
  { prop: "className", type: "string", default: '""', description: "Additional classes." },
];

export const democode = `
import VerletRope from "@/components/verlet-rope";

export default function Demo() {
  return <VerletRope />;
}
`;

export const code = `"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VerletRopeProps {
  /** Number of rope segments */
  segments?: number;
  /** Constraint solver iterations — higher = stiffer rope */
  stiffness?: number;
  /** Gravity strength (pixels/frame²) */
  gravity?: number;
  /** Velocity damping per frame (0–1) */
  damping?: number;
  /** Canvas height in px */
  height?: number;
  /** Rope color — defaults to CSS currentColor */
  color?: string;
  /** Node radius for non-pinned nodes */
  nodeRadius?: number;
  /** Whether to show nodes */
  showNodes?: boolean;
  /** Apply a wind burst — change this value to trigger a new gust */
  windTrigger?: number;
  /** Additional class on the canvas wrapper */
  className?: string;
}

interface Node {
  x: number;
  y: number;
  pinned: boolean;
}

interface Constraint {
  a: number;
  b: number;
  len: number;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * VerletRope
 *
 * A fully interactive, physics-simulated rope rendered on a Canvas.
 * Uses Verlet integration for velocity + constraint relaxation for stiffness.
 * Grab any node with mouse or touch to deform the rope.
 * No physics library needed — pure math.
 *
 * @example
 * <VerletRope segments={20} gravity={14} stiffness={10} height={300} />
 */
export default function VerletRope({
  segments = 18,
  stiffness = 8,
  gravity = 12,
  damping = 0.985,
  height = 360,
  color,
  nodeRadius = 4,
  showNodes = true,
  windTrigger,
  className = "",
}: VerletRopeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({
    nodes: [] as Node[],
    prev:  [] as { x: number; y: number }[],
    constraints: [] as Constraint[],
    dragging: -1,
    mouseX: 0,
    mouseY: 0,
    wind: 0,
    windFrames: 0,
    W: 0,
    H: height,
    raf: 0,
  });

  // ── init ──────────────────────────────────────────────────────────────────

  const init = useCallback(() => {
    const s = state.current;
    const { W, H } = s;
    if (W === 0) return;

    const startX = W * 0.15;
    const endX   = W * 0.85;
    const y      = H * 0.1;
    const segLen = Math.hypot(endX - startX, 0) / segments;

    s.nodes = [];
    s.prev  = [];
    s.constraints = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = startX + (endX - startX) * t;
      s.nodes.push({ x, y, pinned: i === 0 || i === segments });
      s.prev.push({ x, y });
    }

    for (let i = 0; i < segments; i++) {
      s.constraints.push({ a: i, b: i + 1, len: segLen });
    }
  }, [segments]);

  // ── physics ───────────────────────────────────────────────────────────────

  const satisfyConstraints = useCallback(() => {
    const { nodes, constraints, W, H } = state.current;
    const factor = stiffness / 8;
    const ITERS = 20;

    for (let iter = 0; iter < ITERS; iter++) {
      for (const { a, b, len } of constraints) {
        const na = nodes[a], nb = nodes[b];
        const dx = nb.x - na.x;
        const dy = nb.y - na.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const diff = ((dist - len) / dist) * 0.5 * factor;
        if (!na.pinned) { na.x += dx * diff; na.y += dy * diff; }
        if (!nb.pinned) { nb.x -= dx * diff; nb.y -= dy * diff; }
      }
      for (const n of nodes) {
        if (!n.pinned) {
          n.x = Math.max(4, Math.min(W - 4, n.x));
          n.y = Math.max(4, Math.min(H - 4, n.y));
        }
      }
    }
  }, [stiffness]);

  const update = useCallback(() => {
    const s = state.current;
    const grav = gravity * 0.05;
    if (s.windFrames > 0) s.windFrames--;
    else s.wind *= 0.92;

    for (let i = 0; i < s.nodes.length; i++) {
      const n  = s.nodes[i];
      const p  = s.prev[i];
      if (n.pinned) continue;
      if (s.dragging === i) {
        n.x = s.mouseX; n.y = s.mouseY;
        p.x = s.mouseX; p.y = s.mouseY;
        continue;
      }
      const vx = (n.x - p.x) * damping + s.wind * 0.4;
      const vy = (n.y - p.y) * damping;
      p.x = n.x; p.y = n.y;
      n.x += vx; n.y += vy + grav;
    }
    satisfyConstraints();
  }, [gravity, damping, satisfyConstraints]);

  // ── draw ──────────────────────────────────────────────────────────────────

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const { nodes, W, H } = state.current;
    ctx.clearRect(0, 0, W, H);

    const col = color ?? getComputedStyle(canvas).color ?? "#000";

    // rope line
    if (nodes.length > 1) {
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length - 1; i++) {
        const mx = (nodes[i].x + nodes[i + 1].x) / 2;
        const my = (nodes[i].y + nodes[i + 1].y) / 2;
        ctx.quadraticCurveTo(nodes[i].x, nodes[i].y, mx, my);
      }
      ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = 0.85;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // nodes
    if (showNodes) {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.pinned ? 5.5 : nodeRadius, 0, Math.PI * 2);
        if (n.pinned) {
          ctx.fillStyle = col;
          ctx.fill();
        } else {
          ctx.strokeStyle = col;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = 0.45;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }, [color, showNodes, nodeRadius]);

  // ── loop ──────────────────────────────────────────────────────────────────

  const loop = useCallback(() => {
    update();
    draw();
    state.current.raf = requestAnimationFrame(loop);
  }, [update, draw]);

  // ── pointer helpers ───────────────────────────────────────────────────────

  const nearestNode = useCallback((x: number, y: number, maxDist: number) => {
    let best = -1, bestD = maxDist * maxDist;
    const { nodes } = state.current;
    for (let i = 1; i < nodes.length - 1; i++) {
      const dx = nodes[i].x - x, dy = nodes[i].y - y;
      const d = dx * dx + dy * dy;
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  }, []);

  const getCanvasPos = useCallback((
    e: MouseEvent | TouchEvent
  ): { x: number; y: number } => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const { W, H } = state.current;
    const src = "touches" in e ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * (W / rect.width),
      y: (src.clientY - rect.top)  * (H / rect.height),
    };
  }, []);

  // ── mount ─────────────────────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current!;
    const s = state.current;

    const resize = () => {
      s.W = canvas.offsetWidth;
      s.H = height;
      canvas.width  = s.W;
      canvas.height = s.H;
      init();
    };

    const onDown = (e: MouseEvent) => {
      const { x, y } = getCanvasPos(e);
      const idx = nearestNode(x, y, 28);
      if (idx !== -1) { s.dragging = idx; s.mouseX = x; s.mouseY = y; canvas.style.cursor = "grabbing"; }
    };
    const onMove = (e: MouseEvent) => {
      if (s.dragging === -1) return;
      const { x, y } = getCanvasPos(e);
      s.mouseX = x; s.mouseY = y;
    };
    const onUp = () => { s.dragging = -1; canvas.style.cursor = "grab"; };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const { x, y } = getCanvasPos(e);
      const idx = nearestNode(x, y, 36);
      if (idx !== -1) { s.dragging = idx; s.mouseX = x; s.mouseY = y; }
    };
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (s.dragging === -1) return;
      const { x, y } = getCanvasPos(e);
      s.mouseX = x; s.mouseY = y;
    };
    const onTouchEnd = () => { s.dragging = -1; };

    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove",  onTouchMove,  { passive: false });
    canvas.addEventListener("touchend",   onTouchEnd);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);
    resize();

    s.raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(s.raf);
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove",  onTouchMove);
      canvas.removeEventListener("touchend",   onTouchEnd);
      ro.disconnect();
    };
  }, [height, init, loop, nearestNode, getCanvasPos]);

  // re-init when physics params change
  useEffect(() => { init(); }, [segments, gravity, stiffness, damping, init]);

  // wind trigger
  useEffect(() => {
    if (windTrigger === undefined) return;
    const s = state.current;
    s.wind = (Math.random() > 0.5 ? 1 : -1) * (4 + Math.random() * 6);
    s.windFrames = 40;
  }, [windTrigger]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      className={className}
      style={{ display: "block", width: "100%", cursor: "grab", touchAction: "none" }}
      aria-label="Interactive physics rope — drag to deform"
    />
  );
}`