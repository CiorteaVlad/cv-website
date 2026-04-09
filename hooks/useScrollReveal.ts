"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const IN_VIEW_OPTIONS = { once: true, margin: "-80px" as const };

/**
 * Reusable viewport hook using framer-motion's useInView with one-shot reveal and top offset.
 */
export function useScrollReveal<T extends Element = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, IN_VIEW_OPTIONS);
  return { ref, isInView };
}
