"use client";

import { useEffect, useRef, ReactNode } from "react";
// @ts-ignore
import anime from "animejs";

interface SVGWireframeProps {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  dashSize?: number;
  gapSize?: number;
  lineWidth?: number;
  lineOpacity?: number;
}

export default function SVGWireframe({
  children,
  className = "",
  color = "#4285f4",
  duration = 1000,
  delay = 0,
  staggerDelay = 0,
  dashSize = 200,
  gapSize = 150,
  lineWidth = 0.1,
  lineOpacity = 1,
}: SVGWireframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);
  const elementsRef = useRef<HTMLElement[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Funzione per creare un percorso SVG
  const createPath = (rect: DOMRect, scrollX: number, scrollY: number) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Calcola le coordinate del rettangolo
    const x = rect.left + scrollX;
    const y = rect.top + scrollY;
    const width = rect.width;
    const height = rect.height;

    // Crea il percorso del rettangolo
    const d = `M${x},${y} L${x + width},${y} L${x + width},${
      y + height
    } L${x},${y + height} Z`;

    path.setAttribute("d", d);
    path.setAttribute("fill", "none");

    // Utilizzo diretto dell'opacità tramite rgba
    let finalColor = color;
    if (color.startsWith("#")) {
      // Converte hex a rgb
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      finalColor = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`;
    } else if (color.startsWith("rgb(")) {
      // Converte rgb a rgba
      finalColor = color
        .replace("rgb(", "rgba(")
        .replace(")", `, ${lineOpacity})`);
    } else if (color.startsWith("rgba(")) {
      // Già in formato rgba, sostituisci solo l'opacità
      const parts = color.split(",");
      parts[3] = ` ${lineOpacity})`;
      finalColor = parts.join(",");
    } else if (color.startsWith("var(")) {
      // Per variabili CSS, usa un approccio diverso
      path.style.stroke = color;
      path.style.opacity = lineOpacity.toString();
    }

    if (!color.startsWith("var(")) {
      path.setAttribute("stroke", finalColor);
    }

    path.setAttribute("stroke-width", lineWidth.toString());

    // Imposta la linea tratteggiata con valori più grandi per maggiore visibilità
    const dashValue = `${dashSize} ${gapSize}`;
    path.setAttribute("stroke-dasharray", dashValue);

    // Imposta un valore iniziale per l'animazione
    const pathLength = path.getTotalLength
      ? path.getTotalLength()
      : width * 2 + height * 2;
    path.setAttribute("stroke-dashoffset", pathLength.toString());

    return path;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Nascondi inizialmente il contenuto
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
    }

    // Trova tutti gli elementi da delineare
    const elements = containerRef.current.querySelectorAll(
      "div, section, header, footer, nav, aside, main, article"
    );
    elementsRef.current = Array.from(elements) as HTMLElement[];

    // Crea SVG overlay
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "9999";
    svgRef.current = svg;

    // Aggiungi l'SVG come primo figlio del container
    containerRef.current.prepend(svg);

    // Crea i path per ogni elemento
    elementsRef.current.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const path = createPath(rect, window.scrollX, window.scrollY);
        svg.appendChild(path);
        pathsRef.current.push(path);
      }
    });

    console.log(
      `Creati ${pathsRef.current.length} percorsi SVG con dasharray: ${dashSize} ${gapSize}`
    );

    // Anima i path
    anime
      .timeline({
        easing: "easeInOutSine",
      })
      .add({
        targets: pathsRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: duration,
        delay: anime.stagger(staggerDelay, { start: delay }),
        easing: "easeInOutSine",
        complete: () => {
          // Quando l'animazione è completata, mostra il contenuto
          if (contentRef.current) {
            anime({
              targets: contentRef.current,
              opacity: [0, 1],
              duration: 800,
              easing: "easeInOutQuad",
            });
          }

          // Dopo un po', rimuovi l'SVG
          setTimeout(() => {
            anime({
              targets: svg,
              opacity: 0,
              duration: 1000,
              easing: "easeOutSine",
              complete: () => {
                // Rimuovi SVG completamente
                svg.remove();
              },
            });
          }, 1000); // Lascia le linee visibili più a lungo
        },
      });

    // Cleanup
    return () => {
      if (svgRef.current) {
        svgRef.current.remove();
      }
    };
  }, [
    color,
    delay,
    duration,
    staggerDelay,
    dashSize,
    gapSize,
    lineWidth,
    lineOpacity,
  ]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={contentRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
}
