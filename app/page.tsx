"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="py-4 sm:py-8">
      <section className="mb-8 sm:mb-12 flex flex-col md:flex-row items-center gap-4 sm:gap-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
            {/* Placeholder per la tua immagine - sostituisci con una foto reale */}
            <div
              className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
              style={{
                backgroundColor: "var(--card-bg)",
                backgroundImage: "url('/me.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "var(--text-dark)",
                boxShadow: "0 0 15px var(--neon-green)",
              }}
            ></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4"
            data-text="Ludovico Dellavecchia"
          >
            Ludovico Dellavecchia
          </h1>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6">
            Business Analyst - Senior Software Developer at Orbyta Tech
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
            <Link
              href="/contatti"
              style={{ color: "var(--neon-green)" }}
              className="w-full sm:w-auto border px-6 py-2 rounded-md transition-colors text-center"
            >
              {t("contact_me")}
            </Link>
            <Link
              href="/esperienza"
              style={{ color: "var(--neon-purple)" }}
              className="w-full sm:w-auto border px-6 py-2 rounded-md transition-colors text-center"
            >
              {t("discover_more")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b">
          {t("about_me")}
        </h2>
        <p
          className="text-base sm:text-lg mb-3 sm:mb-4"
          style={{ color: "var(--text-dark)" }}
        >
          {t("bio_p1")}
        </p>
        <p
          className="text-base sm:text-lg"
          style={{ color: "var(--text-dark)" }}
        >
          {t("bio_p2")}
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 pb-2 border-b">
          {t("main_skills")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            className="p-4 sm:p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              {t("software_development")}
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              {t("software_development_desc")}
            </p>
          </div>
          <div
            className="p-4 sm:p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
              style={{ color: "var(--text-dark)" }}
            >
              {t("cloud_architectures")}
            </h3>
            <p style={{ color: "var(--text-dark)" }}>
              {t("cloud_architectures_desc")}
            </p>
          </div>
          <div
            className="p-4 sm:p-6 rounded-lg shadow-md"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
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
