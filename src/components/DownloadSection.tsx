import { ArrowUpRight, Download, Laptop, Monitor } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

type PlatformKey = "macos" | "windows";

interface PlatformSpec {
  readonly key: PlatformKey;
  readonly name: string;
  readonly architecture: string;
  readonly osRequirement: string;
  readonly audioEngine: string;
  readonly packageFile: string;
  readonly downloadUrl: string;
}

const PLATFORMS: readonly PlatformSpec[] = [
  {
    key: "macos",
    name: "macOS",
    architecture: "Apple Silicon (M1–M4) & Intel",
    osRequirement: "macOS 13.0 Ventura or later",
    audioEngine: "Native CoreAudio Process Tap",
    packageFile: "DualAI-1.0.0-arm64.dmg",
    downloadUrl: SITE_CONFIG.downloads.macosUrl,
  },
  {
    key: "windows",
    name: "Windows",
    architecture: "64-bit (x64)",
    osRequirement: "Windows 10 (1903+) & Windows 11",
    audioEngine: "Native WASAPI Loopback",
    packageFile: "DualAI-1.0.0-x64-setup.exe",
    downloadUrl: SITE_CONFIG.downloads.windowsUrl,
  },
] as const;

const SETUP_STEPS = [
  {
    number: "01",
    title: "Install DualAI",
    detail: "Run the native macOS or Windows installer. No third-party virtual audio cables required.",
  },
  {
    number: "02",
    title: "Verify your email to unlock 1 free hour",
    detail: "Sign up inside the desktop app with your email address. No credit card is requested.",
  },
  {
    number: "03",
    title: "Select System Audio or Mic and press Start",
    detail: "Choose your language pair, open the floating Teleprompter HUD if needed, and begin.",
  },
] as const;

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-20 border-t border-[#27272a]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#71717a]">
            04 / DESKTOP INSTALLERS
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#fafafa] sm:text-3xl">
            Install DualAI on macOS or Windows.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#a1a1aa]">
            Native desktop binaries with direct OS audio routing and hardware-isolated credential
            storage. Includes 1 free hour upon email verification.
          </p>
        </div>

        {/* Platform Columns */}
        <div className="mt-10 grid grid-cols-1 border border-[#27272a] md:grid-cols-2">
          {PLATFORMS.map((platform, index) => {
            const Icon = platform.key === "macos" ? Laptop : Monitor;

            return (
              <div
                key={platform.key}
                className={`flex h-full flex-col justify-between bg-[#09090b] p-6 sm:p-8 ${
                  index === 0 ? "border-b border-[#27272a] md:border-r md:border-b-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-[#a1a1aa]" strokeWidth={1.5} />
                      <h3 className="text-lg font-medium tracking-[-0.02em] text-[#fafafa]">
                        {platform.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#71717a] tabular-nums">
                      v{SITE_CONFIG.version}
                    </span>
                  </div>

                  <dl className="mt-6 space-y-2.5 border-t border-[#27272a] pt-5 text-xs">
                    <div className="flex justify-between gap-4">
                      <dt className="font-mono uppercase tracking-wider text-[#71717a]">
                        Architecture
                      </dt>
                      <dd className="text-right text-[#fafafa]">{platform.architecture}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-mono uppercase tracking-wider text-[#71717a]">
                        Requirement
                      </dt>
                      <dd className="text-right text-[#a1a1aa]">{platform.osRequirement}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-mono uppercase tracking-wider text-[#71717a]">
                        Audio Engine
                      </dt>
                      <dd className="text-right text-[#a1a1aa]">{platform.audioEngine}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-mono uppercase tracking-wider text-[#71717a]">
                        Package
                      </dt>
                      <dd className="text-right font-mono text-[#a1a1aa] tabular-nums">
                        {platform.packageFile}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8">
                  <a
                    href={platform.downloadUrl}
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-full items-center justify-center gap-2 bg-[#2563eb] px-4 text-sm font-medium text-[#fafafa] transition-colors hover:bg-[#1d4ed8]"
                  >
                    <Download className="h-4 w-4" strokeWidth={1.5} />
                    <span>Download for {platform.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet Release Notes & All Releases Link */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#71717a]">
          <span className="tabular-nums">Release v{SITE_CONFIG.version} · Published on GitHub</span>
          <a
            href={SITE_CONFIG.downloads.releaseTagUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#a1a1aa] underline decoration-[#27272a] underline-offset-4 transition-colors hover:text-[#fafafa] hover:decoration-[#fafafa]"
          >
            <span>View release notes &amp; all installers (v1.0.0)</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* 3 Numbered Onboarding Steps */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#27272a] pt-10 md:grid-cols-3">
          {SETUP_STEPS.map((step) => (
            <div key={step.number} className="space-y-2">
              <p className="font-mono text-xs text-[#71717a] tabular-nums">{step.number}.</p>
              <h3 className="text-sm font-medium text-[#fafafa]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
