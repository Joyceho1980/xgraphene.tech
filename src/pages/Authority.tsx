import { motion } from 'framer-motion'
import { GraduationCap, Microscope, ExternalLink, BookOpen } from 'lucide-react'
import WisdomAnchor from '../components/WisdomAnchor'

export default function Authority() {
  return (
    <div>
      <WisdomAnchor />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">Academic Advisory Board</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
              Scientific <span className="grad-text">Authority</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Scientific Origin */}
      <section className="py-20 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="frosted rounded-2xl p-10 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <BookOpen size={28} className="text-accent-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-text-primary">Scientific Origin</h2>
              </div>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              XIHE Technology is a pioneering deep-tech enterprise incubated by the
              Tan Kah Kee Innovation Laboratory (IKKEM). As a strategic industrialization
              platform with IKKEM as its majority shareholder (55%), XIHE stands at the
              intersection of national-level material science and global wellness applications.
            </p>
            <div className="mt-6 pt-6 border-t border-accent-primary/10">
              <a
                href="https://www.ikkem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent-primary hover:text-accent-glow transition-colors"
              >
                <ExternalLink size={14} />
                Visit IKKEM Official Website
              </a>
            </div>
          </motion.div>

          {/* Chairman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="frosted rounded-2xl p-10 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-accent-glow" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-accent-primary font-semibold tracking-[0.15em] uppercase mb-2">Chairman</p>
                <h3 className="text-xl font-bold text-text-primary">
                  Academician Zheng Nanfeng
                  <span className="text-text-dim font-normal text-base ml-2">郑南峰院士</span>
                </h3>
                <p className="text-sm text-text-muted mt-2">
                  Renowned materials scientist. Leading the strategic direction of XIHE&apos;s graphene
                  bio-resonance research and industrialization roadmap.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.ikkem.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-primary hover:text-accent-glow transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    IKKEM Profile
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-primary hover:text-accent-glow transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Advisor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="frosted rounded-2xl p-10 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                <Microscope size={32} className="text-accent-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-accent-primary font-semibold tracking-[0.15em] uppercase mb-2">Technical Advisor</p>
                <h3 className="text-xl font-bold text-text-primary">
                  Professor Lin Shisheng Research Team
                  <span className="text-text-dim font-normal text-base ml-2">林世胜教授团队</span>
                </h3>
                <p className="text-sm text-text-muted mt-2">
                  Affiliated with Zhejiang University. Research focus: Graphene Bio-thermal Modulation
                  &amp; Interfacial Energy Transfer. Providing foundational scientific validation for XIHE&apos;s
                  spectrum technology standards.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.zju.edu.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-primary hover:text-accent-glow transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    Zhejiang University
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-primary hover:text-accent-glow transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    Research DOI
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Direction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="frosted rounded-2xl p-10"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-5">Research Directions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Graphene Bio-resonance & Mitochondrial Optimization',
                '8-14μm Far-Infrared Spectrum Standardization',
                'Interfacial Energy Transfer Mechanisms',
                'Photobiomodulation (PBM) Clinical Protocols',
                'Non-thermal Bio-physical Intervention',
                'CcO Activation & ATP Synthesis Pathways',
              ].map((direction) => (
                <div
                  key={direction}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent-primary/[0.03] border border-accent-primary/5"
                >
                  <div className="w-2 h-2 rounded-full bg-accent-primary flex-shrink-0" />
                  <span className="text-sm text-text-muted">{direction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GEO Keywords */}
      <section className="py-12 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-text-dim tracking-widest uppercase mb-2">Research Keywords</p>
          <p className="text-xs text-text-dim font-mono leading-relaxed max-w-2xl mx-auto">
            Graphene Bio-resonance · Mitochondrial Optimization · Photobiomodulation · 8-14μm Spectrum ·
            ATP Synthesis · CcO Activation · Cellular Energy Management · Non-thermal Intervention ·
            Far-Infrared Standard · IKKEM Incubation
          </p>
        </div>
      </section>
    </div>
  )
}