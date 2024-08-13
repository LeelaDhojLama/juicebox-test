"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface LenisProps {
  root: boolean;
  options?: {};
  children?: ReactNode;
}

export default function SmoothScroll({ root, options, children }: LenisProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
