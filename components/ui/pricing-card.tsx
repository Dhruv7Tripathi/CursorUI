"use client"

import * as React from "react"
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface PricingTier {
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  popular?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular

  return (
    <Card
      className={cn(
        "relative flex flex-col bg-background text-foreground overflow-hidden transition-all duration-300",
        // Small screens
        "gap-4 p-4 min-h-[400px]",
        // Medium screens  
        "sm:gap-6 sm:p-5 sm:min-h-[450px]",
        // Large screens
        "lg:gap-8 lg:p-6 lg:min-h-[500px]",
        // Highlighted/Popular styling
        isHighlighted && "border-2 border-primary shadow-lg scale-105",
        // isPopular && "ring-2 ring-primary/20"
      )}
    >

      {/* Plan Name */}
      <h2 className={cn(
        "flex items-center gap-3 font-medium capitalize",
        // Responsive text sizes
        "text-lg sm:text-xl lg:text-2xl",
        isPopular && "mt-2"
      )}>
        {tier.name}
      </h2>

      {/* Price Section */}
      <div className={cn(
        "relative",
        // Responsive height
        "h-10 sm:h-12 lg:h-14"
      )}>
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className={cn(
                "font-medium",
                // Responsive text sizes
                "text-2xl sm:text-3xl lg:text-4xl"
              )}
            />
            <p className={cn(
              "text-muted-foreground",
              // Responsive spacing and text
              "-mt-1 sm:-mt-2 text-xs sm:text-sm"
            )}>
              Per month/user
            </p>
          </>
        ) : (
          <h1 className={cn(
            "font-medium",
            // Responsive text sizes
            "text-2xl sm:text-3xl lg:text-4xl"
          )}>
            {price}
          </h1>
        )}
      </div>

      {/* Description and Features */}
      <div className="flex-1 space-y-3 sm:space-y-4">
        <h3 className={cn(
          "font-medium",
          // Responsive text sizes
          "text-sm sm:text-base lg:text-lg"
        )}>
          {tier.description}
        </h3>

        <ul className={cn(
          "space-y-2 sm:space-y-3",
          // Responsive max height with scroll on small screens if needed
          "max-h-48 sm:max-h-60 lg:max-h-none overflow-y-auto"
        )}>
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-start gap-2 font-medium",
                // Responsive text sizes
                "text-xs sm:text-sm lg:text-base",
                isHighlighted ? "text-background" : "text-muted-foreground"
              )}
            >
              <BadgeCheck className={cn(
                "flex-shrink-0 mt-0.5",
                // Responsive icon sizes
                "h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
              )} />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        variant={isHighlighted ? "default" : "secondary"}
        className={cn(
          "w-full transition-all duration-200",
          // Responsive padding and text
          "py-2 sm:py-3 lg:py-4 text-sm sm:text-base",
          isHighlighted && "bg-white text-black hover:bg-gray-100 shadow-md",

        )}
      >
        <span className="flex-1">{tier.cta}</span>
        <ArrowRight className={cn(
          "ml-2 transition-transform duration-200",
          // Responsive icon sizes
          "h-3 w-3 sm:h-4 sm:w-4"
        )} />
      </Button>
    </Card>
  )
}

// Optional: Container component for responsive grid layout
export function PricingGrid({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn(
      "grid gap-4 sm:gap-6 lg:gap-8",
      // Responsive grid columns
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      // Center single cards on larger screens
      "place-items-center sm:place-items-stretch",
      className
    )}>
      {children}
    </div>
  )
}