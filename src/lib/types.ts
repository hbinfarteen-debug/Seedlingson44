/**
 * Product data model for the seedling nursery.
 *
 * This interface is intentionally flat and JSON-friendly so it can be
 * swapped for a Google Sheets / API source later without touching the UI.
 */

export type ProductStatus = "available" | "preorder";

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
  /** ISO date string for pre-order items — when stock will be ready */
  readyDate?: string;
  /** Local image path under /public */
  image: string;
  description: string;
  sunlight: Sunlight;
  /** Approx days from transplant to harvest */
  daysToMaturity: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  label: string;
}
