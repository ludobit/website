"use client";

import React from "react";
import Image from "next/image";

interface PostDetailProps {
  id: number;
  titolo: string;
  data: string;
  contenuto: string;
  categoria: string[] | string;
  immagine: string;
}

export default function PostDetail({
  titolo,
  data,
  contenuto,
  categoria,
  immagine,
}: PostDetailProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {Array.isArray(categoria) ? (
            categoria.map((cat, index) => (
              <span
                key={index}
                className="text-xs font-semibold px-2.5 py-0.5 rounded"
                style={{
                  backgroundColor: "var(--navbar-bg)",
                  color: "var(--text-dark)",
                }}
              >
                {cat}
              </span>
            ))
          ) : (
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded"
              style={{
                backgroundColor: "var(--navbar-bg)",
                color: "var(--text-dark)",
              }}
            >
              {categoria}
            </span>
          )}
        </div>
        <span className="text-sm" style={{ color: "var(--text-dark)" }}>
          {data}
        </span>
      </div>

      {immagine && (
        <div className="w-full h-64 relative rounded-lg overflow-hidden">
          {immagine.startsWith("http") || immagine.startsWith("/") ? (
            <div className="relative w-full h-full">
              <Image
                src={immagine}
                alt={titolo}
                fill
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  // Fallback per immagini che non possono essere caricate
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  (e.currentTarget.parentNode as HTMLElement).classList.add(
                    "fallback-image"
                  );
                }}
              />
              <div
                className="w-full h-full flex items-center justify-center fallback-image hidden"
                style={{ backgroundColor: "var(--navbar-bg)" }}
              >
                <span
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-dark)" }}
                >
                  Immagine Articolo
                </span>
              </div>
            </div>
          ) : (
            <div
              className="h-full w-full flex items-center justify-center"
              style={{ backgroundColor: "var(--navbar-bg)" }}
            >
              <span
                className="text-lg font-semibold"
                style={{ color: "var(--text-dark)" }}
              >
                Immagine Articolo
              </span>
            </div>
          )}
        </div>
      )}

      <div className="prose max-w-none dark:prose-invert">
        {/* Verifica se il contenuto è HTML e lo renderizza appropriatamente */}
        {contenuto.startsWith("<") ? (
          <div dangerouslySetInnerHTML={{ __html: contenuto }} />
        ) : (
          <p style={{ color: "var(--text-dark)" }}>{contenuto}</p>
        )}
      </div>
    </div>
  );
}
