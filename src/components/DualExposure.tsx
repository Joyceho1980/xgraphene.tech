import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BatteryCharging, Zap } from 'lucide-react'

export default function DualExposure() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="bg-radial-glow absolute inset-0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
            From Cellular Exhaustion to{' '}
            <span className="grad-text">Bio-Resonance</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            从细胞枯竭到生物共振 &mdash; XIHE spectrum recharges your cellular power plant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Dull Mitochondria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="frosted rounded-xl p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-primary/5 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/20 animate-pulse" />
                </div>
              </div>
              <p className="text-sm font-medium text-text-muted">Cellular Exhaustion</p>
              <p className="text-xs text-text-dim mt-2">Low ATP · Anxiety · Fatigue</p>
            </div>
          </motion.div>

          {/* Center: XIHE Resonance Beam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center relative"
          >
            <motion.div
              animate={isInView ? { opacity: [0.3, 1, 0.3] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent-glow/60 to-transparent rounded-full" />
            </motion.div>
            <motion.div
              animate={isInView ? { opacity: [0, 1, 0], x: [-50, 0, 50] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <BatteryCharging size={24} className="text-accent-glow" />
            </motion.div>
            <div className="frosted rounded-xl p-8 mt-8">
              <Zap size={32} className="text-accent-glow mx-auto mb-3" />
              <p className="text-sm font-semibold text-accent-glow">XIHE Resonance</p>
              <p className="text-xs text-text-dim mt-2">8-14μm · 0.98 Emissivity</p>
              <p className="text-xs text-text-dim">9.4μm Peak · CcO Activation</p>
            </div>
          </motion.div>

          {/* Right: Glowing Mitochondria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="frosted rounded-xl p-8 glow-pulse">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-glow/10 flex items-center justify-center shadow-[0_0_30px_rgba(136,192,208,0.3)]">
                <div className="w-14 h-14 rounded-full bg-accent-glow/20 flex items-center justify-center shadow-[0_0_20px_rgba(136,192,208,0.4)]">
                  <div className="w-8 h-8 rounded-full bg-accent-glow/40 shadow-[0_0_15px_rgba(136,192,208,0.5)]" />
                </div>
              </div>
              <p className="text-sm font-medium text-accent-glow">Bio-Resonance</p>
              <p className="text-xs text-accent-primary mt-2">ATP Synthesis · Proton Gradient · Vitality</p>
            </div>
          </motion.div>
        </div>

        {/* Scan line effect */}
        <motion.div
          className="mt-12 h-0.5 bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent"
          animate={isInView ? { opacity: [0.3, 0.8, 0.3] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <p className="text-center text-xs text-text-dim mt-4 tracking-widest uppercase">
          Cellular Energy Transfer Protocol
        </p>
      </div>
    </section>
  )
}