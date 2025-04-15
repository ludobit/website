"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (path: string) => {
    return pathname === path
      ? "text-blue-600 dark:text-blue-400 font-bold"
      : "hover:text-blue-500 dark:hover:text-blue-300";
  };

  return (
    <nav
      className="shadow-md py-4 mb-8 transition-colors"
      style={{ backgroundColor: "var(--navbar-bg)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold"
            style={{ color: "var(--text-dark)" }}
          >
            LDV
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`${isActive("/")} transition-colors`}
              style={{ color: "var(--text-dark)" }}
            >
              {t("home")}
            </Link>
            <Link
              href="/esperienza"
              className={`${isActive("/esperienza")} transition-colors`}
              style={{ color: "var(--text-dark)" }}
            >
              {t("experience")}
            </Link>
            <Link
              href="/post"
              className={`${isActive("/post")} transition-colors`}
              style={{ color: "var(--text-dark)" }}
            >
              {t("posts")}
            </Link>
            <Link
              href="/contatti"
              className={`${isActive("/contatti")} transition-colors`}
              style={{ color: "var(--text-dark)" }}
            >
              {t("contacts")}
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
