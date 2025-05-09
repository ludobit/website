import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import WireframeWrapper from "./components/WireframeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ludovico Dellavecchia",
  description: "Sito personale di Ludovico Dellavecchia",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {/* Script per prevenire il flash del tema */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  
                  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen transition-colors overflow-x-hidden`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          position: "relative",
        }}
      >
        {/* Effetto neon background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(45deg, rgba(126, 15, 255, 0.03) 0%, rgba(15, 255, 193, 0.03) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "15%",
            width: "70%",
            height: "80%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(15, 255, 193, 0.05) 0%, rgba(126, 15, 255, 0.02) 70%, transparent 100%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <div style={{ position: "relative", zIndex: 1 }}>
              <WireframeWrapper color="var(--foreground)" duration={2000}>
                <Navbar />
                <main className="container mx-auto px-4 flex-grow">
                  {children}
                </main>
                <Footer />
                <Analytics />
              </WireframeWrapper>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
