import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

interface LegalDocumentLayoutProps {
  readonly documentCode: string;
  readonly title: string;
  readonly summary: string;
  readonly lastUpdated: string;
  readonly children: React.ReactNode;
}

export function LegalDocumentLayout({
  documentCode,
  title,
  summary,
  lastUpdated,
  children,
}: LegalDocumentLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>Back to DualAI</span>
        </Link>
      </div>

      <header className="border-b border-[#27272a] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#71717a]">
          <span>{documentCode}</span>
          <span className="tabular-nums">Last updated: {lastUpdated}</span>
        </div>
        <h1 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#27272a] pt-4 font-mono text-xs text-[#71717a]">
          <span>Operator: {SITE_CONFIG.companyName}</span>
          <span>Service: {SITE_CONFIG.domain}</span>
          <span>
            Contact:{" "}
            <a
              href={SITE_CONFIG.supportMailto}
              className="text-[#a1a1aa] underline decoration-[#27272a] underline-offset-4 hover:text-[#fafafa]"
            >
              {SITE_CONFIG.supportEmail}
            </a>
          </span>
        </div>
      </header>

      <div className="mt-10 space-y-10 text-[15px] leading-7 text-[#a1a1aa]">{children}</div>

      <nav
        aria-label="Related legal documents"
        className="mt-16 border-t border-[#27272a] pt-8"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#71717a]">
          Related Policies
        </p>
        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          <Link
            href="/terms"
            className="text-[#a1a1aa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:text-[#fafafa]"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-[#a1a1aa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:text-[#fafafa]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refunds"
            className="text-[#a1a1aa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:text-[#fafafa]"
          >
            Refund Policy
          </Link>
        </div>
      </nav>
    </article>
  );
}
