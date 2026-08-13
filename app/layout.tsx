import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/components/providers/provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cursorxui.vercel.app"),

  title: {
    default: "cursorxui — Modern React UI Components",
    template: "%s | cursorxui",
  },

  description:
    "cursorxui is an open-source UI component library for React and Next.js, built with TypeScript and Tailwind CSS. Build beautiful, accessible, and customizable interfaces faster.",

  keywords: [
    "cursorxui",
    "UI components",
    "React UI components",
    "React component library",
    "Next.js components",
    "Tailwind CSS components",
    "TypeScript components",
    "open source UI library",
    "frontend UI library",
    "React component library",
    "Tailwind UI",
    "accessible components",
    "copy paste components",
  ],

  authors: [
    {
      name: "Dhruv Tripathi",
    },
  ],

  creator: "Dhruv Tripathi",
  publisher: "cursorxui",

  applicationName: "cursorxui",

  category: "technology",

  openGraph: {
    title: "cursorxui — Modern React UI Components",
    description:
      "An open-source UI component library for React and Next.js. Build beautiful, accessible, and customizable interfaces with TypeScript and Tailwind CSS.",

    url: "https://cursorxui.vercel.app",

    siteName: "cursorxui",

    images: [
      {
        url: "https://cursorxui.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "cursorxui — Modern React UI Components",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "cursorxui — Modern React UI Components",

    description:
      "Open-source React UI components built with TypeScript and Tailwind CSS. Build beautiful interfaces faster.",

    images: ["https://cursorxui.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://cursorxui.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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