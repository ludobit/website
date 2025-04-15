"use client";

import { useState } from "react";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  const [stato, setStato] = useState({
    inviato: false,
    errore: false,
    caricamento: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStato({ inviato: false, errore: false, caricamento: true });

    // Simuliamo l'invio del form
    setTimeout(() => {
      setStato({ inviato: true, errore: false, caricamento: false });
      // Reset del form
      setFormData({
        nome: "",
        email: "",
        oggetto: "",
        messaggio: "",
      });
    }, 1500);
  };

  return (
    <div className="py-8 relative">
      <h1
        className="text-3xl font-bold mb-8"
        style={{ color: "var(--text-dark)" }}
      >
        Contatti
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--text-dark)" }}
          >
            Restiamo in contatto
          </h2>
          <p className="mb-6 text-lg" style={{ color: "var(--text-dark)" }}>
            Sei interessato a collaborare o hai domande? Non esitare a
            contattarmi compilando il modulo o attraverso i canali qui sotto.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{
                  backgroundColor: "var(--navbar-bg)",
                  color: "var(--text-dark)",
                }}
              >
                <span className="text-xl">✉️</span>
              </div>
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-dark)" }}
                >
                  Email
                </h3>
                <p style={{ color: "var(--text-dark)" }}>
                  ludovico.dellavecchia@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{
                  backgroundColor: "var(--navbar-bg)",
                  color: "var(--text-dark)",
                }}
              >
                <span className="text-xl">💼</span>
              </div>
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-dark)" }}
                >
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/ludovicodellavecchia/"
                  className="hover:underline"
                  style={{ color: "var(--text-dark)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ludovicodellavecchia
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                style={{
                  backgroundColor: "var(--navbar-bg)",
                  color: "var(--text-dark)",
                }}
              >
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h3
                  className="font-semibold"
                  style={{ color: "var(--text-dark)" }}
                >
                  Località
                </h3>
                <p style={{ color: "var(--text-dark)" }}>Italia, Torino</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-8 rounded-lg shadow-md"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--text-dark)" }}
          >
            Inviami un messaggio
          </h2>

          {stato.inviato ? (
            <div
              className="border px-4 py-3 rounded mb-4"
              style={{
                backgroundColor: "#d1fae5",
                borderColor: "#34d399",
                color: "#047857",
              }}
            >
              <p>
                Messaggio inviato con successo! Ti risponderò al più presto.
              </p>
            </div>
          ) : null}

          {stato.errore ? (
            <div
              className="border px-4 py-3 rounded mb-4"
              style={{
                backgroundColor: "#fee2e2",
                borderColor: "#f87171",
                color: "#b91c1c",
              }}
            >
              <p>
                C'è stato un errore nell'invio del messaggio. Riprova più tardi.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block font-medium mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: "var(--text-dark)",
                  backgroundColor: "var(--background)",
                  color: "var(--text-dark)",
                }}
                placeholder="Il tuo nome"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: "var(--text-dark)",
                  backgroundColor: "var(--background)",
                  color: "var(--text-dark)",
                }}
                placeholder="La tua email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="oggetto"
                className="block font-medium mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                Oggetto
              </label>
              <select
                id="oggetto"
                name="oggetto"
                value={formData.oggetto}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: "var(--text-dark)",
                  backgroundColor: "var(--background)",
                  color: "var(--text-dark)",
                }}
              >
                <option value="">Seleziona un oggetto</option>
                <option value="collaborazione">
                  Proposta di collaborazione
                </option>
                <option value="lavoro">Offerta di lavoro</option>
                <option value="consulenza">Richiesta di consulenza</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="messaggio"
                className="block font-medium mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                Messaggio
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  borderColor: "var(--text-dark)",
                  backgroundColor: "var(--background)",
                  color: "var(--text-dark)",
                }}
                placeholder="Il tuo messaggio"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={stato.caricamento}
              className="w-full py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{
                backgroundColor: stato.caricamento ? "#93c5fd" : "#2563eb",
                color: "white",
              }}
            >
              {stato.caricamento ? "Invio in corso..." : "Invia messaggio"}
            </button>
          </form>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-[-9rem] right-[-9rem] h-40 bg-cover bg-bottom opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/turin.png')",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}
