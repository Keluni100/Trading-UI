import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import LegalSection from "@/components/sections/legal/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export default function RefundPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      
      <LegalSection 
        title="Refund Policy" 
        lastUpdated="February 26, 2026"
        content={
          <>
            <h3>1. 14-Day Right to Cancel</h3>
            <p>
              If you are a Consumer, you have the right to cancel this Agreement and return the Product 
              within <strong>14 days</strong> without giving any reason. The cancellation period expires 
              14 days from the day after the completion of the Transaction.
            </p>

            <h3>2. Exceptions to Refunds</h3>
            <p>
              Your right to cancel does not apply to the supply of Digital Content that you have 
              started to download, stream, or otherwise acquire. Refunds are provided at the sole 
              discretion of Paddle and may be refused if evidence of fraud or abuse is found.
            </p>

            <h3>3. Chargebacks</h3>
            <p>
              You agree to contact us or Paddle support prior to raising a request for a chargeback 
              with your bank. Meritless chargebacks may result in the suspension of your access to 
              the Services.
            </p>
          </>
        }
      />

      <Footer />
    </main>
  );
}