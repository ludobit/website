"use client";

import { useEffect, useRef, ReactNode } from "react";
// @ts-ignore
import anime from "animejs";

interface WireframeAnimationProps {
  children: ReactNode;
  className?: string;
}

export default function WireframeAnimation({
  children,
  className = "",
}: WireframeAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsToAnimate = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Raccogliamo gli elementi da animare
    const elements = containerRef.current.querySelectorAll(
      "div, h1, h2, h3, p, button, a, section, article, nav, footer, header"
    );
    elementsToAnimate.current = Array.from(elements) as HTMLElement[];

    // Nascondiamo inizialmente tutti gli elementi
    elementsToAnimate.current.forEach((el) => {
      el.style.opacity = "0";
      // Aggiungiamo un bordo wireframe
      el.dataset.originalBorder = el.style.border;
      el.style.border = "1px solid rgba(255, 255, 255, 0.2)";
      el.style.boxSizing = "border-box";
    });

    // Animazione per mostrare gli elementi in sequenza
    anime
      .timeline({
        easing: "easeOutExpo",
      })
      .add({
        targets: elementsToAnimate.current,
        opacity: [0, 1],
        scale: [0.95, 1],
        translateY: [10, 0],
        delay: anime.stagger(50, { start: 300 }),
        duration: 800,
        complete: () => {
          // Dopo l'animazione completata, rimuoviamo i bordi wireframe
          setTimeout(() => {
            elementsToAnimate.current.forEach((el) => {
              anime({
                targets: el,
                borderOpacity: [0.2, 0],
                duration: 500,
                easing: "easeOutSine",
                complete: () => {
                  el.style.border = el.dataset.originalBorder || "";
                },
              });
            });
          }, 500);
        },
      });
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
