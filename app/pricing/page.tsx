 import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import Pricing from "@/components/sections/pricing/default"; // Your existing section
import { LayoutLines } from "@/components/ui/layout-lines";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      
      {/* This renders your existing pricing section on its own page */}
      <div className="py-20"> 
        <Pricing />
      </div>

      <Footer />
    </main>
  );
}