import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProducts } from "@/data/products";
import { getFarmersGuide } from "@/data/farmers-guide";
import { ProductDetail } from "@/components/site/product-detail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === id);
  if (!product) return {};

  return {
    title: `${product.name} — Seedlings on 44 | Bulawayo`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Seedlings on 44`,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const guide = getFarmersGuide(product.id);

  return <ProductDetail product={product} guide={guide} />;
}
