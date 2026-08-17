"use client";

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

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: August 17, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              1. About CursorXUI
            </h2>

            <p>
              CursorXUI is a free and open-source UI component library designed
              to help developers build modern web applications using reusable
              and customizable components.
            </p>

            <p>
              CursorXUI is provided free of charge and is intended for both
              personal and commercial use, subject to the terms of the
              applicable open-source license.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              2. License and Usage
            </h2>

            <p>
              CursorXUI is open source. You are free to use, modify, and
              integrate the components into your own projects, including
              personal, educational, and commercial projects, subject to the
              terms of the project's open-source license.
            </p>

            <p className="font-semibold text-neutral-700 dark:text-neutral-300">
              You may:
            </p>

            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>Use CursorXUI components in personal projects.</li>
              <li>Use CursorXUI components in commercial projects.</li>
              <li>Modify and customize the source code.</li>
              <li>Integrate the components into your own applications.</li>
              <li>Use the components to create websites and web applications.</li>
              <li>Fork the project and contribute improvements.</li>
            </ul>

            <p className="font-semibold text-neutral-700 dark:text-neutral-300 mt-2">
              You may not:
            </p>

            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>
                Claim the original CursorXUI project or its original components
                as your own work.
              </li>
              <li>
                Remove or modify existing license or copyright notices when
                the applicable license requires them to remain.
              </li>
              <li>
                Use CursorXUI in a way that violates the applicable
                open-source license or applicable law.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              3. No Payment or Subscription
            </h2>

            <p>
              CursorXUI is completely free to use. There are no required
              purchases, subscriptions, or license fees for accessing or using
              the library.
            </p>

            <p>
              Because CursorXUI is provided free of charge, no refunds or
              payment-related claims apply to the library itself.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              4. Third-Party Dependencies
            </h2>

            <p>
              Some CursorXUI components may use third-party libraries,
              frameworks, fonts, icons, or other dependencies.
            </p>

            <p>
              These dependencies are governed by their respective licenses and
              terms. You are responsible for complying with the licenses of
              any third-party dependencies used in your project.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              5. Disclaimer of Warranties
            </h2>

            <p>
              CursorXUI is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, express or
              implied.
            </p>

            <p>
              We do not guarantee that the components will always be
              compatible with future versions of React, Next.js, Tailwind CSS,
              browsers, or other third-party technologies.
            </p>

            <p>
              You are responsible for testing and validating CursorXUI
              components before using them in production environments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              6. Contributions
            </h2>

            <p>
              CursorXUI welcomes contributions from the open-source community.
              By submitting code, documentation, issues, or other contributions
              to the project, you agree that your contributions may be used,
              modified, and distributed as part of CursorXUI under the
              project's applicable open-source license.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              7. Changes to These Terms
            </h2>

            <p>
              These terms may be updated from time to time to reflect changes
              to CursorXUI, its licensing, or applicable requirements.
            </p>

            <p>
              Any updates will be published on this page along with an updated
              modification date. Continued use of CursorXUI after changes are
              published constitutes acceptance of the updated terms, where
              applicable.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              8. Open Source License
            </h2>

            <p>
              CursorXUI is distributed under its designated open-source
              license. Please refer to the project&apos;s LICENSE file in the
              official repository for the complete and legally binding license
              terms.
            </p>

            <p>
              If there is any conflict between these general terms and the
              applicable open-source license, the terms of the open-source
              license will govern the use and distribution of the licensed
              software.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}