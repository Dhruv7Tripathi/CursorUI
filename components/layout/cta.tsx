import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className="bg-neutral-100 border-neutral-100 dark:border-neutral-900 border-dashed border w-full rounded-lg dark:bg-neutral-900">
      <div className="flex py-8 sm:py-10 md:py-12 shadow-xs max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2 font-bold bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent leading-tight">
          Transform Your Vision Into a Stunning Website That Gets Noticed.
        </h1>

        <p className="text-neutral-800 dark:text-neutral-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl px-2">
          Stand out from the crowd with a website that captivates, converts, and grows your brand.
          Partner with us for a digital experience that&apos;s sleek, fast, and unforgettable—so you can focus on what you do best.
        </p>

        <Link
          href="https://twitter.com/dhruvtripathi77"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-36 sm:w-40 md:w-44 mt-4 sm:mt-6 flex items-center justify-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-600 bg-neutral-50 text-black dark:bg-neutral-950 px-4 sm:px-5 py-2.5 sm:py-3 text-sm md:text-base font-semibold dark:text-white shadow-[inset_0px_0px_7px_1px_#535353] transition-all duration-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
        >
          <TextGlitch text="Contact me" />
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
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}