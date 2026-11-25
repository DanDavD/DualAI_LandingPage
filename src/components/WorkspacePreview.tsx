"use client";

import { useState } from "react";
import { ArrowRightLeft, Mic, Monitor, ShieldCheck } from "lucide-react";

type DomainKey = "medical" | "legal" | "business";
type SpokenLanguage = "EN" | "ES";

interface TranscriptTurn {
  readonly id: string;
  readonly speaker: string;
  readonly timestamp: string;
  readonly sourceLang: SpokenLanguage;
  readonly targetLang: SpokenLanguage;
  readonly latencyMs: number;
  readonly original: string;
  readonly translation: string;
}

interface DomainScenario {
  readonly key: DomainKey;
  readonly label: string;
  readonly sessionTitle: string;
  readonly audioSource: string;
  readonly turns: readonly TranscriptTurn[];
}

const SCENARIOS: Record<DomainKey, DomainScenario> = {
  medical: {
    key: "medical",
    label: "Medical",
    sessionTitle: "Cardiology Follow-Up · Zoom Audio + Mic",
    audioSource: "CoreAudio Tap + Mic",
    turns: [
      {
        id: "med-1",
        speaker: "SPEAKER 01 · CLINICIAN",
        timestamp: "09:14:02",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 240,
        original:
          "Looking at your 14-day Holter monitor, we saw brief episodes of paroxysmal atrial fibrillation without sustained tachycardia. Have you felt any dizziness when standing up?",
        translation:
          "Al revisar su monitor Holter de 14 días, observamos episodios breves de fibrilación auricular paroxística sin taquicardia sostenida. ¿Ha sentido algún mareo al ponerse de pie?",
      },
      {
        id: "med-2",
        speaker: "SPEAKER 02 · PATIENT",
        timestamp: "09:14:21",
        sourceLang: "ES",
        targetLang: "EN",
        latencyMs: 215,
        original:
          "Solo un par de veces por la mañana después de tomar el metoprolol de 25 miligramos, pero se me quita en menos de un minuto si me siento.",
        translation:
          "Only a couple of times in the morning after taking the 25-milligram metoprolol, though it goes away in under a minute if I sit down.",
      },
      {
        id: "med-3",
        speaker: "SPEAKER 01 · CLINICIAN",
        timestamp: "09:14:39",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 230,
        original:
          "Let's keep the dose steady and shift it to the evening with food. I will send a blood panel order for thyroid function and electrolytes before your next visit.",
        translation:
          "Mantendremos la dosis estable y la pasaremos a la noche con alimentos. Enviaré una orden de laboratorio para función tiroidea y electrolitos antes de su próxima consulta.",
      },
    ],
  },
  legal: {
    key: "legal",
    label: "Legal",
    sessionTitle: "Civil Deposition · Microsoft Teams + Mic",
    audioSource: "WASAPI Loopback + Mic",
    turns: [
      {
        id: "leg-1",
        speaker: "SPEAKER 01 · COUNSEL",
        timestamp: "14:06:11",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 250,
        original:
          "For the record, please confirm whether you reviewed Exhibit B, the signed warehouse lease addendum dated March 14, prior to signing the termination notice.",
        translation:
          "Para que conste en acta, por favor confirme si revisó la Prueba B, el anexo firmado del contrato de arrendamiento del almacén fechado el 14 de marzo, antes de firmar el aviso de terminación.",
      },
      {
        id: "leg-2",
        speaker: "SPEAKER 02 · WITNESS",
        timestamp: "14:06:34",
        sourceLang: "ES",
        targetLang: "EN",
        latencyMs: 225,
        original:
          "Sí, recibí la copia por correo certificado el lunes siguiente y la revisé página por página junto con el contador de la empresa.",
        translation:
          "Yes, I received the copy by certified mail the following Monday and reviewed it page by page together with the company accountant.",
      },
      {
        id: "leg-3",
        speaker: "SPEAKER 01 · COUNSEL",
        timestamp: "14:06:52",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 235,
        original:
          "And did either party submit a written objection to the 30-day cure period specified in Section 4.2 before April 10?",
        translation:
          "¿Y presentó alguna de las partes una objeción por escrito al plazo de subsanación de 30 días estipulado en la Sección 4.2 antes del 10 de abril?",
      },
    ],
  },
  business: {
    key: "business",
    label: "Business",
    sessionTitle: "Operations Review · Google Meet + Mic",
    audioSource: "CoreAudio Tap + Mic",
    turns: [
      {
        id: "biz-1",
        speaker: "SPEAKER 01 · VP OPERATIONS",
        timestamp: "11:32:08",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 220,
        original:
          "Our Guadalajara fulfillment hub cut customs clearance lead time from 38 hours down to 19 hours this quarter. We want to replicate that manifest workflow in Monterrey.",
        translation:
          "Nuestro centro de distribución en Guadalajara redujo el tiempo de despacho aduanal de 38 a 19 horas este trimestre. Queremos replicar ese flujo de manifiestos en Monterrey.",
      },
      {
        id: "biz-2",
        speaker: "SPEAKER 02 · REGIONAL LEAD",
        timestamp: "11:32:29",
        sourceLang: "ES",
        targetLang: "EN",
        latencyMs: 205,
        original:
          "Perfecto. Podemos migrar el esquema EDI con el agente aduanal durante las próximas dos semanas sin detener los envíos diarios de cadena fría.",
        translation:
          "Understood. We can migrate the EDI schema with the customs broker over the next two weeks without halting daily cold-chain shipments.",
      },
      {
        id: "biz-3",
        speaker: "SPEAKER 01 · VP OPERATIONS",
        timestamp: "11:32:47",
        sourceLang: "EN",
        targetLang: "ES",
        latencyMs: 218,
        original:
          "Let's lock Friday at 10:00 Central to finalize the SLA targets and confirm the third-quarter capacity allocation.",
        translation:
          "Fijemos el viernes a las 10:00 hora central para cerrar las metas de SLA y confirmar la asignación de capacidad del tercer trimestre.",
      },
    ],
  },
};

