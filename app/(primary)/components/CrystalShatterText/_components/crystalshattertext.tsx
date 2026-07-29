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
}function CrystalChar({
  char,
  index,
}: CrystalCharProps) {
  const randomX =
    useMemo(
      () =>
        (Math.random() - 0.5) *
        140,
      []
    );

  const randomY =
    useMemo(
      () =>
        (Math.random() - 0.5) *
        80,
      []
    );

  const randomRotate =
    useMemo(
      () =>
        (Math.random() - 0.5) *
        220,
      []
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