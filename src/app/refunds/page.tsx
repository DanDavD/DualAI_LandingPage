import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Clear 14-calendar-day Refund Policy for DualAI subscriptions processed by Paddle.com as Merchant of Record.",
  alternates: {
    canonical: "/refunds",
  },
};

export default function RefundsPage() {
  return (
    <LegalDocumentLayout
      documentCode="LEGAL / REFUND POLICY"
      title="Refund Policy"
      summary="Universal AI Sync stands behind DualAI with a straightforward, no-friction 14-calendar-day refund policy aligned with Paddle Buyer Terms."
      lastUpdated={SITE_CONFIG.lastUpdatedLegal}
    >
      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          1. 14-Calendar-Day Refund Window
        </h2>
        <p>
          Every paid DualAI subscription purchase (Pro, Pro+, or Unlimited) is eligible for a full
          refund within{" "}
          <strong className="font-medium text-[#fafafa]">14 calendar days</strong> of the original
          transaction date. Because DualAI also provides a 1-hour Free Trial upon email
          verification with no credit card required, you can evaluate system audio routing and
          translation accuracy on your exact workstation before upgrading.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          2. How to Request a Refund
        </h2>
        <p>
          All payments and refunds for DualAI are processed by{" "}
          <strong className="font-medium text-[#fafafa]">Paddle.com Market Ltd</strong>, our
          authorized Merchant of Record. You can request a refund through either of two simple
          methods:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-[#fafafa]">Via Email Support:</strong> Send an
            email to{" "}
            <a
              href={SITE_CONFIG.supportMailto}
              className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
            >
              {SITE_CONFIG.supportEmail}
            </a>{" "}
            from your DualAI account email address with your Paddle order or receipt number.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Via Your Paddle Receipt:</strong> Use
            the billing support link included in your Paddle order confirmation email or Paddle
            invoice.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          3. Processing Timeline
        </h2>
        <p>
          Refund requests submitted within the 14-calendar-day window are reviewed and approved
          promptly, typically within 1 to 2 business days. Once issued by Paddle, funds are
          returned to your original payment method within{" "}
          <strong className="font-medium text-[#fafafa]">5 to 10 business days</strong>, depending
          on your card issuer or bank processing times.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          4. Subscription Renewals and Cancellations
        </h2>
        <p>
          You can cancel your monthly subscription at any time to prevent future billing. If you
          were billed for an unintended automatic renewal, contact{" "}
          <a
            href={SITE_CONFIG.supportMailto}
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            {SITE_CONFIG.supportEmail}
          </a>{" "}
          within 14 calendar days of the renewal charge and we will process a full refund for that
          billing cycle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          5. Statutory Consumer Rights
        </h2>
        <p>
          Nothing in this Refund Policy limits or overrides mandatory consumer protection or
          statutory withdrawal rights applicable in your jurisdiction (including European Union and
          United Kingdom consumer regulations administered through Paddle). For any billing or
          refund question, reach us directly at{" "}
          <a
            href={SITE_CONFIG.supportMailto}
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            {SITE_CONFIG.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalDocumentLayout>
  );
}
