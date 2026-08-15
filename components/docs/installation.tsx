'use client';

import React, { useState } from 'react';

export default function InstallationPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const copyButton = (text: string, id: string) => (
    <button
      onClick={() => handleCopy(text, id)}
      className="absolute right-3 top-3 px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-xs font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-zinc-700 transition-colors active:scale-95"
    >
      {copiedText === id ? 'Copied!' : 'Copy'}
    </button>
  );

  return (
    <article className="container mx-auto max-w-6xl py-6 lg:pl-8">
      <div className="space-y-8">

        {/* Header */}
        <div id="installation" className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Installation
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            <em>Set up your development environment.</em> Learn how to initialize a Next.js project and configure Tailwind CSS to use OrbitUI components.
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            CursorXUI is designed to work seamlessly within modern React frameworks. The recommended stack is <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. This setup ensures optimal rendering, type safety, and complete style control.
          </p>
        </div>

        {/* Step 1 */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">
            1. Create a Next.js project
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Initialize a new Next.js application using the interactive <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-indigo-500">create-next-app</code> CLI tool. It will automatically ask you to configure TypeScript and Tailwind CSS.
          </p>

          <div className="relative rounded-lg overflow-hidden bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 p-5 font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            <div className="overflow-x-auto pr-16 select-all whitespace-nowrap">
              npx create-next-app@latest my-orbit-app --typescript --tailwind --eslint --src-dir --app
            </div>
            {copyButton("npx create-next-app@latest my-orbit-app --typescript --tailwind --eslint --src-dir --app", "step1")}
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">
            2. Configure your Tailwind paths
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Ensure your <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-indigo-500">tailwind.config.ts</code> matches the directories of your project. This allows Tailwind to scan and generate utility classes for the OrbitUI code blocks you paste in.
          </p>

          <div className="relative rounded-lg overflow-hidden bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 p-5 font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            <pre className="overflow-x-auto max-h-72 leading-relaxed text-neutral-600 dark:text-neutral-400">
              <code>{`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;`}</code>
            </pre>
            {copyButton(`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;`, "step2")}
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">
            3. Add Tailwind CSS directives
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Import the base Tailwind directives into your global stylesheet (typically located at <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 text-indigo-500">src/app/globals.css</code>).
          </p>

          <div className="relative rounded-lg overflow-hidden bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 p-5 font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            <pre className="overflow-x-auto leading-relaxed text-neutral-600 dark:text-neutral-400">
              <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
            </pre>
            {copyButton(`@tailwind base;
@tailwind components;
@tailwind utilities;`, "step3")}
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground">
            4. Run the development server
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Start the application dev server. Your project is now ready to receive copy-paste components from OrbitUI.
          </p>

          <div className="relative rounded-lg overflow-hidden bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 p-5 font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-300">
            <div className="overflow-x-auto pr-16 select-all whitespace-nowrap">
              npm run dev
            </div>
            {copyButton("npm run dev", "step4")}
          </div>
        </div>

        {/* Integration Info Callout */}
        <div className="space-y-4 rounded-lg bg-neutral-200/50 p-6 dark:bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Ready to integrate?</strong> Head over to the components sidebar, select the animation or interface element you need, and copy it directly into your new setup.
          </p>
        </div>

      </div>
    </article>
  );
}