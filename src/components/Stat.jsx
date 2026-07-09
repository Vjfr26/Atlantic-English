import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Stat({ value, suffix = '', label, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-extrabold text-sun-400 md:text-5xl">
        {display.toLocaleString('pt-PT')}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-navy-200">{label}</div>
    </div>
  )
}
