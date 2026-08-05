import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import PageContentSidebar from "@/components/layout/page-content-sidebar";
import PrimaryItems from "@/components/landingpage/primaryItems";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section suppressContentEditableWarning={true}>
      <Navbar />
      <div className="items-start dark:bg-black bg-white  gap-3 px-2 md:px-6 lg:flex lg:pr-0 lg:pl-8">
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r border-neutral-200/60 pb-3 lg:sticky lg:block lg:w-60 lg:overflow-hidden dark:border-neutral-800/60">
          <ScrollArea className="h-full w-full pt-8 pb-2">
            <PrimaryItems />
          </ScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto px-2 pt-4 pb-8 lg:pr-6 xl:pr-10">
          {children}
        </main>
        <aside className="top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-l border-neutral-200/60 pb-3 lg:sticky lg:w-60 lg:overflow-hidden xl:block dark:border-neutral-800/60">
          <PageContentSidebar />
        </aside>
      </div>
      <Footer />
    </section>
  );
}