"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Sun, Clock, Tag, Sprout, Bug, Lightbulb, Droplets, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product, Variant } from "@/lib/types";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, formatReadyDate } from "@/lib/whatsapp";
import { toast } from "sonner";
import { WhatsAppIcon } from "./icons";
import type { FarmersGuide } from "@/data/farmers-guide";

interface ProductDetailProps {
  product: Product;
  guide?: FarmersGuide;
}

export function ProductDetail({ product, guide }: ProductDetailProps) {
  const addItem = useCartStore((s) => s.addItem);
  const isAvailable = product.status === "available";
  const isComingSoon = product.status === "coming-soon";
  const hasBulk = product.bulkPrice != null;

  const [variant, setVariant] = useState<Variant>("small");

  const currentPrice = variant === "bulk" ? product.bulkPrice! : product.price;
  const currentUnit = variant === "bulk" ? product.bulkUnit! : product.unit;

  const handleAdd = () => {
    addItem(product, 1, variant);
    toast.success(`${product.name} added to cart`, {
      description: isAvailable
        ? `${currentUnit} · checkout on WhatsApp`
        : `Pre-order · ready ${formatReadyDate(product.readyDate!)}`,
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Back link */}
      <Link
        href="/shop"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronLeft className="size-4" />
        Back to seedlings
      </Link>

      {/* Product hero */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-md">
          {product.image && (
            <Image
              src={product.image}
              alt={`${product.name} seedling`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute left-4 top-4">
            <ProductStatusBadge status={product.status} />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <h1 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          {product.scientificName && (
            <p className="mt-1 text-sm italic text-muted-foreground">
              {product.scientificName}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            <DetailSpecChip icon={Sun} label={product.sunlight} />
            <DetailSpecChip icon={Clock} label={`${product.daysToMaturity} days to maturity`} />
            <DetailSpecChip icon={Tag} label={product.variety} />
          </div>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Price */}
          {!isComingSoon && (
            <div className="mt-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-primary">
                  {formatPrice(currentPrice)}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {currentUnit}
                </span>
              </div>
            </div>
          )}

          {/* Variant toggle */}
          {hasBulk && !isComingSoon && (
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setVariant("small")}
                className={cn(
                  "flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all",
                  variant === "small"
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
              >
                <span className="block text-base font-semibold">{product.unit}</span>
                <span className="mt-0.5 block text-xs opacity-80">
                  {formatPrice(product.price)}
                </span>
              </button>
              <button
                onClick={() => setVariant("bulk")}
                className={cn(
                  "flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all",
                  variant === "bulk"
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
              >
                <span className="block text-base font-semibold">{product.bulkUnit}</span>
                <span className="mt-0.5 block text-xs opacity-80">
                  {formatPrice(product.bulkPrice!)}
                </span>
              </button>
            </div>
          )}

          {/* Add to cart */}
          {!isComingSoon && (
            <Button
              onClick={handleAdd}
              size="lg"
              className={cn(
                "mt-6 w-full gap-3 text-base",
                isAvailable
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                  : "bg-harvest text-harvest-foreground shadow-md hover:bg-harvest/90"
              )}
            >
              <Plus className="size-5" />
              Add {currentUnit}
            </Button>
          )}

          {isComingSoon && product.readyDate && (
            <p className="mt-6 text-center text-base font-medium text-muted-foreground">
              Available {formatReadyDate(product.readyDate)}
            </p>
          )}

          {!isComingSoon && (
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Checkout via WhatsApp · pay on collection
            </p>
          )}
        </div>
      </div>

      {/* Farmer's Guide */}
      {guide && (
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Sprout className="size-6 text-primary" />
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Farmer&apos;s Guide for {product.name}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <GuideCard
              icon={Sprout}
              title="Ideal Planting Season"
              content={guide.plantingSeason}
            />
            <GuideCard
              icon={Droplets}
              title="Watering Requirements"
              content={guide.watering}
            />
            <GuideCard
              icon={Sun}
              title="Soil & Sunlight Needs"
              content={guide.soilSunlight}
            />
            <GuideCard
              icon={Bug}
              title="Common Pests & Diseases"
              content={
                <ul className="list-disc space-y-1 pl-4">
                  {guide.pests.map((pest, i) => (
                    <li key={i}>{pest}</li>
                  ))}
                </ul>
              }
            />
          </div>

          <div className="mt-5 rounded-2xl border border-secondary/40 bg-secondary/10 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <Lightbulb className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Pro Farmer Tip</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {guide.proTip}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function ProductStatusBadge({ status }: { status: Product["status"] }) {
  if (status === "available") {
    return (
      <Badge className="gap-1.5 border-0 bg-leaf text-leaf-foreground px-3 py-1.5 text-xs shadow-sm">
        <span className="size-1.5 rounded-full bg-leaf-foreground/90" />
        Available Now
      </Badge>
    );
  }
  if (status === "preorder") {
    return (
      <Badge className="gap-1.5 border-0 bg-harvest text-harvest-foreground px-3 py-1.5 text-xs shadow-sm">
        <span className="size-1.5 rounded-full bg-harvest-foreground/80" />
        Pre-order
      </Badge>
    );
  }
  return (
    <Badge className="gap-1.5 border-0 bg-muted-foreground/20 text-muted-foreground px-3 py-1.5 text-xs shadow-sm">
      <span className="size-1.5 rounded-full bg-muted-foreground/60" />
      Coming Soon
    </Badge>
  );
}

function DetailSpecChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground">
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}

function GuideCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string | React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <h3 className="font-display text-base font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
        {content}
      </div>
    </div>
  );
}
