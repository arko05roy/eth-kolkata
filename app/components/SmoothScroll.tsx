"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      autoToggle: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
