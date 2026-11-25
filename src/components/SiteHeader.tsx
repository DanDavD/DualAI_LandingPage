import Link from "next/link";
import { SmoothAnchorLink } from "@/components/SmoothAnchorLink";

const NAV_ITEMS = [
  { label: "Product", sectionId: "product" },
  { label: "Security", sectionId: "security" },
  { label: "Pricing", sectionId: "pricing" },
  { label: "Download", sectionId: "download" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27272a] bg-[#09090b]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-[0.18em] text-[#fafafa] transition-colors hover:text-[#a1a1aa]"
          aria-label="DualAI Home"
        >
          DUALAI
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <SmoothAnchorLink
              key={item.sectionId}
              sectionId={item.sectionId}
              className="text-[13px] font-medium text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
            >
              {item.label}
            </SmoothAnchorLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SmoothAnchorLink
            sectionId="download"
            className="inline-flex h-8 items-center justify-center border border-[#27272a] bg-[#18181b] px-3.5 text-xs font-medium text-[#fafafa] transition-colors hover:border-[#3f3f46] hover:bg-[#27272a]"
          >
            Download Free
          </SmoothAnchorLink>
        </div>
      </div>

      {/* Compact mobile navigation row */}
      <nav
        aria-label="Mobile navigation"
        className="flex items-center justify-between border-t border-[#27272a] px-4 py-2 md:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <SmoothAnchorLink
            key={item.sectionId}
            sectionId={item.sectionId}
            className="font-mono text-[11px] uppercase tracking-wider text-[#a1a1aa] transition-colors hover:text-[#fafafa]"
          >
            {item.label}
          </SmoothAnchorLink>
        ))}
      </nav>
    </header>
  );
}
