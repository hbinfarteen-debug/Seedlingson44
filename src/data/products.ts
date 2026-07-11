import type { Category, Product } from "@/lib/types";

/**
 * Static product catalog.
 *
 * Shape mirrors a Google Sheet row, so you can later replace `getProducts()`
 * with a fetch to a published-sheet JSON endpoint (or a Next.js API route
 * that reads the sheet) without changing any component contracts.
 */
export const products: Product[] = [
  {
    id: "roma-tomato",
    name: "Roma Tomato",
    scientificName: "Solanum lycopersicum",
    category: "Fruit",
    variety: "Roma VF",
    price: 6,
    currency: "USD",
    unit: "Tray of 128",
    status: "available",
    image: "/products/tomato.png",
    description:
      "Disease-resistant paste tomato, ideal for Bulawayo's dry winters. Firm flesh, perfect for cooking and preserving.",
    sunlight: "Full Sun",
    daysToMaturity: 75,
    tags: ["Bestseller", "Cooking", "Drought-tolerant"],
  },
  {
    id: "texas-grano-onion",
    name: "Texas Grano Onion",
    scientificName: "Allium cepa",
    category: "Allium",
    variety: "Texas Grano 1015Y",
    price: 5,
    currency: "USD",
    unit: "Tray of 144",
    status: "available",
    image: "/products/onion.png",
    description:
      "Sweet, mild short-day onion that bulks up fast in our winter sun. Stores well after curing.",
    sunlight: "Full Sun",
    daysToMaturity: 110,
    tags: ["Sweet", "Stores well"],
  },
  {
    id: "glory-cabbage",
    name: "Glory Cabbage",
    scientificName: "Brassica oleracea var. capitata",
    category: "Leafy",
    variety: "Glory of Enkhuizen",
    price: 4.5,
    currency: "USD",
    unit: "Tray of 128",
    status: "available",
    image: "/products/cabbage.png",
    description:
      "Reliable open-pollinated cabbage with tight, blue-green heads. A Bulawayo market garden favourite.",
    sunlight: "Full Sun",
    daysToMaturity: 85,
    tags: ["Market garden"],
  },
  {
    id: "california-pepper",
    name: "California Green Pepper",
    scientificName: "Capsicum annuum",
    category: "Fruit",
    variety: "California Wonder",
    price: 7,
    currency: "USD",
    unit: "Tray of 104",
    status: "preorder",
    readyDate: "2025-08-15",
    image: "/products/pepper.png",
    description:
      "Blocky, thick-walled bell peppers. Next batch hardening off now — ready to transplant mid-August.",
    sunlight: "Full Sun",
    daysToMaturity: 75,
    tags: ["Blocky", "Greenhouse friendly"],
  },
  {
    id: "fordhook-spinach",
    name: "Fordhook Spinach",
    scientificName: "Beta vulgaris var. cicla",
    category: "Leafy",
    variety: "Fordhook Giant",
    price: 4,
    currency: "USD",
    unit: "Tray of 128",
    status: "available",
    image: "/products/spinach.png",
    description:
      "Heavy-yielding Swiss chard that handles Bulawayo heat better than true spinach. Cut-and-come-again.",
    sunlight: "Partial Shade",
    daysToMaturity: 55,
    tags: ["Cut-and-come-again", "Heat-tolerant"],
  },
  {
    id: "waltham-butternut",
    name: "Waltham Butternut",
    scientificName: "Cucurbita moschata",
    category: "Squash",
    variety: "Waltham Butternut",
    price: 5.5,
    currency: "USD",
    unit: "Tray of 96",
    status: "preorder",
    readyDate: "2025-09-01",
    image: "/products/butternut.png",
    description:
      "Classic butternut with creamy flesh and excellent storage. Sowing now for spring transplanting.",
    sunlight: "Full Sun",
    daysToMaturity: 100,
    tags: ["Stores well", "Spring planting"],
  },
];

export const categories: Category[] = [
  { id: "all", label: "All Seedlings" },
  { id: "Fruit", label: "Fruit" },
  { id: "Leafy", label: "Leafy" },
  { id: "Allium", label: "Onion & Garlic" },
  { id: "Squash", label: "Squash" },
];

/**
 * Simulates an async fetch from a remote source (Google Sheet / API).
 * Components call this so the data layer can be upgraded later.
 */
export async function getProducts(): Promise<Product[]> {
  // Simulate network latency so loading states are visible in the prototype.
  await new Promise((resolve) => setTimeout(resolve, 350));
  return products;
}
