"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/cart-store";
import { useMounted } from "@/hooks/use-mounted";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "sonner";
import { WhatsAppIcon } from "./icons";

/**
 * Floating WhatsApp checkout button, the "guerrilla" twist.
 * Behaves like a native app FAB: fixed bottom-right, pulsing glow,
 * pill-shaped on desktop, circular on mobile, with a live count badge.
 */
export function WhatsAppCheckout() {
  const mounted = useMounted();
  const items = useCartStore((s) => s.items);
  const openCart = useCartStore((s) => s.openCart);

  const count = mounted ? items.reduce((s, i) => s + i.quantity, 0) : 0;
  const visible = mounted && count > 0;

  const handleCheckout = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppUrl(items);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…", {
      description: "Send the message to complete your order.",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6"
        >
          <div className="flex items-center gap-2">
            {/* Peek at cart */}
            <button
              onClick={openCart}
              aria-label="View cart"
              className="hidden size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-accent sm:flex"
            >
              <CartIcon />
            </button>

            {/* WhatsApp FAB */}
            <button
              onClick={handleCheckout}
              aria-label={`Checkout ${count} items on WhatsApp`}
              className="animate-whatsapp-pulse group relative flex h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-5 text-white shadow-xl transition-transform hover:scale-[1.03] active:scale-95 sm:pr-6"
            >
              <WhatsAppIcon className="size-6 shrink-0" />
              <span className="hidden text-left sm:block">
                <span className="block text-[10px] font-medium uppercase tracking-wide leading-none text-white/80">
                  Checkout
                </span>
                <span className="block text-sm font-bold leading-tight">
                  via WhatsApp
                </span>
              </span>

              {/* Count badge */}
              <span className="absolute -right-1 -top-1 flex min-w-6 items-center justify-center rounded-full border-2 border-background bg-harvest px-1.5 text-xs font-bold tabular-nums text-harvest-foreground shadow">
                {count}
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
