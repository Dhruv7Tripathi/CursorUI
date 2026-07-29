import { Card } from "@/components/ui/card"
import Image from "next/image"
import { SiGithub, SiNotion, SiFigma, SiLoom, SiBlack, SiZerodha } from "react-icons/si"
import { FaSmileBeam } from 'react-icons/fa';
import { Button } from "../ui/button";

interface Testimonial {
  id: string
  company: string
  logo: React.ReactNode
  quote: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    company: "Zerodha",
    logo: <SiZerodha />,
    quote:
      "Our team at Zerodha relies heavily on automation, and this app takes it to another level. It's like having a virtual assistant built right into my workflow.",
    author: {
      name: "Abdulsalam Abdulsalam",
      title: "Product Designer, Zerodha",
      avatar: "https://i.pinimg.com/736x/61/31/4d/61314d055f92ca874a0f1b50d517ee28.jpg",
    },
  },
  {
    id: "2",
    company: "Notion",
    logo: <SiNotion />,
    quote:
      "I especially love the seamless calendar integrations and advanced task management features keep everyone aligned and organized.",
    author: {
      name: "Emma Lee",
      title: "Product Manager, Notion",
      avatar: "https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg",
    },
  },
  {
    id: "3",
    company: "Slack",
    logo: <SiBlack />,
    quote:
      "We needed a productivity app that could grow with our team's evolving needs, this has been the perfect fit. The automation tools have saved us hours.",
    author: {
      name: "Ryan Chen",
      title: "Operations Lead, Slack",
      avatar: "https://i.pinimg.com/736x/df/0a/20/df0a2049a88366c1e84ee71e565143cb.jpg",
    },
  },
  {
    id: "4",
    company: "GitHub",
    logo: <SiGithub />,
    quote:
      "This platform has been invaluable for managing projects across distributed teams. Its integration with our existing tools makes setup easy.",
    author: {
      name: "Ryan Patel",
      title: "Engineering Manager, GitHub",
      avatar: "https://i.pinimg.com/736x/e3/cd/fd/e3cdfdbae6ac20cf5291d7e6c2e518bb.jpg",
    },
  },
  {
    id: "5",
    company: "Figma",
    logo: <SiFigma />,
    quote:
      "As a designer, I appreciate how intuitive and visually appealing this app is. It simplifies task management without sacrificing powerful features.",
    author: {
      name: "Carlos Diaz",
      title: "Design Lead, Figma",
      avatar: "https://i.pinimg.com/736x/98/d4/e3/98d4e3c28316349f3f7ccc976929e986.jpg",
    },
  },
  {
    id: "6",
    company: "Loom",
    logo: <SiLoom />,
    quote:
      "The smart reminders and automated scheduling keep our team focused and on track. Weve also found the collaborative features to be very helpful.",
    author: {
      name: "Matthew Kim",
      title: "Content Strategist, Loom",
      avatar: "https://i.pinimg.com/736x/6c/c5/19/6cc519f013abcf2ad6168a126ee877db.jpg",
    },
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black ">
      <div className="ml-8 mb-8 sm:mb-10 md:mb-12">
        <div className="mb-4">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <FaSmileBeam className="size-4" />
            lovin&apos; it
          </Button>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-balance">
          What industry experts are saying ?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Trusted by Professionals from Leading Tech Companies
        </p>
      </div>

      <div className="grid grid-cols-1 px-4 sm:px-6 lg:px-8  mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-sm border border-neutral-100 dark:border-neutral-900 sm:p-5 md:p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              {testimonial.logo}
              <span className="font-semibold text-foreground text-base sm:text-lg">{testimonial.company}</span>
            </div>

            <blockquote className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed sm:leading-relaxed md:leading-loose mb-4 sm:mb-5 md:mb-6 flex-grow">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-2 sm:gap-3 mt-auto">
              <Image
                src={testimonial.author.avatar || "/placeholder.svg"}
                alt={testimonial.author.name}
                width={32}
                height={32}
                className="rounded-full object-cover flex-shrink-0 sm:w-10 sm:h-10"
              />
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base">{testimonial.author.name}</div>
                <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">{testimonial.author.title}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}