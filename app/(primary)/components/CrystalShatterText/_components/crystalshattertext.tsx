"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

interface CrystalShatterTextProps {
  text: string;
  className?: string;
}

const glyphMap: Record<string, string[]> = {
  A: ["A", "Λ", "Δ", "∀"],
  E: ["E", "Ξ", "Σ"],
  G: ["G", "Ǥ", "₲"],
  O: ["O", "Ø", "⊙"],
  R: ["R", "Я", "℞"],
  S: ["S", "§", "ϟ"],
  T: ["T", "Ŧ", "†"],
  V: ["V", "∨", "✓"],
  Y: ["Y", "¥", "Ψ"],
};

function mutateChar(char: string) {
  if (char === " ") return " ";

  const options =
    glyphMap[char.toUpperCase()];

  if (!options) return char;

  return options[
    Math.floor(
      Math.random() * options.length
    )
  ];
}

export default function CrystalShatterText({
  text,
  className = "",
}: CrystalShatterTextProps) {
  const [version, setVersion] =
    useState(0);

  const [display, setDisplay] =
    useState(text);

  const mutateSentence = () => {
    const next = text
      .split("")
      .map(mutateChar)
      .join("");

    setDisplay(next);

    setVersion((v) => v + 1);
  };

  const chars = useMemo(
    () => display.split(""),
    [display]
  );

  return (
    <div
      onMouseEnter={mutateSentence}
      className={`
        inline-flex
        cursor-pointer
        select-none
        ${className}
      `}
    >
      {chars.map((char, index) => (
        <CrystalChar
          key={`${version}-${index}`}
          char={char}
          index={index}
        />
      ))}
    </div>
  );
}

interface CrystalCharProps {
  char: string;
  index: number;
}function getOffsets(char: string, index: number) {
  const code = char.charCodeAt(0) || 0;
  const s1 = Math.sin(index * 12.9898 + code * 78.233) * 43758.5453;
  const randX = s1 - Math.floor(s1);

  const s2 = Math.sin(index * 39.346 + code * 11.123) * 24634.6345;
  const randY = s2 - Math.floor(s2);

  const s3 = Math.sin(index * 73.156 + code * 45.678) * 13758.5453;
  const randR = s3 - Math.floor(s3);

  return {
    randomX: (randX - 0.5) * 140,
    randomY: (randY - 0.5) * 80,
    randomRotate: (randR - 0.5) * 220,
  };
}

function CrystalChar({
  char,
  index,
}: CrystalCharProps) {
  const { randomX, randomY, randomRotate } = useMemo(
    () => getOffsets(char, index),
    [char, index]
  );

  if (char === " ") {
    return (
      <span className="w-[0.35em]" />
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        initial={{
          opacity: 0,
          scale: 2,
          filter: "blur(16px)",
          x: -randomX,
          y: -randomY,
          rotate: -randomRotate,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          x: 0,
          y: 0,
          rotate: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.2,
          filter: "blur(18px)",
          x: randomX,
          y: randomY,
          rotate: randomRotate,
        }}
        transition={{
          delay: index * 0.05,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          inline-block
          relative
          will-change-transform
        "
      >
        {char}
      </motion.span>
    </AnimatePresence>
  );
}