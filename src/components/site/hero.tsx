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
      className="relative isolate overflow-hidden bg-soil text-cream"
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
        {/* Earthy overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-soil/90 via-soil/70 to-soil/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/85 via-transparent to-soil/40" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
            <Leaf className="size-3.5" />
            {businessConfig.city}&apos;s Local Seedling Nursery
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Local Growth
            <br />
            for Local Farmers
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Healthy, climate-ready vegetable seedlings raised in Bulawayo.
            Browse what&apos;s ready now, pre-order for the next season, and
            check out in one tap on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-leaf text-leaf-foreground shadow-md hover:bg-leaf/90"
            >
              <a href="#shop">
                Browse Seedlings
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream/30 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20 hover:text-cream"
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
                className="flex items-center gap-3 rounded-xl border border-cream/15 bg-cream/5 p-3 backdrop-blur-sm"
              >
                <s.icon className="size-5 shrink-0 text-leaf" />
                <div className="leading-tight">
                  <dt className="text-sm font-semibold text-cream">
                    {s.label}
                  </dt>
                  <dd className="text-xs text-cream/70">{s.sub}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
