"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

interface SmoothAnchorLinkProps {
  readonly sectionId: string;
  readonly className?: string;
  readonly children: ReactNode;
}

export function SmoothAnchorLink({
  sectionId,
  className,
  children,
}: SmoothAnchorLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    const target = document.getElementById(sectionId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <Link href={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
