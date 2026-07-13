"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product, Variant } from "@/lib/types";

function cartKey(productId: string, variant: Variant): string {
  return `${productId}__${variant}`;
}

function itemPrice(item: CartItem): number {
  return item.variant === "bulk" && item.product.bulkPrice != null
    ? item.product.bulkPrice
    : item.product.price;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number, variant?: Variant) => void;
  removeItem: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  itemCount: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, variant: Variant = "small") => {
        const key = cartKey(product.id, variant);
        const items = get().items;
        const existing = items.find((i) => i.key === key);
        if (existing) {
          set({
            items: items.map((i) =>
              i.key === key ? { ...i, quantity: i.quantity + quantity } : i
            ),
          });
        } else {
          set({ items: [...items, { product, quantity, variant, key }] });
        }
        set({ isOpen: true });
      },

      removeItem: (key) =>
        set({ items: get().items.filter((i) => i.key !== key) }),

      setQuantity: (key, quantity) => {
        if (quantity <= 0) {
          get().removeItem(key);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.key === key ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      itemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + itemPrice(i) * i.quantity, 0),
    }),
    {
      name: "khanya-seedlings-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
