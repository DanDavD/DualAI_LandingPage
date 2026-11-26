export const metadata = { title: "Payment complete", robots: { index: false } };

export default function CheckoutSuccessPage() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-2 bg-[#0b0d12] text-white">
      <p className="text-lg font-semibold">Payment complete ✓</p>
      <p className="text-sm text-white/60">Returning to DualAI…</p>
    </div>
  );
}
