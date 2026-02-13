import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import LegalSection from "@/components/sections/legal/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      
      <LegalSection 
        title="Refund Policy" 
        lastUpdated="February 13, 2026"
        content={
          <>
            <h3>1. Introduction</h3>
            <p>
              Welcome to the Trading Simulator. By using our services, you agree that this tool 
              is for educational purposes only and does not constitute financial advice.
            </p>
            
            <h3>2. Virtual Currency</h3>
            <p>
              All trading activity on this platform uses virtual currency. No actual capital is 
              at risk, and no actual financial gains can be realized or withdrawn.
            </p>

            <h3>3. Refunds</h3>
            <p>
              We offer a 14-day refund policy. See our Refund Policy page for details.
            </p>
          </>
        }
      />

      <Footer />
    </main>
  );
}