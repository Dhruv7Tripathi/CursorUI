'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-white dark:bg-zinc-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">

      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.04)_0%,transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.04)_0%,transparent_40%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="border-b border-neutral-200/50 dark:border-white/5 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Legal Agreement
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm text-neutral-500">
            Last updated: August 3, 2026. Please read these terms carefully before purchasing or using OrbitUI.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              1. Grant of License
            </h2>
            <p>
              By purchasing the OrbitUI component library for the one-time fee of $15 USD, OrbitUI grants you a non-exclusive, non-transferable, worldwide commercial license to use, customize, and integrate the components into your projects.
            </p>
            <p className="font-semibold text-neutral-700 dark:text-neutral-300">
              Under this license, you CAN:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>Use the components to build unlimited commercial websites, client projects, or personal portfolios.</li>
              <li>Modify, compile, and structure the code blocks to fit your application's requirements.</li>
            </ul>
            <p className="font-semibold text-neutral-700 dark:text-neutral-300 mt-2">
              Under this license, you CANNOT:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>Redistribute, sell, lease, sub-license, or share the source code components as standalone templates, UI kits, or component files.</li>
              <li>Incorporate OrbitUI components in site builders, CMS templates, or themes designed for redistribution/resale to third-parties.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              2. Fees and Purchase
            </h2>
            <p>
              Access to OrbitUI requires a one-time payment of $15 USD. All payments are processed securely through our authorized payment processors (such as Stripe). Once payment is approved, your access to the component directory and documentation is unlocked immediately.
            </p>
            <p>
              Due to the digital nature of our product (immediate access to downloadable source code), we do not offer refunds once components have been accessed or downloaded, unless required by local consumer laws.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              3. GSAP & Third-Party Dependencies
            </h2>
            <p>
              OrbitUI components incorporate animations created with external libraries, including GreenSock Animation Platform (GSAP).
            </p>
            <p>
              While OrbitUI provides the implementation code structure, you are responsible for adhering to the licensing terms of GSAP. Certain commercial uses of GSAP animations (e.g., in products where multiple customers are charged for access) may require a separate GSAP Commercial License.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              4. Disclaimer of Warranties
            </h2>
            <p>
              OrbitUI components are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to compatibility with future releases of Next.js, React, Tailwind CSS, or third-party web browsers.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              5. Modification of Terms
            </h2>
            <p>
              We reserve the right to modify these terms and pricing at any time. Any changes will be posted on this page with an updated modification date. Your continued use of the components following updates constitutes acceptance of the new terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}