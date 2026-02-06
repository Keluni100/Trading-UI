import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "What exactly is this trading simulator?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Our trading simulator is a professional-grade platform that replicates real market conditions using historical data, allowing you to test strategies, practice order flow analysis, and develop your trading skills without financial risk.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            It's designed for both novice traders looking to learn and experienced traders wanting to validate new strategies before deploying capital.
          </p>
        </>
      ),
    },
    {
      question: "Is this using real market data?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            The simulator generates realistic synthetic market data based on statistical models that replicate actual market behaviour, including spreads, volatility, volume patterns, and order flow dynamics across different market conditions.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            This approach ensures you get authentic trading experience while avoiding the regulatory complexities of distributing real market data.
          </p>
        </>
      ),
    },
    {
      question: "Can I test multiple trading strategies?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes, the platform supports multiple strategy types including order flow analysis, imbalance trading, volume profile strategies, and custom configurations with adjustable parameters for sensitivity, risk management, and execution logic.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Each strategy session is tracked separately with comprehensive performance metrics and grading to help you identify what works best for your trading style.
          </p>
        </>
      ),
    },
    {
      question: "Is there educational content or is this just a simulator?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            While primarily a hands-on simulator, the platform includes contextual learning through practical application. You learn by doing—executing trades, analysing order flow patterns, and seeing immediate feedback on your decisions.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            This experiential learning approach helps develop practical skills faster than theoretical study alone.
          </p>
        </>
      ),
    },
    {
      question: "How does the performance grading work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            The simulator evaluates your trading performance across multiple metrics including win rate, risk-adjusted returns, consistency, and trade management. After a minimum of 10 trades, you receive an A-F grade that helps benchmark your progress.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            This objective feedback system helps identify strengths and areas for improvement in your trading approach.
          </p>
        </>
      ),
    },
    {
      question: "What happens to my trading session data?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          All your trading sessions, strategies, and performance data are stored locally in your browser. We don't collect or store your trading activity on our servers. You can export your session history at any time for your own records or analysis.
        </p>
      ),
    },
    {
      question: "Is this suitable for complete beginners?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely. The simulator starts with basic concepts and allows you to progress at your own pace. The visual order flow display makes market dynamics intuitive, and you can begin with simple market orders before exploring more advanced order types and strategies.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Many users find they learn more quickly by experiencing market movements and their own trading decisions in real-time, without financial pressure.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
