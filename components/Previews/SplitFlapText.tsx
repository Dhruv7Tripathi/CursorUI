"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { SplitFlapText } from "@/app/(primary)/components/SplitFlapText/_components/splittext";
import { Code2 } from "lucide-react";

const SplitFlapTextPreview = () => {
  return (
    <MainContentContainer>
      <div
        id="components"
        className="orbit-preview relative mx-auto mt-12 w-full max-w-5xl overflow-hidden rounded-xl border border-border/80 bg-card/80 text-left shadow-xl shadow-background/80 sm:mt-16 sm:rounded-2xl md:mt-20 lg:mt-24 lg:shadow-2xl"
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
              preview/SplitFlapText
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <PreviewComponentContainer>
            <div className="flex h-40 w-full scale-75 items-center justify-center overflow-hidden rounded-lg px-2 sm:h-48 sm:scale-90 sm:rounded-xl md:h-56 md:scale-100 lg:h-64">
              <SplitFlapText text="Dhruv" speed={80} />
            </div>
          </PreviewComponentContainer>
        </div>
      </div>
    </MainContentContainer>
  );
};

export default SplitFlapTextPreview;

export const LivePreviewSplitFlapText = () => {
  return (
    <LivePreviewComponent>
      <div className="flex h-40 w-full scale-75 items-center justify-center overflow-hidden sm:h-48 sm:scale-90 md:h-56 md:scale-100 lg:h-64">
        <SplitFlapText text="Dhruv" speed={80} />
      </div>
    </LivePreviewComponent>
  );
};