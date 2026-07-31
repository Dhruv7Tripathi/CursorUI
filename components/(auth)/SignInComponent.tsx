"use client"
import { signIn } from "next-auth/react";
import * as React from "react"
import { Button } from "../ui/button";

import { CheckCircle2 } from "lucide-react"
const features = [
  "- Many premium, composable components with built-in animations and responsive styles.",
  "- Lightweight, themeable Tailwind-first approach for easy customization.",
  "- Designed for developers: clean APIs, TypeScript support, and production-ready code patterns.",
  "- Lifetime access model with free updates: buy once and receive new components and fixes over time.",
]
const SignIn = () => {

  return (
    <div className="mt-16 mb-16 flex flex-col items-center justify-center bg-white dark:bg-black relative overflow-hidden w-full rounded-sm">
      <div className="relative z-10 w-full max-w-sm rounded-sm bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-[#ffffff10] dark:to-[#121212] backdrop-blur-sm  shadow-2xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">
          OrbitUI Sign In
        </h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-200">
          Please sign in to continue and unlock all premium OrbitUI templates.
        </p>
        {/* Form */}
        <div className="flex flex-col w-full gap-4">
          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-800 dark:text-neutral-200 text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <hr className="opacity-10" />
          <div>
            {/* Google Sign In */}
            <Button
              type="button"
              className="w-full bg-neutral-300 dark:bg-white/10 text-black dark:text-white font-medium px-5 py-3 rounded-sm shadow hover:bg-white/20 transition mb-3  text-sm"
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </Button>
            <div className="w-full text-center mt-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignIn };