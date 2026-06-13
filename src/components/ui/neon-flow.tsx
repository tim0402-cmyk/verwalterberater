"use client"

import React, { useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
}

interface NeonFlowProps {
  children?: React.ReactNode
  className?: string
}

const COLORS = [
  "#5aab9f",
  "#7fc4ba",
  "#38bdf8",
  "#60a5fa",
  "#34d399",
  "#22d3ee",
  "#818cf8",
  "#5aab9f",
]

export function NeonFlow({ children, className }: NeonFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2
    const speed = 0.5 + Math.random() * 1.5
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: 80 + Math.random() * 120,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 1 + Math.random() * 2.5,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      // Spawn particles on mouse move
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(
          createParticle(mouseRef.current.x, mouseRef.current.y)
        )
      }
    }
    canvas.addEventListener("mousemove", handleMouseMove)

    // Flowing tubes / sine wave paths
    const drawFlowLines = (t: number) => {
      const w = canvas.width
      const h = canvas.height

      const lines = [
        { color: "#5aab9f", phase: 0, amp: 0.12, freq: 0.008, y: 0.35 },
        { color: "#38bdf8", phase: 1.2, amp: 0.09, freq: 0.006, y: 0.5 },
        { color: "#7fc4ba", phase: 2.4, amp: 0.15, freq: 0.01, y: 0.65 },
        { color: "#34d399", phase: 0.8, amp: 0.08, freq: 0.007, y: 0.42 },
        { color: "#22d3ee", phase: 1.9, amp: 0.11, freq: 0.009, y: 0.58 },
      ]

      for (const line of lines) {
        ctx.beginPath()
        ctx.strokeStyle = line.color
        ctx.lineWidth = 1.5
        ctx.globalAlpha = 0.35

        for (let x = 0; x <= w; x += 3) {
          const y =
            h * line.y +
            Math.sin(x * line.freq + t * 0.02 + line.phase) * h * line.amp +
            Math.sin(x * line.freq * 2.3 + t * 0.015 + line.phase * 1.7) * h * line.amp * 0.4

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const animate = () => {
      timeRef.current++
      const t = timeRef.current

      // Fade trail
      ctx.fillStyle = "rgba(3, 0, 20, 0.18)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawFlowLines(t)

      // Ambient particles (auto-spawn along flow paths)
      if (t % 3 === 0) {
        const x = Math.random() * canvas.width
        const yBase = canvas.height * (0.3 + Math.random() * 0.4)
        particlesRef.current.push(createParticle(x, yBase))
      }

      // Update & draw particles
      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife)
      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.01 // subtle gravity
        p.life++

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.8
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.fill()
        ctx.globalAlpha = 1

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        grd.addColorStop(0, p.color + "88")
        grd.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.globalAlpha = alpha * 0.3
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // Cap particle count
      if (particlesRef.current.length > 600) {
        particlesRef.current = particlesRef.current.slice(-400)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Fill background once
    ctx.fillStyle = "#030014"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [createParticle])

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none", background: "#030014" }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}

export default NeonFlow
