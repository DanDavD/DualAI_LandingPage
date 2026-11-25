export const SITE_CONFIG = {
  productName: "DualAI",
  companyName: "Universal AI Sync",
  domain: "https://dualai.universalaisync.com",
  supportEmail: "support@universalaisync.com",
  supportMailto: "mailto:support@universalaisync.com",
  lastUpdatedLegal: "November 25, 2026",
  version: "1.0.0",
  downloads: {
    macosUrl:
      process.env.NEXT_PUBLIC_MACOS_DOWNLOAD_URL ||
      "https://github.com/DanDavD/DualAI/releases/download/v1.0.0/DualAI-1.0.0-arm64.dmg",
    windowsUrl:
      process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ||
      "https://github.com/DanDavD/DualAI/releases/download/v1.0.0/DualAI-1.0.0-x64-setup.exe",
    releaseTagUrl: "https://github.com/DanDavD/DualAI/releases/tag/v1.0.0",
  },
} as const;

export interface PricingTier {
  readonly id: string;
  readonly name: string;
  readonly priceUsd: string;
  readonly billingUnit: string;
  readonly quotaLabel: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly ctaLabel: string;
  readonly featured?: boolean;
  readonly badge?: string;
}

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "free-trial",
    name: "Free Trial",
    priceUsd: "$0",
    billingUnit: "one-time",
    quotaLabel: "1 hour included",
    description: "Verify your email inside the desktop app to test every feature with zero commitment.",
    features: [
      "Verified email signup required",
      "Full desktop feature access",
      "No credit card required",
      "Native WASAPI & CoreAudio capture",
    ],
    ctaLabel: "Download & Start Free",
  },
  {
    id: "pro",
    name: "Pro",
    priceUsd: "$6.99",
    billingUnit: "/ month",
    quotaLabel: "40 hours / month",
    description: "Built for bilingual specialists, researchers, and recurring client sessions.",
    features: [
      "Multi-speaker diarization (up to 15 speakers)",
      "60+ languages with two-way auto-detection",
      "Floating Teleprompter HUD (13px to 28px)",
      "Custom terminology glossary",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "pro-plus",
    name: "Pro+",
    priceUsd: "$9.99",
    billingUnit: "/ month",
    quotaLabel: "70 hours / month",
    description: "Designed for daily medical, legal, and executive interpretation schedules.",
    features: [
      "Everything included in Pro",
      "70 hours monthly interpretation quota",
      "Priority email support",
      "Consistent low-latency streaming priority",
    ],
    ctaLabel: "Get Started",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    priceUsd: "$19.99",
    billingUnit: "/ month",
    quotaLabel: "Unlimited hours / month*",
    description: "Uninterrupted monthly capacity for full-time professional interpreters.",
    features: [
      "Everything included in Pro+",
      "Full-time professional workload capacity",
      "Single-user fair use (1 concurrent session)",
      "Priority email support",
    ],
    ctaLabel: "Get Started",
  },
] as const;

export interface CapabilityItem {
  readonly index: string;
  readonly title: string;
  readonly spec: string;
  readonly description: string;
}

export const CAPABILITIES: readonly CapabilityItem[] = [
  {
    index: "01",
    title: "Native System Audio & Mic Capture",
    spec: "WASAPI LOOPBACK · COREAUDIO TAP",
    description:
      "Captures audio directly from Zoom, Microsoft Teams, Google Meet, or local playback alongside your microphone. Operates natively on Windows 10/11 and macOS 13+ with no virtual audio cables or kernel drivers.",
  },
  {
    index: "02",
    title: "Multi-Speaker & Two-Way Auto-Detection",
    spec: "UP TO 15 SPEAKERS · 60+ LANGUAGES",
    description:
      "Tracks up to 15 distinct speakers in a single session and detects language switches automatically across more than 60 languages. Consolidates speech into flowing paragraphs with fixed per-language color coding.",
  },
  {
    index: "03",
    title: "Floating Teleprompter HUD",
    spec: "ALWAYS-ON-TOP · 13PX TO 28PX",
    description:
      "Detachable, unobtrusive overlay engineered to stay visible above video calls, electronic health records, or legal briefs. Synchronizes typography scale, line spacing, and contrast controls with the main workspace.",
  },
  {
    index: "04",
    title: "Zero-Data Retention Architecture",
    spec: "VOLATILE RAM · OS KEYCHAIN / DPAPI",
    description:
      "Audio streams are processed strictly in volatile memory and discarded immediately after transcription and translation. No recordings or transcripts are stored on servers, and customer data is never used for model training.",
  },
] as const;
