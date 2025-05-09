"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Importazione dinamica del componente SVGWireframe
const SVGWireframe = dynamic(() => import("./SVGWireframe"), {
  ssr: false,
});

interface WireframeWrapperProps {
  children: ReactNode;
  color?: string;
  duration?: number;
}

export default function WireframeWrapper({
  children,
  color = "var(--foreground)",
  duration = 2000,
}: WireframeWrapperProps) {
  return (
    <SVGWireframe color={color} duration={duration}>
      {children}
    </SVGWireframe>
  );
}
