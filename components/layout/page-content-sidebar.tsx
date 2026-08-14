"use client";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";
import { LuBug, LuLayoutDashboard, LuLightbulb } from "react-icons/lu";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const contributeItems = [
  {
    title: "Report an issue",
    href: "https://github.com/Dhruv7Tripathi/CursorUI/issues/new",
    icon: LuBug,
  },
  {
    title: "Request a feature",
    href: "https://github.com/Dhruv7Tripathi/CursorUI/issues/new",
    icon: LuLightbulb,
  },
  {
    title: "Request a new component",
    href: "https://github.com/Dhruv7Tripathi/CursorUI/issues/new?labels=component",
    icon: LuLayoutDashboard,
  },
];

const PageContentSidebar = () => {
  const pathname = usePathname();
  const activeId = useActiveSection();

  let navigationItems = [
    { title: "Preview", href: "#preview" },
    { title: "Installation", href: "#installation" },
  ];

  if (pathname === "/docs/introduction") {
    navigationItems = [
      { title: "Introduction", href: "#introduction" },
      { title: "Philosophy", href: "#philosophy" },
    ];
  }
  if (pathname === "/docs/installation") {
    navigationItems = [
      { title: "Installation", href: "#installation" },
      {
        title: "View Source",
        href: "",
      },
    ];
  }

  return (
    <div className="sticky top-16 h-[calc(100vh-4rem)] w-full">
      <ScrollArea className="h-full pr-4">
        <div className="flex flex-col gap-6 pt-6 pb-4 pl-3">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">On This Page</p>
              <div>
                {navigationItems.map((item, index) => {
                  const isActive = activeId === item.href.replace("#", "");
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className={`block pt-2 text-sm transition-colors duration-200 ${isActive
                          ? "font-semibold text-black dark:text-white"
                          : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                          }`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Contribute</p>
              <div>
                {contributeItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="flex items-center gap-3 pt-2 text-sm text-neutral-500 transition-colors duration-200 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PageContentSidebar;
