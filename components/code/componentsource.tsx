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