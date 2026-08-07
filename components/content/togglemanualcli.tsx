"use client";

import { motion } from "motion/react";

interface ToggleManualCliProps {
  sourceManual: boolean;
  setSourceManual: (sourceManual: boolean) => void;
}

export default function ToggleManualCli({
  sourceManual,
  setSourceManual,
}: ToggleManualCliProps) {
  return (
    <>
      <h2
        id="installation"
        className="mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight text-black first:mt-0 dark:text-white"
      >
        Installation
      </h2>


    </>
  );
}