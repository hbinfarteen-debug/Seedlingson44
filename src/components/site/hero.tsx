import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf, Truck, Sprout } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { WhatsAppIcon } from "./icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const stats = [
  { icon: Sprout, label: "12+ varieties", sub: "Locally grown" },
  { icon: Leaf, label: "Hardened off", sub: "Ready to transplant" },
  { icon: Truck, label: "WhatsApp orders", sub: "Pickup or delivery" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="Rows of healthy green seedlings growing at a local Bulawayo nursery at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Forest green overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/40" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground backdrop-blur-sm">
            <Leaf className="size-3.5" />
            {businessConfig.city}&apos;s Local Seedling Nursery
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Local Growth
            <br />
            for Local Farmers
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Healthy, climate-ready vegetable seedlings raised in Bulawayo.
            Browse what&apos;s ready now, pre-order for the next season, and
            check out in one tap on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary shadow-md hover:bg-primary-foreground/90"
            >
              <a href="/shop">
                Browse Seedlings
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <a
                href={buildWhatsAppUrl([])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-3 backdrop-blur-sm"
              >
                <s.icon className="size-5 shrink-0 text-secondary" />
                <div className="leading-tight">
                  <dt className="text-sm font-semibold text-primary-foreground">
                    {s.label}
                  </dt>
                  <dd className="text-xs text-primary-foreground/70">{s.sub}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
