export const title = "Cursor Predator";
export const routepoint = "cursor-predator";
export const description =
  "Interactive particle field that flees from the cursor and smoothly reforms into its original grid.";

export const cliscript = "add https://www.cursorxui.vercel.app/registry/cursorpredator.json";

export const commandMap = {
  npm: `npx shadcn@latest ${cliscript}`,
  pnpm: `pnpm dlx shadcn@latest ${cliscript}`,
  yarn: `npx shadcn@latest ${cliscript}`,
  bun: `bunx --bun ${cliscript}`,
};

export const utilcode = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

const packagescript =
  "clsx tailwind-merge";

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
    description: "Additional classes applied to the canvas.",
  },
];

export const democode = `
import CursorPredator from "@/components/cursor-predator";

export function CursorPredatorExample() {
  return <CursorPredator />;
}
`;

export const code = `"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
};

export default function CursorPredator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const particles: Particle[] = [];

    const gap = 50;

    for (let x = 50; x < width; x += gap) {
      for (let y = 50; y < height; y += gap) {
        particles.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
        });
      }
    }

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    let frameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;

        const dist = Math.hypot(dx, dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;

          p.vx += (dx / (dist || 1)) * force * 1.8;
          p.vy += (dy / (dist || 1)) * force * 1.8;
        }

        p.vx += (p.ox - p.x) * 0.015;
        p.vy += (p.oy - p.y) * 0.015;

        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx;
        p.y += p.vy;

        const glow =
          dist < 180
            ? 1 - dist / 180
            : 0;

        const size = 2 + glow * 4;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = \`rgba(
          34,
          197,
          94,
          \${0.25 + glow * 0.75}
        )\`;

        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener(
        "mousemove",
        handleMove
      );

      window.removeEventListener(
        "mouseleave",
        handleLeave
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
    />
  );
}
`;