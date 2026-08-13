"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { Code2 } from "lucide-react";
import RetroShader from "@/app/(primary)/components/RetroShader/_components/retroshader";

const RetroShaderPreview = () => {
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
              preview/RetroShader
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <PreviewComponentContainer>
            <div className="h-64 w-full overflow-hidden rounded-lg sm:h-80 sm:rounded-xl md:h-96 lg:h-[28rem] xl:h-125">
              <RetroShader />
            </div>
          </PreviewComponentContainer>
        </div>
      </div>
    </MainContentContainer>
  );
};

export default RetroShaderPreview;

export const LivePreviewRetroShader = () => {
  return (
    <LivePreviewComponent>
      <div className="h-64 w-full overflow-hidden rounded-xl sm:h-80 md:h-96 lg:h-[28rem] xl:h-125">
        <RetroShader />
      </div>
    </LivePreviewComponent>
  );
};