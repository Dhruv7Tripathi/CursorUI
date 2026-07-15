// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// interface Star {
//   x: number; y: number; r: number;
//   speed: number; opacity: number;
//   twinkle: number; twinkleSpeed: number;
// }
// // interface Asteroid {
// //   x: number; y: number; vx: number; vy: number;
// //   rot: number; rotSpeed: number; size: number;
// //   points: number; jagged: number[];
// // }
// interface TrailPoint { x: number; y: number; }
// interface Spaceship {
//   x: number; y: number; vx: number; vy: number;
//   trail: TrailPoint[]; size: number;
// }

// export default function NotFound() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const frameRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const W = () => canvas.width;
//     const H = () => canvas.height;

//     const stars: Star[] = Array.from({ length: 260 }, () => ({
//       x: Math.random(), y: Math.random(),
//       r: Math.random() * 1.1 + 0.15,
//       speed: Math.random() * 0.00012 + 0.00003,
//       opacity: Math.random() * 0.5 + 0.1,
//       twinkle: Math.random() * Math.PI * 2,
//       twinkleSpeed: 0.009 + Math.random() * 0.016,
//     }));

//     // const asteroids: Asteroid[] = Array.from({ length: 8 }, () => ({
//     //   x: Math.random(), y: Math.random(),
//     //   vx: (Math.random() - 0.5) * 0.0007,
//     //   vy: (Math.random() - 0.5) * 0.0006 + 0.00025,
//     //   rot: Math.random() * Math.PI * 2,
//     //   rotSpeed: (Math.random() - 0.5) * 0.018,
//     //   size: Math.random() * 16 + 6,
//     //   points: Math.floor(Math.random() * 3) + 6,
//     //   jagged: Array.from({ length: 9 }, () => 0.6 + Math.random() * 0.44),
//     // }));

//     const ship: Spaceship = {
//       x: 0.1, y: 0.25, vx: 0.00058, vy: 0.0001,
//       trail: [], size: 17,
//     };

//     let t = 0;

//     //   const drawAsteroid = (a: Asteroid) => {
//     //     const cx = a.x * W(), cy = a.y * H();
//     //     ctx.save();
//     //     ctx.translate(cx, cy);
//     //     ctx.rotate(a.rot);
//     //     ctx.beginPath();
//     //     for (let i = 0; i < a.points; i++) {
//     //       const angle = (i / a.points) * Math.PI * 2;
//     //       const r = a.size * a.jagged[i % a.jagged.length];
//     //       i === 0
//     //         ? ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
//     //         : ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
//     //     }
//     //   ctx.closePath();
//     //   ctx.fillStyle = "rgba(32,28,24,0.94)";
//     //   ctx.strokeStyle = "rgba(80,72,64,0.6)";
//     //   ctx.lineWidth = 0.8;
//     //   ctx.fill();
//     //   ctx.stroke();
//     //   ctx.beginPath();
//     //   ctx.arc(-a.size * 0.22, -a.size * 0.18, a.size * 0.13, 0, Math.PI * 2);
//     //   ctx.strokeStyle = "rgba(90,80,70,0.5)";
//     //   ctx.lineWidth = 0.5;
//     //   ctx.stroke();
//     //   ctx.restore();
//     // };

//     const drawShip = (s: Spaceship) => {
//       const cx = s.x * W(), cy = s.y * H();
//       const angle = Math.atan2(s.vy, s.vx);
//       ctx.save();
//       ctx.translate(cx, cy);
//       ctx.rotate(angle + Math.PI / 2);
//       const sz = s.size;

//       const flameLen = sz * 1.32 + Math.sin(t * 0.17) * 5;
//       const fg = ctx.createLinearGradient(0, sz * 0.5, 0, flameLen);
//       fg.addColorStop(0, "rgba(200,200,190,0.82)");
//       fg.addColorStop(0.45, "rgba(150,150,140,0.36)");
//       fg.addColorStop(1, "rgba(110,110,100,0)");
//       ctx.beginPath();
//       ctx.moveTo(-sz * 0.2, sz * 0.5);
//       ctx.lineTo(0, flameLen);
//       ctx.lineTo(sz * 0.2, sz * 0.5);
//       ctx.fillStyle = fg;
//       ctx.fill();

