import { getProducts } from "@/data/products";
import { ProductGrid } from "@/components/site/product-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Seedlings · Seedlings on 44 | Bulawayo",
  description:
    "Browse our selection of healthy, locally-grown vegetable seedlings at Seedlings on 44. Available now or pre-order for the next planting season. Order via WhatsApp.",
};

export default async function ShopPage() {
  const products = await getProducts();
  return <ProductGrid products={products} />;
}
