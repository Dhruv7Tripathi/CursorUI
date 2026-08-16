import CrystalShatterTextPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal Shatter Text | CursorXUI ",
  description:
    "CursorXUI 's Crystal Shatter Text is an interactive React component powered by Framer Motion that transforms characters into animated crystal glyphs with smooth shatter and reconstruction effects. Perfect for hero sections, headings, landing pages, portfolios, and modern UI experiences.",
  keywords: [
    "Crystal Shatter Text",
    "Text Animation",
    "Framer Motion",
    "React Text Animation",
    "Interactive Typography",
    "Animated Heading",
    "Glyph Animation",
    "Motion Typography",
    "Letter Animation",
    "Hover Text Effect",
    "React Components",
    "CursorXUI ",
    "Landing Page Animation",
    "Portfolio Hero",
    "Creative UI",
    "Frontend Components",
    "Modern Typography",
    "Copy Paste UI Components",
    "Next.js Components",
    "Open Source UI Components",
    "Developer Tools",
    "Interactive Text",
    "Animated UI",
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
      "Crystal Shatter Text — Interactive Framer Motion Typography | CursorXUI ",
    description:
      "Create immersive animated typography with CursorXUI 's Crystal Shatter Text. Characters morph into crystal-inspired glyphs with smooth hover-driven shatter animations powered by Framer Motion.",
    url: "https://cursorxui.vercel.app/components/crystal-shatter-text",
    siteName: "CursorXUI ",
    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crystal Shatter Text - CursorXUI ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Crystal Shatter Text — Interactive Framer Motion Typography | CursorXUI ",
    description:
      "Build beautiful crystal-inspired animated typography using React, Framer Motion, and CursorXUI .",
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
  return <CrystalShatterTextPreview />;
};

export default Page;