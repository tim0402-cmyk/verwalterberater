"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
  Mail,
  ArrowRight,
  Star,
  BarChart3,
  Lightbulb,
  Cog,
  Rocket,
  Shield,
  Clock,
  Award,
  ChevronRight,
  MessageSquare,
  Users,
  Headphones,
  ExternalLink,
} from "lucide-react"

function LinkedinIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import { NeonFlow } from "@/components/ui/neon-flow"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"
import { Marquee } from "@/components/ui/3d-testimonials"
import { NavLogo } from "@/components/ui/logo"

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Brain,
    title: "KI-gestützte Beratung",
    desc: "Individuelle KI-Strategien für Deine Hausverwaltung. Von der Tool-Auswahl bis zur Implementierung — praxisnah und sofort umsetzbar.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
  },
  {
    icon: Cog,
    title: "Automatisierung",
    desc: "Repetitive Prozesse eliminieren. Mieteranfragen, Abrechnungen, Mahnwesen — automatisiert, zuverlässig, rund um die Uhr.",
    color: "from-sky-500/20 to-sky-600/5",
    border: "hover:border-sky-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
  },
  {
    icon: Rocket,
    title: "Digitalisierung",
    desc: "Papierprozesse der Vergangenheit. Digitale Workflows, cloudbasierte Systeme und strukturierte Daten statt Excel-Chaos.",
    color: "from-fuchsia-500/20 to-fuchsia-600/5",
    border: "hover:border-fuchsia-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(232,121,249,0.2)]",
  },
  {
    icon: Target,
    title: "Strategie-Coaching",
    desc: "1:1 Coaching für Unternehmer und Führungskräfte. Klarer Fahrplan, messbare Ziele, konsequente Umsetzung.",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
  },
]

const steps = [
  {
    num: "01",
    icon: BarChart3,
    title: "Analyse",
    desc: "Bestandsaufnahme Deiner Prozesse, Tools und Pain Points. Wir verstehen erst, bevor wir handeln.",
    color: "#a855f7",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Strategie",
    desc: "Maßgeschneiderter Fahrplan mit konkreten Quick Wins und langfristigen Hebeln.",
    color: "#38bdf8",
  },
  {
    num: "03",
    icon: Cog,
    title: "Umsetzung",
    desc: "Hands-on Begleitung bei der Implementierung. Keine Theorie — echte Ergebnisse.",
    color: "#e879f9",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Wirkung",
    desc: "Messbare KPIs, eingesparte Stunden, zufriedenere Kunden. Skalierbar und nachhaltig.",
    color: "#34d399",
  },
]

const testimonials = [
  {
    name: "Andreas Tonscheid",
    role: "Geschäftsführer, AT Immobilienverwaltung",
    body: "Tim hat unsere komplette Auftragsbearbeitung automatisiert. Wir sparen heute 12 Stunden pro Woche — ohne einen einzigen Mitarbeiter zu entlassen, sondern indem wir sie für wirklich wichtige Aufgaben einsetzen.",
    initials: "AT",
    stars: 5,
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Petra Schauerte",
    role: "Inhaberin, Schauerte Hausverwaltung",
    body: "Der Kurs hat mir die Augen geöffnet. KI war für mich ein Fremdwort — heute ist es mein täglichstes Werkzeug. Tim erklärt es so, dass man es sofort anwenden kann.",
    initials: "PS",
    stars: 5,
    color: "from-sky-600 to-sky-800",
  },
  {
    name: "Hubert Haas",
    role: "Prokurist, Haas & Partner GmbH",
    body: "Was andere Berater in Monaten versprechen, liefert Tim in Wochen. Praxisnähe auf einem Niveau, das ich selten erlebt habe. Absolute Empfehlung für jeden Hausverwalter.",
    initials: "HH",
    stars: 5,
    color: "from-fuchsia-600 to-fuchsia-800",
  },
  {
    name: "Jürgen Gutekunst",
    role: "Geschäftsführer, JG Verwaltungsgesellschaft",
    body: "Endlich ein Berater der weiß, wie Hausverwaltung wirklich funktioniert. Tim redet nicht um den heißen Brei — er zeigt Dir genau, wo der Hebel sitzt.",
    initials: "JG",
    stars: 5,
    color: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Sabine Ritter",
    role: "WEG-Verwalterin, Berlin",
    body: "Die KI-Checkliste allein hat meinen Arbeitsalltag komplett verändert. Ich bearbeite Anfragen jetzt doppelt so schnell und mit viel weniger Fehlern.",
    initials: "SR",
    stars: 5,
    color: "from-orange-600 to-orange-800",
  },
  {
    name: "Markus Wendland",
    role: "Inhaber, Wendland Immobilien",
    body: "Tim kennt die Branche in- und auswendig. Das macht den Unterschied zu generischen Digitalisierungsberatern. Hier wird nicht erklärt — hier wird gezeigt.",
    initials: "MW",
    stars: 5,
    color: "from-rose-600 to-rose-800",
  },
]

