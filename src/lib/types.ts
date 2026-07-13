/**
 * Product data model for the seedling nursery.
 *
 * This interface is intentionally flat and JSON-friendly so it can be
 * swapped for a Google Sheets / API source later without touching the UI.
 */

export type ProductStatus = "available" | "preorder" | "coming-soon";

export type Sunlight = "Full Sun" | "Partial Shade" | "Shade";

export interface Product {
  /** Unique slug-style id, e.g. "roma-tomato" */
  id: string;
  /** Display name, e.g. "Roma Tomato" */
  name: string;
  /** Optional botanical name for a professional touch */
  scientificName?: string;
  /** Broad grouping: "Fruit", "Leafy", "Root", "Squash", "Allium" */
  category: string;
  /** Specific cultivar, e.g. "Roma VF" */
  variety: string;
  /** Price in the nursery's currency (USD in Zimbabwe) */
  price: number;
  currency: string;
  /** How the item is sold, e.g. "Tray of 128" */
  unit: string;
  status: ProductStatus;
  /** Bulk pricing for larger quantities, e.g. $55 / 1000 seedlings */
  bulkPrice?: number;
  /** Bulk unit label, e.g. "1000 seedlings" */
  bulkUnit?: string;
  /** ISO date string for pre-order or coming-soon items */
  readyDate?: string;
  /** Local image path under /public */
  image?: string;
  description: string;
  sunlight: Sunlight;
  /** Approx days from transplant to harvest */
  daysToMaturity: number;
  tags: string[];
}

export type Variant = "small" | "bulk";

export interface CartItem {
  product: Product;
  quantity: number;
  variant: Variant;
  key: string;
}

export interface Category {
  id: string;
  label: string;
}
