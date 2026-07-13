import type { CartItem } from "@/lib/types";
import { businessConfig } from "@/lib/config";

function itemPrice(item: CartItem): number {
  return item.variant === "bulk" && item.product.bulkPrice != null
    ? item.product.bulkPrice
    : item.product.price;
}

function itemUnit(item: CartItem): string {
  return item.variant === "bulk" ? item.product.bulkUnit ?? item.product.unit : item.product.unit;
}

function itemLine(item: CartItem): string {
  const unit = itemUnit(item);
  const price = itemPrice(item);
  return `${formatPrice(price)} / ${unit} = ${formatPrice(price * item.quantity)}`;
}

export function formatPrice(amount: number): string {
  const symbol = businessConfig.currencySymbol;
  const formatted = amount.toLocaleString("en-US", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
}

export function formatReadyDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function buildWhatsAppOrderMessage(items: CartItem[]): string {
  const lines: string[] = [];
  lines.push(`*${businessConfig.name}: New Seedling Order*`);
  lines.push("");

  const available = items.filter((i) => i.product.status === "available");
  const preorder = items.filter((i) => i.product.status === "preorder");

  if (available.length) {
    lines.push("*Available Now*");
    available.forEach((i, idx) => {
      lines.push(
        `${idx + 1}. ${i.product.name} (${i.product.variety}) · ${itemUnit(i)} ×${i.quantity}`
      );
      lines.push(`    ${itemLine(i)}`);
    });
    lines.push("");
  }

  if (preorder.length) {
    lines.push("*Pre-order*");
    preorder.forEach((i, idx) => {
      const ready = i.product.readyDate
        ? ` · ready ${formatReadyDate(i.product.readyDate)}`
        : "";
      lines.push(
        `${idx + 1}. ${i.product.name} (${i.product.variety}) · ${itemUnit(i)} ×${i.quantity}`
      );
      lines.push(`    ${itemLine(i)}${ready}`);
    });
    lines.push("");
  }

  const total = items.reduce((s, i) => s + itemPrice(i) * i.quantity, 0);
  const totalUnits = items.reduce((s, i) => s + i.quantity, 0);
  lines.push(`*Total: ${formatPrice(total)}* (${totalUnits} item${totalUnits > 1 ? "s" : ""})`);
  lines.push("");
  lines.push("_Please confirm availability and pickup/delivery. Thank you!_");

  return lines.join("\n");
}

export function buildWhatsAppUrl(items: CartItem[]): string {
  const message = buildWhatsAppOrderMessage(items);
  const text = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${text}`;
}
