import React from 'react'
import Link from 'next/link'
const Cta = () => {
  return (
    <div className="py-18 ml-8 mr-8 px-6 mb-20 border  border-dashed sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-xs  max-w-8xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Try our free templates to kickstart your next project.
        </h1>

        <p className="text-neutral-400 text-base md:text-lg">
          Explore a curated collection of ready-to-use UI templates designed for modern web projects.
          <br />
          Save time and focus on building features that matter, not reinventing the basics.
        </p>

        <Link
          href="/templates"
          className="group w-40 mt-6 flex items-center justify-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 text-black dark:bg-neutral-950 px-5 py-3 text-sm font-semibold dark:text-white shadow-[inset_0px_0px_7px_1px_#535353] transition-all duration-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 md:text-[1rem]"
        >
          <TextGlitch text="Start Building" />
        </Link>
      </div>
    </div>
  )
}

export default Cta

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden group">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0  font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}
