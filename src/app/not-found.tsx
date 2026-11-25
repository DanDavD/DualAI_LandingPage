import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#71717a] tabular-nums">
        404 / NOT FOUND
      </p>
      <h1 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#fafafa]">
        This page does not exist.
      </h1>
      <p className="mt-3 text-base text-[#a1a1aa]">
        The requested route could not be located on DualAI. Return to the main page or review our
        legal documentation below.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 bg-[#2563eb] px-5 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[#1d4ed8]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          <span>Return to DualAI</span>
        </Link>
      </div>
    </section>
  );
}
