"use client";

import Image from "next/image";
import { Plus, Sun, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, formatReadyDate } from "@/lib/whatsapp";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const isAvailable = product.status === "available";

  const handleAdd = () => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart`, {
      description: isAvailable
        ? "Ready to transplant — checkout on WhatsApp."
        : `Pre-order · ready ${formatReadyDate(product.readyDate!)}`,
    });
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={`${product.name} seedling in a biodegradable tray`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge */}
        <div className="absolute left-3 top-3">
          <StatusBadge status={product.status} />
        </div>
        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-soil backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
              {product.name}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              <span className="italic">{product.scientificName}</span>
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-display text-lg font-semibold text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="text-[11px] text-muted-foreground">{product.unit}</p>
          </div>
        </div>

        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Spec chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <SpecChip icon={Sun} label={product.sunlight} />
          <SpecChip
            icon={Clock}
            label={`${product.daysToMaturity} days`}
          />
          <SpecChip icon={Tag} label={product.variety} />
        </div>

        {/* Action */}
        <div className="mt-4 flex-1" />
        <Button
          onClick={handleAdd}
          className={cn(
            "w-full gap-2",
            isAvailable
              ? "bg-leaf text-leaf-foreground shadow-sm hover:bg-leaf/90"
              : "bg-harvest text-harvest-foreground shadow-sm hover:bg-harvest/90"
          )}
        >
          <Plus className="size-4" />
          {isAvailable ? "Add to Cart" : "Pre-order"}
        </Button>
        {!isAvailable && product.readyDate && (
          <p className="mt-2 text-center text-[11px] font-medium text-harvest">
            Ready {formatReadyDate(product.readyDate)}
          </p>
        )}
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: Product["status"] }) {
  if (status === "available") {
    return (
      <Badge className="gap-1 border-0 bg-leaf text-leaf-foreground shadow-sm">
        <span className="size-1.5 rounded-full bg-leaf-foreground/90" />
        Available Now
      </Badge>
    );
  }
  return (
    <Badge className="gap-1 border-0 bg-harvest text-harvest-foreground shadow-sm">
      <span className="size-1.5 rounded-full bg-harvest-foreground/80" />
      Pre-order
    </Badge>
  );
}

function SpecChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-accent/60 px-2 py-0.5 text-[11px] font-medium text-accent-foreground">
      <Icon className="size-3" />
      {label}
    </span>
  );
}
