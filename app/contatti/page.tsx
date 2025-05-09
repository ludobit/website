"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function ContattiPage() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--neon-purple)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: language === "it" ? "Email" : "Email",
      content: "ludovico.dellavecchia@gmail.com",
      link: "mailto:ludovico.dellavecchia@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--neon-purple)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      title: language === "it" ? "LinkedIn" : "LinkedIn",
      content: "linkedin.com/in/ludovicodellavecchia",
      link: "https://www.linkedin.com/in/ludovicodellavecchia/",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--neon-purple)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
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
                      className="hover:underline text-sm sm:text-base break-words transition-all hover:text-[var(--neon-green)]"
                      style={{ color: "var(--neon-green)" }}
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
