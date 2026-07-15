import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ComponentPackCardProps {
  id: string;
  title: string;
  description: string;
  componentCount: number;
  previewImage: string;
  href: string;
}

export function ComponentPackCard({
  title,
  description,
  previewImage,
  href,
}: ComponentPackCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="dark:bg-neutral-950 bg-neutral-50 border border-neutral-200 dark:border-neutral-900 overflow-hidden rounded-lg duration-300">
        <div className="relative h-48 w-full group">
          <Image
            src={previewImage || "/placeholder.svg"}
            alt={`${title} preview`}
            height={192}
            width={484}
            className="object-cover aspect-[2/1] p-2 rounded-xl grayscale group-hover:grayscale-0 border-b border-black object-top transition-all duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-black dark:text-white transition-colors">
              {title}
            </h3>
          </div>
          <p className="dark:text-neutral-300 text-neutral-700 text-sm leading-relaxed">{description}</p>
        </div>
      </Card>
    </Link>
  );
}
