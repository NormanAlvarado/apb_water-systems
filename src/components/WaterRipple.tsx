import { useEffect, useRef } from 'react'

interface WaterRippleProps {
  className?: string
}

export default function WaterRipple({ className = '' }: WaterRippleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ripples = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      // Create new ripple
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 100 + Math.random() * 50,
        alpha: 0.5
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw ripples
      ripples.current = ripples.current.filter(ripple => {
        ripple.radius += 2
        ripple.alpha -= 0.01

        if (ripple.alpha > 0 && ripple.radius < ripple.maxRadius) {
          // Draw ripple
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.alpha})`
          ctx.lineWidth = 2
          ctx.stroke()

          // Inner ripple
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(14, 165, 233, ${ripple.alpha * 0.5})`
          ctx.lineWidth = 1
          ctx.stroke()

          return true
        }
        return false
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
