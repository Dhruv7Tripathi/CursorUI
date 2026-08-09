export const title = "Animated Networks";
export const routepoint = "animated-networks";
export const description = "Interactive animated networks component with mouse effects and customizable parameters.";

export const cliscript = "add @orbitxui/registry/animatednetworks";

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

const packagescript = "motion react-icons clsx tailwind-merge";

export const packagesMap = {
  npm: `npm i ${packagescript}`,
  pnpm: `pnpm add ${packagescript}`,
  yarn: `yarn add ${packagescript}`,
  bun: `bun add ${packagescript}`,
};

export const democode = `import AnimatedNetworks from "@/components/animatednetworks.tsx";

export function ${title.replace(/\s+/g, "")}Example() {

  return (
      <AnimatedNetworks />
  
  )
}
`;
export const code = `'use client';

import { useEffect, useRef } from 'react';

interface TechNodeConfig {
  label: string;
  color: string;
  glowColor: string;
}

const TECH_LIST: TechNodeConfig[] = [
  { label: 'Rust', color: 'rgb(244, 130, 37)', glowColor: 'rgba(244, 130, 37, 0.6)' },
  { label: 'TypeScript', color: 'rgb(49, 120, 198)', glowColor: 'rgba(49, 120, 198, 0.6)' },
  { label: 'Go', color: 'rgb(0, 173, 216)', glowColor: 'rgba(0, 173, 216, 0.6)' },
  { label: 'Python', color: 'rgb(55, 115, 164)', glowColor: 'rgba(55, 115, 164, 0.6)' },
  { label: 'React', color: 'rgb(97, 218, 251)', glowColor: 'rgba(97, 218, 251, 0.6)' },
  { label: 'Docker', color: 'rgb(29, 99, 237)', glowColor: 'rgba(29, 99, 237, 0.6)' },
  { label: 'Kubernetes', color: 'rgb(50, 109, 230)', glowColor: 'rgba(50, 109, 230, 0.6)' },
  { label: 'AI / LLMs', color: 'rgb(16, 185, 129)', glowColor: 'rgba(16, 185, 129, 0.6)' },
  { label: 'WebAssembly', color: 'rgb(101, 79, 240)', glowColor: 'rgba(101, 79, 240, 0.6)' },
  { label: 'Next.js', color: 'rgb(255, 255, 255)', glowColor: 'rgba(255, 255, 255, 0.6)' },
  { label: 'GraphQL', color: 'rgb(225, 0, 152)', glowColor: 'rgba(225, 0, 152, 0.6)' },
  { label: 'Svelte', color: 'rgb(255, 62, 0)', glowColor: 'rgba(255, 62, 0, 0.6)' },
  { label: 'PostgreSQL', color: 'rgb(51, 103, 145)', glowColor: 'rgba(51, 103, 145, 0.6)' },
  { label: 'AWS', color: 'rgb(255, 153, 0)', glowColor: 'rgba(255, 153, 0, 0.6)' },
  { label: 'Java', color: 'rgb(203, 206, 17)', glowColor: 'rgba(34, 193, 34, 0.6)' },
  { label: 'Python', color: 'rgb(217, 18, 232)', glowColor: 'rgba(241, 11, 164, 0.6)' },
  { label: 'JavaScript', color: 'rgb(224, 161, 13)', glowColor: 'rgba(239, 232, 2, 0.6)' },
  { label: 'Rust', color: 'rgb(244, 130, 37)', glowColor: 'rgba(244, 130, 37, 0.6)' },
  { label: 'C++', color: 'rgb(0, 89, 156)', glowColor: 'rgba(0, 89, 156, 0.6)' },
];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  label?: string;
  pulseSpeed?: number;
  pulseTimer?: number;
}
export function AnimatedNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const cursorRef = useRef({ x: 0, y: 0, active: false });
  const cursorRingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // FIX 1: Measure the offset width/height of the parent container, not the window viewport
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current.x = e.clientX - rect.left;
      cursorRef.current.y = e.clientY - rect.top;
      cursorRef.current.active = true;
    };

    const handleMouseLeave = () => {
      cursorRef.current.active = false;
    };

    const handleMouseEnter = () => {
      cursorRef.current.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mouseenter', handleMouseEnter);

    // Initialize nodes (these now populate within the actual canvas dimensions)
    const nodes: Node[] = [];
    const totalNodesCount = 60;

    TECH_LIST.forEach((tech) => {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 3,
        color: tech.color,
        glowColor: tech.glowColor,
        label: tech.label,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseTimer: Math.random() * Math.PI * 2,
      });
    });

    const fillerCount = totalNodesCount - TECH_LIST.length;
    for (let i = 0; i < fillerCount; i++) {
      const randomTech = TECH_LIST[Math.floor(Math.random() * TECH_LIST.length)];
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.2 + 1,
        color: randomTech.color.replace('rgb', 'rgba').replace(')', ', 0.3)'),
        glowColor: randomTech.glowColor.replace('0.6', '0.1'),
      });
    }

    cursorRingRef.current.x = canvas.width / 2;
    cursorRingRef.current.y = canvas.height / 2;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseX = cursorRef.current.x;
      const mouseY = cursorRef.current.y;
      const mouseActive = cursorRef.current.active;

      if (mouseActive) {
        cursorRingRef.current.x += (mouseX - cursorRingRef.current.x) * 0.12;
        cursorRingRef.current.y += (mouseY - cursorRingRef.current.y) * 0.12;
      }

      // Draw connection lines between nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            const alpha = (1 - distance / 140) * 0.15;
            let lineAlpha = alpha;
            let strokeColor = 'rgba(148, 163, 184, ';
            if (mouseActive) {
              const dMouse1 = Math.sqrt((mouseX - n1.x) ** 2 + (mouseY - n1.y) ** 2);
              const dMouse2 = Math.sqrt((mouseX - n2.x) ** 2 + (mouseY - n2.y) ** 2);

              if (dMouse1 < 180 || dMouse2 < 180) {
                strokeColor = n1.label ? \`\${n1.color.replace('rgb', 'rgba').replace(')', ', ')}\` : 'rgba(59, 130, 246, ';
                lineAlpha = alpha * 2.2;
              }
            }
            ctx.strokeStyle = strokeColor + lineAlpha + ')';
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw connections between cursor and nearby nodes
      if (mouseActive) {
        nodes.forEach((node) => {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 220) {
            const grad = ctx.createLinearGradient(mouseX, mouseY, node.x, node.y);
            grad.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
            grad.addColorStop(1, node.label ? node.glowColor.replace('0.6', '0.1') : 'rgba(148, 163, 184, 0.05)');

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        });
      }

      // Update, draw nodes and labels
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (mouseActive) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300) {
            const force = (300 - distance) / 300;
            const strengthFactor = node.label ? 0.07 : 0.05;
            node.vx += (dx / (distance + 1)) * force * strengthFactor;
            node.vy += (dy / (distance + 1)) * force * strengthFactor;
          }
        }

        node.vx *= 0.97;
        node.vy *= 0.97;

        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        const minSpeed = 0.15;
        const maxSpeed = 1.3;

        if (speed < minSpeed) {
          const angle = Math.random() * Math.PI * 2;
          node.vx += Math.cos(angle) * 0.05;
          node.vy += Math.sin(angle) * 0.05;
        } else if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }

        // Bounce off bounds relative to local canvas size
        const padding = 10;
        if (node.x < padding || node.x > canvas.width - padding) {
          node.vx *= -0.8;
          node.x = Math.max(padding, Math.min(canvas.width - padding, node.x));
        }
        if (node.y < padding || node.y > canvas.height - padding) {
          node.vy *= -0.8;
          node.y = Math.max(padding, Math.min(canvas.height - padding, node.y));
        }

        let currentRadius = node.radius;
        if (node.pulseTimer !== undefined && node.pulseSpeed !== undefined) {
          node.pulseTimer += node.pulseSpeed;
          const pulse = Math.sin(node.pulseTimer) * 0.8;
          currentRadius = node.radius + pulse;
        }

        const dMouse = mouseActive ? Math.sqrt((mouseX - node.x) ** 2 + (mouseY - node.y) ** 2) : 999;
        const isHovered = dMouse < 180;

        if (isHovered && mouseActive) {
          currentRadius += 1.5;
          ctx.shadowBlur = 12;
          ctx.shadowColor = node.color;
        }

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (node.label) {
          const labelAlpha = isHovered && mouseActive ? 0.95 : 0.45;
          const fontSize = isHovered && mouseActive ? '13px' : '11px';

          ctx.fillStyle = \`rgba(241, 245, 249, \${labelAlpha})\`;
          ctx.font = \`\${isHovered && mouseActive ? '600' : '400'} \${fontSize} 'Outfit', 'Inter', sans-serif\`;
          ctx.fillText(node.label, node.x + 8, node.y + 4);
        }
      });

      // Draw interactive glowing cursor indicator
      if (mouseActive) {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.05)';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 40, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#60a5fa';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.strokeStyle = 'rgba(96, 165, 250, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cursorRingRef.current.x, cursorRingRef.current.y, 16, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(96, 165, 250, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        const rx = cursorRingRef.current.x;
        const ry = cursorRingRef.current.y;
        ctx.moveTo(rx - 20, ry); ctx.lineTo(rx - 16, ry);
        ctx.moveTo(rx + 16, ry); ctx.lineTo(rx + 20, ry);
        ctx.moveTo(rx, ry - 20); ctx.lineTo(rx, ry - 16);
        ctx.moveTo(rx, ry + 16); ctx.lineTo(rx, ry + 20);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] overflow-hidden bg-black pointer-events-none select-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-auto"
      />
    </div>
  );
}`;