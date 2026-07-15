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
        "flex h-10 w-10  items-center text-xl justify-center rounded-xl bg-transparent text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-900",
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <RxMoon size={30} className="hidden h-[20px] w-[20px] dark:block" />
      <RxSun size={30} className="block h-[20px] w-[20px] dark:hidden" />
    </button>
  );
}
