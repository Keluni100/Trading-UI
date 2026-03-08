import "@/app/globals.css";
import PaddleScript from "@/components/paddle-script";
import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: "Deep Data Trading - Professional Market Simulation",
    template: `%s - Deep Data Trading`,
  },
  metadataBase: new URL(siteConfig.url || "https://deepdatatrading.com"),
  description: "High-fidelity market simulation and order flow visualization for serious traders.",
  keywords: [
    "Market Simulator", "Trading Strategy Testing", "Order Flow Visualization",
    "Deep Data Trading", "Trading Sandbox",
  ],
  authors: [{ name: "Deep Data Trading Team" }],
  creator: "Deep Data Trading",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Deep Data Trading",
    description: "Master the markets with our professional-grade simulation infrastructure.",
    siteName: "Deep Data Trading",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Data Trading",
    description: "Professional market simulation for strategy mastery.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

// Separate client component just for the Paddle script
// This keeps the layout Server Component (preserving metadata export)



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <PaddleScript />
      </body>
    </html>
  );
}