const DOMAIN_ORDER: readonly DomainKey[] = ["medical", "legal", "business"] as const;

function getLanguageColorClass(lang: SpokenLanguage): string {
  return lang === "EN" ? "text-[#ffffff]" : "text-[#ffaa00]";
}

export function WorkspacePreview() {
  const [activeDomain, setActiveDomain] = useState<DomainKey>("medical");
  const activeScenario = SCENARIOS[activeDomain];

  return (
    <div className="mt-12 border border-[#27272a] bg-[#09090b]">
      {/* Window Chrome + Interactive Domain Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#27272a] bg-[#111113] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full border border-[#3f3f46] bg-[#18181b]" />
            <span className="h-2.5 w-2.5 rounded-full border border-[#3f3f46] bg-[#18181b]" />
            <span className="h-2.5 w-2.5 rounded-full border border-[#3f3f46] bg-[#18181b]" />
          </div>
          <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-[#fafafa]">
            DUALAI CONSOLE
          </span>
          <span className="hidden text-[#27272a] sm:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden font-mono text-[11px] text-[#71717a] sm:inline">
            {activeScenario.sessionTitle}
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Preview interpretation domain"
          className="inline-flex border border-[#27272a] bg-[#09090b] p-0.5"
        >
          {DOMAIN_ORDER.map((domainKey) => {
            const scenario = SCENARIOS[domainKey];
            const isSelected = scenario.key === activeDomain;
            return (
              <button
                key={scenario.key}
                type="button"
                role="tab"
                id={`tab-${scenario.key}`}
                aria-selected={isSelected}
                aria-controls="workspace-transcript-panel"
                onClick={() => setActiveDomain(scenario.key)}
                className={`px-3 py-1 font-mono text-[11px] transition-colors ${
                  isSelected
                    ? "bg-[#18181b] text-[#fafafa]"
                    : "text-[#71717a] hover:text-[#a1a1aa]"
                }`}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Console Sub-Header (Mirrors DualAI Desktop SubHeader) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#27272a] bg-[#09090b] px-4 py-2 font-mono text-[11px]">
        <div className="flex flex-wrap items-center gap-2.5 text-[#a1a1aa]">
          <span className="inline-flex items-center gap-1.5 border border-[#27272a] bg-[#111113] px-2 py-0.5 text-[#fafafa]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" aria-hidden="true" />
            English (US)
          </span>
          <ArrowRightLeft className="h-3 w-3 text-[#71717a]" strokeWidth={1.5} />
          <span className="inline-flex items-center gap-1.5 border border-[#27272a] bg-[#111113] px-2 py-0.5 text-[#ffaa00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffaa00]" aria-hidden="true" />
            Español (ES)
          </span>
          <span className="hidden text-[#71717a] md:inline">· Auto Two-Way</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[#71717a]">
          <span className="inline-flex items-center gap-1.5">
            <Monitor className="h-3 w-3 text-[#a1a1aa]" strokeWidth={1.5} />
            <Mic className="h-3 w-3 text-[#a1a1aa]" strokeWidth={1.5} />
            <span className="text-[#a1a1aa]">{activeScenario.audioSource}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#10b981] tabular-nums">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
            LIVE · 15-SPEAKER
          </span>
        </div>
      </div>

      {/* Column Headers: Original | Translation */}
      <div className="hidden grid-cols-2 border-b border-[#27272a] bg-[#111113] font-mono text-[11px] uppercase tracking-[0.14em] text-[#71717a] md:grid">
        <div className="border-r border-[#27272a] px-6 py-2">Original</div>
        <div className="px-6 py-2">Translation</div>
      </div>

      {/* Staggered Linear Cascade Transcript Feed (Boxless Flowing Typography) */}
      <div
        id="workspace-transcript-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeScenario.key}`}
        className="divide-y divide-[#18181b] bg-[#09090b]"
      >
        {activeScenario.turns.map((turn) => (
          <div key={turn.id} className="py-1">
            {/* Row 1: Original Utterance (Left Pane) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-5 pt-4 pb-2 md:border-r md:border-[#27272a] md:px-6 md:py-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-[#71717a] tabular-nums">
                  <span>
                    <span className="md:hidden">ORIGINAL · </span>
                    {turn.speaker}
                  </span>
                  <span>
                    {turn.sourceLang} · {turn.timestamp}
                  </span>
                </div>
                <p
                  className={`text-[15px] leading-[1.6] font-normal ${getLanguageColorClass(
                    turn.sourceLang,
                  )}`}
                >
                  {turn.original}
                </p>
              </div>
              <div className="hidden md:block md:px-6 md:py-4" aria-hidden="true" />
            </div>

            {/* Row 2: Staggered Target Translation (One Row Below, Right Pane) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="hidden md:block md:border-r md:border-[#27272a] md:px-6 md:py-4"
                aria-hidden="true"
              />
              <div className="border-t border-[#18181b] px-5 pt-2.5 pb-4 md:border-t-0 md:px-6 md:py-4">
                <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-[#71717a] tabular-nums">
                  <span>
                    <span className="md:hidden">TRANSLATION · </span>
                    TARGET {turn.targetLang}
                  </span>
                  <span>{turn.latencyMs}ms</span>
                </div>
                <p
                  className={`text-[15px] leading-[1.6] font-normal ${getLanguageColorClass(
                    turn.targetLang,
                  )}`}
                >
                  {turn.translation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Console Footer Status Rail */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#27272a] bg-[#111113] px-4 py-2 font-mono text-[11px] text-[#71717a]">
        <div className="flex items-center gap-2 text-[#a1a1aa]">
          <ShieldCheck className="h-3.5 w-3.5 text-[#10b981]" strokeWidth={1.5} />
          <span>Zero-Data Retention Active · Volatile RAM Only</span>
        </div>
        <div className="flex items-center gap-4 tabular-nums">
          <span>Font: 16px (13px–28px)</span>
          <span className="hidden sm:inline">Teleprompter HUD: Ready</span>
        </div>
      </div>
    </div>
  );
}
