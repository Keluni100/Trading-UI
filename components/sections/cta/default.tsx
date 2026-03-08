import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import Link from "next/link"; // Changed to Next.js Link for faster transitions

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  // 1. Professional Trading Title
  title = "Ready to Master the Markets?",
  // 2. Pointing directly to your real pricing page
  buttons = [
    {
      href: "/pricing", 
      text: "View Plans & Pricing",
      variant: "default",
    },
    {
      href: "/terms", 
      text: "Learn More",
      variant: "outline",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-[500px] text-lg -mt-4">
          Join professional traders using our simulator to refine their edge without risking capital.
        </p>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
              >
                {/* 3. Changed <a> to <Link> for internal routing */}
                <Link href={button.href}>
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}