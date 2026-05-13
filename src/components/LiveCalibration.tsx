import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const wavelengths = [
  { label: '5μm', pos: 0 },
  { label: '8μm', pos: 25 },
  { label: '9.4μm', pos: 48, peak: true },
  { label: '12μm', pos: 72 },
  { label: '14μm', pos: 88 },
  { label: '15μm', pos: 100 },
]

export default function LiveCalibration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })
  const [locked, setLocked] = useState(false)
  const [pointerPos, setPointerPos] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setLocked(false)
      setPointerPos(0)
      return
    }

    const duration = 2000
    const targetPos = 48
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 2)
      const pos = eased * targetPos

      setPointerPos(pos)

      if (progress >= 1) {
        setLocked(true)
        setPointerPos(targetPos)
      } else {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView])

  return (
    <div ref={ref} className="py-10">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-text-primary tracking-wide">LIVE CALIBRATION</h3>
        <p className="text-xs text-text-muted mt-1">Spectrometer needle locking to 9.4μm — the CcO activation peak</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Wavelength bar */}
        <div className="h-16 frosted rounded-lg relative overflow-hidden">
          {/* Gradient background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(90deg, #8BA4C4 0%, #7091B3 30%, #88C0D0 48%, #7091B3 70%, #8BA4C4 100%)',
            }}
          />

          {/* Tick marks */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
            {wavelengths.map((w) => (
              <div
                key={w.label}
                className={`flex flex-col items-center ${w.peak ? 'text-accent-glow' : 'text-text-dim'}`}
              >
                <div className={`w-px h-3 mb-1 ${w.peak ? 'bg-accent-glow' : 'bg-accent-primary/30'}`} />
                <span className="text-[10px] font-mono">{w.label}</span>
              </div>
            ))}
          </div>

          {/* Pointer */}
          <motion.div
            className="absolute top-0 w-0.5 h-full bg-accent-glow z-10"
            style={{ left: `${pointerPos}%` }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-glow rounded-full shadow-[0_0_10px_rgba(136,192,208,0.6)]" />
          </motion.div>

          {/* Lock indicator */}
          {locked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 right-4"
            >
              <span className="text-xs font-mono text-accent-glow bg-accent-glow/10 px-2 py-1 rounded">
                LOCKED ★ 9.4μm
              </span>
            </motion.div>
          )}
        </div>

        {/* Breathing pulse effect when locked */}
        {locked && (
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
            className="absolute inset-0 rounded-lg ring-1 ring-accent-glow/20 pointer-events-none"
          />
        )}
      </div>

      <p className="text-center text-xs text-text-dim mt-4">
        This is not just heating — this is precision focusing at the molecular level.
      </p>
    </div>
  )
}