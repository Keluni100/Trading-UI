import { User, Users } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
 title = "Test Your Trading Strategy, Properly",
description = "Access comprehensive market simulation, professional-grade analytics, and realistic order flow visualisation without recurring fees. Simple, transparent access.",
plans = [
  
    {
      name: "Pro",
      icon: <User className="size-4" />,
      description: "For All",
      price: 49,
      priceNote: "Monthly access. Free updates. Subcription based.",
      cta: {
        variant: "default",
        label: "Get all-access",
        href: siteConfig.pricing.pro,
      },
      features: [
        `${siteConfig.stats.templates} templates`,
        `${siteConfig.stats.sections} blocks and sections`,
        `${siteConfig.stats.illustrations} illustrations`,
        `${siteConfig.stats.animations} custom animations`,
      ],
      variant: "glow-brand",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="flex justify-center">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                originalPrice={plan.originalPrice}
                promotionText={plan.promotionText}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
