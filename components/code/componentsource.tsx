"use client";

import * as React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { CodeBlockWrapper } from "@/components/code/code-block-wrapper";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  isPremiumUser?: boolean;
}

export function ComponentSource({
  children,
  className,
  isPremiumUser = false,
  ...props
}: ComponentSourceProps) {
  if (!isPremiumUser) {
    return (
      <div
        className={cn(
          "relative max-h-[480px] overflow-hidden rounded-md",
          className
        )}
        {...props}
      >
        <div className="pointer-events-none select-none opacity-60">
          {children}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 backdrop-blur-[1px]">
          <Link
            href="/pricing"
            aria-label="Unlock source code"
            className="inline-flex size-11 items-center justify-center rounded-lg bg-zinc-800 text-white shadow-lg transition hover:bg-zinc-700"
          >
            <Lock className="size-5" />
          </Link>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    );
  }

  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("overflow-hidden rounded-md", className)}
      {...props}
    >
      {children}
    </CodeBlockWrapper>
  );
}