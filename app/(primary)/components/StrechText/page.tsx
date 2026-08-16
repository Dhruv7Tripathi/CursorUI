import StretchContactPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stretch Contact | CursorXUI",
  description:
    "CursorXUI's Animated Form component helps developers create visually engaging and interactive forms with smooth animations using React, Tailwind CSS, and Framer Motion. Perfect for modern web apps, landing pages, and SaaS products, it ensures a seamless user experience with accessible and customizable design patterns. Easily copy-paste and integrate this high-quality form component into your projects.",
  keywords: [
    "Animated Form Component",
    "React Form Animation",
    "Framer Motion Forms",
    "Tailwind CSS Forms",
    "CursorXUI Components",
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
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | CursorXUI",
    description:
      "Build stunning animated forms with CursorXUI's React component. Smooth UX, accessible design, and easy integration with Tailwind CSS & Framer Motion. Perfect for modern web apps and SaaS products.",
    url: "https://cursorxui.vercel.app/components/animated-form",
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
      "Animated Form Component for React — Smooth UI/UX with Framer Motion | CursorXUI",
    description:
      "CursorXUI's Animated Form component enables smooth, accessible, and customizable forms in React apps. Powered by TailwindCSS & Framer Motion.",
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
  return <StretchContactPreview />;
};

export default Page;