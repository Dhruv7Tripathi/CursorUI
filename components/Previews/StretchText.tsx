"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { Code2 } from "lucide-react";
import StretchContact from "@/app/(primary)/components/StrechText/_components/stretchtext";
const StretchContactPreview = () => {
  return (
    <MainContentContainer>
      <div id="components" className="orbit-preview relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-white dark:bg-black text-left shadow-2xl shadow-background/80 sm:mt-20 lg:mt-24">
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand" />
            <span className="font-mono text-[11px] text-muted-foreground">orbit-ui / primitives</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="size-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider">preview</span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">

          <PreviewComponentContainer>

            <StretchContact />
          </PreviewComponentContainer>
        </div>
      </div>



    </MainContentContainer>
  );
};

export default StretchContactPreview;

export const LivePreviewStretchContact = () => {
  return (
    <LivePreviewComponent>
      <StretchContact />
    </LivePreviewComponent>
  );
};