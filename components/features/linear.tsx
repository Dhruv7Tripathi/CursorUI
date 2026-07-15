"use client";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "SEO-Optimized Pages",
    description:
      "Built with server-side rendering and optimized meta tags, structured data, and sitemap support to improve crawlability and search rankings.",
  },
  {
    title: "Next.js + TypeScript Foundation",
    description:
      "Typed components and routes using TypeScript with Next.js conventions for fast builds, reliable types, and predictable developer experience.",
  },
  {
    title: "Tailwind CSS Design System",
    description:
      "Utility-first styling with Tailwind for a responsive, consistent UI. Easy to customize tokens, dark mode, and layout utilities for rapid theming.",
  },
  {
    title: "Performance-First Architecture",
    description:
      "Image optimization, code-splitting, and lightweight components prioritize fast load times and Core Web Vitals to enhance SEO and UX.",
  },
  {
    title: "Accessible by Default",
    description:
      "Semantic markup, keyboard navigation, ARIA attributes, and color-contrast considerations to meet accessibility best practices and broaden audience reach.",
  },
  {
    title: "Open Source & Community-Driven",
    description:
      "Published under an open license with a public repository. Contributions, issues, and feature requests are welcome via GitHub pull requests.",
  },
  {
    title: "Easy Deployment & CI/CD",
    description:
      "Preconfigured for Vercel and other platforms with production-ready scripts, environment hints, and example GitHub Actions for automated builds.",
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Getting-started guides, component usage examples, and contribution guidelines included to accelerate onboarding and community contributions.",
  },
];

export default function LinearFeatures() {
  return (
    <section className="dark:bg-black bg-white dark:text-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Features
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg dark:border-neutral-700 border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
              <p className="dark:text-neutral-300 text-neutral-700 mt-2 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
