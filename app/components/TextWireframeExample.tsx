"use client";

import TextWireframe from "./TextWireframe";

export default function TextWireframeExample() {
  return (
    <div className="my-10">
      <TextWireframe
        className="space-y-4"
        delay={500}
        duration={800}
        staggerDelay={15}
      >
        <h2 className="text-3xl font-bold">
          Sezione animata con effetto wireframe
        </h2>
        <p className="text-lg">
          Questo testo verrà animato carattere per carattere quando diventa
          visibile nella viewport. L'effetto crea un'impressione di typing o di
          costruzione progressiva del contenuto.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Pulsante Animato
          </button>
          <button className="px-4 py-2 border border-blue-500 rounded">
            Altro Pulsante
          </button>
        </div>
      </TextWireframe>
    </div>
  );
}
