"use client";

import { useSyncExternalStore } from "react";

/**
 * Returns false during SSR and the first client render (hydration),
 * then true once mounted. Hydration-safe and avoids setState-in-effect.
 */
const emptySubscribe = () => () => {};
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot
    () => false // server snapshot
  );
}
