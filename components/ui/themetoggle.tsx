"use client";

import * as React from "react";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Themetoggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        "flex  items-center text-lg justify-center  text-black  dark:text-white ",
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <RxMoon size={20} className="hidden h-[20px] w-[20px] dark:block" />
      <RxSun size={20} className="block h-[20px] w-[20px] dark:hidden" />
    </button>
  );
}
