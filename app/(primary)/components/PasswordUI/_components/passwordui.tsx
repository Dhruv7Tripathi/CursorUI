"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useReducedMotion } from "framer-motion";
import { Lock, Eye, EyeOff, Check, ArrowLeft, Mail } from "lucide-react";

/* --------------------------------------------------------------------------
   Password Scoring Rules & Logic
   -------------------------------------------------------------------------- */
export interface Rule {
  id: string;
  label: string;
  test: (pw: string) => boolean;
}

export const rules: Rule[] = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (pw) => pw.length >= 8,
  },
  {
    id: "number",
    label: "Contains a number",
    test: (pw) => /\d/.test(pw),
  },
  {
    id: "symbol",
    label: "Contains a symbol",
    test: (pw) => /[!@#$%^&*()\-_=+[\]{};':"\\|,.<>/?`~]/.test(pw),
  },
  {
    id: "casing",
    label: "Upper & lowercase letters",
    test: (pw) => /[a-z]/.test(pw) && /[A-Z]/.test(pw),
  },
];

export type StrengthToken = "weak" | "fair" | "good" | "strong";

export interface ScoreResult {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  token: StrengthToken;
  metIds: string[];
}

const LABELS: Record<number, string> = {
  0: "Weak",
  1: "Weak",
  2: "Fair",
  3: "Good",
  4: "Strong",
};

const TOKENS: Record<number, StrengthToken> = {
  0: "weak",
  1: "weak",
  2: "fair",
  3: "good",
  4: "strong",
};

export function scorePassword(pw: string): ScoreResult {
  if (!pw) {
    return { score: 0, label: "Weak", token: "weak", metIds: [] };
  }
  const metIds = rules.filter((r) => r.test(pw)).map((r) => r.id);
  const n = metIds.length as 0 | 1 | 2 | 3 | 4;
  return {
    score: n,
    label: LABELS[n],
    token: TOKENS[n],
    metIds,
  };
}

/* --------------------------------------------------------------------------
   Mascot Component
   -------------------------------------------------------------------------- */
interface MascotProps {
  score: 0 | 1 | 2 | 3 | 4;
  hidden: boolean;
  success?: boolean;
}

const MOUTH_PATHS: Record<number | string, string> = {
  0: "M 44 68 Q 50 63 56 68", // worried frown
  1: "M 44 67 Q 50 65 56 67", // hesitant flat
  2: "M 44 67 Q 50 68 56 67", // neutral
  3: "M 43 65 Q 50 71 57 65", // pleased smile
  4: "M 41 64 Q 50 74 59 64 Z", // happy open
  success: "M 41 65 Q 50 75 59 65 Z", // big happy
};

const BROW_CONFIG: Record<
  number,
  { lY: number; lR: number; rY: number; rR: number }
> = {
  0: { lY: -2, lR: 18, rY: -2, rR: -18 }, // very worried
  1: { lY: -1, lR: 10, rY: -1, rR: -10 }, // worried
  2: { lY: 0, lR: 0, rY: 0, rR: 0 }, // neutral
  3: { lY: -3, lR: -3, rY: -3, rR: 3 }, // pleased
  4: { lY: -5, lR: -5, rY: -5, rR: 5 }, // happy
};

