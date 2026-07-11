"use client";

import { useMemo, useState } from "react";
import { Search, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";
import type { Product } from "@/lib/types";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.variety.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [products, activeCategory, query]);

  const availableCount = products.filter(
    (p) => p.status === "available"
  ).length;
  const preorderCount = products.length - availableCount;

  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Section header */}
      <div className="flex flex-col gap-6 border-b border-border/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Leaf className="size-3.5" />
            Our Seedlings
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Browse what&apos;s growing
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            {availableCount} ready to transplant now
            {preorderCount > 0 && ` · ${preorderCount} available for pre-order`}.
            Tap{" "}
            <span className="font-medium text-leaf">Add to Cart</span> or{" "}
            <span className="font-medium text-harvest">Pre-order</span> to build
            your order.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search seedlings…"
            className="pl-9"
            aria-label="Search seedlings"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count =
            cat.id === "all"
              ? products.length
              : products.filter((p) => p.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {cat.label}
              <span
                className={cn(
                  "rounded-full px-1.5 text-[11px] tabular-nums",
                  activeCategory === cat.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-float-in"
              style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-16 text-center">
          <Leaf className="size-8 text-muted-foreground/60" />
          <p className="mt-3 font-medium text-foreground">
            No seedlings match your search
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different category or clear your search.
          </p>
        </div>
      )}
    </section>
  );
}
