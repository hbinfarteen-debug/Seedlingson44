"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBasket, Leaf } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useMounted } from "@/hooks/use-mounted";
import { formatPrice } from "@/lib/whatsapp";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { businessConfig } from "@/lib/config";
import { WhatsAppIcon } from "./icons";
import { toast } from "sonner";

function itemPrice(item: ReturnType<typeof useCartStore.getState>["items"][number]): number {
  return item.variant === "bulk" && item.product.bulkPrice != null
    ? item.product.bulkPrice
    : item.product.price;
}

function itemUnit(item: ReturnType<typeof useCartStore.getState>["items"][number]): string {
  return item.variant === "bulk" ? item.product.bulkUnit ?? item.product.unit : item.product.unit;
}

export function CartDrawer() {
  const mounted = useMounted();
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);

  const subtotal = items.reduce(
    (sum, i) => sum + itemPrice(i) * i.quantity,
    0
  );
  const totalUnits = items.reduce((sum, i) => sum + i.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppUrl(items);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…", {
      description: "Your order is ready to send to the nursery.",
    });
  };

  const safeItems = mounted ? items : [];
  const safeSubtotal = mounted ? subtotal : 0;
  const safeUnits = mounted ? totalUnits : 0;

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border/60 bg-primary/5 px-5 py-4">
          <SheetTitle className="flex items-center gap-2 font-display text-lg">
            <ShoppingBasket className="size-5 text-primary" />
            Your Seedling Order
          </SheetTitle>
          <SheetDescription>
            {safeUnits > 0
              ? `${safeUnits} item${safeUnits > 1 ? "s" : ""} ready to send`
              : "Your cart is empty"}
          </SheetDescription>
        </SheetHeader>

        {safeItems.length === 0 ? (
          <EmptyCart onClose={closeCart} />
        ) : (
          <>
            <div className="nursery-scroll flex-1 overflow-y-auto px-3 py-3">
              <ul className="flex flex-col gap-2">
                {safeItems.map((item) => (
                  <li
                    key={item.key}
                    className="flex gap-3 rounded-xl border border-border/60 bg-card p-2.5"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                      {item.product.image && (
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-foreground">
                            {item.product.name}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {item.product.variety} &middot; {itemUnit(item)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-1.5">
                        <QuantityStepper
                          quantity={item.quantity}
                          onDec={() =>
                            setQuantity(item.key, item.quantity - 1)
                          }
                          onInc={() =>
                            setQuantity(item.key, item.quantity + 1)
                          }
                        />
                        <p className="text-sm font-semibold text-foreground">
                          {formatPrice(itemPrice(item) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-border/60 bg-background px-5 pt-4">
              <div className="flex gap-2 rounded-lg bg-accent/50 p-3 text-xs leading-relaxed text-accent-foreground">
                <Leaf className="mt-0.5 size-4 shrink-0" />
                <p>{businessConfig.fulfillmentNote}</p>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-semibold text-foreground">
                  {formatPrice(safeSubtotal)}
                </span>
              </div>

              <Button
                onClick={handleCheckout}
                size="lg"
                className="gap-2 bg-[#25D366] text-white shadow-md hover:bg-[#1fb255]"
              >
                <WhatsAppIcon className="size-5" />
                Checkout via WhatsApp
              </Button>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={clearCart}
                  className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-destructive hover:underline"
                >
                  Clear cart
                </button>
                <span className="text-[11px] text-muted-foreground">
                  No payment online &middot; pay on collection
                </span>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function QuantityStepper({
  quantity,
  onDec,
  onInc,
}: {
  quantity: number;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-background">
      <button
        onClick={onDec}
        className="flex size-7 items-center justify-center rounded-l-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="min-w-6 text-center text-sm font-semibold tabular-nums text-foreground">
        {quantity}
      </span>
      <button
        onClick={onInc}
        className="flex size-7 items-center justify-center rounded-r-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-accent/60">
        <ShoppingBasket className="size-8 text-accent-foreground" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
        Your cart is empty
      </h3>
      <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
        Browse our seedlings and tap{" "}
        <span className="font-medium text-primary">Add to Cart</span> to start your
        order.
      </p>
      <Button onClick={onClose} className="mt-5 gap-2" variant="outline">
        Browse seedlings
      </Button>
    </div>
  );
}
