import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import { Button as B2 } from "../ui/moving-border"
import { Github } from 'lucide-react';
export default function Templates() {
  return (
    <div className='dark:bg-black bg-white overflow-hidden space-y-10'>
      <motion.section
        className="relative  border-t border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-14 mb-12"
      >
        <div className="lg:mx-auto  px-0 md:px-4 lg:px-6">
          <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

            <div className="max-w-3xl space-y-2">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold sm:text-4xl">Polar Auth</h1>
                <B2
                  borderRadius="0.5rem"
                  className="bg-white px-2 py-1 rounded-sm dark:bg-black font-bold text-black dark:text-white border border-neutral-200 dark:border-neutral-800"
                >
                  Premium
                </B2>
              </div>
              {/* <div className='dark:text-white  text-black'>
                <h1 className='text-sm'>Get Access with -
                  <span className='font-bold '>

                    $29
                  </span>
                </h1>
              </div> */}
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                PolarAuth is a modern boilerplate packed with seamless authentication and integrated Polar payment gateway, so you can focus on your product, not boilerplate setup.              </p>
              <div className="flex space-x-2 ">

                {/* <Link
                  href={"#"}
                  className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md">
                  Get Access - $29
                </Link> */}
                <Button
                  asChild
                  className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md "
                >
                  <Link href="/templates/polar-auth">View Template</Link>
                </Button>
              </div>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/polar-auth.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/polar-auth-1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/polar-auth-5.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={500}
                    className=" aspect-[16/10] border border-neutral-200 dark:border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative  border-t border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto  max-w-8xl px-6">
          <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

            <div className="max-w-3xl space-y-4">

              <div className="flex flex-col  space-x-4">
                <h1 className="text-xl font-semibold sm:text-4xl">Cortex</h1>
                <div className="flex items-center  mt-2">
                  <Link
                    href={"https://github.com/Dhruv7Tripathi/cortex"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Github size={18} />
                    <span className="font-bold">Open Source</span>
                  </Link>
                </div>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                Cortex is a premium, feature-rich template designed specifically for tech startups. Built with Next.js and Tailwind CSS, A modern design system to accelerate your product launch.
              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/cortex">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/cortex.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/cortex1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/cortex3.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}

                className="group relative rounded-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={500}
                    className=" aspect-[16/10] border border-neutral-100 dark:border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative  border-t border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto  max-w-8xl px-6">
          <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Linear</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/linear-template"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                Linear – A modern, sleek, and responsive landing page template built with Next.js and Tailwind CSS. Perfect for startups and SaaS products.              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/linear-template">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/linear.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/linear1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/linear5.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}

                className="group relative rounded-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={500}
                    className=" aspect-[16/10] border border-neutral-100 dark:border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative border-b border-t border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto  max-w-8xl px-6">
          <div className=" grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">

            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Bloggify</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/bloggify-template"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                Bloggify is a modern, minimalistic blog template designed for startups and creators. Built with Next.js and Tailwind CSS, it features elegant layouts, and easy customization.
              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/bloggify-template">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/bloggify.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/bloggify1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/bloggify2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}

                className="group relative rounded-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={500}
                    className=" aspect-[16/10] border border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative text-neutral-900 dark:text-neutral-50 border-b border-neutral-200 dark:border-neutral-800 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            {/* Left Text Block */}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">AI Agent</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/AI-agentlayrdui"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                The AI Agent Template empowers you to launch intelligent, interactive web experiences with ease. Built for modern startups, it features a sleek design,  and robust integration options.
              </p>
              <Button
                asChild
                className="pointer-events-auto  mt-3 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/ai-agent">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/aiagent.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/aiagent1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/aiagent2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm  backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] rounded-sm border border-neutral-900 transition-transform duration-300 "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative text-neutral-900 dark:text-neutral-50 border-b border-neutral-200 dark:border-neutral-800 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            {/* Left Text Block */}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Syntax</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/LayrdUISyntax"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[13px]">
                Syntax Template is a modern SaaS starter kit built with Next.js and Tailwind CSS. It features a clean, responsive design,  and customizable components to help you launch your SaaS product quickly.
              </p>
              <Button
                asChild
                className="pointer-events-auto  mt-3 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/saas-template">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Syntax template screenshot",
                src: "/products/Syntax.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/Syntax1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/Syntax2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm  backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] rounded-sm border border-neutral-900 transition-transform duration-300 "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* <motion.section
        className="relative text-neutral-900 dark:text-neutral-50 border-b border-neutral-200 dark:border-neutral-800 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Quizzer</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/quizzer-template"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%] text-[15px]">
                Quizzer Template is a modern, interactive quiz platform for startups and educators.
                It features a clean design, made with Tailwind CSS and Next.js.
              </p>
              <Button
                asChild
                className="pointer-events-auto  mt-3 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg "
              >
                <Link href="/templates/quizzer-template">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/quizzer.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/quizzer1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/quizzer2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm  backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] rounded-sm border border-neutral-900 transition-transform duration-300 "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}


      <motion.section
        className="relative text-neutral-900 border-b dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Pheonix</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/pheonix-portfolio"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%]  text-[15px]">
                Pheonix Portfolio is a simple, modern portfolio template built with Tailwind CSS and TypeScript on Next.js.

              </p>
              <div className="flex space-x-2 ">
                <Button
                  asChild
                  className="pointer-events-auto mt-2 hover:bg-background border-1 border-neutral-200 dark:border-neutral-700 rounded-sm bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-md "
                >
                  <Link href="/templates/pheonix-portfolio">View Template</Link>
                </Button>
              </div>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/pheonix.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/pheonix1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/pheonix2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] border border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="relative text-neutral-900 border-b dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Dhruv</h1>
              <div className="flex items-center  mt-2">
                <Link
                  href={"https://github.com/Dhruv7Tripathi/DhruvTripathi"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github size={18} />
                  <span className="font-bold">Open Source</span>
                </Link>
              </div>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%]  text-[13px]">
                Dhruv Portfolio is a sleek, modern portfolio template. Built with Next.js and Tailwind CSS, it offers a clean layout,  and easy customization to showcase your work and skills effectively.
              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 rounded-sm border-1 border-neutral-200 dark:border-neutral-700 bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg hover:bg-background "
              >
                <Link href="/templates/dhruv-portfolio">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/dhruv.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/dhruv-2.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/dhruv-3.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] border border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* <motion.section
        className="relative text-neutral-900 border-b dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Simple Portfolio</h1>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%]  text-[15px]">
                A simple, clean, modern and minimalistic blog template for startups.
                Filled with microinteractions to keep your users engaged.
              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 rounded-sm border-1 border-neutral-200 dark:border-neutral-700 bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg hover:bg-background "
              >
                <Link href="/templates/simple-portfolio">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/animatedportfolio.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/animatedportfolio1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/animatedportfolio2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] border border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}
      {/* <motion.section
        className="relative text-neutral-900  dark:text-neutral-50 py-14 mb-12"
      >
        <div className="mx-auto max-w-8xl px-6">
          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-4">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-xl font-semibold sm:text-4xl">Sidefolio</h1>
              <p className="text-neutral-800 dark:text-neutral-300 max-w-[80%]  text-[15px]">
                A simple, clean, modern and minimalistic blog template for startups.
                Filled with microinteractions to keep your users engaged.
              </p>
              <Button
                asChild
                className="pointer-events-auto mt-2 rounded-sm border-1 border-neutral-200 dark:border-neutral-700 bg-background px-5 py-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 shadow-lg hover:bg-background "
              >
                <Link href="/templates/sidefolio">View Template</Link>
              </Button>
            </div>
            {[
              {
                alt: "Deployment dashboard screenshot",
                src: "/products/sidefolio.png",
              },
              {
                alt: "Integrations and analytics screenshot",
                src: "/products/sidefolio1.png",
              },
              {
                alt: "Pricing page screenshot",
                src: "/products/sidefolio2.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative rounded-sm backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={560}
                    height={320}
                    className="w-full aspect-[16/10] border border-neutral-900 rounded-sm transition-transform duration-300 ease-out "
                    priority={i === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

    </div>
  )
}

