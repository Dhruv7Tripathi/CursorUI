import ShatterGlassPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shatter Glass | CursorXUI",
  description:
    "CursorXUI's Shatter Glass component brings realistic glass-breaking interactions to React applications using the HTML5 Canvas API. Featuring dynamic crack propagation, physics-driven fragments, customizable color palettes, gravity controls, and interactive mouse gestures, it's perfect for landing pages, portfolios, games, and creative web experiences. Easily copy-paste and customize this high-performance canvas component.",
  keywords: [
    "Shatter Glass Component",
    "Glass Break Animation",
    "Canvas Animation",
    "HTML5 Canvas Effects",
    "Interactive Glass Effect",
    "React Canvas Component",
    "Glass Shattering Physics",
    "Mouse Interaction",
    "Particle Animation",
    "Creative UI Components",
    "CursorXUI Components",
    "Frontend Animation",
    "Interactive Background",
    "Copy Paste UI Components",
    "Next.js Components",
    "React Animation Library",
    "Physics Animation",
    "Landing Page Effects",
    "Open Source UI Components",
    "Developer Tools",
    "Canvas Physics",
    "Reusable React Components",
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
      "Shatter Glass Component for React — Interactive Canvas Physics | OrbitUI",
    description:
      "Create immersive glass-breaking experiences with CursorXUI's Shatter Glass component. Built with HTML5 Canvas for realistic fragments, crack propagation, and customizable physics.",
    url: "https://cursorxui.vercel.app/components/shatter-glass",
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
      "Shatter Glass Component for React — Interactive Canvas Physics | CursorXUI",
    description:
      "Build stunning glass-shattering interactions with realistic fragments, crack propagation, and customizable physics using CursorXUI.",
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
  return <ShatterGlassPreview />;
};

export default Page;