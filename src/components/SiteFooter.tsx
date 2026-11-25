import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#27272a] bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block font-sans text-sm font-semibold tracking-[0.18em] text-[#fafafa]"
            >
              DUALAI
            </Link>
            <p className="mt-3 text-sm text-[#a1a1aa]">
              DualAI — A product of {SITE_CONFIG.companyName}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#71717a]">
              Native desktop interpretation console for Windows and macOS. Built for medical,
              legal, and executive bilingual workflows.
            </p>
            <p className="mt-4 font-mono text-xs text-[#a1a1aa]">
              Support:{" "}
              <a
                href={SITE_CONFIG.supportMailto}
                className="text-[#fafafa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:decoration-[#fafafa]"
              >
                {SITE_CONFIG.supportEmail}
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#71717a]">
              Product
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#product"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/#security"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Zero-Data Retention
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Desktop Installers
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#71717a]">
              Legal &amp; Compliance
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#27272a] pt-6 text-xs text-[#71717a] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Payments, invoicing, and global tax compliance are processed by Paddle.com as Merchant
            of Record.
          </p>
          <p className="font-mono tabular-nums shrink-0">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.companyName}
          </p>
        </div>
      </div>
    </footer>
  );
}
