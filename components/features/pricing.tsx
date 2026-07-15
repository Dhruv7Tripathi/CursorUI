"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";

interface Plan {
  id: string;
  name: string;
  info: string;
  price: {
    monthly?: string;
    oneTime?: string;
    upcoming?: boolean;
  };
  features: {
    id: string;
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
}

interface PricingSectionProps extends React.ComponentProps<"div"> {
  plans: Plan[];
  heading: string;
  description?: string;
}

export function PricingSection({
  plans,
  heading,
  description,
  ...props
}: PricingSectionProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center space-y-5 p-4",
        props.className
      )}
      {...props}
    >
      <div className="mx-auto max-w-xl space-y-2">
        <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="text-muted-foreground text-center text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

type PricingCardProps = {
  plan: Plan;
};

export function PricingCard({ plan }: PricingCardProps) {
  const isPremium = !!plan.highlighted;
  const showOneTime = !!plan.price.oneTime;
  const comingSoon = !!plan.price.upcoming;

  return (
    <div
      className={cn(
        "relative mt-4 flex w-full overflow-hidden rounded-2xl border transition hover:shadow-lg",
        isPremium && "bg-white dark:bg-black"
      )}
    >
      {isPremium && (
        <BorderTrail
          className="bg-primary"
          size={90}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      )}

      <div className="relative z-10 flex w-full flex-col">
        <div
          className={cn(
            "rounded-t-2xl border-b bg-muted/20 p-4",
            isPremium && "bg-muted/30"
          )}
        >
          <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
            {isPremium && (
              <p className="bg-background flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs">
                <StarIcon className="h-3 w-3 fill-current" />
                Popular
              </p>
            )}
          </div>

          <div className="text-lg font-semibold">{plan.name}</div>
          <p className="text-muted-foreground text-sm">{plan.info}</p>

          <h3 className="mt-3 flex items-end gap-1">
            {comingSoon ? (
              <span className="text-xl font-medium text-muted-foreground">
                Coming Soon
              </span>
            ) : showOneTime ? (
              <>
                <span className="text-3xl font-bold">
                  <CountUpDollarAmount value={plan.price.oneTime} />
                </span>
                <span className="text-sm text-muted-foreground">
                  / one-time
                </span>
              </>
            ) : (
              <>
                <span className="text-3xl font-bold">
                  <CountUpDollarAmount value={plan.price.monthly} />
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </>
            )}
          </h3>
        </div>

        <div
          className={cn(
            "text-muted-foreground space-y-4 px-5 py-6 text-sm",
            isPremium && "bg-muted/10"
          )}
        >
          {plan.features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <CheckCircleIcon className="text-foreground h-4 w-4" />
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <p
                      className={cn(
                        feature.tooltip && "cursor-pointer border-b border-dashed"
                      )}
                    >
                      {feature.text}
                    </p>
                  </TooltipTrigger>
                  {feature.tooltip && (
                    <TooltipContent>
                      <p>{feature.tooltip}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-auto w-full rounded-b-2xl border-t p-3",
            isPremium && "bg-muted/30"
          )}
        >
          <Button
            className="w-full"
            variant={isPremium ? "default" : "outline"}
            asChild
          >
            <Link href={plan.btn.href}>{plan.btn.text}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

type CountUpDollarAmountProps = {
  value?: string;
  duration?: number;
};

function CountUpDollarAmount({
  value,
  duration = 1800,
}: CountUpDollarAmountProps) {
  const target = Number(value);
  const shouldAnimate = Number.isFinite(target) && target > 0;
  const [displayValue, setDisplayValue] = React.useState(
    shouldAnimate ? 0 : target
  );
  const [isAnimating, setIsAnimating] = React.useState(shouldAnimate);

  React.useEffect(() => {
    if (!shouldAnimate || !isAnimating) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const updateValue = (timestamp: number) => {
      startTime ??= timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(Math.round(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, shouldAnimate, target, isAnimating]);

  if (!Number.isFinite(target)) {
    return <>${value}</>;
  }

  return <>${displayValue}</>;
}

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: "linear",
  };

  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:exclude] [mask-image:linear-gradient(#000,#000),linear-gradient(#000,#000)] [-webkit-mask-clip:padding-box,border-box] [-webkit-mask-composite:xor]">
      <motion.div
        className={cn("absolute aspect-square", className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          background: `conic-gradient(
            from 90deg at 50% 50%,
            transparent 0deg,
            transparent 200deg,
            theme('colors.neutral.400') 270deg,
            theme('colors.neutral.200') 310deg,
            white 360deg
          )`,
          ...style,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
