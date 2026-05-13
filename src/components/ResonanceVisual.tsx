import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ResonanceVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)

  return (
    <section ref={ref} className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="bg-radial-glow absolute inset-0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">Intuitive Understanding</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
            Most products heat the skin.{' '}
            <span className="grad-text">We recharge the cell.</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            While conventional heating stops at the surface (~1mm), XIHE&apos;s 5-15μm resonance penetrates 5mm deep to revitalize your biological cells.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Conventional Heating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="frosted rounded-2xl p-10 border border-red-500/10 relative overflow-hidden"
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
          >
            <p className="text-sm font-semibold text-red-400/60 mb-8 uppercase tracking-wider text-center">
              Conventional Heating
            </p>

            <div className="relative h-52 flex flex-col items-center justify-end">
              {/* Skin surface line */}
              <div className="absolute top-8 left-0 right-0 flex items-center gap-2">
                <span className="text-[9px] text-text-dim uppercase">Skin Surface</span>
                <div className="flex-1 h-px bg-red-400/30" />
              </div>

              {/* Chaotic red waves */}
              <svg viewBox="0 0 400 160" className="w-full h-full">
                {[0, 8, 16, 24, 32].map((offset, i) => (
                  <motion.path
                    key={i}
                    d={`M 0,${60 + offset} Q 50,${50 + offset} 100,${60 + offset} T 200,${60 + offset} T 300,${60 + offset} T 400,${60 + offset}`}
                    fill="none"
                    stroke="rgba(248,113,113,0.35)"
                    strokeWidth="1.5"
                    animate={isInView ? {
                      d: [
                        `M 0,${60 + offset} Q 50,${45 + offset} 100,${65 + offset} T 200,${55 + offset} T 300,${70 + offset} T 400,${60 + offset}`,
                        `M 0,${60 + offset} Q 50,${70 + offset} 100,${50 + offset} T 200,${65 + offset} T 300,${55 + offset} T 400,${60 + offset}`,
                        `M 0,${60 + offset} Q 50,${45 + offset} 100,${65 + offset} T 200,${55 + offset} T 300,${70 + offset} T 400,${60 + offset}`,
                      ]
                    } : {}}
                    transition={{ duration: hoverLeft ? 0.3 : 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
                {/* Block line - waves stop here */}
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(248,113,113,0.15)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>

              {/* Cell - dark, unresponsive */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-500/5 border border-red-500/10" />
                <span className="text-[10px] text-red-400/40 mt-1">Cell (No Response)</span>
              </div>

              <motion.div
                animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              >
                <span className="text-xs text-red-400/40 font-mono">Thermal Noise</span>
              </motion.div>
            </div>

            <p className="text-center text-xs text-text-dim mt-4 font-mono">Max Depth: ~1MM</p>
            <p className="text-center text-[11px] text-red-400/30 italic">Just heating the surface.</p>
          </motion.div>

          {/* Right: XIHE Resonance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="frosted rounded-2xl p-10 border border-accent-glow/20 glow-pulse relative overflow-hidden"
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
          >
            <p className="text-sm font-semibold text-accent-glow mb-8 uppercase tracking-wider text-center">
              XIHE Cell Charging
            </p>

            <div className="relative h-52 flex flex-col items-center justify-end">
              {/* Skin surface line */}
              <div className="absolute top-8 left-0 right-0 flex items-center gap-2">
                <span className="text-[9px] text-text-dim uppercase">Skin Surface</span>
                <div className="flex-1 h-px bg-accent-primary/30" />
              </div>

              {/* Coherent blue sine waves */}
              <svg viewBox="0 0 400 160" className="w-full h-full">
                {[0, 6, 12, 18, 24].map((offset, i) => (
                  <motion.path
                    key={i}
                    d={`M 0,${50 + offset} C 66,${50 + offset} 66,${40 + offset} 132,${40 + offset} C 198,${40 + offset} 198,${50 + offset} 264,${50 + offset} C 330,${50 + offset} 330,${40 + offset} 400,${40 + offset}`}
                    fill="none"
                    stroke="rgba(169,199,209,0.4)"
                    strokeWidth="1.5"
                    animate={isInView ? {
                      d: [
                        `M 0,${50 + offset} C 66,${50 + offset} 66,${40 + offset} 132,${40 + offset} C 198,${40 + offset} 198,${50 + offset} 264,${50 + offset} C 330,${50 + offset} 330,${40 + offset} 400,${40 + offset}`,
                      ]
                    } : {}}
                    transition={{ duration: hoverRight ? 2 : 5, repeat: Infinity, ease: 'linear' }}
                  />
                ))}
                {/* Penetration depth line */}
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(169,199,209,0.15)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>

              {/* Cell - glowing, alive */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <motion.div
                  animate={isInView ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full bg-accent-glow/15 border border-accent-glow/40 flex items-center justify-center"
                  style={{ boxShadow: hoverRight ? '0 0 18px rgba(169,199,209,0.5)' : '0 0 12px rgba(169,199,209,0.3)' }}
                >
                  <motion.div
                    animate={isInView ? { scale: [0.8, 1.1, 0.8] } : {}}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-5 h-5 rounded-full bg-accent-glow/30"
                    style={{ boxShadow: '0 0 8px rgba(169,199,209,0.5)' }}
                  />
                </motion.div>
                <span className="text-[10px] text-accent-glow mt-1.5 opacity-80">Full Capacity</span>
              </div>
            </div>

            <p className="text-center text-xs text-accent-glow mt-4 font-mono">Penetration Depth: 5MM</p>
            <p className="text-center text-[11px] text-accent-primary/70 italic">Deep Cellular Resonance.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center text-xs text-text-dim mt-10"
        >
          当 5-15μm 的波段触及细胞时，能量交换就在共振中完成——这就是生命被"看见"的瞬间。
        </motion.p>
      </div>
    </section>
  )
}