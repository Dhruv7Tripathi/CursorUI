import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Provider from "@/components/providers/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.layrdui.in"),
  title: {
    default: "LayrdUI - Beautiful UI Templates & Components",
    template: "%s | LayrdUI",
  },
  description:
    "LayrdUI offers beautiful, responsive UI templates and components built with React, TypeScript, and Tailwind CSS — helping developers ship faster with production-ready blocks.",
  keywords: [
    "LayrdUI",
    "UI components",
    "Next.js templates",
    "React components",
    "Tailwind CSS",
    "TypeScript UI",
    "frontend design system",
  ],
  authors: [{ name: "Dhruv Tripathi" }],
  creator: "Dhruv Tripathi",
  publisher: "LayrdUI",
  openGraph: {
    title: "LayrdUI - Beautiful UI Templates & Components",
    description:
      "Build stunning web interfaces faster with LayrdUI — responsive templates and reusable UI blocks for modern web apps.",
    url: "https://www.layrdui.in",
    siteName: "LayrdUI",
    images: [
      {
        url: "https://www.layrdui.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "LayrdUI - Beautiful UI Templates & Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LayrdUI - Beautiful UI Templates & Components",
    description:
      "Beautiful, responsive UI templates built with React, TypeScript, and Tailwind CSS.",
    images: ["https://www.layrdui.in/og-image.png"],
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
    canonical: "https://www.layrdui.in",
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
        {/* <Analytics /> */}
      </body>
    </html>
  );
}