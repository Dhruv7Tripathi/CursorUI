import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/components/providers/provider";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orbitui.in"),
  title: {
    default: "OrbitUI - Beautiful UI Templates & Components",
    template: "%s | OrbitUI",
  },
  description:
    "OrbitUI offers beautiful, responsive UI templates and components built with React, TypeScript, and Tailwind CSS — helping developers ship faster with production-ready blocks.",
  keywords: [
    "OrbitUI",
    "UI components",
    "Next.js templates",
    "React components",
    "Tailwind CSS",
    "TypeScript UI",
    "frontend design system",
  ],
  authors: [{ name: "Dhruv Tripathi" }],
  creator: "Dhruv Tripathi",
  publisher: "OrbitUI",
  openGraph: {
    title: "OrbitUI - Beautiful UI Templates & Components",
    description:
      "Build stunning web interfaces faster with OrbitUI — responsive templates and reusable UI blocks for modern web apps.",
    url: "https://www.orbitui.in",
    siteName: "OrbitUI",
    images: [
      {
        url: "https://www.orbitui.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrbitUI - Beautiful UI Templates & Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitUI - Beautiful UI Templates & Components",
    description:
      "Beautiful, responsive UI templates built with React, TypeScript, and Tailwind CSS.",
    images: ["https://www.orbitui.in/og-image.png"],
    creator: "@dhruvtripathi",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.orbitui.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}