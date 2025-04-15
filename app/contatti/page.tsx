"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function ContattiPage() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: "✉️",
      title: language === "it" ? "Email" : "Email",
      content: "ludovico.dellavecchia@gmail.com",
      link: "mailto:ludovico.dellavecchia@gmail.com",
    },
    {
      icon: "💼",
      title: language === "it" ? "LinkedIn" : "LinkedIn",
      content: "linkedin.com/in/ludovicodellavecchia",
      link: "https://www.linkedin.com/in/ludovicodellavecchia/",
    },
    {
      icon: "📍",
      title: language === "it" ? "Località" : "Location",
      content: language === "it" ? "Italia, Torino" : "Italy, Turin",
    },
  ];

  return (
    <div className="py-4 sm:py-8 px-4 sm:px-0 min-h-[70vh]">
      <h1
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 max-w-2xl mx-auto"
        style={{ color: "var(--text-dark)" }}
      >
        {language === "it" ? "Contatti" : "Contact"}
      </h1>

      <div className="max-w-2xl mx-auto">
        <div
          className="p-4 sm:p-8 rounded-lg shadow-md mb-4 sm:mb-8"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <h2
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6"
            style={{ color: "var(--text-dark)" }}
          >
            {language === "it" ? "Restiamo in contatto" : "Let's Stay in Touch"}
          </h2>
          <p
            className="mb-4 sm:mb-6 text-base sm:text-lg"
            style={{ color: "var(--text-dark)" }}
          >
            {language === "it"
              ? "Sei interessato a collaborare? Non esitare a contattarmi attraverso i canali qui sotto."
              : "Are you interested in collaborating? Don't hesitate to contact me through the channels below."}
          </p>

          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
                  style={{
                    backgroundColor: "var(--navbar-bg)",
                    color: "var(--text-dark)",
                  }}
                >
                  <span className="text-lg sm:text-xl">{info.icon}</span>
                </div>
                <div className="overflow-hidden">
                  <h3
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:underline text-sm sm:text-base break-words"
                      style={{ color: "var(--text-dark)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p
                      style={{ color: "var(--text-dark)" }}
                      className="text-sm sm:text-base"
                    >
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/turin.svg')`,
          zIndex: -1,
          filter: theme === "light" ? "invert(1)" : "none",
        }}
      ></div>
    </div>
  );
}
