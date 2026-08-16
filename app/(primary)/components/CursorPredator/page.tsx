import CursorPredatorPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Predator | CursorXUI ",
  description:
    "CursorXUI 's Cursor Predator is an interactive canvas background where particles flee from the cursor and smoothly return to their original positions. Perfect for hero sections, landing pages, and immersive portfolio experiences.",
  keywords: [
    "Cursor Predator",
    "Cursor Interaction",
    "Particle System",
    "Canvas Animation",
    "Interactive Background",
    "Mouse Repulsion",
    "Particle Physics",
    "HTML5 Canvas",
    "React Canvas",
    "React Animation",
    "Interactive Hero",
    "Landing Page Animation",
    "Portfolio Background",
    "Creative UI",
    "Frontend Components",
    "Modern UI",
    "CursorXUI ",
    "Copy Paste UI Components",
    "Next.js Components",
    "Open Source UI Components",
    "Developer Tools",
  ],
  authors: [
    {
      name: "Dhruv Tripathi",
      url: "https://dhruvtripathi.in",
    },
  ],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "Cursor Predator — Interactive Particle Background | CursorXUI ",
    description:
      "Create immersive interactive backgrounds with Cursor Predator. A lightweight HTML5 canvas particle animation that reacts naturally to cursor movement.",
    url: "https://cursorxui.vercel.app/components/cursor-predator",
    siteName: "CursorXUI ",
    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cursor Predator - CursorXUI ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cursor Predator — Interactive Particle Background | CursorXUI ",
    description:
      "A lightweight HTML5 canvas particle animation that repels from the cursor and smoothly reforms into a dynamic grid.",
    images: ["https://cursorxui.vercel.app/og-image.png"],
    site: "@dhruv7tripathi",
    creator: "@dhruv7tripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <CursorPredatorPreview />;
};

export default Page;