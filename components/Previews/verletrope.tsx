"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { Code2 } from "lucide-react";
import VerletRope from "@/app/(primary)/components/VerletRope/_components/verletrope";
import { useState } from "react";
const VerletRopePreview = () => {
  const [wind, setWind] = useState(0);
  return (
    <MainContentContainer>
      <div id="components" className="orbit-preview relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-border/80 bg-white dark:bg-black text-left shadow-2xl shadow-background/80 sm:mt-20 lg:mt-24">
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand" />
            <span className="font-mono text-[11px] text-muted-foreground">cursorui </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="size-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider">preview/stretchcontact</span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">

          <PreviewComponentContainer>

            <div className="relative flex h-[450px] w-full flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 px-8">
              <VerletRope
                height={320}
                windTrigger={wind}
                color="#6366f1"
                className="w-full"
              />

              <button
                onClick={() => setWind((w) => w + 1)}
                className="mt-8 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
              >
                Gust ↗
              </button>
            </div>
          </PreviewComponentContainer>
        </div>
      </div>



    </MainContentContainer>
  );
};

export default VerletRopePreview;

export const LivePreviewVerletRope = () => {
  return (
    <LivePreviewComponent>
      <VerletRope />
    </LivePreviewComponent>
  );
};
