"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

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
                backgroundImage: "url('/me.gif')",
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
            Business Analyst - Senior Software Developer at Orbyta Tech
          </p>
          <div className="flex space-x-4">
            <Link
              href="/contatti"
              className="border px-6 py-2 rounded-md transition-colors"
            >
              {t("contact_me")}
            </Link>
            <Link
              href="/esperienza"
              className="border px-6 py-2 rounded-md transition-colors"
            >
              {t("discover_more")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          {t("about_me")}
        </h2>
        <p className="text-lg mb-4" style={{ color: "var(--text-dark)" }}>
          {t("bio_p1")}
        </p>
        <p className="text-lg" style={{ color: "var(--text-dark)" }}>
          {t("bio_p2")}
        </p>
      </section>

      <section>
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          {t("main_skills")}
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
              {t("software_development")}
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              {t("software_development_desc")}
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
              {t("cloud_architectures")}
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              {t("cloud_architectures_desc")}
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
              {t("devops")}
            </h3>
            <p style={{ color: "var(--text-dark)" }}>{t("devops_desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
