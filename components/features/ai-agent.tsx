"use client";
import React from "react";

const features = [
  {
    title: "Built with Next.js Tailwind CSS and framer motion",
    description:
      "A well structured template that is super easy to customize and play with.",
  },
  {
    title: "Modern, Minimal and Clean Design",
    description:
      "A modern, minimal and clean design that is tastefully filled with microinteractions to keep your users engaged.",
  },
  {
    title: "SEO Optimized",
    description:
      "Optimized for search engines, with a focus on SEO best practices.",
  },
  {
    title: "Mobile responsive",
    description:
      "Ensures optimal viewing experience across all devices and screen sizes.",
  },
  {
    title: "Typescript",
    description:
      "Built with Typescript, ensuring type safety and autocomplete for your code.",
  },
  {
    title: "Easy to deploy and customize",
    description:
      "Easily deploy your website to Vercel, Netlify, or any other platform.",
  },
  {
    title: "Help and support",
    description:
      "We have a support chat where you can ask questions and get help from our community or our team directly.",
  },
  {
    title: "Future updates",
    description:
      "We regularly update the templates with new features and improvements.",
  },
];

export default function FeaturesSection() {
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
