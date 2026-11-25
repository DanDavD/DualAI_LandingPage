import Link from "next/link";
import { ArrowRight, Check, Lock, ShieldCheck } from "lucide-react";
import { DownloadSection } from "@/components/DownloadSection";
import { SmoothAnchorLink } from "@/components/SmoothAnchorLink";
import { WorkspacePreview } from "@/components/WorkspacePreview";
import { CAPABILITIES, PRICING_TIERS } from "@/lib/site";

const SECURITY_SPECS = [
  {
    label: "Audio & Transcript Storage",
    value: "None (processed in volatile RAM only)",
  },
  {
    label: "AI Model Training",
    value: "Never (strictly excluded from training pipelines)",
  },
  {
    label: "Session Credential Storage",
    value: "macOS Keychain / Windows DPAPI",
  },
  {
    label: "Transport Security",
    value: "TLS 1.3 / Encrypted WebSockets (WSS)",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: EDITORIAL HERO + INTERACTIVE WORKSPACE PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#71717a]">
            DESKTOP INTERPRETATION ENGINE · WINDOWS &amp; MACOS
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
            Simultaneous bilingual interpretation, engineered for clarity.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg">
            Capture system audio and microphone input natively without virtual drivers. Automatic
            multi-speaker detection and low-latency translation built for live video calls and
            professional sessions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SmoothAnchorLink
              sectionId="download"
              className="inline-flex h-10 items-center justify-center bg-[#2563eb] px-5 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[#1d4ed8]"
            >
              Download for macOS &amp; Windows
            </SmoothAnchorLink>
            <SmoothAnchorLink
              sectionId="pricing"
              className="inline-flex h-10 items-center justify-center border border-[#27272a] bg-[#111113] px-5 text-sm font-medium text-[#fafafa] transition-colors hover:border-[#3f3f46] hover:bg-[#18181b]"
            >
              View Pricing
            </SmoothAnchorLink>
          </div>

          <p className="mt-4 font-mono text-xs text-[#71717a]">
            Includes 1 hour free upon verified email signup. No credit card required.
          </p>
        </div>

        {/* High-Fidelity Interactive DualAI Workspace Console */}
        <WorkspacePreview />
      </section>

      {/* SECTION 2: REAL TECHNICAL CAPABILITIES (EDITORIAL 1PX GRID) */}
      <section id="product" className="scroll-mt-20 border-t border-[#27272a]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#71717a]">
              01 / CAPABILITIES
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-3xl">
              Built as a dedicated desktop console, not a browser extension.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#a1a1aa]">
              Every subsystem is engineered for uninterrupted live interpretation across medical
              consultations, legal depositions, and bilingual executive meetings.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-t border-l border-[#27272a] md:grid-cols-2">
            {CAPABILITIES.map((capability) => (
              <div
                key={capability.index}
                className="border-r border-b border-[#27272a] bg-[#09090b] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
                  <span className="text-[#71717a] tabular-nums">{capability.index}</span>
                  <span className="tracking-wider text-[#71717a]">{capability.spec}</span>
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2B: ZERO-DATA RETENTION & SECURITY SPECIFICATION */}
      <section id="security" className="scroll-mt-20 border-t border-[#27272a] bg-[#111113]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#10b981]">
                <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>02 / ZERO-DATA RETENTION</span>
              </div>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#fafafa]">
                Private by architecture, verified by design.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                Interpreters handle privileged clinical, legal, and corporate conversations. DualAI
                streams audio solely through ephemeral memory so neither recordings nor transcripts
                are written to persistent server storage.
              </p>
              <Link
                href="/privacy"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-[#fafafa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:decoration-[#fafafa]"
              >
                <span>Read the Privacy Policy &amp; ZDR Specification</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="border border-[#27272a] bg-[#09090b] lg:col-span-7">
              <div className="flex items-center justify-between border-b border-[#27272a] px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-[#71717a]">
                <span>Security Control</span>
                <span className="inline-flex items-center gap-1.5 text-[#10b981]">
                  <Lock className="h-3 w-3" strokeWidth={1.5} />
                  Enforced
                </span>
              </div>
              <dl className="divide-y divide-[#27272a]">
                {SECURITY_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-12 sm:items-center"
                  >
                    <dt className="font-mono text-xs text-[#a1a1aa] sm:col-span-5">{spec.label}</dt>
                    <dd className="text-sm text-[#fafafa] sm:col-span-7 sm:text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSPARENT PRICING (PADDLE-READY) */}
      <section id="pricing" className="scroll-mt-20 border-t border-[#27272a]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#71717a]">
              03 / PRICING
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-3xl">
              Clear monthly plans in USD.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#a1a1aa]">
              Start with 1 free hour after verifying your email. Upgrade inside the app when you
              need higher monthly interpretation capacity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between border p-6 ${
                  tier.featured
                    ? "border-[#2563eb] bg-[#111113]"
                    : "border-[#27272a] bg-[#09090b]"
                }`}
              >
                <div>
                  <div className="flex min-h-6 items-center justify-between gap-2">
                    <h3 className="text-base font-medium text-[#fafafa]">{tier.name}</h3>
                    {tier.badge ? (
                      <span className="border border-[#2563eb] bg-[#09090b] px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.1em] text-[#fafafa]">
                        {tier.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-mono text-3xl font-medium tracking-tight text-[#fafafa] tabular-nums">
                      {tier.priceUsd}
                    </span>
                    <span className="font-mono text-xs text-[#71717a]">{tier.billingUnit}</span>
                  </div>

                  <div className="mt-3 border-y border-[#27272a] py-2 font-mono text-xs text-[#fafafa] tabular-nums">
                    {tier.quotaLabel}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-[#a1a1aa]">{tier.description}</p>

                  <ul className="mt-5 space-y-2.5 text-xs text-[#a1a1aa]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#10b981]"
                          strokeWidth={1.5}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <SmoothAnchorLink
                    sectionId="download"
                    className={`inline-flex h-10 w-full items-center justify-center text-xs font-medium transition-colors ${
                      tier.featured
                        ? "bg-[#2563eb] text-[#fafafa] hover:bg-[#1d4ed8]"
                        : "border border-[#27272a] bg-[#18181b] text-[#fafafa] hover:border-[#3f3f46] hover:bg-[#27272a]"
                    }`}
                  >
                    {tier.ctaLabel}
                  </SmoothAnchorLink>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Billing, Tax & Paddle Disclosures */}
          <div className="mt-8 border border-[#27272a] bg-[#111113] p-5 text-xs leading-relaxed text-[#a1a1aa]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                All prices are listed in US Dollars (USD). Paid plans renew monthly and can be
                canceled at any time with immediate effect at the end of the current billing cycle.
                Eligible purchases are protected by our{" "}
                <Link
                  href="/refunds"
                  className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
                >
                  14-day Refund Policy
                </Link>
                .
              </p>
              <p>
                Applicable VAT, GST, or sales taxes are calculated automatically at checkout by{" "}
                <strong className="font-medium text-[#fafafa]">Paddle.com</strong>, our authorized
                Merchant of Record. *The Unlimited plan is governed by single-user fair use (one
                concurrent active session per licensed account; details in{" "}
                <Link
                  href="/terms"
                  className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 hover:decoration-[#fafafa]"
                >
                  Terms of Service
                </Link>
                ).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DOWNLOAD & SYSTEM REQUIREMENTS */}
      <DownloadSection />
    </>
  );
}
