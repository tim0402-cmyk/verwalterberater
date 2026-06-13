"use client"

import React, { useEffect, useState } from "react"
import { Cookie } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const STORAGE_KEY = "vb-cookie-consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Erst nach Mount prüfen (kein SSR-Mismatch)
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  // Scrollen sperren, solange das Overlay offen ist
  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [visible])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ accepted: true, ts: Date.now() }))
    } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(3, 0, 20, 0.85)", backdropFilter: "blur(8px)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Cookie-Hinweis"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass-strong rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            style={{ border: "1px solid rgba(90,171,159,0.3)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "linear-gradient(135deg, #5aab9f, #38bdf8)" }}
            >
              <Cookie className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-xl font-bold text-white mb-3">Willkommen bei Verwalterberater</h2>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Es findet
              kein Tracking und keine Weitergabe Deiner Daten statt. Details findest Du in der{" "}
              <a
                href="/datenschutz/"
                className="underline hover:text-white transition-colors"
                style={{ color: "#7fc4ba" }}
              >
                Datenschutzerklärung
              </a>
              .
            </p>

            <button
              onClick={accept}
              className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #5aab9f, #38bdf8)" }}
            >
              Verstanden & weiter
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
