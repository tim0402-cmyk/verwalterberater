"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface LiquidGlassButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function LiquidGlassButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: LiquidGlassButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center font-semibold tracking-wide rounded-full",
        "backdrop-blur-xl border transition-all duration-300",
        "overflow-hidden group",
        size === "sm" && "px-5 py-2.5 text-sm",
        size === "md" && "px-8 py-4 text-base",
        size === "lg" && "px-10 py-5 text-lg",
        variant === "primary" && [
          "bg-white/10 border-white/20 text-white",
          "hover:bg-white/15 hover:border-white/30",
          // Ruhe: dezenter Teal-Glow im Normalzustand …
          "shadow-[0_0_24px_rgba(79,157,146,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]",
          // … beim Hover kommt der Lila-Marken-Akzent dezent dazu
          "hover:shadow-[0_0_45px_rgba(124,92,255,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]",
        ],
        variant === "secondary" && [
          "bg-transparent border-white/30 text-white/80",
          "hover:bg-white/5 hover:border-white/50 hover:text-white",
        ],
        className
      )}
      {...props}
    >
      {/* Neon shimmer overlay */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(124,92,255,0.14) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
      />
      {/* Inner glass highlight */}
      <span className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
