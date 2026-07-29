"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
interface PricingSectionProps {
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSection({
  tiers,
  frequencies,
}: PricingSectionProps) {
  const [selectedFrequency] = React.useState(frequencies[0])

  return (
    <section className="flex flex-col gap-10 py-16 ml-8 mr-8">
      <div className="grid  gap-6 justify-center items-center sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  )
}