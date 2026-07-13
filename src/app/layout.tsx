import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CartDrawer } from "@/components/site/cart-drawer";
import { WhatsAppCheckout } from "@/components/site/whatsapp-checkout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seedlings on 44: Local Growth for Local Farmers | Bulawayo",
  description:
    "Donnington, Bulawayo's trusted seedling nursery. Browse healthy, locally-grown vegetable seedlings and order via WhatsApp. Available now or pre-order for the next planting season.",
  keywords: [
    "seedlings Bulawayo",
    "Donnington nursery",
    "vegetable seedlings",
    "Seedlings on 44",
    "local farmers Zimbabwe",
    "WhatsApp order seedlings",
  ],
  authors: [{ name: "Seedlings on 44" }],
  openGraph: {
    title: "Seedlings on 44: Local Growth for Local Farmers",
    description:
      "Browse healthy, locally-grown vegetable seedlings in Donnington, Bulawayo and order via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${fraunces.variable} antialiased flex min-h-screen flex-col bg-background text-foreground`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CartDrawer />
        <WhatsAppCheckout />
        <Toaster />
      </body>
    </html>
  );
}
