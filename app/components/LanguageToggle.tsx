"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useRef, useEffect } from "react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Gestisce il clic all'esterno del menu a discesa
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-300"
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: "var(--text-dark)" }}
      >
        {language.toUpperCase()}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-2 w-24 rounded-md shadow-lg z-10"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <button
            className={`block px-4 py-2 text-sm w-full text-left ${
              language === "it" ? "font-bold" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
            onClick={() => {
              setLanguage("it");
              setIsOpen(false);
            }}
            style={{ color: "var(--text-dark)" }}
          >
            Italiano
          </button>
          <button
            className={`block px-4 py-2 text-sm w-full text-left ${
              language === "en" ? "font-bold" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
            onClick={() => {
              setLanguage("en");
              setIsOpen(false);
            }}
            style={{ color: "var(--text-dark)" }}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
