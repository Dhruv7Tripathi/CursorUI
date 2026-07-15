'use client';

import { useRef, useEffect, useState } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────
const W = 900;
const H = 300;
const GROUND_Y = H - 60;
const TREX_X = 80;
const TREX_W = 45;
const TREX_H = 50;
const GRAVITY = 0.55;
const JUMP_V = -13.5;
const BASE_SPEED = 5;

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = 'idle' | 'running' | 'dead';

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  type: 'cactus' | 'bird';
  bwing?: number;
  clustered?: boolean;
}

interface Cloud {
  x: number;
  y: number;
  w: number;
  speed: number;
}

interface Dust {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

interface Star {
  x: number;
  y: number;
  r: number;
  flicker: number;
}

interface GameState {
  phase: Phase;
  trexY: number;
  velY: number;
  jumpsLeft: number;
  obstacles: Obstacle[];
  clouds: Cloud[];
  stars: Star[];
  score: number;
  speed: number;
  spawnTimer: number;
  spawnInterval: number;
  groundOffset: number;
  legToggle: number;
  legTimer: number;
  deathFlash: number;
  dust: Dust[];
  shakeX: number;
  shakeY: number;
  shakeTimer: number;
  milestone: number;
  milestoneAlpha: number;
  nightMode: boolean;
  skyTransition: number;
  trexBlink: number;
  blinkTimer: number;
  invincible: number;
}

const DAY = {
  sky: '#ffffff',
  groundLine: '#2d2d2d',
  groundDash: '#d4d4d8',
  trex: '#2d2d2d',
  trexEye: '#ffffff',
  trexPupil: '#2d2d2d',
  cloud: '#e4e4e7',
  obstacle: '#4b5563',
  obstacleShade: '#6b7280',
  bird: '#52525b',
  scoreText: '#2d2d2d',
  dust: '#c4c4c8',
  accent: '#7c3aed',
  groundFill: '#f5f5f5',
};

const NIGHT = {
  sky: '#1a1a1a',
  groundLine: '#ffffff',
  groundDash: '#52525b',
  trex: '#ffffff',
  trexEye: '#1a1a1a',
  trexPupil: '#ffffff',
  cloud: '#39393a',
  obstacle: '#fbbf24',
  obstacleShade: '#f59e0b',
  bird: '#e4e4e7',
  scoreText: '#ffffff',
  dust: '#6b7280',
  accent: '#a78bfa',
  groundFill: '#0f0f0f',
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(c1: string, c2: string, t: number): string {
  const h2d = (h: string) => parseInt(h, 16);
  const r1 = h2d(c1.slice(1, 3)), g1 = h2d(c1.slice(3, 5)), b1 = h2d(c1.slice(5, 7));
  const r2 = h2d(c2.slice(1, 3)), g2 = h2d(c2.slice(3, 5)), b2 = h2d(c2.slice(5, 7));
  const r = Math.round(lerp(r1, r2, t));
  const g = Math.round(lerp(g1, g2, t));
  const b = Math.round(lerp(b1, b2, t));
  return `rgb(${r},${g},${b})`;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function TRexGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(initState());
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  const [uiScore, setUiScore] = useState(0);
  const [uiHi, setUiHi] = useState(0);
  const [uiPhase, setUiPhase] = useState<Phase>('idle');
  const [uiSpeed, setUiSpeed] = useState(1);
  const hiRef = useRef(0);

  function initState(): GameState {
    return {
      phase: 'idle',
      trexY: GROUND_Y,
      velY: 0,
      jumpsLeft: 2,
      obstacles: [],
      clouds: [
        { x: 700, y: 35, w: 80, speed: 0.5 },
        { x: 350, y: 55, w: 55, speed: 0.3 },
        { x: 150, y: 28, w: 65, speed: 0.4 },
      ],
      stars: Array.from({ length: 40 }, () => ({
        x: Math.random() * W,
        y: Math.random() * (GROUND_Y - 60),
        r: Math.random() * 1.5 + 0.3,
        flicker: Math.random() * Math.PI * 2,
      })),
      score: 0,
      speed: BASE_SPEED,
      spawnTimer: 0,
      spawnInterval: 110,
      groundOffset: 0,
      legToggle: 0,
      legTimer: 0,
      deathFlash: 0,
      dust: [],
      shakeX: 0,
      shakeY: 0,
      shakeTimer: 0,
      milestone: 0,
      milestoneAlpha: 0,
      nightMode: false,
      skyTransition: 0,
      trexBlink: 0,
      blinkTimer: 0,
      invincible: 0,
    };
  }

  function startOrJump() {
    const s = stateRef.current;
    if (s.phase === 'idle' || s.phase === 'dead') {
      stateRef.current = initState();
      stateRef.current.phase = 'running';
      setUiPhase('running');
    } else {
      doJump(s);
    }
  }

  function doJump(s: GameState) {
    if (s.jumpsLeft > 0) {
      const isDoubleJump = s.jumpsLeft === 1;
      s.velY = JUMP_V * (isDoubleJump ? 0.80 : 1);
      s.jumpsLeft--;
      spawnDust(s, isDoubleJump);
    }
  }

  function spawnDust(s: GameState, big = false) {
    const count = big ? 10 : 6;
    for (let i = 0; i < count; i++) {
      s.dust.push({
        x: TREX_X + TREX_W / 2 + (Math.random() - 0.5) * (big ? 28 : 16),
        y: s.trexY + TREX_H - 2,
        vx: (Math.random() - 0.5) * (big ? 3.5 : 2),
        vy: -(Math.random() * 3 + 0.5),
        life: 1,
        size: Math.random() * (big ? 5 : 3) + 1.5,
      });
    }
  }

  function triggerShake(s: GameState) {
    s.shakeTimer = 12;
  }

  function getTheme(s: GameState) {
    const t = s.skyTransition;
    const blend = (a: string, b: string) => lerpColor(a, b, t);
    return {
      sky: blend(DAY.sky, NIGHT.sky),
      groundLine: blend(DAY.groundLine, NIGHT.groundLine),
      groundDash: blend(DAY.groundDash, NIGHT.groundDash),
      trex: blend(DAY.trex, NIGHT.trex),
      trexEye: blend(DAY.trexEye, NIGHT.trexEye),
      trexPupil: blend(DAY.trexPupil, NIGHT.trexPupil),
      cloud: blend(DAY.cloud, NIGHT.cloud),
      obstacle: blend(DAY.obstacle, NIGHT.obstacle),
      obstacleShade: blend(DAY.obstacleShade, NIGHT.obstacleShade),
      bird: blend(DAY.bird, NIGHT.bird),
      scoreText: blend(DAY.scoreText, NIGHT.scoreText),
      dust: blend(DAY.dust, NIGHT.dust),
      accent: blend(DAY.accent, NIGHT.accent),
      groundFill: blend(DAY.groundFill, NIGHT.groundFill),
    };
  }

  // ─── Update ────────────────────────────────────────────────────────────────
  function update(s: GameState, dt: number) {
    if (s.phase !== 'running') return;

    const px = s.speed * dt * 0.016 * 60;

    s.score += dt * 0.05 * (s.speed / BASE_SPEED);
    s.speed = BASE_SPEED + Math.pow(s.score * 0.004, 0.9);

    // Night mode toggle every 300 points
    const nightCycle = Math.floor(s.score / 300) % 2;
    s.nightMode = nightCycle === 1;
    const targetNight = s.nightMode ? 1 : 0;
    s.skyTransition += (targetNight - s.skyTransition) * 0.01 * dt;

    // Milestone banner
    const milestoneCheck = [100, 250, 500, 750, 1000, 1500, 2000];
    const curMile = Math.floor(s.score);
    for (const m of milestoneCheck) {
      if (curMile === m && s.milestone !== m) {
        s.milestone = m;
        s.milestoneAlpha = 3;
        s.invincible = 60;
      }
    }
    if (s.milestoneAlpha > 0) s.milestoneAlpha -= 0.04 * dt;

    if (s.invincible > 0) s.invincible -= dt;

    // Shake
    if (s.shakeTimer > 0) {
      s.shakeTimer -= dt;
      s.shakeX = (Math.random() - 0.5) * 6;
      s.shakeY = (Math.random() - 0.5) * 4;
    } else {
      s.shakeX = 0; s.shakeY = 0;
    }

    // Ground
    s.groundOffset = (s.groundOffset + px * 0.6) % 40;

    // Physics
    s.velY += GRAVITY * dt;
    s.trexY += s.velY * dt;
    if (s.trexY >= GROUND_Y) {
      s.trexY = GROUND_Y; s.velY = 0; s.jumpsLeft = 2;
    }

    // Legs
    s.legTimer += dt;
    if (s.legTimer > Math.max(4, 8 - s.speed * 0.3)) { s.legTimer = 0; s.legToggle ^= 1; }

    // Blink
    s.blinkTimer += dt;
    if (s.blinkTimer > 180 + Math.random() * 120) { s.blinkTimer = 0; s.trexBlink = 8; }
    if (s.trexBlink > 0) s.trexBlink -= dt;

    // Clouds
    s.clouds.forEach(c => { c.x -= c.speed * px * 0.15; if (c.x < -120) c.x = W + 80; });

    // Stars flicker
    s.stars.forEach(star => { star.flicker += 0.05 * dt; });

    // Dust
    s.dust.forEach(p => {
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vy += 0.15 * dt; p.life -= 0.045 * dt;
    });
    s.dust = s.dust.filter(p => p.life > 0);

    // Spawn
    s.spawnTimer += dt;
    if (s.spawnTimer >= s.spawnInterval) {
      s.spawnTimer = 0;
      s.spawnInterval = Math.max(55, 90 + Math.random() * 55 - s.score * 0.03);

      if (Math.random() > 0.25) {
        const count = Math.random() > 0.55 ? 2 : 1;
        const h = 30 + Math.random() * 24;
        for (let i = 0; i < count; i++) {
          s.obstacles.push({ x: W + i * 28, y: GROUND_Y - h, w: 22, h, type: 'cactus', clustered: count > 1 });
        }
      } else {
        const birdY = GROUND_Y - 85 - Math.random() * 45;
        s.obstacles.push({ x: W, y: birdY, w: 52, h: 22, type: 'bird', bwing: 0 });
      }
    }

    // Move obstacles
    s.obstacles.forEach(o => {
      o.x -= px;
      if (o.type === 'bird') o.bwing = (o.bwing || 0) + 0.25 * dt;
    });
    s.obstacles = s.obstacles.filter(o => o.x > -100);

    // Collision - improved alignment
    if (s.invincible <= 0) {
      for (const o of s.obstacles) {
        const margin = 6;
        const tx = TREX_X + margin, ty = s.trexY + margin;
        const tw = TREX_W - margin * 2, th = TREX_H - margin * 2;
        if (tx < o.x + o.w && tx + tw > o.x && ty < o.y + o.h && ty + th > o.y) {
          s.phase = 'dead';
          s.deathFlash = 14;
          triggerShake(s);
          if (Math.floor(s.score) > hiRef.current) {
            hiRef.current = Math.floor(s.score);
            setUiHi(hiRef.current);
          }
          setUiPhase('dead');
          return;
        }
      }
    }

    setUiScore(Math.floor(s.score));
    setUiSpeed(parseFloat(s.speed.toFixed(1)));
  }

  // ─── Draw ──────────────────────────────────────────────────────────────────
  function draw(ctx: CanvasRenderingContext2D, s: GameState) {
    const theme = getTheme(s);

    ctx.save();
    if (s.shakeTimer > 0) ctx.translate(s.shakeX, s.shakeY);

    // Sky
    ctx.fillStyle = theme.sky;
    ctx.fillRect(0, 0, W, H);

    // Stars (visible during night transition)
    if (s.skyTransition > 0.1) {
      s.stars.forEach(star => {
        const alpha = s.skyTransition * (0.5 + 0.5 * Math.sin(star.flicker));
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Moon / Sun
    if (s.skyTransition > 0.3) {
      ctx.globalAlpha = (s.skyTransition - 0.3) / 0.7;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath(); ctx.arc(W - 100, 50, 20, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = theme.sky;
      ctx.beginPath(); ctx.arc(W - 92, 46, 16, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    } else {
      ctx.globalAlpha = 1 - s.skyTransition * 2;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath(); ctx.arc(W - 100, 50, 16, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Clouds
    s.clouds.forEach(c => drawCloud(ctx, c, theme.cloud));

    // Ground
    drawGround(ctx, s, theme);

    // Dust
    s.dust.forEach(p => {
      ctx.globalAlpha = Math.max(0, p.life) * 0.7;
      ctx.fillStyle = theme.dust;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Obstacles
    s.obstacles.forEach(o => {
      if (o.type === 'cactus') drawCactus(ctx, o, theme);
      else drawBird(ctx, o, theme);
    });

    // Trex
    drawTrex(ctx, s, theme);

    // Milestone banner
    if (s.milestoneAlpha > 0) {
      const alpha = Math.min(1, s.milestoneAlpha);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = 'rgba(124,58,237,0.15)';
      roundRect(ctx, W / 2 - 130, H / 2 - 30, 260, 60, 12);
      ctx.fill();
      ctx.strokeStyle = 'rgba(124,58,237,0.6)';
      ctx.lineWidth = 2;
      roundRect(ctx, W / 2 - 130, H / 2 - 30, 260, 60, 12);
      ctx.stroke();
      ctx.fillStyle = '#7c3aed';
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🏆 ${s.milestone} Points!`, W / 2, H / 2 + 10);
      ctx.restore();
    }

    // Overlays
    if (s.phase !== 'running') drawOverlay(ctx, s, theme);

    if (s.deathFlash > 0) s.deathFlash -= 0.5;

    ctx.restore();
  }

  function drawCloud(ctx: CanvasRenderingContext2D, c: Cloud, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(c.x, c.y, c.w / 2, 10, 0, 0, Math.PI * 2);
    ctx.ellipse(c.x - c.w * 0.28, c.y + 3, c.w * 0.22, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(c.x + c.w * 0.3, c.y + 3, c.w * 0.2, 7, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawGround(ctx: CanvasRenderingContext2D, s: GameState, theme: ReturnType<typeof getTheme>) {
    const gy = GROUND_Y + TREX_H;
    ctx.fillStyle = theme.groundFill;
    ctx.fillRect(0, gy, W, H - gy);
    ctx.strokeStyle = theme.groundLine;
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();

    // Dashes
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = theme.groundDash;
    for (let i = -s.groundOffset; i < W; i += 40) {
      ctx.beginPath(); ctx.moveTo(i, gy + 8); ctx.lineTo(i + 22, gy + 8); ctx.stroke();
    }
    for (let i = -s.groundOffset + 22; i < W; i += 80) {
      ctx.beginPath(); ctx.moveTo(i, gy + 14); ctx.lineTo(i + 10, gy + 14); ctx.stroke();
    }
  }

  function drawTrex(ctx: CanvasRenderingContext2D, s: GameState, theme: ReturnType<typeof getTheme>) {
    const x = TREX_X, y = s.trexY;
    const isDead = s.phase === 'dead';
    const flash = isDead && Math.floor(s.deathFlash) % 2 === 0;
    const invincFlash = s.invincible > 0 && Math.floor(s.invincible * 0.3) % 2 === 0;

    if (invincFlash) { ctx.globalAlpha = 0.5; }

    const col = flash ? '#ef4444' : theme.trex;
    ctx.fillStyle = col;

    // Body - improved proportions
    ctx.fillRect(x + 6, y + 10, TREX_W - 10, TREX_H - 22);
    // Neck / head
    ctx.fillRect(x + 18, y - 12, 20, 24);
    // Jaw
    ctx.fillRect(x + 18, y + 10, 24, 6);
    // Arm
    ctx.fillRect(x + 3, y + 12, 9, TREX_H - 28);

    // Eye
    const blinking = s.trexBlink > 0 && s.trexBlink < 6;
    ctx.fillStyle = theme.trexEye;
    if (!blinking) ctx.fillRect(x + 25, y - 6, 6, 6);
    ctx.fillStyle = theme.trexPupil;
    if (!blinking) ctx.fillRect(x + 27, y - 4, 3, 3);

    // Nostril
    ctx.fillStyle = col === '#ef4444' ? '#ef4444' : theme.trexEye;
    ctx.fillRect(x + 38, y + 3, 3, 2);

    // Tail
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(x + 6, y + 24);
    ctx.lineTo(x - 14, y + 36);
    ctx.lineTo(x - 8, y + 42);
    ctx.lineTo(x + 6, y + 34);
    ctx.closePath();
    ctx.fill();

    // Legs
    const onGround = s.trexY >= GROUND_Y - 1;
    const l1extra = s.legToggle && onGround ? 10 : 0;
    const l2extra = !s.legToggle && onGround ? 10 : 0;
    const legW = 10, legBase = y + TREX_H - 18;

    ctx.fillRect(x + 10, legBase, legW, 15 + l1extra);
    ctx.fillRect(x + 25, legBase, legW, 15 + l2extra);
    // Feet
    ctx.fillRect(x + 8, legBase + 14 + l1extra, legW + 4, 5);
    ctx.fillRect(x + 23, legBase + 14 + l2extra, legW + 4, 5);

    ctx.globalAlpha = 1;
  }

  function drawCactus(ctx: CanvasRenderingContext2D, o: Obstacle, theme: ReturnType<typeof getTheme>) {
    ctx.fillStyle = theme.obstacle;
    ctx.fillRect(o.x + 7, o.y, 8, o.h);
    if (o.h > 26) {
      ctx.fillRect(o.x, o.y + 11, 22, 7);
      ctx.fillRect(o.x, o.y + 5, 7, 14);
      ctx.fillRect(o.x + 15, o.y + 9, 7, 12);
    }
    ctx.fillStyle = theme.obstacleShade;
    ctx.fillRect(o.x + 10, o.y + 2, 3, Math.min(o.h - 4, 16));
  }

  function drawBird(ctx: CanvasRenderingContext2D, o: Obstacle, theme: ReturnType<typeof getTheme>) {
    const wing = Math.sin(o.bwing || 0) * 10;
    ctx.fillStyle = theme.bird;

    // Body
    ctx.beginPath();
    ctx.ellipse(o.x + 26, o.y + 11, 14, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wings
    ctx.beginPath();
    ctx.moveTo(o.x + 14, o.y + 11);
    ctx.quadraticCurveTo(o.x + 26, o.y - 1 + wing, o.x + 40, o.y + 11);
    ctx.quadraticCurveTo(o.x + 26, o.y + 20 - wing, o.x + 14, o.y + 11);
    ctx.fill();

    // Beak
    ctx.fillStyle = theme.obstacleShade;
    ctx.beginPath();
    ctx.moveTo(o.x + 38, o.y + 10);
    ctx.lineTo(o.x + 50, o.y + 12);
    ctx.lineTo(o.x + 38, o.y + 14);
    ctx.closePath();
    ctx.fill();

    // Eye
    ctx.fillStyle = theme.trexEye;
    ctx.beginPath(); ctx.arc(o.x + 34, o.y + 9, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = theme.trex;
    ctx.beginPath(); ctx.arc(o.x + 35, o.y + 9, 1.2, 0, Math.PI * 2); ctx.fill();
  }

  function drawOverlay(ctx: CanvasRenderingContext2D, s: GameState, theme: ReturnType<typeof getTheme>) {
    ctx.fillStyle = s.skyTransition > 0.5
      ? 'rgba(0,0,0,0.65)'
      : 'rgba(255,255,255,0.65)';
    ctx.fillRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2;

    if (s.phase === 'idle') {
      ctx.fillStyle = theme.scoreText;
      ctx.font = 'bold 32px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('DINO RUN', cx, cy - 35);

      ctx.fillStyle = theme.accent;
      ctx.font = '18px system-ui, sans-serif';
      ctx.fillText('Press Space or Tap to Start', cx, cy + 15);

      ctx.fillStyle = theme.scoreText;
      ctx.font = '13px system-ui, sans-serif';
      ctx.globalAlpha = 0.7;
      ctx.fillText('Double Jump • Day/Night Mode • Speed Increases', cx, cy + 45);
      ctx.globalAlpha = 1;

    } else if (s.phase === 'dead') {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 36px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', cx, cy - 28);

      ctx.fillStyle = theme.scoreText;
      ctx.font = '600 18px system-ui, sans-serif';
      ctx.fillText(`Score: ${Math.floor(s.score)}`, cx - 80, cy + 12);
      ctx.fillText(`Best: ${hiRef.current}`, cx + 80, cy + 12);

      ctx.strokeStyle = theme.scoreText;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(cx - 60, cy + 18); ctx.lineTo(cx + 60, cy + 18); ctx.stroke();
      ctx.globalAlpha = 1;

      if (Math.floor(s.score) === hiRef.current && hiRef.current > 0) {
        ctx.fillStyle = '#fbbf24';
        ctx.font = '14px system-ui, sans-serif';
        ctx.fillText('⭐ New High Score!', cx, cy + 38);
      }

      ctx.fillStyle = theme.accent;
      roundRect(ctx, cx - 90, cy + 50, 180, 36, 8);
      ctx.fill();
      ctx.fillStyle = theme.sky;
      ctx.font = '600 15px system-ui, sans-serif';
      ctx.fillText('Space / Tap to Restart', cx, cy + 72);
    }
  }

  function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // ─── Loop ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function loop(ts: number) {
      const dt = Math.min((ts - lastTimeRef.current) / 16.67, 3);
      lastTimeRef.current = ts;
      update(stateRef.current, dt);
      draw(ctx!, stateRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame((ts) => { lastTimeRef.current = ts; loop(ts); });
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ─── Input ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        startOrJump();
      }
    };

    const handleTouchStart = () => startOrJump();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="border-2 border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg"
        style={{ cursor: 'pointer' }}
      />
      <div className="flex items-center gap-8 text-neutral-700 dark:text-neutral-300">
        <div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Score</p>
          <p className="text-2xl font-bold">{uiScore}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Best</p>
          <p className="text-2xl font-bold">{uiHi}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Speed</p>
          <p className="text-2xl font-bold">{uiSpeed}x</p>
        </div>
      </div>
    </div>
  );
}