export const Mascot: React.FC<MascotProps> = ({ score, hidden, success }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isBlinking, setIsBlinking] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  // Blink loop
  useEffect(() => {
    if (shouldReduceMotion) return;
    let tid: ReturnType<typeof setTimeout>;
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 130);
      tid = setTimeout(blink, 2500 + Math.random() * 3500);
    };
    tid = setTimeout(blink, 1500 + Math.random() * 2000);
    return () => clearTimeout(tid);
  }, [shouldReduceMotion]);

  // Eye tracking
  useEffect(() => {
    if (shouldReduceMotion) return;
    const onMove = (e: PointerEvent) => {
      const el = svgRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setPointer({
        x: Math.max(-0.5, Math.min(0.5, (e.clientX - cx) / (rect.width || 1))),
        y: Math.max(-0.5, Math.min(0.5, (e.clientY - cy) / (rect.height || 1))),
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [shouldReduceMotion]);

  // Spring pupils
  const pupilMaxX = 2.2;
  const pupilMaxY = 1.8;
  const rawPx = pointer.x * pupilMaxX * 2;
  const rawPy = pointer.y * pupilMaxY * 2;
  const px = Math.max(-pupilMaxX, Math.min(pupilMaxX, rawPx));
  const py = Math.max(-pupilMaxY, Math.min(pupilMaxY, rawPy));

  const springConfig = { stiffness: 120, damping: 16, mass: 0.5 };
  const pupilX = useSpring(px, springConfig);
  const pupilY = useSpring(py, springConfig);

  useEffect(() => {
    pupilX.set(px);
    pupilY.set(py);
  }, [px, py, pupilX, pupilY]);

  // Head counter-rotation for parallax
  const headRotX = useSpring(-pointer.y * 4, springConfig);
  const headRotY = useSpring(pointer.x * 4, springConfig);

  useEffect(() => {
    headRotX.set(-pointer.y * 4);
    headRotY.set(pointer.x * 4);
  }, [pointer.x, pointer.y, headRotX, headRotY]);

  const brow = BROW_CONFIG[success ? 4 : score] ?? BROW_CONFIG[2];
  const mouthPath = MOUTH_PATHS[success ? "success" : score];
  const isJoyful = score === 4 || success;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        position: "relative",
        transform: "translateZ(60px)",
      }}
    >
      {/* Ambient glow behind mascot */}
      <div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, oklch(0.82 0.16 187 / ${
            isJoyful ? "22%" : "12%"
          }) 0%, transparent 70%)`,
          filter: "blur(16px)",
          transition: "background 0.4s ease",
          zIndex: 0,
        }}
      />

      <motion.svg
        ref={svgRef}
        width="120"
        height="110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          rotateX: shouldReduceMotion ? 0 : headRotX,
          rotateY: shouldReduceMotion ? 0 : headRotY,
          position: "relative",
          zIndex: 1,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : success
            ? {
                y: [0, -10, 0, -5, 0],
                scaleY: [1, 1.08, 0.92, 1.04, 1],
                scaleX: [1, 0.92, 1.06, 0.98, 1],
              }
            : {
                y: [0, -4, 0, -4, 0],
              }
        }
        transition={
          success
            ? { duration: 0.7, ease: "easeOut" }
            : {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <defs>
          <radialGradient id="mascotBody" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="oklch(0.24 0.014 260)" />
            <stop offset="100%" stopColor="oklch(0.14 0.009 260)" />
          </radialGradient>
          <radialGradient id="mascotRim" cx="50%" cy="50%" r="50%">
            <stop offset="72%" stopColor="transparent" />
            <stop offset="100%" stopColor="oklch(0.82 0.16 187 / 30%)" />
          </radialGradient>
          <filter id="mascotShadow">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="oklch(0 0 0 / 60%)"
            />
          </filter>
          <filter id="handShadow">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor="oklch(0 0 0 / 40%)"
            />
          </filter>
        </defs>

        {/* Body */}
        <g filter="url(#mascotShadow)">
          <circle cx="50" cy="50" r="38" fill="url(#mascotBody)" />
          <circle cx="50" cy="50" r="38" fill="url(#mascotRim)" />
          {/* inner top sheen */}
          <ellipse
            cx="44"
            cy="30"
            rx="14"
            ry="8"
            fill="oklch(1 0 0 / 7%)"
          />
        </g>

        {/* Eyebrows */}
        <motion.path
          d="M 33 34 Q 38 32 43 34"
          stroke="oklch(0.92 0.005 260)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          animate={{ y: brow.lY, rotate: brow.lR }}
          style={{ originX: "38px", originY: "33px" }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        />
        <motion.path
          d="M 57 34 Q 62 32 67 34"
          stroke="oklch(0.92 0.005 260)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          animate={{ y: brow.rY, rotate: brow.rR }}
          style={{ originX: "62px", originY: "33px" }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        />

        {/* Eyes */}
        {/* Left eye */}
        <g>
          {isJoyful ? (
            <path
              d="M 33 46 Q 38 39 43 46"
              stroke="oklch(0.92 0.005 260)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <g>
              {/* Eye white */}
              <ellipse
                cx="38"
                cy="45"
                rx="6"
                ry="7"
                fill="oklch(0.92 0.005 260)"
              />
              {/* Eyelid squash */}
              <motion.ellipse
                cx="38"
                cy="41"
                rx="6.5"
                ry="3.5"
                fill="oklch(0.18 0.012 260)"
                animate={{ scaleY: isBlinking ? 1 : 0 }}
                style={{ originY: "41px" }}
                transition={{ duration: 0.06 }}
              />
              {/* Pupil */}
              <motion.circle
                cx={38}
                cy={45}
                r={3}
                fill="oklch(0.12 0.008 260)"
                style={{
                  x: shouldReduceMotion ? 0 : pupilX,
                  y: shouldReduceMotion ? 0 : pupilY,
                }}
              />
              {/* Highlight */}
              {!isBlinking && (
                <circle
                  cx="40"
                  cy="43.5"
                  r="1.2"
                  fill="oklch(0.98 0.002 260)"
                />
              )}
            </g>
          )}
        </g>

        {/* Right eye */}
        <g>
          {isJoyful ? (
            <path
              d="M 57 46 Q 62 39 67 46"
              stroke="oklch(0.92 0.005 260)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <g>
              <ellipse
                cx="62"
                cy="45"
                rx="6"
                ry="7"
                fill="oklch(0.92 0.005 260)"
              />
              <motion.ellipse
                cx="62"
                cy="41"
                rx="6.5"
                ry="3.5"
                fill="oklch(0.18 0.012 260)"
                animate={{ scaleY: isBlinking ? 1 : 0 }}
                style={{ originY: "41px" }}
                transition={{ duration: 0.06 }}
              />
              <motion.circle
                cx={62}
                cy={45}
                r={3}
                fill="oklch(0.12 0.008 260)"
                style={{
                  x: shouldReduceMotion ? 0 : pupilX,
                  y: shouldReduceMotion ? 0 : pupilY,
                }}
              />
              {!isBlinking && (
                <circle
                  cx="64"
                  cy="43.5"
                  r="1.2"
                  fill="oklch(0.98 0.002 260)"
                />
              )}
            </g>
          )}
        </g>

        {/* Mouth */}
        <motion.path
          d={mouthPath}
          stroke="oklch(0.92 0.005 260)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill={score === 4 || success ? "oklch(0.92 0.005 260)" : "none"}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />

        {/* Sparkles for score 4 */}
        {(score === 4 || success) && !shouldReduceMotion && (
          <g>
            <motion.path
              d="M 16 20 L 18 24 L 22 26 L 18 28 L 16 32 L 14 28 L 10 26 L 14 24 Z"
              fill="oklch(0.82 0.16 187)"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1, 0.8, 1], rotate: [0, 90, 180] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M 82 18 L 84 21 L 87 23 L 84 25 L 82 28 L 80 25 L 77 23 L 80 21 Z"
              fill="oklch(0.8 0.15 128)"
              initial={{ scale: 0.5, rotate: 0 }}
              animate={{ scale: [0.5, 1.1, 0.6], rotate: [0, -90, -180] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </g>
        )}

        {/* Hands covering eyes */}
        {/* Left hand */}
        <motion.g
          filter="url(#handShadow)"
          animate={
            hidden
              ? { x: 12, y: -12, rotate: 20, scale: 1.05 }
              : { x: 0, y: 0, rotate: 0, scale: 1 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 240, damping: 22 }
          }
        >
          {/* Palm */}
          <path
            d="M 12 56 C 7 56 4 60 4 65 C 4 70 8 74 14 74 C 19 74 22 70 22 65 C 22 60 18 56 12 56 Z"
            fill="oklch(0.22 0.013 260)"
            stroke="oklch(0.35 0.015 260)"
            strokeWidth="1"
          />
          {/* Thumb */}
          <path
            d="M 19 60 C 21 58 23 59 23 62 C 23 64 21 65 19 64"
            stroke="oklch(0.35 0.015 260)"
            strokeWidth="1"
            fill="none"
          />
          {/* Finger lines peek */}
          {hidden && (
            <>
              <line
                x1="10"
                y1="60"
                x2="10"
                y2="68"
                stroke="oklch(0.35 0.015 260)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              <line
                x1="14"
                y1="59"
                x2="14"
                y2="68"
                stroke="oklch(0.35 0.015 260)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </>
          )}
        </motion.g>

        {/* Right hand */}
        <motion.g
          filter="url(#handShadow)"
          animate={
            hidden
              ? { x: -12, y: -12, rotate: -20, scale: 1.05 }
              : { x: 0, y: 0, rotate: 0, scale: 1 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.15 }
              : { type: "spring", stiffness: 240, damping: 22 }
          }
        >
          <path
            d="M 88 56 C 93 56 96 60 96 65 C 96 70 92 74 86 74 C 81 74 78 70 78 65 C 78 60 82 56 88 56 Z"
            fill="oklch(0.22 0.013 260)"
            stroke="oklch(0.35 0.015 260)"
            strokeWidth="1"
          />
          <path
            d="M 81 60 C 79 58 77 59 77 62 C 77 64 79 65 81 64"
            stroke="oklch(0.35 0.015 260)"
            strokeWidth="1"
            fill="none"
          />
          {hidden && (
            <>
              <line
                x1="86"
                y1="60"
                x2="86"
                y2="68"
                stroke="oklch(0.35 0.015 260)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              <line
                x1="90"
                y1="59"
                x2="90"
                y2="68"
                stroke="oklch(0.35 0.015 260)"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </>
          )}
        </motion.g>
      </motion.svg>
    </div>
  );
};

/* --------------------------------------------------------------------------
   StrengthMeter Component
   -------------------------------------------------------------------------- */
interface StrengthMeterProps {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  token: StrengthToken;
}

const TOKEN_COLORS: Record<StrengthToken, string> = {
  weak: "var(--color-strength-weak)",
  fair: "var(--color-strength-fair)",
  good: "var(--color-strength-good)",
  strong: "var(--color-strength-strong)",
};

export const StrengthMeter: React.FC<StrengthMeterProps> = ({
  score,
  label,
  token,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const currentColor = TOKEN_COLORS[token];

  return (
    <div
      className="flex flex-col gap-1.5"
      style={{ transform: "translateZ(18px)" }}
    >
      {/* Top row label with cross-fade and aria-live */}
      <div className="flex justify-between items-center text-xs font-medium">
        <span className="text-[var(--color-muted-fg)]">Password strength</span>
        <div
          className="relative h-4 overflow-hidden text-right min-w-[60px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-0 font-semibold"
              style={{
                color: score > 0 ? currentColor : "var(--color-muted-fg)",
              }}
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* 4 Segmented bars */}
      <div className="grid grid-cols-4 gap-2 h-1.5" aria-hidden="true">
        {[0, 1, 2, 3].map((index) => {
          const isFilled = index < score;
          return (
            <div key={index} className="strength-track rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: isFilled ? currentColor : "transparent",
                  originX: 0,
                }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: isFilled ? 1 : 0,
                  z: isFilled ? 4 : 0,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.8,
                        delay: isFilled ? index * 0.05 : 0,
                      }
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   VaultInput Component
   -------------------------------------------------------------------------- */
interface VaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  leadingIcon?: React.ReactNode;
  trailingSlot?: React.ReactNode;
  isError?: boolean;
  wrapperClassName?: string;
  inputBoxShadow?: string | undefined;
}

export const VaultInput: React.FC<VaultInputProps> = ({
  id,
  leadingIcon,
  trailingSlot,
  isError,
  wrapperClassName = "",
  inputBoxShadow,
  className = "",
  style,
  ...inputProps
}) => {
  return (
    <div className={`relative flex items-center ${wrapperClassName}`}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 14,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          color: "var(--color-muted-fg)",
          zIndex: 1,
          width: 18,
          height: 18,
        }}
      >
        {leadingIcon}
      </span>

      <input
        id={id}
        style={{
          paddingLeft: 40,
          paddingRight: 42,
          textOverflow: "ellipsis",
          boxShadow: inputBoxShadow,
          ...style,
        }}
        className={`vault-input ${isError ? "is-error" : ""} ${className}`}
        {...inputProps}
      />

      {trailingSlot && (
        <span
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {trailingSlot}
        </span>
      )}
    </div>
  );
};

/* --------------------------------------------------------------------------
   Main PasswordUI Component
   -------------------------------------------------------------------------- */
type Step = "email" | "password" | "done";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function PasswordUI() {
  const [step, setStep] = useState<Step>("email");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [keystrokePop, setKeystrokePop] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const tiltSpringConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(0, tiltSpringConfig);
  const rotateY = useSpring(0, tiltSpringConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / (rect.width || 1) - 0.5;
    const y = (e.clientY - rect.top) / (rect.height || 1) - 0.5;

    rotateY.set(x * 20);
    rotateX.set(-y * 16);

    cardRef.current.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    if (cardRef.current) {
      cardRef.current.style.setProperty("--mx", "50%");
      cardRef.current.style.setProperty("--my", "50%");
    }
  };

  const scoreResult = scorePassword(password);
  const isEmailValid = EMAIL_REGEX.test(email.trim());
  const isPasswordValid = scoreResult.score === 4;

  const handleKeystroke = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!shouldReduceMotion) {
      setKeystrokePop(true);
      setTimeout(() => setKeystrokePop(false), 100);
    }
  };

  const goToStep = (nextStep: Step, dir: 1 | -1) => {
    setDirection(dir);
    setStep(nextStep);
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      goToStep("password", 1);
    }
  };

  const handleSubmitStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    goToStep("done", 1);
  };

  const flipVariants = {
    initial: (dir: number) => ({
      rotateY: dir > 0 ? 35 : -35,
      opacity: 0,
      z: -80,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      z: 0,
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 18,
        mass: 0.8,
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -35 : 35,
      opacity: 0,
      z: -80,
      transition: {
        duration: 0.25,
        ease: "easeIn" as const,
      },
    }),
  };

  return (
    <div className="password-ui-root relative w-full flex items-center justify-center overflow-hidden py-10 px-4">
      {/* Scoped CSS Style Sheet */}
      <style>{`
        .password-ui-root {
          --color-background: oklch(0.13 0.008 260);
          --color-foreground: oklch(0.97 0.004 260);
          --color-surface: oklch(0.18 0.01 260);
          --color-surface-raised: oklch(0.225 0.012 260);
          --color-muted: oklch(0.24 0.012 260);
          --color-muted-fg: oklch(0.68 0.014 260);
          --color-accent: oklch(0.82 0.16 187);
          --color-accent-fg: oklch(0.16 0.02 200);
          --color-accent-dim: oklch(0.82 0.16 187 / 55%);
          --color-border: oklch(1 0 0 / 9%);
          --color-input: oklch(1 0 0 / 12%);
          --color-strength-weak: oklch(0.62 0.21 22);
          --color-strength-fair: oklch(0.75 0.16 62);
          --color-strength-good: oklch(0.8 0.15 128);
          --color-strength-strong: oklch(0.82 0.16 187);
          --radius-md: 0.75rem;
          --radius-xl: 1.25rem;
          --shadow-card: inset 0 1px 0 oklch(1 0 0 / 6%), 0 30px 60px -20px oklch(0 0 0 / 75%), 0 8px 24px -12px oklch(0 0 0 / 60%);
          --shadow-glow: 0 0 0 1px oklch(0.82 0.16 187 / 22%), 0 18px 50px -18px oklch(0.82 0.16 187 / 40%);
          --shadow-glow-strong: 0 0 0 1px oklch(0.82 0.16 187 / 40%), 0 20px 60px -16px oklch(0.82 0.16 187 / 55%);
          --gradient-sheen: linear-gradient(135deg, oklch(1 0 0 / 8%) 0%, transparent 42%, oklch(1 0 0 / 3%) 100%);
          --gradient-accent: linear-gradient(135deg, oklch(0.86 0.13 172), oklch(0.78 0.17 205));
          --mx: 50%;
          --my: 50%;
        }
        .password-ui-root .scene-3d {
          perspective: 1200px;
          perspective-origin: 50% 40%;
        }
        .password-ui-root .layer-3d {
          transform-style: preserve-3d;
        }
        .password-ui-root .card-vault {
          background-color: var(--color-surface);
          background-image: var(--gradient-sheen);
          box-shadow: var(--shadow-card);
          border: 1px solid var(--color-border);
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }
        .password-ui-root .card-vault::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(to bottom, oklch(1 0 0 / 10%) 0px, transparent 60px);
          z-index: 1;
        }
        .password-ui-root .card-sheen {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: radial-gradient(circle at var(--mx) var(--my), oklch(1 0 0 / 6%) 0%, transparent 60%);
          z-index: 2;
          transition: background 0.05s linear;
        }
        .password-ui-root .ambient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
        }
        .password-ui-root .ambient-orb-1 {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, oklch(0.82 0.16 187 / 18%) 0%, transparent 70%);
          top: -120px;
          left: -80px;
          animation: orb-drift-1 18s ease-in-out infinite;
        }
        .password-ui-root .ambient-orb-2 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, oklch(0.78 0.17 205 / 14%) 0%, transparent 70%);
          bottom: -80px;
          right: -60px;
          animation: orb-drift-2 14s ease-in-out infinite;
        }
        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, 40px) scale(1.08); }
          66% { transform: translate(-30px, 60px) scale(0.95); }
        }
        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-50px, -30px) scale(1.1); }
          70% { transform: translate(30px, -50px) scale(0.92); }
        }
        .password-ui-root .perspective-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(to right, oklch(1 0 0 / 3%) 0px, oklch(1 0 0 / 3%) 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(to bottom, oklch(1 0 0 / 3%) 0px, oklch(1 0 0 / 3%) 1px, transparent 1px, transparent 60px);
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
        }
        .password-ui-root .step-indicator-track {
          height: 3px;
          background-color: var(--color-muted);
          border-radius: 9999px;
          overflow: hidden;
          flex: 1;
        }
        .password-ui-root .step-indicator-fill {
          height: 100%;
          border-radius: 9999px;
          background: var(--gradient-accent);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .password-ui-root .vault-input {
          width: 100%;
          background-color: var(--color-input);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-foreground);
          font-size: 0.9375rem;
          height: 50px;
          outline: none;
          transition: border-color 200ms ease, box-shadow 250ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 150ms ease;
        }
        .password-ui-root .vault-input:hover {
          border-color: oklch(1 0 0 / 18%);
          background-color: oklch(1 0 0 / 14%);
        }
        .password-ui-root .vault-input:focus {
          border-color: var(--color-accent-dim);
          box-shadow: inset 0 1px 0 oklch(1 0 0 / 6%), 0 0 0 3px oklch(0.82 0.16 187 / 18%), 0 8px 24px -8px oklch(0.82 0.16 187 / 25%);
          background-color: oklch(1 0 0 / 10%);
        }
        .password-ui-root .vault-input::placeholder {
          color: var(--color-muted-fg);
          opacity: 0.7;
        }
        .password-ui-root .vault-input.is-error {
          border-color: var(--color-strength-weak);
          box-shadow: 0 0 0 3px oklch(0.62 0.21 22 / 20%);
        }
        .password-ui-root .btn-cta {
          width: 100%;
          height: 50px;
          border-radius: var(--radius-xl);
          background: var(--gradient-accent);
          color: var(--color-accent-fg);
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          border: none;
          cursor: pointer;
          box-shadow: var(--shadow-glow);
          transition: box-shadow 250ms ease, opacity 200ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }
        .password-ui-root .btn-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: oklch(1 0 0 / 0%);
          transition: background 200ms ease;
          border-radius: inherit;
        }
        .password-ui-root .btn-cta:hover:not(:disabled)::before {
          background: oklch(1 0 0 / 8%);
        }
        .password-ui-root .btn-cta:hover:not(:disabled) {
          box-shadow: var(--shadow-glow-strong);
        }
        .password-ui-root .btn-cta:disabled {
          opacity: 0.38;
          cursor: not-allowed;
          box-shadow: none;
        }
        .password-ui-root .btn-cta:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }
        .password-ui-root .btn-back {
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-muted-fg);
          font-size: 0.8125rem;
          font-weight: 500;
          padding: 6px 12px;
          cursor: pointer;
          transition: color 150ms ease, border-color 150ms ease, background 150ms ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .password-ui-root .btn-back:hover {
          color: var(--color-foreground);
          border-color: oklch(1 0 0 / 18%);
          background: oklch(1 0 0 / 4%);
        }
        .password-ui-root .btn-back:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }
        .password-ui-root .checklist-token {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transform-style: preserve-3d;
          position: relative;
        }
        .password-ui-root .checklist-token-front,
        .password-ui-root .checklist-token-back {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .password-ui-root .checklist-token-front {
          background-color: var(--color-muted);
          color: var(--color-muted-fg);
        }
        .password-ui-root .checklist-token-back {
          background-color: var(--color-accent);
          color: var(--color-accent-fg);
          transform: rotateY(180deg);
        }
        .password-ui-root .strength-track {
          height: 6px;
          background-color: var(--color-muted);
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: inset 0 1px 2px oklch(0 0 0 / 30%);
        }
        .password-ui-root .success-ring {
          stroke: var(--color-accent);
        }
        .password-ui-root .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid var(--color-accent-fg);
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background Ambient Orbs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-2" aria-hidden="true" />

      {/* Perspective Grid Overlay */}
      <div className="perspective-grid" aria-hidden="true" />

      {/* Main 3D Card Scene */}
      <div className="scene-3d w-full max-w-md mx-auto z-10 min-h-[580px] flex items-center justify-center">
        <motion.div
          ref={cardRef}
          className="card-vault layer-3d w-full rounded-3xl flex flex-col gap-6"
          style={{
            padding: "clamp(24px, 5vw, 32px)",
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {/* Cursor Specular Sheen Overlay */}
          <div className="card-sheen" aria-hidden="true" />

          {/* Header */}
          <div className="flex items-center justify-between z-10">
            {step !== "email" ? (
              <button
                type="button"
                onClick={() => goToStep("email", -1)}
                className="btn-back"
                aria-label="Go back to email step"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-xs font-semibold text-[var(--color-muted-fg)] tracking-wide uppercase">
                Alpha&apos;s Login
              </span>
            )}

            {/* 2-Segment Step Indicator */}
            <div className="flex items-center gap-1.5 w-24">
              <div className="step-indicator-track">
                <div
                  className="step-indicator-fill"
                  style={{ width: step === "email" ? "50%" : "100%" }}
                />
              </div>
              <div className="step-indicator-track">
                <div
                  className="step-indicator-fill"
                  style={{ width: step === "done" ? "100%" : "0%" }}
                />
              </div>
            </div>
          </div>

          {/* Reactive SVG Mascot */}
          <div className="z-10">
            <Mascot
              score={scoreResult.score}
              hidden={step === "password" && !showPassword && passwordFocused}
              success={step === "done"}
            />
          </div>

          {/* Dynamic Multi-Step Content Flip Container */}
          <div className="relative layer-3d z-10">
            <AnimatePresence mode="wait" custom={direction}>
              {step === "email" && (
                <motion.form
                  key="step-email"
                  custom={direction}
                  variants={shouldReduceMotion ? {} : flipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onSubmit={handleSubmitStep1}
                  className="flex flex-col gap-6 layer-3d"
                >
                  <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                      Get Started with Vault
                    </h1>
                    <p className="text-sm text-[var(--color-muted-fg)]">
                      Enter your email to begin setting up your secure account.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email-input"
                      className="text-xs font-medium text-[var(--color-muted-fg)]"
                    >
                      Email address
                    </label>
                    <VaultInput
                      id="email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      leadingIcon={<Mail size={18} />}
                      autoFocus
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!isEmailValid}
                    className="btn-cta"
                    whileHover={
                      shouldReduceMotion || !isEmailValid
                        ? {}
                        : { y: -2, scale: 1.02 }
                    }
                    whileTap={
                      shouldReduceMotion || !isEmailValid ? {} : { scale: 0.98 }
                    }
                  >
                    Continue
                  </motion.button>
                </motion.form>
              )}

              {step === "password" && (
                <motion.form
                  key="step-password"
                  custom={direction}
                  variants={shouldReduceMotion ? {} : flipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onSubmit={handleSubmitStep2}
                  className="flex flex-col gap-6 layer-3d"
                >
                  <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                      Create Password
                    </h1>
                    <p className="text-sm text-[var(--color-muted-fg)]">
                      For{" "}
                      <span
                        className="text-[var(--color-foreground)] font-medium"
                        style={{ wordBreak: "break-all" }}
                      >
                        {email}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <motion.div
                      animate={keystrokePop ? { scale: 1.015 } : { scale: 1 }}
                      transition={{ duration: 0.08 }}
                    >
                      <VaultInput
                        id="password-input"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={handleKeystroke}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        placeholder="Enter strong password"
                        disabled={isSubmitting}
                        leadingIcon={<Lock size={18} />}
                        trailingSlot={
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "6px",
                              borderRadius: "8px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              color: "var(--color-muted-fg)",
                            }}
                            className="hover:text-[var(--color-foreground)] transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        }
                        inputBoxShadow={
                          passwordFocused ? "var(--shadow-glow)" : undefined
                        }
                        autoFocus
                      />
                    </motion.div>
                  </div>

                  {/* Strength Meter Component */}
                  <StrengthMeter
                    score={scoreResult.score}
                    label={scoreResult.label}
                    token={scoreResult.token}
                  />

                  {/* Requirements Checklist */}
                  <div
                    className="flex flex-col gap-2"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    {rules.map((rule, idx) => {
                      const isMet = scoreResult.metIds.includes(rule.id);
                      return (
                        <motion.div
                          key={rule.id}
                          initial={
                            shouldReduceMotion
                              ? false
                              : { rotateX: -90, opacity: 0 }
                          }
                          animate={{ rotateX: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.06,
                            ease: "easeOut",
                          }}
                          className="flex items-center gap-2.5 text-xs"
                        >
                          <div className="checklist-token">
                            <motion.div
                              className="w-full h-full relative layer-3d"
                              animate={{ rotateY: isMet ? 180 : 0 }}
                              transition={
                                shouldReduceMotion
                                  ? { duration: 0.1 }
                                  : {
                                      type: "spring",
                                      stiffness: 220,
                                      damping: 20,
                                    }
                              }
                            >
                              <div className="checklist-token-front">
                                <span className="w-1.5 h-0.5 bg-[var(--color-muted-fg)] rounded-full" />
                              </div>
                              <div className="checklist-token-back shadow-sm">
                                <Check size={12} strokeWidth={3} />
                              </div>
                            </motion.div>
                          </div>

                          <span
                            className={`transition-colors duration-200 ${
                              isMet
                                ? "text-[var(--color-foreground)] font-medium"
                                : "text-[var(--color-muted-fg)]"
                            }`}
                          >
                            {rule.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div style={{ transform: "translateZ(34px)" }}>
                    <motion.button
                      type="submit"
                      disabled={!isPasswordValid || isSubmitting}
                      aria-disabled={!isPasswordValid || isSubmitting}
                      className="btn-cta"
                      whileHover={
                        shouldReduceMotion || !isPasswordValid || isSubmitting
                          ? {}
                          : { y: -2, scale: 1.02 }
                      }
                      whileTap={
                        shouldReduceMotion || !isPasswordValid || isSubmitting
                          ? {}
                          : { scale: 0.98 }
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner" />
                          <span>Creating Account...</span>
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}

              {step === "done" && (
                <motion.div
                  key="step-done"
                  custom={direction}
                  variants={shouldReduceMotion ? {} : flipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col items-center gap-5 text-center layer-3d py-2"
                >
                  <div className="relative flex items-center justify-center w-20 h-20">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: [0.8, 1.4, 1.2],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-[var(--color-accent)]/30 filter blur-md"
                    />

                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="36"
                        cy="36"
                        r="32"
                        className="fill-[var(--color-surface-raised)] stroke-[var(--color-border)]"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="36"
                        cy="36"
                        r="32"
                        className="success-ring"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M 23 37 L 32 46 L 49 27"
                        stroke="oklch(0.82 0.16 187)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      />
                    </svg>
                  </div>

                  <div
                    className="flex flex-col gap-1.5"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                      Account Created!
                    </h1>
                    <p className="text-sm text-[var(--color-muted-fg)] max-w-xs">
                      Welcome to Vault. Your credentials for{" "}
                      <span className="text-[var(--color-foreground)] font-medium">
                        {email}
                      </span>{" "}
                      have been safely secured.
                    </p>
                  </div>

                  <div
                    className="w-full mt-2"
                    style={{ transform: "translateZ(34px)" }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => {
                        setEmail("");
                        setPassword("");
                        goToStep("email", -1);
                      }}
                      className="btn-cta"
                      whileHover={
                        shouldReduceMotion ? {} : { y: -2, scale: 1.02 }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      Done & Sign In
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PasswordUI;
