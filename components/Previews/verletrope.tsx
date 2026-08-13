"use client";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";

import LivePreviewComponent from "@/components/layout/livepreview";
import { Code2 } from "lucide-react";
import VerletRope from "@/app/(primary)/components/VerletRope/_components/verletrope";
import { useEffect, useState } from "react";

function useResponsiveRopeHeight() {
  const [height, setHeight] = useState(220);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setHeight(320); // lg+
      else if (w >= 768) setHeight(280); // md
      else if (w >= 640) setHeight(240); // sm
      else setHeight(180); // base
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return height;
}

const VerletRopePreview = () => {
  const [wind, setWind] = useState(0);
  const ropeHeight = useResponsiveRopeHeight();

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
              preview/VerletRope
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-black">
          <PreviewComponentContainer>
            <div className="relative flex h-64 w-full flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-6 sm:h-80 sm:rounded-xl sm:px-6 md:h-96 md:px-8 lg:h-[28rem]">
              <VerletRope
                height={ropeHeight}
                windTrigger={wind}
                color="#6366f1"
                className="w-full"
              />

              <button
                onClick={() => setWind((w) => w + 1)}
                className="mt-6 rounded-full bg-indigo-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-indigo-600 sm:mt-8 sm:px-5 sm:py-2.5 sm:text-sm"
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
  const ropeHeight = useResponsiveRopeHeight();
  return (
    <LivePreviewComponent>
      <VerletRope height={ropeHeight} />
    </LivePreviewComponent>
  );
};