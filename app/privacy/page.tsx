import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import LegalSection from "@/components/sections/legal/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      
      <LegalSection 
        title="Privacy Policy" 
        lastUpdated="February 26, 2026"
        content={
          <>
            <h3>1. Data Collection</h3>
            <p>
              Your personal data required for the Transaction and delivery of the Product is collected 
              by Paddle in accordance with their Privacy Policy. This includes information necessary 
              to process payments and handle tax requirements.
            </p>

            <h3>2. Security & Safeguards</h3>
            <p>
              Paddle maintains appropriate administrative, physical, and technical safeguards for 
              protection of the security, confidentiality, and integrity of Buyer data. We do not 
              store your full credit card details on our own servers.
            </p>

            <h3>3. Confidentiality</h3>
            <p>
              Any commercial, financial, or technical information relating to the Product or Services 
              is treated as Confidential Information and will be protected in a manner consistent 
              with reasonable industry standards.
            </p>
          </>
        }
      />

      <Footer />
    </main>
  );
}