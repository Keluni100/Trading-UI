"use client";

import { User, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingColumn } from "../../ui/pricing-column";
import { Section } from "../../ui/section";
import { useEffect } from "react"; 
import { initPaddle, initPaddleCheckout } from "@/lib/paddle/checkout";

export default function Pricing({
  title = "Test Your Trading Strategy, Properly",
  description = "Access professional-grade market simulation and realistic order flow visualization.",
  className = "",
}) {

  useEffect(() => {
    initPaddle();
  }, []);

  const plans = [
    {
      name: "Monthly",
      icon: <User className="size-4" />,
      description: "Standard Access for flexible testing.",
      price: 19.99,
      priceId: "pri_01kk6wm7mzvsgt42s0tghm9v4k",
      priceNote: "Billed monthly.",
      cta: { variant: "default" as const, label: "Start Monthly" },
      features: ["Real-time simulation", "Analytics"],
    },
    {
      name: "6-Month Pro",
      icon: <Users className="size-4" />,
      description: "Best Value for Growth",
      price: 99.99,
      priceId: "pri_01kk6wnpa1vp7mrz27sjscr12c",
      priceNote: "Billed upfront.",
      cta: { variant: "glow" as const, label: "Secure 6-Month Deal" },
      features: ["Everything in Monthly", "Priority Support"],
      variant: "glow-brand" as const,
    },
    {
      name: "Annual Mastery",
      icon: <Users className="size-4" />,
      description: "Ultimate Trading Setup",
      price: 179.99,
      priceId: "pri_01kk6wq3xef4z2t77e144xs5s9",
      priceNote: "Billed upfront.",
      cta: { variant: "default" as const, label: "Get Annual Access" },
      features: ["Everything in Pro", "25% Discount"],
    },
  ];

  return (
    <Section className={cn(className)} id="pricing">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:gap-8">
          {plans.map((plan) => (
            <div key={plan.name} onClick={() => {
              console.log("Div Clicked for:", plan.name);
              initPaddleCheckout(plan.priceId);
            }}>
              <PricingColumn
                {...plan}
                variant={plan.variant ?? "default"}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}