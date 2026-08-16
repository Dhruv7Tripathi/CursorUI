import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | cursorxui",
  description:
    "Explore the official cursorxui documentation to learn how to install, customize, and build modern, accessible React components using Tailwind CSS and Framer Motion. Get started with setup guides, usage instructions, and best practices for frontend developers.",
  keywords: [
    "cursorxui Documentation",
    "React Component Library Guide",
    "Tailwind CSS UI Library",
    "Open Source UI Components",
    "cursorxui Docs",
    "Frontend Design System",
    "Reusable React Components",
    "Framer Motion UI Components",
    "Accessible UI Components",
    "cursorxui by Dhruv Tripathi",
    "Developer Tools",
    "Next.js UI Library",
    "Copy Paste UI Components",
    "Modern UI Kit Documentation",
    "Frontend Developer Resources",
  ],
  authors: [{ name: "Dhruv Tripathi" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title: "cursorxui Documentation — React Component Library Guide | cursorxui",
    description:
      "Browse cursorxui's official documentation to integrate open-source React components with Tailwind CSS and Framer Motion. Learn setup, usage, and best practices.",
    url: "https://cursorxui.vercel.app/docs",
    siteName: "cursorxui",
    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "cursorxui Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cursorxui Documentation — React Component Library Guide | cursorxui",
    description:
      "Official cursorxui documentation for integrating React UI components with Tailwind CSS. Find installation guides, usage patterns, and developer resources.",
    images: ["https://cursorxui.vercel.app/og-image.png"],
    site: "@cursorxui",
    creator: "@dhruvtripathi77",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}