const values = [
  {
    icon: Shield,
    title: "25 Jahre Branchenwissen",
    desc: "Kein Theoretiker — Tim betreibt selbst eine Hausverwaltung. Jeder Rat kommt aus echter Praxiserfahrung.",
  },
  {
    icon: Users,
    title: "Praxisnähe",
    desc: "Die Lösungen passen zu Deiner Realität. Keine akademischen Konzepte, sondern sofort umsetzbare Strategien.",
  },
  {
    icon: Zap,
    title: "Digitale Prozesse",
    desc: "Der Fokus liegt auf messbarer Effizienzsteigerung — durch smarte Systeme statt mehr Personal.",
  },
  {
    icon: Award,
    title: "KI-Mehrwert",
    desc: "KI ist kein Hype, sondern Werkzeug. Tim zeigt Dir, welche Tools wirklich helfen — und welche Du weglassen kannst.",
  },
  {
    icon: Clock,
    title: "Sofortige Wirkung",
    desc: "Quick Wins von Tag eins. Du siehst Ergebnisse, bevor das Coaching endet.",
  },
  {
    icon: CheckCircle2,
    title: "Datenschutz First",
    desc: "Alle Empfehlungen berücksichtigen die DSGVO und gängige Branchensoftware. Sicherheit hat Vorrang.",
  },
]

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({ name, role, body, initials, stars, color }: (typeof testimonials)[number]) {
  return (
    <div
      className="glass w-72 rounded-2xl p-5 mx-2 flex flex-col gap-3 flex-shrink-0"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-white/75 leading-relaxed">&ldquo;{body}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/8">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
        >
          {initials}
        </div>
        <div>
          <p className="text-xs font-semibold text-white">{name}</p>
          <p className="text-xs text-white/50">{role}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/8">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLogo />
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#prozess" className="hover:text-white transition-colors">Prozess</a>
            <a href="#stimmen" className="hover:text-white transition-colors">Stimmen</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
            <a
              href="https://open.spotify.com/show/2lCJj9KOSLL8yJze7epqhT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              style={{ color: "#1db954" }}
            >
              <Headphones className="w-3.5 h-3.5" />
              Podcast
            </a>
          </div>
          <LiquidGlassButton
            size="sm"
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
          >
            Gespräch vereinbaren
          </LiquidGlassButton>
        </div>
      </nav>

      {/* ── Hero ── */}
      <NeonFlow className="min-h-screen pt-16">
        <div className="min-h-screen max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 relative">

          {/* Text side */}
          <div className="flex-1 flex flex-col items-start text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-purple-300 border border-purple-500/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
              KI · Automatisierung · Digitalisierung für Hausverwalter
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter"
            >
              Deine Hausverwaltung.{" "}
              <span className="text-gradient-purple">Digital.</span>{" "}
              <span className="text-gradient-neon">Automatisiert.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-white/55 max-w-xl leading-relaxed"
            >
              Tim Weber begleitet Hausverwaltungsunternehmen dabei, KI und Automatisierung
              so einzusetzen, dass sie weniger arbeiten und mehr erreichen.
              Kein Hype — echte Resultate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <LiquidGlassButton
                size="lg"
                onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kostenloses Erstgespräch
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </LiquidGlassButton>
              <LiquidGlassButton
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" })}
              >
                Leistungen entdecken
              </LiquidGlassButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { val: "25+", label: "Jahre Branchenwissen" },
                { val: "100+", label: "Unternehmen beraten" },
                { val: "bis 70%", label: "Zeitersparnis" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold text-gradient-purple">{s.val}</p>
                  <p className="text-xs text-white/40 mt-1 tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-shrink-0 relative block mt-4 lg:mt-0"
          >
            {/* Neon glow behind photo */}
            <div
              className="absolute -inset-8 rounded-3xl blur-2xl opacity-30"
              style={{ background: "radial-gradient(ellipse, #a855f7 0%, #38bdf8 60%, transparent 100%)" }}
            />
            {/* Teal accent ring */}
            <div
              className="absolute -inset-1 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(90,171,159,0.4), rgba(168,85,247,0.3))",
                padding: "1px",
              }}
            />
            <div className="relative rounded-3xl overflow-hidden w-64 h-[380px] sm:w-72 sm:h-[460px] lg:w-80 lg:h-[520px]">
              {/* Fallback gradient shown if image not yet uploaded */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] to-[#030014]"
                aria-hidden="true"
              />
              {/* Photo — replace src with actual file once copied to /public/images/ */}
              <img
                src="/images/3.jpg"
                alt="Tim Felix Weber – Verwalterberater"
                className="relative z-10 w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
              />
              {/* Bottom gradient blend */}
              <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-[#030014] to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-5 left-5 right-5 z-30 glass-strong rounded-2xl p-4">
                <p className="font-bold text-white text-sm">Tim Felix Weber</p>
                <p className="text-xs" style={{ color: "#5aab9f" }}>
                  KI-Berater · Hausverwalter · Podcast-Host
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
            <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          </motion.div>
        </div>
      </NeonFlow>

      {/* ── Leistungen ── */}
      <section id="leistungen" className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#0a051a] to-[#030014] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-purple-400 mb-4 block">Was ich anbiete</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Leistungen, die <span className="text-gradient-purple">wirken</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Jede Leistung ist so gestaltet, dass Du sofort damit anfangen und messbare Ergebnisse erzielen kannst.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className={`group glass rounded-2xl p-8 cursor-default transition-all duration-300 ${s.border} ${s.glow}`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-6`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                  <p className="text-white/55 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Mehr erfahren <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Prozess ── */}
      <section id="prozess" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-sky-400 mb-4 block">Wie wir zusammenarbeiten</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Der <span className="text-gradient-neon">Prozess</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Vier klare Schritte, von der ersten Analyse bis zu nachweisbarer Wirkung in Deinem Unternehmen.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-500/30 via-sky-500/30 to-emerald-500/30" />
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="relative glass rounded-2xl p-6 text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center font-bold text-sm"
                    style={{
                      background: `radial-gradient(circle, ${step.color}33, transparent)`,
                      border: `1px solid ${step.color}44`,
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </div>
                  <step.icon className="w-5 h-5 mx-auto mb-3" style={{ color: step.color }} />
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="stimmen" className="py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-fuchsia-400 mb-4 block">Was Kunden sagen</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Echte <span className="text-gradient-purple">Ergebnisse</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Hausverwaltungen aus ganz Deutschland berichten von ihrer Transformation.
              </p>
            </motion.div>
          </Section>
        </div>
        <div className="relative flex h-[480px] w-full flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform: "translateX(-60px) translateY(0px) translateZ(-80px) rotateX(18deg) rotateY(-8deg) rotateZ(18deg)",
            }}
          >
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
              {testimonials.map((t) => <TestimonialCard key={t.name + "a"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:38s]">
              {testimonials.map((t) => <TestimonialCard key={t.name + "b"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:32s]">
              {testimonials.map((t) => <TestimonialCard key={t.name + "c"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s]">
              {testimonials.map((t) => <TestimonialCard key={t.name + "d"} {...t} />)}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#030014]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#030014]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#030014]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#030014]" />
          </div>
        </div>
      </section>

      {/* ── Werte / Erfahrung ── */}
      <section id="erfahrung" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 mb-4 block">Warum Tim Weber</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Erfahrung <span className="text-gradient-neon">trifft Innovation</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Kein externer Theoretiker — sondern ein Unternehmer, der täglich die gleichen Herausforderungen kennt wie Du.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="neon-border rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-10 items-center"
            >
              {/* Profile photo */}
              <div className="flex-shrink-0 relative">
                <div
                  className="absolute -inset-1 rounded-2xl blur-sm opacity-60"
                  style={{ background: "linear-gradient(135deg, #5aab9f, #a855f7)" }}
                />
                <div className="relative w-40 h-48 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1535] to-[#030014]" />
                  <img
                    src="/images/8.jpg"
                    alt="Tim Felix Weber"
                    className="relative z-10 w-full h-full object-cover object-top"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = "none"
                      const fallback = el.parentElement?.querySelector(".fallback-initials") as HTMLElement
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  {/* Fallback if photo not yet uploaded */}
                  <div
                    className="fallback-initials absolute inset-0 z-10 items-center justify-center text-4xl font-black text-white bg-gradient-to-br from-purple-600 to-fuchsia-600"
                    style={{ display: "none" }}
                  >
                    TW
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">Tim Felix Weber</h3>
                <p className="text-sm mb-5" style={{ color: "#5aab9f" }}>
                  Unternehmer · Hausverwalter · KI-Berater · Podcast-Host &ldquo;Der Verwalterberater&rdquo;
                </p>
                <p className="text-white/60 leading-relaxed mb-5">
                  Tim betreibt mit CASITA selbst eine aktive Hausverwaltung in Berlin und weiß daher aus erster Hand,
                  welche Prozesse sich lohnen zu automatisieren — und welche nicht. Sein Ansatz: Keine Buzzwords,
                  keine generischen Frameworks. Nur was wirklich hilft.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Berlin", "25+ Jahre Erfahrung", "WEG · Miet · Eigentum", "CASITA GmbH"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full glass"
                      style={{ border: "1px solid rgba(90,171,159,0.25)", color: "#5aab9f" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Podcast + LinkedIn CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://open.spotify.com/show/2lCJj9KOSLL8yJze7epqhT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 glass rounded-xl px-5 py-3 transition-all group"
                    style={{ border: "1px solid rgba(29,185,84,0.2)" }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#1db954" }}>
                      <Headphones className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Jetzt anhören auf Spotify</p>
                      <p className="text-sm font-semibold text-white">Der Verwalterberater Podcast</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/30 ml-2 group-hover:text-white/60 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/timfelixweber/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 glass rounded-xl px-5 py-3 transition-all group"
                    style={{ border: "1px solid rgba(10,102,194,0.25)" }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#0a66c2" }}>
                      <LinkedinIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Vernetzen auf LinkedIn</p>
                      <p className="text-sm font-semibold text-white">Tim Felix Weber</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/30 ml-2 group-hover:text-white/60 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="glass rounded-xl p-6 hover:border-white/15 transition-colors">
                  <v.icon className="w-5 h-5 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" className="py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-3xl mx-auto relative">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-purple-400 mb-4 block">Bereit loszulegen?</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Lass uns <span className="text-gradient-purple">reden</span>
              </h2>
              <p className="text-white/50 max-w-lg mx-auto">
                Kostenfreies Erstgespräch, 30 Minuten. Wir schauen gemeinsam, wo der größte Hebel für Dein Unternehmen liegt.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-strong rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-5 mb-10">
                <a
                  href="mailto:info@verwalterberater.de"
                  className="flex items-center gap-4 glass rounded-xl p-5 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/25 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">E-Mail</p>
                    <p className="font-medium text-white text-sm break-all">info@verwalterberater.de</p>
                  </div>
                </a>
                <a
                  href="https://open.spotify.com/show/2lCJj9KOSLL8yJze7epqhT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-5 transition-all group"
                  style={{ border: "1px solid rgba(29,185,84,0.15)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: "rgba(29,185,84,0.15)" }}>
                    <Headphones className="w-5 h-5" style={{ color: "#1db954" }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Podcast</p>
                    <p className="font-medium text-white text-sm">Der Verwalterberater</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/timfelixweber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-5 transition-all group"
                  style={{ border: "1px solid rgba(10,102,194,0.2)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: "rgba(10,102,194,0.18)" }}>
                    <LinkedinIcon className="w-5 h-5" style={{ color: "#4d9fdc" }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">LinkedIn</p>
                    <p className="font-medium text-white text-sm">Tim Felix Weber</p>
                  </div>
                </a>
              </div>

              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Dein Name"
                    className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none w-full bg-transparent"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                  <input
                    type="email"
                    placeholder="Deine E-Mail"
                    className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none w-full bg-transparent"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Unternehmen (optional)"
                  className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none w-full bg-transparent"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <textarea
                  rows={4}
                  placeholder="Kurze Beschreibung Deiner Situation / Was möchtest Du erreichen?"
                  className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none w-full bg-transparent"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <LiquidGlassButton size="lg" className="w-full justify-center">
                  <MessageSquare className="w-4 h-4 mr-2 inline" />
                  Erstgespräch anfragen
                </LiquidGlassButton>
              </form>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t py-12 px-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <NavLogo />
            <p className="text-xs text-white/30 mt-2">KI-Beratung für Hausverwaltungsunternehmen</p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-white/30 justify-center">
            <a href="#leistungen" className="hover:text-white/60 transition-colors">Leistungen</a>
            <a href="#prozess" className="hover:text-white/60 transition-colors">Prozess</a>
            <a href="#kontakt" className="hover:text-white/60 transition-colors">Kontakt</a>
            <a
              href="https://open.spotify.com/show/2lCJj9KOSLL8yJze7epqhT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors"
              style={{ color: "#1db954" }}
            >
              <Headphones className="w-3 h-3" />
              Podcast
            </a>
            <a
              href="https://www.linkedin.com/in/timfelixweber/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors"
              style={{ color: "#0a66c2" }}
            >
              <LinkedinIcon className="w-3 h-3" />
              LinkedIn
            </a>
            <a href="/impressum" className="hover:text-white/60 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</a>
          </div>
          <p className="text-xs text-white/20">© 2026 Tim Felix Weber · verwalterberater.de</p>
        </div>
      </footer>
    </main>
  )
}
