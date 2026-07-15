"use client";
import React from "react";

const features = [
  {
    title: "Personalized Portfolio Showcase",
    description:
      "Display your projects, skills, and achievements in a visually appealing and organized manner tailored for Dhruv's professional profile.",
  },
  {
    title: "Interactive Project Gallery",
    description:
      "Browse through an interactive gallery of Dhruv's work, complete with project details, images, and live links.",
  },
  {
    title: "Responsive and Modern Design",
    description:
      "Ensures Dhruv's portfolio looks great on all devices, featuring a clean and modern UI.",
  },
  {
    title: "Integrated Contact Section",
    description:
      "Easily reach out to Dhruv via a built-in contact form or direct social media links.",
  },
  {
    title: "Skills & Experience Timeline",
    description:
      "Showcase Dhruv's technical skills and professional journey with an easy-to-follow timeline.",
  },
  {
    title: "SEO Optimized for Visibility",
    description:
      "Optimized for search engines to help Dhruv's portfolio rank higher and attract more opportunities.",
  },
  {
    title: "Customizable Theme Options",
    description:
      "Easily update colors, fonts, and layout to match Dhruv's personal branding.",
  },
  {
    title: "Fast and Secure Deployment",
    description:
      "Deploy Dhruv's portfolio quickly and securely on platforms like Vercel or Netlify.",
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
