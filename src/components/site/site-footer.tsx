import { MapPin, Clock, Phone } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { SproutIcon, WhatsAppIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-auto bg-soil text-soil-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-cream text-soil">
                <SproutIcon className="size-5" />
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                {businessConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              {businessConfig.tagline}. A local seedling nursery raising
              healthy, climate-ready vegetable seedlings for farmers and gardeners
              in {businessConfig.city}, {businessConfig.country}.
            </p>
          </div>

          {/* Visit / hours */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              Visit the nursery
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-leaf" />
                <span>{businessConfig.area}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-leaf" />
                <span>{businessConfig.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-leaf" />
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream hover:underline"
                >
                  +{businessConfig.whatsappNumber.slice(0, 3)}{" "}
                  {businessConfig.whatsappNumber.slice(3)}
                </a>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
              Ready to order?
            </h3>
            <p className="mt-4 text-sm text-cream/75">
              Send us a direct WhatsApp message to check stock, ask about
              varieties, or place a bulk order.
            </p>
            <a
              href={buildWhatsAppUrl([])}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="size-4" />
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {businessConfig.name}. All rights
            reserved.
          </p>
          <p className="font-medium text-cream/80">
            Local Growth for Local Farmers 🌱
          </p>
        </div>
      </div>
    </footer>
  );
}
