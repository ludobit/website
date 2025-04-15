import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="py-8 mt-auto transition-colors"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p style={{ color: "var(--text-dark)" }}>
              © {new Date().getFullYear()} Ludovico Dellavecchia
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ludovicodellavecchia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              style={{ color: "var(--text-dark)" }}
            >
              LinkedIn
            </a>
            <Link
              href="/contatti"
              className="hover:text-blue-600 transition-colors"
              style={{ color: "var(--text-dark)" }}
            >
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
