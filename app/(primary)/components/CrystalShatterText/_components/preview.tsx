"use client";

import React, { useState } from "react";
import Dependencies from "@/components/content/dependencies";
import {
  code,
  democode,
  title,
  description,
  routepoint,
  commandMap,
  utilcode,
  packagesMap,
} from "./show-code";
import ToggleButtonGroup from "@/components/content/togglebuttongroup";
import MainTitle from "@/components/content/maintitle";
import PreviewComponentContainer from "@/components/content/previewcomponentcontainer";
import MainContentContainer from "@/components/content/maincontentcontainer";
import ComponentNavigation from "@/components/layout/componentnavigation";
import { getNavigationFeaturedItems } from "@/lib/getNavigationFeaturedItems";
import { ComponentSource } from "@/components/code/componentsource";
import { CommandBlock } from "@/components/code/command-block";
import ToggleManualCli from "@/components/content/togglemanualcli";
import { CodeBlock } from "@/components/code/CodeBlock";
import CrystalShatterText from "./crystalshattertext";
import LivePreviewComponent from "@/components/layout/livepreview";

const CrystalShatterTextPreview = () => {
  const [sourceCode, setSourceCode] = useState(false);
  const [sourceManual, setSourceManual] = useState(false);

  const { previous, next } = getNavigationFeaturedItems(title);

  return (
    <MainContentContainer>
      <MainTitle title={title} description={description} />

      <ToggleButtonGroup
        sourceCode={sourceCode}
        setSourceCode={setSourceCode}
        routepoint={routepoint}
      />

      {!sourceCode ? (
        <PreviewComponentContainer>
          <div className="flex h-125 w-full items-center justify-center rounded-xl border border-zinc-800 bg-black">
            <CrystalShatterText
              text="Lucifer in Hell"
              className="text-8xl font-black tracking-wider text-white"
            />
          </div>
        </PreviewComponentContainer>
      ) : (
        <CodeBlock
          fileName={`${title.replace(/\s+/g, "")}Example.tsx`}
          code={democode}
        />
      )}

      <ToggleManualCli
        sourceManual={sourceManual}
        setSourceManual={setSourceManual}
      />

      {!sourceManual ? (
        <CommandBlock
          npmCommand={commandMap.npm}
          pnpmCommand={commandMap.pnpm}
          yarnCommand={commandMap.yarn}
          bunCommand={commandMap.bun}
        />
      ) : (
        <>
          <Dependencies step={1} title="Install the packages">
            <CommandBlock
              npmCommand={packagesMap.npm}
              pnpmCommand={packagesMap.pnpm}
              yarnCommand={packagesMap.yarn}
              bunCommand={packagesMap.bun}
            />
          </Dependencies>

          <Dependencies step={2} title="Add util file">
            <CodeBlock fileName="lib/util.ts" code={utilcode} />
          </Dependencies>

          <Dependencies
            step={3}
            title="Copy and paste the following code into your project"
          >
            <ComponentSource>
              <CodeBlock fileName={`${routepoint}.tsx`} code={code} />
            </ComponentSource>
          </Dependencies>

          <Dependencies
            step={4}
            title="Update the import paths to match your project setup"
          />
        </>
      )}

      <ComponentNavigation previous={previous} next={next} />
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
          className="text-8xl font-black tracking-wider text-white"
        />
      </div>
    </LivePreviewComponent>
  );
};