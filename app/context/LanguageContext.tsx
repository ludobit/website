"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "it" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = "it";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Dizionario delle traduzioni
const translations = {
  it: {
    // Navbar
    home: "Home",
    experience: "Esperienza",
    posts: "Articoli",
    contacts: "Contatti",

    // Home page
    contact_me: "Contattami",
    discover_more: "Scopri di più",
    about_me: "Chi sono",
    main_skills: "Competenze principali",
    software_development: "Sviluppo Software",
    software_development_desc:
      "Progetto e sviluppo applicazioni utilizzando tecnologie moderne e approcci metodologici avanzati.",
    cloud_architectures: "Architetture Cloud",
    cloud_architectures_desc:
      "Competenze nella progettazione e implementazione di soluzioni cloud scalabili e resilienti.",
    devops: "DevOps",
    devops_desc:
      "Conoscenza delle pratiche DevOps per l'automazione e l'ottimizzazione dei processi di sviluppo e deployment.",

    // Bio
    bio_p1:
      "Mi occupo di progettare e realizzare soluzioni digitali conducendo analisi funzionali e di business per combinarle con le opportunità tecnologiche del mercato. Nel 2013 ho iniziato a studiare design e sviluppo software. Dal 2015 al 2020 ho lavorato come freelance sviluppando applicazioni native, ibride e web utilizzando lo human-centered design e la metodologia agile.",
    bio_p2:
      "Nel 2020 ho iniziato il mio lavoro come Senior Software Developer Consultant presso Orbyta. Nel 2025 ho assunto il ruolo di Projects Coordinator nella WEB Business Unit, supervisionando progetti complessi in settori come Mobility&Transportation, Smart Building e IoT Monitoring.",

    // Esperienza page
    professional_experience: "Esperienza Professionale e Competenze",
    work_experience: "Esperienza Lavorativa",
    education: "Formazione ed Esperienze Formative",
    technical_skills: "Competenze Tecniche",
    roles_responsibilities: "Mansioni e responsabilità:",
    technologies: "Tecnologie:",
    present: "Presente",
  },
  en: {
    // Navbar
    home: "Home",
    experience: "Experience",
    posts: "Articles",
    contacts: "Contact",

    // Home page
    contact_me: "Contact me",
    discover_more: "Learn more",
    about_me: "About me",
    main_skills: "Main skills",
    software_development: "Software Development",
    software_development_desc:
      "Experience in developing applications using modern technologies and advanced methodological approaches.",
    cloud_architectures: "Cloud Architectures",
    cloud_architectures_desc:
      "Skills in designing and implementing scalable and resilient cloud solutions.",
    devops: "DevOps",
    devops_desc:
      "Knowledge of DevOps practices for automating and optimizing development and deployment processes.",

    // Bio
    bio_p1:
      "I design digital architectural solutions by conducting the business analysis of clients' needs and combining them with modern technological opportunities. In 2013, I began studying design and software development. From 2015 to 2020, I worked as a freelancer, developing native, hybrid, and web applications using human-centered design and agile methodology.",
    bio_p2:
      "In 2020, I started my work as a Senior Software Developer Consultant at Orbyta. In 2025, I assumed the role of Projects Coordinator in the WEB Business Unit, overseeing complex projects in sectors like Mobility&Transportation, Smart Building and IoT Monitoring.",

    // Esperienza page
    professional_experience: "Professional Experience and Skills",
    work_experience: "Work Experience",
    education: "Education and Training",
    technical_skills: "Technical Skills",
    roles_responsibilities: "Roles and responsibilities:",
    technologies: "Technologies:",
    present: "Present",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Funzione per ottenere una traduzione
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  // Carica la lingua salvata al caricamento del componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "it" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Salva la lingua quando cambia
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
