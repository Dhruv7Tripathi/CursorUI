import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { faqData } from "@/contants"

export default function FAQ() {
  return (
    <div className="min-h-screen border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black">
      {/* FAQ Button and Header */}
      <div className="px-4 lg:mx-0 md:mx-auto sm:px-3 md:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 md:pt-10">
        <div className="mb-6 sm:mb-8">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <HelpCircle className="size-4" />
            FAQ
          </Button>
        </div>

        <div className="mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4 text-balance">
            Everything You Need to Know
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl leading-relaxed">
            Looking for quick answers? Check out our{" "}
            <span className="text-foreground underline cursor-pointer">FAQ section</span>.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 sm:px-6 mb-3 sm:mb-4 last:mb-0"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium hover:no-underline py-4 sm:py-5 md:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}