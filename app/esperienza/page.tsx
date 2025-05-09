"use client";

import { useLanguage } from "../context/LanguageContext";

export default function EsperienzaPage() {
  const { t, language } = useLanguage();

  // Traduzioni per le esperienze lavorative
  const esperienze = [
    {
      id: 1,
      azienda: "Orbyta Tech / Orbyta Srl",
      ruolo:
        language === "it"
          ? "Unit Coordinator / Team Leader / Senior Software Developer"
          : "Unit Coordinator / Team Leader / Senior Software Developer",
      periodo: language === "it" ? "2020 - Presente" : "2020 - Present",
      descrizione:
        language === "it"
          ? [
              "Coordinamento di un team di oltre 10 persone e supervisione di progetti complessi nei settori Transportation & Logistics, E-Commerce, IoT Monitoring Systems.",
              "Realizzazione di applicazioni GIS, applicazioni BIM, progetti di Machine Learning e SAR Picture Processing.",
              "Implementazione di architetture scalabili basate su microservizi e microfrontend, e sviluppo di applicazioni personalizzate su Shopify.",
              "Consulenza per Aon Italia Srl e Almaviva Spa su progetti nei settori Insurance e Mobility/IOT.",
            ]
          : [
              "Coordination of a team of over 10 people and supervision of complex projects in Transportation & Logistics, E-Commerce, IoT Monitoring Systems sectors.",
              "Development of GIS applications, BIM applications, Machine Learning projects, and SAR Picture Processing.",
              "Implementation of scalable architectures based on microservices and microfrontends, and development of custom applications on Shopify.",
              "Consulting for Aon Italia Srl and Almaviva Spa on projects in the Insurance and Mobility/IOT sectors.",
            ],
      tecnologie: [
        "JavaScript",
        "TypeScript",
        "NestJS",
        "Express",
        "React",
        "Angular",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      id: 2,
      azienda: "HuCare",
      ruolo: "Fullstack Developer",
      periodo: "03/2019 - 12/2020",
      descrizione:
        language === "it"
          ? [
              "Sviluppo di soluzioni per la digitalizzazione dei sistemi sanitari.",
              "Sviluppo di HuCare Trial: configuratore e sistema di gestione per Clinical Trials.",
              "Creazione di CSW: soluzione per la comunicazione tra medici e pazienti e per la gestione delle prescrizioni.",
              "Implementazione di Toscovid: strumento per il monitoraggio della diffusione del COVID-19.",
              "Gestione del lavoro in team come Sprint board manager, seguendo metodologie agili (Jira).",
            ]
          : [
              "Development of solutions for the digitization of healthcare systems.",
              "Development of HuCare Trial: configurator and management system for Clinical Trials.",
              "Creation of CSW: solution for communication between doctors and patients, and for prescription management.",
              "Implementation of Toscovid: tool for monitoring the spread of COVID-19.",
              "Team work management as Sprint board manager, following agile methodologies (Jira).",
            ],
      tecnologie: ["Kubernetes", "ReactJS", "NodeJS", "TypeScript", "Jira"],
    },
    {
      id: 3,
      azienda: "Namaqua Studio LTD",
      ruolo:
        language === "it"
          ? "Fullstack Developer e Project Manager"
          : "Fullstack Developer and Project Manager",
      periodo: "03/2018 - 03/2019",
      descrizione:
        language === "it"
          ? [
              "Sviluppo del frontend del MVP per un Clinical Trial Software Manager per HuCare (utilizzando ReactJS).",
              "Collaborazione con Matterbit Srl per la realizzazione di SOS Grandine, un'applicazione destinata agli operatori assicurativi.",
              "Sviluppo di una piattaforma e-commerce per Morsy.",
              "Introduzione della metodologia agile mediante l'uso di Jira per migliorare le consegne dei progetti.",
            ]
          : [
              "Development of the MVP frontend for a Clinical Trial Software Manager for HuCare (using ReactJS).",
              "Collaboration with Matterbit Srl for the creation of SOS Grandine, an application for insurance operators.",
              "Development of an e-commerce platform for Morsy.",
              "Introduction of agile methodology using Jira to improve project deliveries.",
            ],
      tecnologie: [
        "ReactJS",
        "Angular2",
        "NodeJS",
        "MySQL",
        "Cordova",
        "Capacitor",
        "Ionic",
        "Java",
        "Jira",
      ],
    },
    {
      id: 4,
      azienda: language === "it" ? "Attività Freelance" : "Freelance Activity",
      ruolo:
        language === "it"
          ? "Fullstack Developer e Consulente"
          : "Fullstack Developer and Consultant",
      periodo: "2015 - 2020",
      descrizione:
        language === "it"
          ? [
              "Sviluppo di soluzioni native, ibride e web come freelance.",
              "The Press Match: sviluppo del frontend con AngularJS.",
              "Spazi900: applicazione mobile per il Museo della Biblioteca Centrale di Roma usando Ionic2.",
              "Vizatellum: gioco interattivo per le elezioni italiane.",
              "Casale Ebraica: applicazione museale con Ionic1.",
              "Fondazione Cariplo: sito web realizzato con HTML, CSS e JavaScript.",
            ]
          : [
              "Development of native, hybrid, and web solutions as a freelancer.",
              "The Press Match: frontend development with AngularJS.",
              "Spazi900: mobile application for the Museum of the Central Library of Rome using Ionic2.",
              "Vizatellum: interactive game for Italian elections.",
              "Casale Ebraica: museum application with Ionic1.",
              "Fondazione Cariplo: website created with HTML, CSS, and JavaScript.",
            ],
      tecnologie: [
        "AngularJS",
        "Ionic",
        "HTML",
        "CSS",
        "JavaScript",
        "Mobile Development",
      ],
    },
  ];

  const formazione = [
    {
      id: 1,
      istituto:
        language === "it" ? "ITS per l'ICT Piemonte" : "ITS per l'ICT Piemonte",
      titolo:
        language === "it"
          ? "Diploma di Specializzazione in Mobile App Design"
          : "Specialization Degree in Mobile App Design",
      anno: "2015",
      descrizione:
        language === "it"
          ? "Specializzazione in sviluppo software e tecnologie web"
          : "Specialization in software development and web technologies",
    },
    {
      id: 2,
      istituto: "Enhancers",
      titolo:
        language === "it"
          ? "Internship in UI/UX Design"
          : "UI/UX Design Internship",
      anno: "2014",
      descrizione:
        language === "it"
          ? "Acquisizione di competenze in interaction design e UI/UX, integrando conoscenze tecniche con un approccio human-centered"
          : "Acquisition of skills in interaction design and UI/UX, integrating technical knowledge with a human-centered approach",
    },
  ];

  const competenze = [
    {
      categoria:
        language === "it" ? "Frontend Development" : "Frontend Development",
      skills: [
        "React",
        "Angular",
        "JavaScript",
        "TypeScript",
        "SASS/SCSS",
        "Responsive Design",
        "Microfrontend Architecture",
      ],
    },
    {
      categoria:
        language === "it" ? "Backend Development" : "Backend Development",
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "REST API",
        "GraphQL",
        "Java",
        "Microservices",
      ],
    },
    {
      categoria: language === "it" ? "Database" : "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design"],
    },
    {
      categoria: language === "it" ? "DevOps & Tools" : "DevOps & Tools",
      skills: ["CI/CD", "Git", "Agile Methodologies", "Scrum"],
    },
    {
      categoria:
        language === "it" ? "Mobile Development" : "Mobile Development",
      skills: ["Ionic", "Capacitor", "React Native", "Progressive Web Apps"],
    },
    {
      categoria:
        language === "it" ? "Cloud & Infrastructure" : "Cloud & Infrastructure",
      skills: [
        "Kubernetes",
        "Containerization",
        "Azure",
        "Serverless Architecture",
        "Infrastructure as Code",
      ],
    },
  ];

  return (
    <div className="py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
          {t("work_experience")}
        </h2>
        <div className="space-y-8">
          {esperienze.map((esp) => (
            <div
              key={esp.id}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{esp.ruolo}</h3>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {esp.azienda}
                  </p>
                </div>
                <p style={{ color: "var(--text-dark)" }}>{esp.periodo}</p>
              </div>
              <div>
                <p className="mb-2" style={{ color: "var(--text-dark)" }}>
                  {t("roles_responsibilities")}
                </p>
                <ul
                  className="list-disc pl-5 mb-4"
                  style={{ color: "var(--text-dark)" }}
                >
                  {esp.descrizione.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div>
                  <p
                    className="font-medium mb-2"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {t("technologies")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {esp.tecnologie.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 text-sm rounded-full transition-all hover:scale-105"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          color:
                            i % 2 === 0
                              ? "var(--neon-green)"
                              : "var(--neon-purple)",
                          boxShadow:
                            i % 2 === 0
                              ? "0 0 5px var(--neon-green)"
                              : "0 0 5px var(--neon-purple)",
                          border:
                            i % 2 === 0
                              ? "1px solid var(--neon-green)"
                              : "1px solid var(--neon-purple)",
                          textShadow:
                            i % 2 === 0
                              ? "0 0 2px rgba(15, 255, 193, 0.5)"
                              : "0 0 2px rgba(126, 15, 255, 0.5)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          {t("education")}
        </h2>
        <div className="space-y-6">
          {formazione.map((form) => (
            <div
              key={form.id}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-dark)" }}
                >
                  {form.titolo}
                </h3>
                <p style={{ color: "var(--text-dark)" }}>{form.anno}</p>
              </div>
              <p className="mb-2" style={{ color: "var(--text-dark)" }}>
                {form.istituto}
              </p>
              <p style={{ color: "var(--text-dark)" }}>{form.descrizione}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-2xl font-bold mb-6 pb-2 border-b"
          style={{ color: "var(--text-dark)", borderColor: "var(--text-dark)" }}
        >
          {t("technical_skills")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competenze.map((competenza, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-dark)" }}
              >
                {competenza.categoria}
              </h3>
              <div className="flex flex-wrap gap-2">
                {competenza.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm transition-all hover:scale-105"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      color:
                        i % 2 === 0
                          ? "var(--neon-green)"
                          : "var(--neon-purple)",
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 5px var(--neon-green)"
                          : "0 0 5px var(--neon-purple)",
                      border:
                        i % 2 === 0
                          ? "1px solid var(--neon-green)"
                          : "1px solid var(--neon-purple)",
                      textShadow:
                        i % 2 === 0
                          ? "0 0 2px rgba(15, 255, 193, 0.5)"
                          : "0 0 2px rgba(126, 15, 255, 0.5)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
