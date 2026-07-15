"use client";
import React from "react";

const features = [
  {
    title: "Built with Next.js",
    description:
      "Leverages Next.js for routing, SSR/SSG, and fast client navigation to deliver a production-ready React experience.",
  },
  {
    title: "TypeScript First",
    description:
      "Written in TypeScript for safer refactoring, clear types, and improved developer ergonomics across the codebase.",
  },
  {
    title: "Tailwind CSS Styling",
    description:
      "Styled with Tailwind CSS utility classes for rapid UI development, consistent design, and easy theming.",
  },
  {
    title: "Server & Client Components",
    description:
      "Supports Next.js server and client components to optimize rendering, reduce bundle size, and simplify data fetching.",
  },
  {
    title: "API Routes & Serverless",
    description:
      "Includes example API routes for server-side logic and serverless function patterns for auth and payments.",
  },
  {
    title: "Auth-Ready Boilerplate",
    description:
      "Prewired authentication flows and patterns to plug in providers, tokens, and secure session handling.",
  },
  {
    title: "Responsive & Accessible",
    description:
      "Mobile-first responsive layouts with accessibility best practices to reach a broad set of users.",
  },
  {
    title: "Performance & SEO Optimized",
    description:
      "Built-in optimizations like image handling, code-splitting, meta tags, and structured data for SEO and speed.",
  },
  {
    title: "Component-Driven Structure",
    description:
      "Modular, reusable components and clear folder conventions to accelerate feature development and maintenance.",
  },
  // {
  //   title: "Deployable & CI-Friendly",
  //   description:
  //     "Ready for deployment on platforms like Vercel with example CI/CD workflows for automated builds and tests.",
  // },
];

export default function PolarAuthFeatures() {
  return (
    <section className="dark:bg-black bg-white dark:text-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, idx) => (
            <div key={idx} className="p-4 border rounded-lg dark:border-neutral-800 border-gray-200 hover:shadow-lg transition-shadow duration-300">
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
