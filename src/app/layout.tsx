import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verwalterberater – KI, Automatisierung & Digitalisierung für Hausverwaltungen",
  description:
    "Tim Weber begleitet Hausverwaltungsunternehmen bei der Einführung von KI und Automatisierung. Praxisnah, sofort umsetzbar, messbare Ergebnisse.",
  keywords: [
    "Hausverwaltung",
    "KI",
    "Künstliche Intelligenz",
    "Automatisierung",
    "Digitalisierung",
    "Coaching",
    "Verwalterberater",
  ],
  authors: [{ name: "Tim Felix Weber" }],
  openGraph: {
    title: "Verwalterberater – KI & Automatisierung für Hausverwaltungen",
    description: "Praxisnah. Sofort umsetzbar. Echte Ergebnisse.",
    url: "https://verwalterberater.de",
    siteName: "Verwalterberater",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1014] text-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
