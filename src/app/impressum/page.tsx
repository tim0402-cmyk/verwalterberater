import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum – Verwalterberater",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0b1014] text-white">
      {/* Nav */}
      <nav className="glass-strong border-b sticky top-0 z-10" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2 text-white">Impressum</h1>
        <p className="text-white/40 text-sm mb-12">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Anbieter</h2>
            <p>Tim Felix Weber</p>
            <p>TFW Consulting / verwalterberater.de</p>
            <p>Berliner Str. 55</p>
            <p>10713 Berlin</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:impressum@verwalterberater.de" className="text-[#5aab9f] hover:underline">
                impressum@verwalterberater.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            </p>
            {/* TODO: USt-ID eintragen */}
            <p>[USt-ID eintragen]</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Verantwortlich für den Inhalt</h2>
            <p>Tim Felix Weber (Anschrift wie oben)</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
              Die Adresse lautet:{" "}
              <span className="text-[#5aab9f]">https://ec.europa.eu/consumers/odr/</span>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t text-xs text-white/25" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <Link href="/datenschutz" className="hover:text-white/50 transition-colors mr-6">
            Datenschutzerklärung
          </Link>
          <Link href="/" className="hover:text-white/50 transition-colors">
            Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
