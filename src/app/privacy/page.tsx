import type { Metadata } from "next";
import { LegalDocumentLayout } from "@/components/LegalDocumentLayout";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DualAI Privacy Policy and Zero-Data Retention architecture. Learn how Universal AI Sync processes live audio in volatile memory without storing recordings or training AI models.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentLayout
      documentCode="LEGAL / PRIVACY POLICY"
      title="Privacy Policy"
      summary="Universal AI Sync built DualAI on a strict Zero-Data Retention (ZDR) architecture. This policy explains the minimal account metadata we collect, how live audio is handled strictly in volatile memory, and your rights under GDPR and CCPA."
      lastUpdated={SITE_CONFIG.lastUpdatedLegal}
    >
      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          1. Zero-Data Retention (ZDR) for Audio and Transcripts
        </h2>
        <p>
          DualAI is engineered for medical, legal, and executive professionals who cannot expose
          sensitive spoken communications to persistent cloud logging. Our real-time processing
          pipeline enforces the following technical guarantees:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-[#fafafa]">Volatile Memory Processing Only:</strong>{" "}
            Captured system audio and microphone streams are transmitted over encrypted TLS 1.3 /
            WSS connections, processed transiently in volatile server memory (RAM) for speech
            recognition and translation, and discarded immediately upon delivery to your desktop
            workspace.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Zero Persistent Storage:</strong>{" "}
            {SITE_CONFIG.companyName} does not write, archive, log, or store raw audio recordings,
            speaker transcripts, or translated text on disk or in cloud databases.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Zero Model Training:</strong> Customer
            audio streams and transcripts are never retained or used to train, fine-tune, or
            evaluate machine learning models, either by {SITE_CONFIG.companyName} or by our
            real-time speech inference sub-processors under zero-retention API agreements.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          2. Data We Actually Collect
        </h2>
        <p>
          To authenticate your account, meter monthly usage quotas, and prevent abuse, we collect
          only the minimum operational metadata strictly necessary to provide the service:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-[#fafafa]">Account Identity:</strong> Your email
            address, email verification status, and an internal account identifier.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Subscription &amp; Quota Metadata:</strong>{" "}
            Your active plan tier (Free Trial, Pro, Pro+, Unlimited), billing period timestamps,
            and cumulative elapsed interpretation duration in seconds. We do not log the content of
            any session.
          </li>
          <li>
            <strong className="font-medium text-[#fafafa]">Support Communications:</strong> If you
            email{" "}
            <a
              href={SITE_CONFIG.supportMailto}
              className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
            >
              {SITE_CONFIG.supportEmail}
            </a>
            , we retain your correspondence solely to resolve your support request.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          3. Local Device Security (OS Keychain &amp; Windows DPAPI)
        </h2>
        <p>
          Authentication tokens, display preferences, typography settings, and user-defined custom
          glossaries remain local to your workstation. On macOS, session tokens are encrypted using{" "}
          <strong className="font-medium text-[#fafafa]">macOS Keychain</strong>. On Windows,
          session tokens are protected via the{" "}
          <strong className="font-medium text-[#fafafa]">Windows Data Protection API (DPAPI)</strong>{" "}
          bound to your operating system user profile.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          4. Payment Processing (Paddle.com)
        </h2>
        <p>
          All payment transactions, billing addresses, tax calculations, and payment card details
          are processed directly by{" "}
          <strong className="font-medium text-[#fafafa]">Paddle.com Market Ltd</strong> as our
          Merchant of Record. {SITE_CONFIG.companyName} never receives, processes, or stores your
          full credit card number or banking credentials. Paddle processes payment data in
          accordance with its own privacy policy and PCI-DSS security standards.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          5. Sub-Processors and Data Transfers
        </h2>
        <p>
          We engage a minimal set of audited infrastructure providers strictly for authentication,
          quota ledger integrity, real-time zero-retention speech processing, and Paddle payment
          billing. We do not sell, rent, or trade your personal information to data brokers or
          advertising networks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          6. Data Retention and Account Deletion
        </h2>
        <p>
          Account metadata (email address and quota state) is retained only while your account
          remains active. You may request complete deletion of your account and associated metadata
          at any time by emailing{" "}
          <a
            href={SITE_CONFIG.supportMailto}
            className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
          >
            {SITE_CONFIG.supportEmail}
          </a>
          . Verified deletion requests are completed within 15 business days, except where minimal
          billing records must be retained by Paddle for statutory tax compliance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
          7. Your Rights Under GDPR and CCPA
        </h2>
        <p>
          Depending on your jurisdiction (including the European Economic Area, United Kingdom,
          Switzerland, and California), you have the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request access to and a portable copy of the account metadata we hold about you.</li>
          <li>Request correction of inaccurate personal information.</li>
          <li>Request erasure of your account data (&ldquo;right to be forgotten&rdquo;).</li>
          <li>
            Object to or restrict certain processing activities, and confirm that we do not sell or
            share personal information for cross-context behavioral advertising.
          </li>
        </ul>
        <p>
          To exercise any privacy right or request security documentation, contact our privacy
          team at{" "}
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
