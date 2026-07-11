import { getProducts } from "@/data/products";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { ProductGrid } from "@/components/site/product-grid";
import { HowItWorks } from "@/components/site/how-it-works";
import { CartDrawer } from "@/components/site/cart-drawer";
import { WhatsAppCheckout } from "@/components/site/whatsapp-checkout";
import { SiteFooter } from "@/components/site/site-footer";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductGrid products={products} />
        <HowItWorks />
      </main>
      <SiteFooter />

      {/* Overlays */}
      <CartDrawer />
      <WhatsAppCheckout />
    </div>
  );
}
