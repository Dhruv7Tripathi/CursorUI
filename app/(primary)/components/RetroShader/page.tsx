import RetroShaderPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retro Shader | OrbitUI",
  description:
    "OrbitUI's Retro Shader component helps developers create visually engaging and interactive retro-style shaders with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for modern web apps, landing pages, and SaaS products, it ensures a seamless user experience with accessible and customizable design patterns. Easily copy-paste and integrate this high-quality shader component into your projects.",
  keywords: [
    "Retro Shader Component",
    "React Shader Animation",
    "Framer Motion Forms",
    "Tailwind CSS Forms",
    "OrbitUI Components",
    "UI Animation Library",
    "Smooth Form Transitions",
    "React UI Kit",
    "Open Source UI Components",
    "Frontend Design System",
    "Accessible React Components",
    "Customizable UI Components",
    "Copy Paste UI Components",
    "Next.js UI Components",
    "Beautiful Forms UI",
    "Developer Tools",
    "SaaS UI Components",
    "Interactive Forms React",
    "React Form UI",
    "Reusable Form Components",
    "Motion UI React",
    "Frontend Engineer Tools",
  ],
  authors: [{ name: "Dhruv Tripathi", url: "https://dhruvtripathi.in" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | OrbitUI",
    description:
      "Build stunning animated forms with OrbitUI's React component. Smooth UX, accessible design, and easy integration with Tailwind CSS & Framer Motion. Perfect for modern web apps and SaaS products.",
    url: "https://orbitui.in/components/animated-form",
    siteName: "OrbitUI",
    images: [
      {
        url: "https://orbitui.in/ogimage-orbitui.png",
        width: 1200,
        height: 630,
        alt: "OrbitUI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | OrbitUI",
    description:
      "OrbitUI's Animated Form component enables smooth, accessible, and customizable forms in React apps. Powered by TailwindCSS & Framer Motion.",
    images: ["https://orbitui.in/ogimage-orbitui.png"],
    site: "@dhruv7tripathi",
    creator: "@dhruv7tripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};
const Page = () => {
  return <RetroShaderPreview />;
};

export default Page;