//       ctx.beginPath();
//       ctx.moveTo(0, -sz);
//       ctx.lineTo(sz * 0.5, sz * 0.5);
//       ctx.lineTo(sz * 0.28, sz * 0.68);
//       ctx.lineTo(-sz * 0.28, sz * 0.68);
//       ctx.lineTo(-sz * 0.5, sz * 0.5);
//       ctx.closePath();
//       ctx.fillStyle = "#b0b0b0";
//       ctx.strokeStyle = "rgba(180,180,180,0.2)";
//       ctx.lineWidth = 0.5;
//       ctx.fill(); ctx.stroke();

//       ctx.beginPath();
//       ctx.moveTo(-sz * 0.4, sz * 0.1);
//       ctx.lineTo(-sz * 0.92, sz * 0.6);
//       ctx.lineTo(-sz * 0.46, sz * 0.5);
//       ctx.closePath();
//       ctx.fillStyle = "#777";
//       ctx.fill();

//       ctx.beginPath();
//       ctx.moveTo(sz * 0.4, sz * 0.1);
//       ctx.lineTo(sz * 0.92, sz * 0.6);
//       ctx.lineTo(sz * 0.46, sz * 0.5);
//       ctx.closePath();
//       ctx.fillStyle = "#777";
//       ctx.fill();

//       ctx.beginPath();
//       ctx.ellipse(0, -sz * 0.14, sz * 0.25, sz * 0.38, 0, 0, Math.PI * 2);
//       ctx.fillStyle = "rgba(160,160,160,0.22)";
//       ctx.strokeStyle = "rgba(190,190,190,0.45)";
//       ctx.lineWidth = 0.8;
//       ctx.fill(); ctx.stroke();

//       ctx.beginPath();
//       ctx.arc(0, -sz, 2, 0, Math.PI * 2);
//       ctx.fillStyle = "rgba(230,230,230,0.9)";
//       ctx.fill();

//       ctx.restore();

//       s.trail.push({ x: cx, y: cy });
//       if (s.trail.length > 58) s.trail.shift();
//       s.trail.forEach((p, i) => {
//         const frac = i / s.trail.length;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 1.1 * frac, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(170,170,170,${frac * 0.22})`;
//         ctx.fill();
//       });
//     };

//     const frame = () => {
//       t++;
//       ctx.clearRect(0, 0, W(), H());
//       ctx.fillStyle = "#000";
//       ctx.fillRect(0, 0, W(), H());

//       stars.forEach((s) => {
//         s.twinkle += s.twinkleSpeed;
//         const op = s.opacity * (0.6 + 0.4 * Math.sin(s.twinkle));
//         ctx.beginPath();
//         ctx.arc(s.x * W(), s.y * H(), s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(195,195,195,${op})`;
//         ctx.fill();
//         s.x += s.speed * 0.2;
//         if (s.x > 1) { s.x = 0; s.y = Math.random(); }
//       });

//       // asteroids.forEach((a) => {
//       //   a.x += a.vx; a.y += a.vy; a.rot += a.rotSpeed;
//       //   if (a.x < -0.12) a.x = 1.12;
//       //   if (a.x > 1.12) a.x = -0.12;
//       //   if (a.y > 1.12) { a.y = -0.12; a.x = Math.random(); }
//       //   if (a.y < -0.12) { a.y = 1.12; a.x = Math.random(); }
//       //   drawAsteroid(a);
//       // });

