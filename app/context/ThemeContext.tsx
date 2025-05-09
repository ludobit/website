"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Inizializza il tema dal localStorage o dalle preferenze di sistema
  useEffect(() => {
    // Prima controlliamo se c'è stato un problema
    const forceTheme = new URLSearchParams(window.location.search).get("theme");
    if (forceTheme === "light" || forceTheme === "dark") {
      setTheme(forceTheme);
      localStorage.setItem("theme", forceTheme);
      document.documentElement.classList.toggle("dark", forceTheme === "dark");
      return;
    }

    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
          "dark",
          savedTheme === "dark"
        );
      } else if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        // Default a dark per il tema neon
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    } catch (error) {
      console.error("Errore nel recupero del tema:", error);
      // Se c'è un errore, assicuriamoci di impostare un tema di default
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");

      // Debug per vedere se il tema è stato salvato correttamente
      console.log("Tema cambiato a:", newTheme);
      console.log(
        "Classe dark presente:",
        document.documentElement.classList.contains("dark")
      );
    } catch (error) {
      console.error("Errore nel cambio tema:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
