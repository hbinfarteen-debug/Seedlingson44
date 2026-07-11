"use client";

import { ShoppingCart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useMounted } from "@/hooks/use-mounted";
import { businessConfig } from "@/lib/config";
import { SproutIcon } from "./icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#shop", label: "Seedlings" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const mounted = useMounted();
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartStore((s) => s.openCart);
  const count = mounted ? itemCount : 0;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <SproutIcon className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              {businessConfig.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {businessConfig.city} · {businessConfig.country}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cart */}
        <Button
          onClick={openCart}
          variant="outline"
          size="sm"
          className="relative gap-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary"
          aria-label={`Open cart, ${count} items`}
        >
          <ShoppingCart className="size-4" />
          <span className="hidden sm:inline">Cart</span>
          <CartBadge count={count} />
        </Button>
      </div>
    </header>
  );
}

function CartBadge({ count }: { count: number }) {
  return (
    <span
      className={cn(
        "flex min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold tabular-nums transition-all",
        count > 0
          ? "bg-primary text-primary-foreground scale-100"
          : "bg-muted text-muted-foreground scale-90"
      )}
    >
      {count}
    </span>
  );
}
