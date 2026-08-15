import React from "react";
import { Themetoggle } from "@/components/ui/themetoggle";
import Link from "next/link";
import { navItems } from "@/contants";
import DocumentSearch from "./search";
import AnchorNav from "./anchor-nav";
import { SiGithub, SiX } from "react-icons/si";
import NavbarDrawer from "./navbar-drawer";
import { Star } from "lucide-react";
// import { MyIcon } from "../icons/logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/5 backdrop-blur-lg dark:border-neutral-800/60 dark:bg-black">
      <div className="px-2 md:pr-5 md:pl-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-4">
              {/* <MyIcon className="h-5 w-5 text-black dark:text-white" /> */}
              <span className="text-xl sm:ml-0 md:ml-8 font-bold">CursorXUI</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <DocumentSearch />
            <div className="flex items-center gap-0.5">

              <Link
                href="https://github.com/dhruv7tripathi/CursorUI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-2.5 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-black sm:px-3 lg:px-4"
              >
                <SiGithub size={17} aria-hidden="true" />
                <span>Star</span>
                <Star size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              </Link>
              <Link
                href="https://x.com/dhruvtripathi77"
                target="_blank"
                rel="noreferrer"
                aria-label="OrbitXUI on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-white dark:hover:bg-black "
              >
                <SiX className="h-5 w-5" />
              </Link>
              {/* <span className="text-sm font-semibold" aria-hidden="true">𝕏</span> */}
              {/* <Themetoggle /> */}
            </div>
          </div>
          <div className="flex items-center space-x-1 lg:hidden">
            <Link
              href="https://github.com/dhruv7tripathi/CursorUI"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-2.5 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-black sm:px-3 lg:px-4"
            >
              <SiGithub size={17} aria-hidden="true" />
            </Link>
            <Themetoggle />
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;