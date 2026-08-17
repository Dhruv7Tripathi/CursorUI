"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { Code2 } from "lucide-react";
import dynamic from "next/dynamic";
const CrystalShatterText = dynamic(
  () => import("@/app/(primary)/components/CrystalShatterText/_components/crystalshattertext"),
  {
    ssr: false,
    loading: () => (
      <div className="text-8xl font-black tracking-wider text-black dark:text-white">
        Lucifer in Hell
      </div>
    ),
  }
);
const CrystalShatterTextPreview = () => {
  return (
    <MainContentContainer>
      <div
        id="components"
        className="orbit-preview relative mx-auto mt-12 w-full max-w-5xl overflow-hidden rounded-xl border border-border/80 bg-white dark:bg-black text-left shadow-xl shadow-background/80 sm:mt-16 sm:rounded-2xl md:mt-20 lg:mt-24 lg:shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
          <div className="flex items-center gap-2">
            <span className="size-2 shrink-0 rounded-full bg-brand" />
            <span className="font-mono text-[10px] text-muted-foreground sm:text-[11px]">
              cursorxui
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground sm:gap-2">
            <Code2 className="size-3 sm:size-3.5" />
            <span className="font-mono text-[9px] uppercase tracking-wider sm:text-[10px]">
              preview/CrystalShatterText
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <PreviewComponentContainer>
            <div className="flex h-64 w-full items-center justify-center  px-4 dark:border-neutral-800 sm:h-80 sm:rounded-xl md:h-96 lg:h-[28rem] xl:h-125 bg-white dark:bg-black">
              <CrystalShatterText
                text="Lucifer in Hell"
                className="text-center text-4xl font-black tracking-wider text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              />
            </div>
          </PreviewComponentContainer>
        </div>
      </div>
    </MainContentContainer>
  );
};

export default CrystalShatterTextPreview;

export const LivePreviewCrystalShatterText = () => {
  return (
    <LivePreviewComponent>
      <div className="flex h-64 w-full items-center justify-center rounded-xl border border-zinc-800 bg-black px-4 sm:h-80 md:h-96 lg:h-[28rem] xl:h-125">
        <CrystalShatterText
          text="Lucifer in Hell"
          className="text-center text-4xl font-black tracking-wider text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        />
      </div>
    </LivePreviewComponent>
  );
};