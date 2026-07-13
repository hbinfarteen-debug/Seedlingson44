import { SproutIcon, WhatsAppIcon } from "./icons";
import { ClipboardList } from "lucide-react";

const steps = [
  {
    icon: SproutIcon,
    title: "1 · Browse & Add",
    body: "Pick from seedlings ready to transplant now, or pre-order for the next planting season. Add what you need to your cart.",
  },
  {
    icon: ClipboardList,
    title: "2 · Review Your Order",
    body: "Open the cart to adjust quantities and see your total. No account, no online payment: just a tidy order slip.",
  },
  {
    icon: WhatsAppIcon,
    title: "3 · Checkout on WhatsApp",
    body: "One tap compiles your order into a message and opens WhatsApp to the nursery. Confirm availability and arrange pickup or delivery.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="nursery-texture border-y border-border/60 bg-muted"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            How it works
          </span>
          <h2 className="mt-2 whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From our seedbed to your seedbed in 3 steps
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            A simple, guerrilla-style ordering flow built for local farmers: no
            apps to install, no accounts to create.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative flex flex-col items-start rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="size-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
