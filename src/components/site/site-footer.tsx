import { MapPin, Clock, Phone } from "lucide-react";
import { businessConfig } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";
import { WhatsAppIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-auto bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/seedlings.png"
                alt="Seedlings on 44"
                width={64}
                height={64}
              />
              <span className="font-display text-lg font-semibold text-primary-foreground">
                {businessConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              {businessConfig.tagline}. A local seedling nursery raising
              healthy, climate-ready vegetable seedlings for farmers and gardeners
              in {businessConfig.city}, {businessConfig.country}.
            </p>
          </div>

          {/* Visit / hours */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Visit the nursery
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span>{businessConfig.area}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span>{businessConfig.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground hover:underline"
                >
                  +{businessConfig.whatsappNumber.slice(0, 3)}{" "}
                  {businessConfig.whatsappNumber.slice(3)}
                </a>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground">
              Ready to order?
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/75">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {businessConfig.name}. All rights
            reserved.
          </p>
          <p className="font-medium text-primary-foreground/80">
            Local Growth for Local Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
