"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import CrystalShatterText from "@/app/(primary)/components/CrystalShatterText/_components/crystalshattertext";
import { Code2 } from "lucide-react";
const CrystalShatterTextPreview = () => {
  return (
    <MainContentContainer>
      <div id="components" className="orbit-preview relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-white dark:bg-black text-left shadow-2xl shadow-background/80 sm:mt-20 lg:mt-24">
        <div className="flex items-center justify-between  border-border/80 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand" />
            <span className="font-mono text-[11px] text-muted-foreground">cursorxui </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="size-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider">preview/CrystalShatterText</span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">

          <PreviewComponentContainer>

            <div className="flex h-125 w-full items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
              <CrystalShatterText
                text="Lucifer in Hell"
                className="text-8xl font-black tracking-wider text-black dark:text-white"
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
      <div className="flex h-125 w-full items-center justify-center rounded-xl border border-zinc-800 bg-black">
        <CrystalShatterText
          text="Lucifer in Hell"
          className="text-8xl font-black tracking-wider text-black dark:text-white"
        />
      </div>
    </LivePreviewComponent>
  );
};