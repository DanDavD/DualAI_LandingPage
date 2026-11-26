"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Paddle?: {
      Initialize: (options: Record<string, unknown>) => void;
    };
  }
}

// Client-side tokens are public by design (live_ prefix = production).
const CLIENT_TOKEN =
  process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || "live_685ab9f54e8d204673bcbf54d8f";

/**
 * Minimal Paddle checkout host. Opened by the DualAI desktop app inside an in-app
 * window with ?_ptxn=<transaction_id>. Paddle.js auto-opens the inline one-page checkout for that transaction.
 */
export default function CheckoutPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const origin = window.location.origin;
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => {
      try {
        window.Paddle?.Initialize({
          token: CLIENT_TOKEN,
          checkout: {
            settings: {
              displayMode: "inline",
              variant: "one-page",
              frameTarget: "dualai-checkout-frame",
              frameInitialHeight: 560,
              frameStyle:
                "width:100%; min-width:312px; background-color:transparent; border:none;",
              theme: "dark",
              locale: "en",
              successUrl: `${origin}/checkout/success`,
            },
          },
          eventCallback: (event: { name?: string }) => {
            if (event.name === "checkout.closed") {
              window.location.assign("/checkout/closed");
            }
          },
        });
      } catch {
        setError("Unable to start secure checkout.");
      }
    };
    script.onerror = () => setError("Unable to load secure checkout.");
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#0b0d12] px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-[460px]">
        {error ? <p className="text-center text-sm text-red-300">{error}</p> : null}
        <div className="dualai-checkout-frame" />
      </div>
    </div>
  );
}
