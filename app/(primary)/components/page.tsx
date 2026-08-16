import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | cursorxui",
  description:
    "Browse cursorxui’s collection of beautifully designed, open-source React components powered by Tailwind CSS and Framer Motion. Easily copy-paste and customize animated forms, cards, UI effects, and more for your modern web apps and SaaS projects.",
  keywords: [
    "React UI Components",
    "cursorxui Components Library",
    "Tailwind CSS UI Components",
    "Open Source Component Library",
    "Reusable React Components",
    "Framer Motion Components",
    "Next.js UI Components",
    "Frontend Design System",
    "Copy Paste UI Components",
    "Beautiful UI Library",
    "cursorxui by Dhruv Tripathi",
    "Developer Tools",
    "SaaS UI Components",
    "Modern UI Kit",
    "Accessible UI Components",
    "Motion UI React",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "Dhruv Tripathi", url: "https://dhruvtripathi.in" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title:
      "React UI Components Library — Beautiful & Reusable Components | cursorxui",
    description:
      "Explore cursorxui’s open-source React component library featuring animated forms, cards, interactive UI effects, and more. Built with Tailwind CSS & Framer Motion.",
    url: "https://cursorxui.vercel.app/components",
    siteName: "cursorxui",
    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "cursorxui Components Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React UI Components Library — Beautiful & Reusable Components | cursorxui",
    description:
      "Discover cursorxui's open-source React components crafted with Tailwind CSS. Easily copy, paste, and customize beautiful UI blocks for your web apps.",
    images: ["https://cursorxui.vercel.app/og-image.png"],
    site: "@dhruvtripathi77",
    creator: "@dhruvtripathi77",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DashboardPage() {
  redirect("/components/StrechText");
}