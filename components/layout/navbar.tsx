import React from "react";
import { Themetoggle } from "@/components/ui/themetoggle";
import Link from "next/link";
import { navItems } from "@/contants";
import DocumentSearch from "./search";
import AnchorNav from "./anchor-nav";
import { SiGithub, SiX } from "react-icons/si";
import NavbarDrawer from "./navbar-drawer";
// import { MyIcon } from "../icons/logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/5 backdrop-blur-lg dark:border-neutral-800/60 dark:bg-neutral-800/5">
      <div className="px-2 md:pr-5 md:pl-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2">
              {/* <MyIcon className="h-5 w-5 text-black dark:text-white" /> */}
              <span className="text-xl font-bold">CursorXUI</span>
            </Link>

            <div className="hidden items-center space-x-6 lg:flex">
              {navItems.map((item) => (
                <AnchorNav
                  key={item.name + item.href}
                  absolute
                  href={item.href}
                >
                  {item.name}
                </AnchorNav>
              ))}
            </div>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <DocumentSearch />
            <div className="flex items-center gap-0.5">
              <SiGithub className="h-5 w-5" />
              <SiX className="h-5 w-5" />
              {/* <Themetoggle /> */}
            </div>
          </div>
          <div className="flex items-center space-x-1 lg:hidden">
            <SiGithub className="h-5 w-5" />
            <Themetoggle />
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;