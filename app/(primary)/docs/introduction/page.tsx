import IntroductionPage from "@/components/docs/introduction";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Introduction | CursorXUI Docs",
  description:
    "CursorXUI Docs, a beautifully crafted open-source React component library by Dhruv Tripathi powered by Tailwind CSS and Framer Motion. Learn the core principles, philosophy, and how CursorXUI Docs helps developers build modern, accessible, and customizable UI components with ease.",
  keywords: [
    "CursorXUI Docs Introduction",
    "React Component Library",
    "Tailwind CSS UI Kit",
    "Open Source UI Components",
    "CursorXUI Docs Documentation",
    "Frontend Design System",
    "Framer Motion Components",
    "Reusable React Components",
    "Accessible UI Components",
    "CursorXUI Docs by Dhruv Tripathi",
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
      "Introduction to CursorXUI Docs — Open Source React Component Library | CursorXUI Docs Docs",
    description:
      "Get an overview of CursorXUI Docs, an open-source React component library by Dhruv Tripathi designed with Tailwind CSS and Framer Motion. Learn its core principles and how to integrate it into your frontend projects.",
    url: "https://CursorXUI Docs.in/docs/introduction",
    siteName: "CursorXUI Docs",
    images: [
      {
        url: "https://CursorXUI Docs.in/ogimage-CursorXUI Docs.png",
        width: 1200,
        height: 630,
        alt: "CursorXUI Docs Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Introduction to CursorXUI Docs — Open Source React Component Library | CursorXUI Docs Docs",
    description:
      "Start building with CursorXUI Docs, an open-source React UI library by Dhruv Tripathi built with Tailwind CSS & Framer Motion. Learn the core principles and how to use it in your projects.",
    images: ["https://CursorXUI Docs.in/ogimage-CursorXUI Docs.png"],
    site: "@CursorXUI Docs",
    creator: "@CursorXUI Docs",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function Introduction() {
  return <IntroductionPage />;
}