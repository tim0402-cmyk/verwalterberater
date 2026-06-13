import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Verwalterberater",
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
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
        <h1 className="text-3xl font-bold mb-2 text-white">Datenschutzerklärung</h1>
        <p className="text-white/40 text-sm mb-12">Stand: Juni 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-white/90 font-medium mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
              sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-3 glass rounded-xl p-5 text-sm">
              <p>Tim Felix Weber</p>
              <p>TFW Consulting / verwalterberater.de</p>
              <p>Berliner Str. 55, 10713 Berlin</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@verwalterberater.de" className="text-[#5aab9f]">
                  info@verwalterberater.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-white/90 font-medium mb-2">Cookies</h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies können für
              den Betrieb der Website gesetzt werden.
            </p>

            <h3 className="text-white/90 font-medium mt-5 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Hosting-Anbieter erhebt und speichert automatisch Informationen in Server-Log-Dateien,
              die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version,
              verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit
              der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>

            <h3 className="text-white/90 font-medium mt-5 mb-2">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Analyse-Tools</h2>
            <p>
              Diese Website verwendet keine Analyse-Tools wie Google Analytics oder ähnliche Dienste,
              die Ihr Surfverhalten nachverfolgen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung oder Löschung dieser Daten zu verlangen (Art. 16, 17 DSGVO)</li>
              <li>die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO)</li>
              <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Hosting</h2>
            <p>
              Diese Website wird bei Hostinger gehostet. Hostinger ist ein Dienstleistungsunternehmen
              mit Sitz in Litauen. Details zur Datenverarbeitung finden Sie in der Datenschutzerklärung
              von Hostinger.
            </p>
            <p className="mt-2">
              Die Verwendung von Hostinger erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Es besteht ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
              der Website.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. Kontakt bei Datenschutzfragen</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten
              sowie bei Auskunft, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            <p className="mt-2">
              <a href="mailto:info@verwalterberater.de" className="text-[#5aab9f] hover:underline">
                info@verwalterberater.de
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t text-xs text-white/25" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <Link href="/impressum" className="hover:text-white/50 transition-colors mr-6">
            Impressum
          </Link>
          <Link href="/" className="hover:text-white/50 transition-colors">
            Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
