
import GravityWellPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravity Well | CursorXUI",
  description:
    "CursorXUI's Gravity Well component creates an interactive particle physics simulation where users can spawn gravity wells, black holes, and repulsion fields. Built with React, Canvas API, and Tailwind CSS, it's perfect for hero sections, landing pages, portfolios, and creative web experiences.",
  keywords: [
    "Gravity Well Component",
    "Particle Physics Animation",
    "React Canvas Component",
    "Interactive Particle System",
    "Canvas Physics",
    "CursorXUI Components",
    "React Particle Animation",
    "Creative Hero Section",
    "Landing Page Animation",
    "Black Hole Animation",
    "Canvas UI Component",
    "Interactive Background",
    "Tailwind CSS Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Creative Web Animation",
    "Frontend UI Library",
    "Portfolio Animation",
    "Interactive Canvas Effects",
    "Physics Simulation React",
    "Reusable React Components",
    "Open Source UI Components",
    "Developer Tools",
  ],
  authors: [{ name: "Dhruv Tripathi", url: "https://dhruvtripathi.in" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "Gravity Well Component for React — Interactive Particle Physics | OrbitUI",
    description:
      "Build stunning interactive particle physics effects with CursorXUI's Gravity Well component. Create gravity wells, black holes, and orbit simulations using React, Canvas API, and Tailwind CSS.",
    url: "https://cursorxui.vercel.app/components/gravity-well",
    siteName: "CursorXUI",
    images: [
      {
        url: "https://cursorxui.vercel.app/ogimage-CursorXUI.png",
        width: 1200,
        height: 630,
        alt: "CursorXUI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gravity Well Component for React — Interactive Particle Physics | CursorXUI",
    description:
      "Create beautiful particle simulations with gravity wells, black holes, and orbit effects using CursorXUI's React Canvas component.",
    images: ["https://cursorxui.vercel.app/ogimage-CursorXUI.png"],
    site: "@dhruv7tripathi",
    creator: "@dhruv7tripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <GravityWellPreview />;
};

export default Page;