import type { CartItem } from "@/lib/types";
import { businessConfig } from "@/lib/config";

/** Format a price in the nursery's currency. */
export function formatPrice(amount: number, currency = businessConfig.currency): string {
  const symbol = businessConfig.currencySymbol;
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
}

/** Human-friendly date for pre-order ready dates. */
export function formatReadyDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Compiles the cart into a structured WhatsApp message string.
 * Mirrors a tidy order slip the business owner can read at a glance.
 */
export function buildWhatsAppOrderMessage(items: CartItem[]): string {
  const lines: string[] = [];
  lines.push(`*${businessConfig.name} — New Seedling Order*`);
  lines.push("");

  const available = items.filter((i) => i.product.status === "available");
  const preorder = items.filter((i) => i.product.status === "preorder");

  if (available.length) {
    lines.push("*Available Now*");
    available.forEach((i, idx) => {
      lines.push(
        `${idx + 1}. ${i.product.name} (${i.product.variety}) ×${i.quantity}`
      );
      lines.push(
        `    ${formatPrice(i.product.price)} / ${i.product.unit} = ${formatPrice(
          i.product.price * i.quantity
        )}`
      );
    });
    lines.push("");
  }

  if (preorder.length) {
    lines.push("*Pre-order*");
    preorder.forEach((i, idx) => {
      lines.push(
        `${idx + 1}. ${i.product.name} (${i.product.variety}) ×${i.quantity}`
      );
      const ready = i.product.readyDate
        ? ` · ready ${formatReadyDate(i.product.readyDate)}`
        : "";
      lines.push(
        `    ${formatPrice(i.product.price)} / ${i.product.unit} = ${formatPrice(
          i.product.price * i.quantity
        )}${ready}`
      );
    });
    lines.push("");
  }

  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const totalUnits = items.reduce((s, i) => s + i.quantity, 0);
  lines.push(`*Total: ${formatPrice(total)}* (${totalUnits} tray/trays)`);
  lines.push("");
  lines.push("_Please confirm availability and pickup/delivery. Thank you!_");

  return lines.join("\n");
}

/** Builds a wa.me deep link with the pre-filled order message. */
export function buildWhatsAppUrl(items: CartItem[]): string {
  const message = buildWhatsAppOrderMessage(items);
  const text = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${text}`;
}
