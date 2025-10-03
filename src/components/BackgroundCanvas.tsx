import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!

    const state = {
      dpr: Math.max(1, Math.min(window.devicePixelRatio || 1, 2)),
      width: 0,
      height: 0,
      t0: performance.now(),
    }

    const resize = () => {
      state.dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2))
      state.width = window.innerWidth
      state.height = window.innerHeight
      canvas.width = Math.floor(state.width * state.dpr)
      canvas.height = Math.floor(state.height * state.dpr)
      canvas.style.width = state.width + 'px'
      canvas.style.height = state.height + 'px'
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)
    }

    // mouse handler not used (effect disabled)

    resize()
    window.addEventListener('resize', resize)
    // Mouse effect disabled; keep listener removed

    let raf = 0
    const render = () => {
      const now = performance.now()
      const t = (now - state.t0) / 1000
      ctx.clearRect(0, 0, state.width, state.height)

      const spacingX = 24
      const spacingY = 14
      const radiusBase = 1.4

      // Wave parameters
      const waveAmp = 3 // px
      const waveLen = 220 // px
      const waveSpeed = 0.22 // cycles per second (slower)

      // Mouse perturbation disabled

      // draw grid covering screen with margin
      const startY = -spacingY
      const endY = state.height + spacingY
      const startX = -spacingX
      const endX = state.width + spacingX

      for (let y = startY, row = 0; y < endY; y += spacingY, row++) {
        const offsetX = (row % 2) * (spacingX / 2)
        for (let x = startX; x < endX; x += spacingX) {
          // base position
          let px = x + offsetX
          let py = y

          // wave along isometric direction
          const phase = (px / waveLen) * Math.PI * 2 + t * Math.PI * 2 * waveSpeed
          py += Math.sin(phase) * waveAmp

          // brightness
          const alpha = 0.09

          ctx.beginPath()
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.arc(px, py, radiusBase, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      // no mouse listener registered
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  )
}


