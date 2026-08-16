import VerletRopePreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verlet Rope | CursorXUI",
  description:
    "CursorXUI's Verlet Rope component brings realistic rope physics to React applications using the HTML5 Canvas API and Verlet integration. Featuring interactive dragging, configurable stiffness, gravity, damping, wind simulation, and responsive rendering, it's perfect for hero sections, physics-based interfaces, creative websites, and interactive UI experiences. Easily copy-paste and customize this lightweight canvas component.",
  keywords: [
    "Verlet Rope Component",
    "Verlet Integration",
    "Canvas Physics",
    "Rope Physics",
    "Interactive Rope",
    "React Canvas Component",
    "Physics Simulation",
    "HTML5 Canvas",
    "Creative UI Components",
    "CursorXUI Components",
    "Interactive Animation",
    "Mouse Interaction",
    "Canvas Animation",
    "Physics Engine",
    "Frontend Animation",
    "Copy Paste UI Components",
    "Next.js Components",
    "Interactive Background",
    "Open Source UI Components",
    "Developer Tools",
    "Constraint Solver",
    "Game Physics",
    "Modern UI Effects",
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
      "Verlet Rope Component for React — Interactive Canvas Physics | CursorXUI",
    description:
      "Build realistic rope physics using CursorXUI's Verlet Rope component. Powered by HTML5 Canvas and Verlet integration with drag interactions, wind effects, and customizable physics.",
    url: "https://cursorxui.vercel.app/components/verlet-rope",
    siteName: "CursorXUI",
    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
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
      "Verlet Rope Component for React — Interactive Canvas Physics | CursorXUI",
    description:
      "Create realistic rope simulations with draggable nodes, wind effects, gravity, and smooth Verlet physics using CursorXUI.",
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
  return <VerletRopePreview />;
};

export default Page;