//       ship.x += ship.vx + Math.sin(t * 0.008) * 0.00013;
//       ship.y += ship.vy + Math.cos(t * 0.012) * 0.00009;
//       if (ship.x > 1.12) { ship.x = -0.12; ship.trail = []; }
//       if (ship.y > 1.06) ship.vy = -Math.abs(ship.vy);
//       if (ship.y < -0.06) ship.vy = Math.abs(ship.vy);
//       drawShip(ship);

//       frameRef.current = requestAnimationFrame(frame);
//     };

//     frame();
//     return () => {
//       cancelAnimationFrame(frameRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
//       {/* Background Image — lower opacity so canvas stars read clearly */}
//       <div className="absolute inset-0 h-full w-full">
//         <Image
//           src="/cat.jpeg"
//           alt="Cat on moon with planet"
//           fill
//           className="object-cover opacity-20"
//           priority
//         />
//         {/* Radial vignette to darken edges, keep center readable */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
//           }}
//         />
//       </div>

//       {/* Canvas — sits above bg image */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 h-full w-full"
//         style={{ mixBlendMode: "screen" }}
//         aria-hidden="true"
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">

//         {/* Badge */}
//         <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
//           <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-red-400" />
//           <span className="font-mono text-xs tracking-[0.12em] text-white/40">
//             SIGNAL LOST
//           </span>
//         </div>

//         {/* 404 */}
//         <h1 className="font-mono text-[clamp(96px,20vw,160px)] font-bold leading-none tracking-[-4px] text-white/90">
//           404
//         </h1>

//         {/* Divider */}
//         <div className="h-px w-10 bg-white/15" />

//         {/* Subheading */}
//         <p className="text-xl font-medium tracking-wide text-white/80">
//           Page not found
//         </p>

//         {/* Description */}
//         <p className="max-w-sm text-base leading-relaxed text-white/40">
//           The page you&apos;re looking for drifted off into the cosmos. Our spaceship
//           is searching, but it may be gone for good.
//         </p>

//         {/* Buttons */}
//         <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
//           <Link
//             href="/"
//             className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors duration-150 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
//           >
//             ← Return home
//           </Link>
//           <Link
//             href="/contact"
//             className="rounded-md border border-white/15 px-6 py-2.5 text-sm text-white/50 transition-colors duration-150 hover:border-white/25 hover:text-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
//           >
//             Report issue
//           </Link>
//         </div>

//         {/* Coordinate line */}
//         <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-white/20">
//           COORDS: ERR_NULL · SECTOR_404 · SIGNAL_LOST
//         </p>
//       </div>
//     </main>
//   );
// }
'use client';

// import Link from 'next/link';
import { TRexGame } from '@/components/layout/t-rex';
import Navbar from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen dark:bg-black bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Error Header */}
          <div className="text-center mb-4 md:mb-6">
            <div className="mb-6">
              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-200 mb-2">
                404
              </h1>
              <p className="text-2xl md:text-4xl font-bold dark:text-neutral-200 text-neutral-800 mb-2">
                Page Not Found
              </p>
              <p className="dark:text-neutral-200 text-neutral-800 text-base md:text-lg max-w-md mx-auto">
                Oops! The page you&apos;re looking for doesn&apos;t exist. But you can play a game instead!
              </p>
            </div>
          </div>

          {/* Game Section */}
          <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-6 md:p-8 mb-8">
            {/* <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold dark:text-neutral-200 text-neutral-800 text-center mb-2">
              🦖 T-Rex Game
            </h2>
            <p className="text-center dark:text-neutral-200 text-neutral-800 text-sm">
              While you&apos;re here, try this classic game to pass the time!
            </p>
          </div> */}

            {/* Game Canvas */}
            {/* <div className="flex justify-center">
              <TRexGame />
            </div> */}
          </div>

          {/* Actions */}
          {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-all"
          >
            <span>Go Back</span>
            <ArrowRight size={20} />
          </button>
        </div> */}

          {/* Footer Message */}
          {/* <div className="mt-12 text-center text-slate-500 text-sm">
          <p>If you think this is a mistake, please contact support.</p>
        </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
