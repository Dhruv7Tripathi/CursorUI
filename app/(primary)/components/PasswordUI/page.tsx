import PasswordUIPreview from "./_components/preview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password UI | cursorxui",
  description:
    "cursorxui's Password UI is an interactive password strength component featuring an animated 3D mascot with eye-tracking, real-time validation checklist, password visibility toggling, and smooth Framer Motion animations.",
  keywords: [
    "Password UI",
    "Password Strength Meter",
    "Animated Mascot",
    "React Password Validation",
    "Framer Motion",
    "Interactive UI",
    "cursorxui",
    "Frontend Components",
    "Tailwind CSS",
    "Next.js UI Components",
    "Developer Tools",
    "Open Source UI Components",
    "Copy Paste UI Components",
  ],
  authors: [{ name: "Dhruv Tripathi", url: "https://dhruvtripathi.in" }],
  creator: "Dhruv Tripathi",
  publisher: "Dhruv Tripathi",
  openGraph: {
    title: "Password UI — Interactive Password Strength Component | cursorxui",
    description:
      "Interactive password strength interface with animated mascot, eye tracking, and smooth transitions powered by Framer Motion and Tailwind CSS.",
    url: "https://cursorxui.vercel.app/components/password-ui",
    siteName: "cursorxui",
    images: [
      {
        url: "https://cursorxui.vercel.app/ogimage-cursorxui.png",
        width: 1200,
        height: 630,
        alt: "Password UI - cursorxui",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Password UI — Interactive Password Strength Component | cursorxui",
    description:
      "Interactive password strength interface with animated mascot and real-time validation.",
    images: ["https://cursorxui.vercel.app/ogimage-cursorxui.png"],
    site: "@dhruv7tripathi",
    creator: "@dhruv7tripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "developer",
};

const Page = () => {
  return <PasswordUIPreview />;
};

export default Page;
