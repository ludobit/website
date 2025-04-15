import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8">
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            {/* Placeholder per la tua immagine - sostituisci con una foto reale */}
            <div
              className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
              style={{
                backgroundColor: "var(--card-bg)",
                backgroundImage:
                  "url('https://ludovicodellavecchia.info/me.12c10fac.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "var(--text-dark)",
              }}
            ></div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--text-dark)" }}
          >
            Ludovico Dellavecchia
          </h1>
          <p className="text-xl mb-6" style={{ color: "var(--text-dark)" }}>
            Professional Software Developer con esperienza in soluzioni
            innovative.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/contatti"
              className="text-white px-6 py-2 rounded-md transition-colors"
            >
              Contattami
            </Link>
            <Link
              href="/esperienza"
              className="px-6 py-2 rounded-md transition-colors"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          Chi sono
        </h2>
        <p className="text-lg mb-4" style={{ color: "var(--text-dark)" }}>
          Ciao! Sono Ludovico Dellavecchia, un appassionato sviluppatore
          software con esperienza in diverse tecnologie e settori. Mi piace
          affrontare sfide complesse e creare soluzioni software innovative ed
          efficienti.
        </p>
        <p className="text-lg" style={{ color: "var(--text-dark)" }}>
          Questo sito raccoglie la mia esperienza professionale, le mie
          competenze tecniche e i miei contributi. Sentiti libero di esplorare e
          contattarmi per collaborazioni o discussioni tecniche.
        </p>
      </section>

      <section>
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          Competenze principali
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              Sviluppo Software
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              Esperienza nello sviluppo di applicazioni utilizzando tecnologie
              moderne e approcci metodologici avanzati.
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              Architetture Cloud
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              Competenze nella progettazione e implementazione di soluzioni
              cloud scalabili e resilienti.
            </p>
          </div>
          <div
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              DevOps
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              Conoscenza delle pratiche DevOps per l'automazione e
              l'ottimizzazione dei processi di sviluppo e deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
