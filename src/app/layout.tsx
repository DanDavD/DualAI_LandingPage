import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_CONFIG } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "DualAI — Real-Time Bilingual Transcription & Translation for Desktop",
    template: "%s — DualAI",
  },
  description:
    "Native Windows and macOS desktop application for simultaneous bilingual transcription and translation. Built for medical, legal, and executive interpreters with Zero-Data Retention architecture.",
  applicationName: SITE_CONFIG.productName,
  authors: [{ name: SITE_CONFIG.companyName }],
  creator: SITE_CONFIG.companyName,
  publisher: SITE_CONFIG.companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.productName,
    title: "DualAI — Real-Time Bilingual Transcription & Translation for Desktop",
    description:
      "Native system audio capture, 15-speaker diarization, floating Teleprompter HUD, and Zero-Data Retention for Windows and macOS.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "DualAI — Real-Time Bilingual Transcription & Translation",
    description:
      "Native Windows and macOS desktop interpretation console with Zero-Data Retention architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[#2563eb] focus:bg-[#111113] focus:px-3 focus:py-2 focus:text-xs focus:font-mono focus:text-[#fafafa]"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
