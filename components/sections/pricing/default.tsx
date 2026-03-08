"use client";

import { User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingColumn } from "../../ui/pricing-column";
import { Section } from "../../ui/section";
import { useEffect } from "react"; 
import { initPaddle } from "@/lib/paddle/checkout";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  className?: string;
}

export default function Pricing({
  title = "Test Your Trading Strategy, Properly",
  description = "Access professional-grade market simulation and realistic order flow visualization. Choose a plan that fits your growth and secure upfront access.",
  className = "",
}: PricingProps) {

  useEffect(() => {
    initPaddle();
  }, []);
  
  const plans = [
    {
      name: "Monthly",
      icon: <User className="size-4" />,
      description: "Standard Access for flexible testing.",
      price: 19.99,
      // REPLACE with your Paddle Price ID for the Monthly plan
      priceId: "pri_01kk6wm7mzvsgt42s0tghm9v4k",
      priceNote: "Billed monthly. Cancel anytime.",
      cta: {
        variant: "default" as const,
        label: "Start Monthly",
      },
      features: [
        "Real-time market simulation",
        "Professional analytics",
        "Order flow visualisation",
        "Standard support",
      ],
    },
    {
      name: "6-Month Pro",
      icon: <Users className="size-4" />,
      description: "Best Value for Growth",
      price: 99.99,
      // REPLACE with your Paddle Price ID for the 6-Month plan
      priceId: "pri_01kk6wnpa1vp7mrz27sjscr12c",
      originalPrice: 119.94,
      promotionText: "SAVE 15%",
      priceNote: "Billed upfront for 6 months.",
      cta: {
        variant: "glow" as const, // Changed to glow to highlight the "Best Value"
        label: "Secure 6-Month Deal",
      },
      features: [
        "Everything in Monthly",
        "Priority strategy support",
        "Advanced risk metrics",
        "15% Discount included",
      ],
      variant: "glow-brand" as const,
    },
    {
      name: "Annual Mastery",
      icon: <Users className="size-4" />,
      description: "Ultimate Trading Setup",
      price: 179.99,
      // REPLACE with your Paddle Price ID for the Annual plan
      priceId: "pri_01kk6wq3xef4z2t77e144xs5s9",
      originalPrice: 239.88,
      promotionText: "SAVE 25%",
      priceNote: "Billed upfront. Best value.",
      cta: {
        variant: "default" as const,
        label: "Get Annual Access",
      },
      features: [
        "Everything in Pro",
        "Early access to new tools",
        "Downloadable trade reports",
        "25% Discount (3 months free)",
      ],
    },
  ];

  return (
    <Section className={cn(className)} id="pricing">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:gap-8">
          {plans.map((plan) => (
            <PricingColumn
              key={plan.name}
              {...plan}
              // Ensure we pass the variant to the column
              variant={plan.variant ?? "default"}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}