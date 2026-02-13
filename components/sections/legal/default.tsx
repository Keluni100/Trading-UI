import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";

interface LegalProps {
  title: string;
  lastUpdated: string;
  content: ReactNode;
}

export default function LegalSection({ title, lastUpdated, content }: LegalProps) {
  return (
    <Section className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground">
            Last Updated: {lastUpdated}
          </p>
        </div>
        
        {/* Content - using 'prose' for nice typography automatically */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
          {content}
        </div>
      </div>
    </Section>
  );
}