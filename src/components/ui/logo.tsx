import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "white" | "teal" | "dark"
  showText?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
}

// SVG recreation of the vb monogram mark
export function LogoMark({ className, color = "white" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left arm of V — curves down-left */}
      <path
        d="M18 12 C18 12 18 62 18 68 C18 80 28 88 40 88 C52 88 60 80 60 68"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right arm of V + vertical stem — curves down-right then up */}
      <path
        d="M60 68 C60 80 68 88 80 88 C92 88 102 80 102 68 C102 56 92 46 80 46 C74 46 68 48 64 53 L60 12"
        stroke={color}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner bowl of b — filled circle */}
      <circle cx="80" cy="68" r="12" fill={color} />
    </svg>
  )
}

export function LogoWordmark({ className, color = "white" }: { className?: string; color?: string }) {
  const teal = "#5aab9f"
  return (
    <svg
      viewBox="0 0 340 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="26"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="3"
        fill={color}
      >
        VERWALTERBERATER
      </text>
      {/* Teal underline accents under E characters */}
      <rect x="20" y="30" width="14" height="2.5" rx="1" fill={teal} />
      <rect x="148" y="30" width="14" height="2.5" rx="1" fill={teal} />
      <rect x="276" y="30" width="14" height="2.5" rx="1" fill={teal} />
    </svg>
  )
}

export function Logo({ variant = "white", showText = true, className, size = "md" }: LogoProps) {
  const markColor = variant === "dark" ? "#1a1a1a" : "white"
  const textColor = variant === "dark" ? "#1a1a1a" : "white"

  const sizes = {
    sm: { mark: "h-8", gap: "gap-2", text: "h-4" },
    md: { mark: "h-12", gap: "gap-3", text: "h-5" },
    lg: { mark: "h-16", gap: "gap-4", text: "h-7" },
  }

  return (
    <div className={cn("flex flex-col items-center", sizes[size].gap, className)}>
      <LogoMark color={markColor} className={sizes[size].mark} />
      {showText && <LogoWordmark color={textColor} className={sizes[size].text} />}
    </div>
  )
}

// Inline nav variant: echtes Logo (weiße Version) als Bild
export function NavLogo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-white.png"
      alt="Verwalterberater"
      className={cn("h-11 w-auto select-none", className)}
    />
  )
}
