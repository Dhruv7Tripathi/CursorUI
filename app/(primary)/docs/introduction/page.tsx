import IntroductionPage from "@/components/docs/introduction";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | ORBITUI",
  description:
    "ORBITUI, a beautifully crafted open-source React component library by Dhruv Tripathi powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how ORBITUI helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "ORBITUI Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "ORBITUI Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "ORBITUI by Dhruv Tripathi",
    "Developer Tools",
    "UI Library for React & Next.js",
    "Copy Paste UI Components",
    "Modern UI Kit",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "Dhruv Tripathi" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "Introduction to ORBITUI — Open Source React Component Library | ORBITUI Docs",
    description:
      "Get an overview of ORBITUI, an open-source React component library by Dhruv Tripathi designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://orbitui.in/docs/introduction",
    siteName: "ORBITUI",
    images: [
      {
        url: "https://orbitui.in/ogimage-orbitui.png",
        width: 1200,
        height: 630,
        alt: "ORBITUI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Introduction to ORBITUI — Open Source React Component Library | ORBITUI Docs",
    description:
      "Start building with ORBITUI, an open-source React UI library by Dhruv Tripathi built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: ["https://orbitui.in/ogimage-orbitui.png"],
    site: "@orbitui",
    creator: "@orbitui",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}