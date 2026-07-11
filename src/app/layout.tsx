import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
  title: "Khanya Seedlings — Local Growth for Local Farmers | Bulawayo",
  description:
    "Bulawayo's trusted seedling nursery. Browse healthy, locally-grown vegetable seedlings and order via WhatsApp. Available now or pre-order for the next planting season.",
  keywords: [
    "seedlings Bulawayo",
    "Zimbabwe nursery",
    "vegetable seedlings",
    "tomato seedlings",
    "cabbage seedlings",
    "local farmers Zimbabwe",
    "WhatsApp order seedlings",
  ],
  authors: [{ name: "Khanya Seedlings" }],
  openGraph: {
    title: "Khanya Seedlings — Local Growth for Local Farmers",
    description:
      "Browse healthy, locally-grown vegetable seedlings in Bulawayo and order via WhatsApp.",
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
        className={`${geistSans.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
