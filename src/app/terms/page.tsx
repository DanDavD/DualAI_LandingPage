import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing use of the DualAI desktop interpretation software operated by Universal AI Sync, with Paddle.com Market Ltd as Merchant of Record.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalDocumentLayout
      documentCode="LEGAL / TERMS OF SERVICE"
      title="Terms of Service"
      summary="These Terms of Service govern your access to and use of the DualAI desktop software, website, and related subscription services operated by Universal AI Sync."
      lastUpdated={SITE_CONFIG.lastUpdatedLegal}
    >
      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          1. Operator and Scope
        </h2>
        <p>
          DualAI (<span className="font-mono text-xs text-[#fafafa]">{SITE_CONFIG.domain}</span>)
          is a downloadable desktop software product operated by{" "}
          <strong className="font-medium text-[#fafafa]">{SITE_CONFIG.companyName}</strong>{" "}
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). DualAI provides automated
          real-time bilingual transcription and simultaneous translation software for Windows and
          macOS desktop environments; {SITE_CONFIG.companyName} sells software licenses and usage
          quotas only and does not provide human interpretation or consulting services. Software
          installers are delivered electronically via direct download, and paid subscription quotas
          are provisioned immediately to your verified account upon payment confirmation by Paddle.
          By creating an account, installing the DualAI desktop application, or purchasing a
          subscription, you agree to be bound by these Terms of Service and our{" "}
          <Link
            href="/privacy"
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          2. Accounts and Eligibility
        </h2>
        <p>
          You must provide a valid email address and complete email verification to activate the
          1-hour Free Trial or any paid subscription. You are responsible for maintaining the
          confidentiality of your account credentials and for all activity occurring under your
          account. You must be at least 18 years old or have the legal authority to enter into a
          binding agreement on behalf of your organization.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          3. Subscription Plans, Usage Quotas, and Fair Use
        </h2>
        <p>
          DualAI is offered through the following monthly subscription tiers denominated in US
          Dollars (USD):
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-[#fafafa]">Free Trial ($0):</strong> One-time
            allocation of 1 hour of live transcription and translation upon verified email signup.
            No credit card is required.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Pro ($6.99 / month):</strong> Includes
            40 hours of live audio interpretation per monthly billing cycle.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Pro+ ($9.99 / month):</strong> Includes
            70 hours of live audio interpretation per monthly billing cycle and priority email
            support.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Unlimited ($19.99 / month):</strong>{" "}
            Designed for full-time single-user professional interpretation workloads without a
            fixed monthly hour cap, subject to the Single-User Fair Use Policy below.
          </li>
        </ul>
        <p>
          Unused monthly hours on Pro and Pro+ plans do not roll over to subsequent billing cycles.
          Under our{" "}
          <strong className="font-medium text-[#fafafa]">Single-User Fair Use Policy</strong> for
          the Unlimited plan, each subscription is licensed exclusively to one named individual and
          permits <strong className="font-medium text-[#fafafa]">one (1) concurrent active</strong>{" "}
          interpretation session at any time. Credential sharing across multiple operators,
          automated unattended 24/7 ingestion, commercial API resale, or seat pooling is prohibited
          and may result in rate limiting or account suspension after notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          4. Payments, Taxes, and Merchant of Record (Paddle)
        </h2>
        <p>
          Our order process is conducted by our online reseller{" "}
          <strong className="font-medium text-[#fafafa]">Paddle.com Market Ltd</strong>{" "}
          (&ldquo;Paddle&rdquo;). Paddle.com is the{" "}
          <strong className="font-medium text-[#fafafa]">Merchant of Record</strong> for all
          DualAI orders, subscriptions, and renewals. Paddle processes all payments, collects and
          remits applicable sales taxes, VAT, or GST, issues tax invoices and receipts, and manages
          billing inquiries and refund settlements in accordance with Paddle&apos;s Buyer Terms and
          our{" "}
          <Link
            href="/refunds"
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            Refund Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          5. Renewals and Cancellation
        </h2>
        <p>
          Paid subscriptions renew automatically on a monthly basis unless canceled before the next
          renewal date. You may cancel your subscription at any time via the account billing link
          in the DualAI desktop application, through your Paddle receipt, or by contacting{" "}
          <a
            href={SITE_CONFIG.supportMailto}
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            {SITE_CONFIG.supportEmail}
          </a>
          . Upon cancellation, your subscription remains active until the end of the current paid
          billing period, and no further charges will be billed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          6. Acceptable Use and Recording Consent
        </h2>
        <p>
          You agree to use DualAI strictly for lawful professional, educational, or personal
          transcription and translation workflows. You are solely responsible for complying with
          all local, state, federal, and international laws governing audio capture, participant
          disclosure, and session confidentiality in your jurisdiction (including healthcare, legal,
          or corporate call-recording notice requirements). You may not reverse engineer, attempt
          to bypass quota enforcement, disrupt service availability, or resell access to the DualAI
          gateway.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          7. Intellectual Property
        </h2>
        <p>
          All rights, title, and interest in and to the DualAI desktop application, source code,
          interface architecture, documentation, and trademarks belong exclusively to{" "}
          {SITE_CONFIG.companyName} and its licensors. Subject to compliance with these Terms, we
          grant you a limited, non-exclusive, non-transferable, revocable license to install and
          run DualAI on your personal or employer-assigned Windows and macOS devices. You retain
          full ownership of any text or custom glossaries you create locally.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          8. Professional Assistance Disclaimer and Limitation of Liability
        </h2>
        <p>
          DualAI is an assistive real-time interpretation and transcription tool designed to support
          human interpreters and bilingual professionals. Automated speech recognition and
          translation may occasionally produce inaccuracies depending on audio quality, background
          noise, or specialized terminology. You remain responsible for verifying critical medical,
          legal, financial, or safety-sensitive communications.
        </p>
        <p>
          To the maximum extent permitted by applicable law, DualAI is provided &ldquo;as is&rdquo;
          and &ldquo;as available.&rdquo; {SITE_CONFIG.companyName} shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or for any aggregate
          liability exceeding the total subscription fees paid by you during the twelve (12) months
          preceding the claim.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          9. Modifications and Contact
        </h2>
        <p>
          We may update these Terms of Service to reflect changes in our software, pricing
          structure, or legal obligations. Material updates will be posted on this page with an
          updated revision date. For questions regarding these Terms, contact{" "}
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
