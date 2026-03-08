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
        title="Terms of Service" 
        lastUpdated="February 26, 2026"
        content={
          <>
            <h3>1. Introduction & Company Information</h3>
            <p>
              Deep Data Trading ("we", "us", "our") provides a market simulation platform. 
              By using our services, you agree to these terms. 
              <strong> Paddle is our Merchant of Record</strong> and the authorized reseller of the Product. 
              Your purchase will be processed by Paddle.
            </p>

            <h3>2. Nature of Service</h3>
            <p>
              Deep Data Trading provides digital simulation tools. These tools do not constitute 
              financial advice. All trading involves risk, and our platform is for educational 
              and strategy-testing purposes only.
            </p>

            <h3>3. Digital Content & Access</h3>
            <p>
              Since the Product is Digital Content made immediately available upon purchase, 
              you consent to immediate performance of this Agreement. You acknowledge that 
              access is granted immediately upon successful payment via Paddle.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
              All software, data visualizations, and proprietary algorithms provided by 
              Deep Data Trading are protected by copyright laws. You may not reverse-engineer 
              or redistribute our simulation data.
            </p>
          </>
        }
      />
      <Footer />
    </main>
  );
}