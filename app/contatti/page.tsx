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
    <div className="py-8 relative">
      <h1
        className="text-3xl font-bold mb-8 max-w-2xl mx-auto"
        style={{ color: "var(--text-dark)" }}
      >
        {language === "it" ? "Contatti" : "Contact"}
      </h1>

      <div className="max-w-2xl mx-auto">
        <div
          className="p-8 rounded-lg shadow-md mb-8"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--text-dark)" }}
          >
            {language === "it" ? "Restiamo in contatto" : "Let's Stay in Touch"}
          </h2>
          <p className="mb-6 text-lg" style={{ color: "var(--text-dark)" }}>
            {language === "it"
              ? "Sei interessato a collaborare? Non esitare a contattarmi attraverso i canali qui sotto."
              : "Are you interested in collaborating? Don't hesitate to contact me through the channels below."}
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: "var(--navbar-bg)",
                    color: "var(--text-dark)",
                  }}
                >
                  <span className="text-xl">{info.icon}</span>
                </div>
                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:underline"
                      style={{ color: "var(--text-dark)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p style={{ color: "var(--text-dark)" }}>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-[-9rem] right-[-9rem] h-40 bg-cover bg-bottom opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/turin.svg')`,
          zIndex: -1,
          filter: theme === "light" ? "invert(1)" : "none",
        }}
      ></div>
    </div>
  );
}
