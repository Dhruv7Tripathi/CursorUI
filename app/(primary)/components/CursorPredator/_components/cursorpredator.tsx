"use client";

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

    const mouse = {
      x: -9999,
      y: -9999,
    };

    let width = 0;
    let height = 0;

    let particles: Particle[] = [];

    const gap = 50;

    const buildParticles = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];

      for (let x = gap; x < width; x += gap) {
        for (let y = gap; y < height; y += gap) {
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
    };

    buildParticles();

    const handleMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        mouse.x = -9999;
        mouse.y = -9999;
        return;
      }

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);

    let frameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
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

        const glow = dist < 180 ? 1 - dist / 180 : 0;
        const size = 2 + glow * 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(34,197,94,${0.25 + glow * 0.75})`;
        ctx.fill();
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      buildParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);

      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}