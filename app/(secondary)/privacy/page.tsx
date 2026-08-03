'use client';

import React from 'react';

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
          <p className="text-sm text-neutral-500">
            Last updated: August 3, 2026. Your privacy and trust are extremely important to us.
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
              When you purchase a license for OrbitUI ($15 USD), we collect the following basic information:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>
                <strong className="text-neutral-700 dark:text-neutral-300">Email Address:</strong> Used to deliver the component files, license key, updates, and documentation access.
              </li>
              <li>
                <strong className="text-neutral-700 dark:text-neutral-300">Billing Information:</strong> All payment transactions are handled directly by our secure payment gateway (Stripe). We do not collect or store your payment card numbers on our servers.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              2. How We Use Your Information
            </h2>
            <p>
              We collect and process your email address only for the following legitimate business purposes:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1.5">
              <li>Processing your transaction and delivering product files.</li>
              <li>Validating your commercial license status when you request customer support.</li>
              <li>Sending occasional notifications about component updates or crucial bug fixes. You can unsubscribe from these alerts at any time.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              3. Cookies and Local Storage
            </h2>
            <p>
              We do not use tracking cookies for ad targeting. We use standard browser <strong className="text-neutral-700 dark:text-neutral-300">Local Storage</strong> to save your layout preference (light or dark mode) so that it persists across visits. This is purely functional and stores no personally identifiable data.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              4. Data Retention and Security
            </h2>
            <p>
              We implement secure data transmission protocols (HTTPS) to protect your information. Your email address and purchase history are kept in our secure licensing database for as long as your license is active, or until you request its deletion.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-100">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, or if you would like to request that we delete your email or license account data, please contact our support team at:
            </p>
            <p className="font-mono text-indigo-600 dark:text-indigo-400">
              support@orbitui.dev
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}