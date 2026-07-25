import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | orbitui",
  description:
    "Browse orbitui’s collection of beautifully designed, open-source React components powered by Tailwind CSS and Framer Motion. Easily copy-paste and customize animated forms, cards, UI effects, and more for your modern web apps and SaaS projects.",
  keywords: [
    "React UI Components",
    "orbitui Components Library",
    "Tailwind CSS UI Components",
    "Open Source Component Library",
    "Reusable React Components",
    "Framer Motion Components",
    "Next.js UI Components",
    "Frontend Design System",
    "Copy Paste UI Components",
    "Beautiful UI Library",
    "orbitui by Aman Shakya",
    "Developer Tools",
    "SaaS UI Components",
    "Modern UI Kit",
    "Accessible UI Components",
    "Motion UI React",
    "Frontend Engineer Resources",
  ],
  authors: [{ name: "Aman Shakya", url: "https://dhruvtripathi.in" }],
  creator: "Aman Shakya",
  publisher: "Aman Shakya",
  openGraph: {
    title:
      "React UI Components Library — Beautiful & Reusable Components | orbitui",
    description:
      "Explore orbitui’s open-source React component library featuring animated forms, cards, interactive UI effects, and more. Built with Tailwind CSS & Framer Motion.",
    url: "https://orbitui.in/components",
    siteName: "orbitui",
    images: [
      {
        url: "https://orbitui.in/ogimage-orbitui.png",
        width: 1200,
        height: 630,
        alt: "orbitui Components Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React UI Components Library — Beautiful & Reusable Components | orbitui",
    description:
      "Discover orbitui's open-source React components crafted with Tailwind CSS. Easily copy, paste, and customize beautiful UI blocks for your web apps.",
    images: ["https://orbitui.in/ogimage-orbitui.png"],
    site: "@dhruvtripathi0018",
    creator: "@dhruvtripathi0018",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

export default function DashboardPage() {
  redirect("/components/StrechText");
}