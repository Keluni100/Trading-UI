import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
title = "Professional Trading Infrastructure",
items = [
  {
    title: "Realistic Market Simulation",
    description: "Advanced order flow simulation with authentic bid/ask dynamics and market depth analysis",
    icon: <ScanFaceIcon className="size-5 stroke-1" />,
  },
  {
    title: "Multi-Asset Class Support",
    description: "Comprehensive platform covering major currency pairs, crypto assets, commodities, and indices",
    icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
  },
  {
    title: "Strategy Validation Engine",
    description: "Test imbalance, absorption, and divergence strategies with historical market scenarios",
    icon: <EclipseIcon className="size-5 stroke-1" />,
  },
  {
    title: "Risk Management Framework",
    description: "Integrated position sizing, stop logic, and zone filtering for disciplined execution",
    icon: <BlocksIcon className="size-5 stroke-1" />,
  },
  {
    title: "Order Flow Analytics",
    description: "Real-time footprint visualization showing volume distribution and market microstructure",
    icon: <FastForwardIcon className="size-5 stroke-1" />,
  },
  {
    title: "Performance Assessment System",
    description: "Comprehensive grading based on statistical performance metrics and consistency",
    icon: <RocketIcon className="size-5 stroke-1" />,
  },
  {
    title: "Session Analytics & Reporting",
    description: "Complete trade history tracking with performance reporting and data export",
    icon: <LanguagesIcon className="size-5 stroke-1" />,
  },
  {
    title: "Custom Strategy Configuration",
    description: "Flexible parameter tuning for triggers, sensitivity, and execution logic",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
