"use client";

import { CircleCheckBig } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface PricingColumnProps {
  name: string;
  price: number;
  priceId: string; // Ensure this is here
  description: string;
  features: string[];
  priceNote: string;
  variant?: "default" | "glow" | "glow-brand";
  cta: { label: string; variant: "default" | "glow" };
  originalPrice?: number;
  promotionText?: string;
  icon?: React.ReactNode;
}

export function PricingColumn({ name, price, priceId, description, features, priceNote, variant, cta, originalPrice, promotionText, icon }: PricingColumnProps) {
  const handlePurchase = () => {
    if (typeof window !== "undefined" && (window as any).Paddle) {
      (window as any).Paddle.Checkout.open({
        items: [{ priceId: priceId, quantity: 1 }],
        settings: { displayMode: "overlay", theme: "dark" }
      });
    }
  };

  return (
    <div className={cn("relative flex flex-col gap-6 rounded-2xl p-8 shadow-xl border bg-card")}>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold">£{price}</span>
        <span className="text-sm text-muted-foreground">/period</span>
      </div>
      <Button variant={cta.variant} onClick={handlePurchase} className="w-full">
        {cta.label}
      </Button>
      <ul className="space-y-2 text-sm">
        {features.map(f => (
          <li key={f} className="flex gap-2"><CircleCheckBig className="size-4 text-primary" />{f}</li>
        ))}
      </ul>
    </div>
  );
}