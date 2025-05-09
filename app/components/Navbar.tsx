"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "font-bold" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 mb-8 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold" data-text="LDV"></Link>

          {/* Menu per desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`${isActive("/")} transition-colors`}
              style={{
                color:
                  pathname === "/" ? "var(--neon-green)" : "var(--text-dark)",
                textShadow: pathname === "/" ? "var(--neon-glow)" : "none",
              }}
            >
              {t("home")}
            </Link>
            <Link
              href="/esperienza"
              className={`${isActive("/esperienza")} transition-colors`}
              style={{
                color:
                  pathname === "/esperienza"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow:
                  pathname === "/esperienza" ? "var(--neon-glow)" : "none",
              }}
            >
              {t("experience")}
            </Link>
            <Link
              href="/post"
              className={`${isActive("/post")} transition-colors`}
              style={{
                color:
                  pathname === "/post"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow: pathname === "/post" ? "var(--neon-glow)" : "none",
              }}
            >
              {t("posts")}
            </Link>
            <Link
              href="/contatti"
              className={`${isActive("/contatti")} transition-colors`}
              style={{
                color:
                  pathname === "/contatti"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow:
                  pathname === "/contatti" ? "var(--neon-glow)" : "none",
              }}
            >
              {t("contacts")}
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Hamburger per mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
              style={{ color: "var(--neon-green)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: "drop-shadow(0 0 2px var(--neon-green))" }}
              >
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden mt-4 flex flex-col space-y-4 py-2 border-t"
            style={{ borderColor: "var(--neon-green)" }}
          >
            <Link
              href="/"
              className={`${isActive("/")} transition-colors block py-2`}
              style={{
                color:
                  pathname === "/" ? "var(--neon-green)" : "var(--text-dark)",
                textShadow: pathname === "/" ? "var(--neon-glow)" : "none",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/esperienza"
              className={`${isActive(
                "/esperienza"
              )} transition-colors block py-2`}
              style={{
                color:
                  pathname === "/esperienza"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow:
                  pathname === "/esperienza" ? "var(--neon-glow)" : "none",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("experience")}
            </Link>
            <Link
              href="/post"
              className={`${isActive("/post")} transition-colors block py-2`}
              style={{
                color:
                  pathname === "/post"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow: pathname === "/post" ? "var(--neon-glow)" : "none",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("posts")}
            </Link>
            <Link
              href="/contatti"
              className={`${isActive(
                "/contatti"
              )} transition-colors block py-2`}
              style={{
                color:
                  pathname === "/contatti"
                    ? "var(--neon-green)"
                    : "var(--text-dark)",
                textShadow:
                  pathname === "/contatti" ? "var(--neon-glow)" : "none",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contacts")}
            </Link>
            <div className="flex space-x-4 py-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
