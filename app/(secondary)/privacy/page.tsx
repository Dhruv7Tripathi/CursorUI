"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24 bg-white dark:bg-zinc-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.04)_0%,transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.04)_0%,transparent_40%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="border-b border-neutral-200/50 dark:border-white/5 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Data Privacy
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: August 17, 2026. Your privacy and trust are important
            to us.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              1. Information We Collect
            </h2>

            <p>
              CursorXUI is a free and open-source UI component library. We
              generally do not require you to create an account or provide
              personal information to use the library or access its source
              code.
            </p>

            <p>
              Depending on how you interact with the CursorXUI website, we may
              receive limited information such as:
            </p>

            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>
                Information you voluntarily provide when contacting us or
                submitting feedback.
              </li>
              <li>
                Basic technical information that may be automatically
                collected by hosting or infrastructure providers.
              </li>
              <li>
                Information associated with third-party services you choose to
                use while interacting with the project.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              2. How We Use Your Information
            </h2>

            <p>
              Any information voluntarily provided to us is used only when
              necessary to operate, maintain, improve, or support CursorXUI.
            </p>

            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>Responding to questions, feedback, or support requests.</li>
              <li>Improving the CursorXUI website and documentation.</li>
              <li>Identifying and resolving technical issues.</li>
              <li>
                Communicating important updates related to the project when
                necessary.
              </li>
            </ul>

            <p>
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              3. Cookies and Local Storage
            </h2>

            <p>
              CursorXUI may use essential browser technologies such as cookies
              or local storage when necessary for website functionality.
            </p>

            <p>
              For example, local storage may be used to remember preferences
              such as light or dark mode. This information is stored locally
              in your browser and is not used by CursorXUI to personally
              identify you.
            </p>

            <p>
              We do not intentionally use cookies for behavioral advertising
              or selling personal information.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              4. Third-Party Services
            </h2>

            <p>
              CursorXUI may rely on third-party services for hosting,
              analytics, deployment, documentation, source-code hosting, or
              other infrastructure.
            </p>

            <p>
              These services may process limited technical or usage
              information according to their own privacy policies and terms.
              We recommend reviewing the privacy policies of third-party
              services you interact with.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              5. Data Security
            </h2>

            <p>
              We take reasonable measures to protect information that is
              voluntarily provided to us. However, no method of transmission or
              electronic storage can be guaranteed to be completely secure.
            </p>

            <p>
              CursorXUI is an open-source project, and its publicly available
              source code can be inspected by anyone.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              6. Children's Privacy
            </h2>

            <p>
              CursorXUI is a developer-focused open-source project and does not
              knowingly collect personal information from children for
              commercial purposes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              7. Your Privacy Choices
            </h2>

            <p>
              If you have voluntarily provided personal information to us, you
              may contact us to request access, correction, or deletion of that
              information, where applicable.
            </p>

            <p>
              You can also manage cookies and local storage through your
              browser settings.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              8. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time as CursorXUI
              evolves or as our practices change.
            </p>

            <p>
              Any changes will be published on this page with an updated
              revision date. We encourage you to review this page periodically
              for the latest information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              9. Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy or would like to
              request deletion of information you have voluntarily provided,
              you can contact us at:
            </p>

            <p className="font-mono text-indigo-600 dark:text-indigo-400">
              support@cursorxui.dev
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}