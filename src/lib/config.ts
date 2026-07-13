/**
 * Central business configuration.
 * Swap these values for the real nursery details when going live.
 */
export const businessConfig = {
  name: "Seedlings on 44",
  tagline: "Local Growth for Local Farmers",
  city: "Bulawayo",
  country: "Zimbabwe",
  /** WhatsApp / phone number in international format, no "+", spaces or dashes. */
  whatsappNumber: "263713647937",
  /** Email / location extras */
  area: "5 Aston Road, Donnington, Bulawayo",
  hours: "Mon–Sat · 7:00 AM – 1:00 PM",
  currency: "USD",
  currencySymbol: "$",
  /** Delivery / pickup note shown at checkout */
  fulfillmentNote:
    "Pickup at 5 Aston Road, Donnington or arrange local delivery within Bulawayo. Payment on collection: cash or EcoCash.",
} as const;

export type BusinessConfig = typeof businessConfig;
