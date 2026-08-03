import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | OrbitUI",
  description:
    "Explore the official OrbitUI documentation to learn how to install, customize, and build modern, accessible React components using Tailwind CSS and Framer Motion. Get started with setup guides, usage instructions, and best practices for frontend developers.",
  keywords: [
    "OrbitUI Documentation",
    "React Component Library Guide",
    "Tailwind CSS UI Library",
    "Open Source UI Components",
    "OrbitUI Docs",
    "Frontend Design System",
    "Reusable React Components",
    "Framer Motion UI Components",
    "Accessible UI Components",
    "OrbitUI by Dhruv Tripathi",
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
    title: "OrbitUI Documentation — React Component Library Guide | OrbitUI",
    description:
      "Browse OrbitUI's official documentation to integrate open-source React components with Tailwind CSS and Framer Motion. Learn setup, usage, and best practices.",
    url: "https://orbitui.in/docs",
    siteName: "OrbitUI",
    images: [
      {
        url: "https://orbitui.in/ogimage-orbitui.png",
        width: 1200,
        height: 630,
        alt: "OrbitUI Documentation Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitUI Documentation — React Component Library Guide | OrbitUI",
    description:
      "Official OrbitUI documentation for integrating React UI components with Tailwind CSS. Find installation guides, usage patterns, and developer resources.",
    images: ["https://orbitui.in/ogimage-orbitui.png"],
    site: "@orbitui",
    creator: "@dhruvtripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DocsPage() {
  redirect("/docs/introduction");
}