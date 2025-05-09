"use client";

import { useEffect, useRef, ReactNode } from "react";
// @ts-ignore
import anime from "animejs";
import { useInView } from "react-intersection-observer";

interface TextWireframeProps {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
}

export default function TextWireframe({
  children,
  className = "",
  color = "currentColor",
  duration = 1000,
  delay = 0,
  staggerDelay = 20,
  threshold = 0.1,
}: TextWireframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  // Combina i due refs
  const setRefs = (element: HTMLDivElement) => {
    containerRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    }
  };

  useEffect(() => {
    if (inView && containerRef.current) {
      // Seleziona tutti i testi nel container
      const textElements = containerRef.current.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, a, span, button"
      );

      // Per ogni elemento di testo
      textElements.forEach((element) => {
        // Ottieni il testo dell'elemento
        const text = element.textContent || "";
        // Svuota l'elemento
        element.textContent = "";
        // Crea uno span per ogni carattere
        text.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.style.display = "inline-block";
          charSpan.style.opacity = "0";
          charSpan.style.transform = "translateY(10px)";
          element.appendChild(charSpan);
        });

        // Seleziona tutti gli span dei caratteri appena creati
        const charSpans = element.querySelectorAll("span");

        // Anima ogni carattere
        anime
          .timeline({
            easing: "easeOutExpo",
          })
          .add({
            targets: Array.from(charSpans),
            opacity: [0, 1],
            translateY: [10, 0],
            duration: duration,
            delay: (_el: any, i: number) => delay + i * staggerDelay,
          });
      });
    }
  }, [inView, color, delay, duration, staggerDelay]);

  return (
    <div ref={setRefs} className={className}>
      {children}
    </div>
  );
}
