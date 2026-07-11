/**
 * Central business configuration.
 * Swap these values for the real nursery details when going live.
 */
export const businessConfig = {
  name: "Khanya Seedlings",
  tagline: "Local Growth for Local Farmers",
  city: "Bulawayo",
  country: "Zimbabwe",
  /** WhatsApp / phone number in international format, no "+", spaces or dashes. */
  whatsappNumber: "263771234567",
  /** Email / location extras */
  area: "Burnside, Bulawayo",
  hours: "Mon–Sat · 7:00 AM – 5:00 PM",
  currency: "USD",
  currencySymbol: "$",
  /** Delivery / pickup note shown at checkout */
  fulfillmentNote:
    "Pickup in Burnside or arrange local delivery within Bulawayo. Payment on collection — cash or EcoCash.",
} as const;

export type BusinessConfig = typeof businessConfig;
