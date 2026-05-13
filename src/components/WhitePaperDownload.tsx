import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

export default function WhitePaperDownload() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="bg-hex-grid absolute inset-0" />
      <div className="bg-radial-glow absolute inset-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="frosted rounded-2xl p-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] text-accent-primary font-semibold tracking-[0.2em] uppercase bg-accent-primary/10 px-3 py-1 rounded-full">
              TECHNICAL AUTHORITY
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight mb-3">
            XIHE: The Graphene Standard for
            <br />
            <span className="grad-text">Human Bio-Resonance</span>
          </h2>

          <p className="text-sm text-accent-primary/80 italic mb-4">
            Scientific validation of 5-15μm coherent waves on mitochondrial ATP synthesis and cellular recovery.
          </p>

          <p className="text-sm text-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            想要了解 XIHE GRAPHENE 如何在分子水平上重塑生命力？下载我们的技术白皮书。深入探索郑南峰院士团队的学术支撑，以及石墨烯晶格如何驱动精准的生物共振。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Graphene Atomic Engineering', kw: 'Emission Efficiency' },
              { title: 'The 9.4μm Peak', kw: 'Life Frequency' },
              { title: 'CcO Activation Path', kw: 'ATP, Mitochondria' },
              { title: 'Clinical Resonance Metrics', kw: 'Penetration Depth' },
            ].map((ch) => (
              <div key={ch.title} className="frosted rounded-lg p-4 text-left">
                <p className="text-[10px] text-text-dim uppercase tracking-wider">Chapter</p>
                <p className="text-sm text-text-primary font-medium mt-1">{ch.title}</p>
                <p className="text-[10px] text-accent-primary mt-1">{ch.kw}</p>
              </div>
            ))}
          </div>

          <a
            href="/white-paper-graphene-bio-resonance-healing-technology.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 text-sm tracking-wide group"
          >
            <FileText size={18} className="group-hover:scale-105 transition-transform" />
            Download the Graphene White Paper (PDF)
            <Download size={16} className="ml-1 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <p className="text-xs text-text-dim mt-4">
            File: white-paper-graphene-bio-resonance-healing-technology.pdf
          </p>
        </motion.div>
      </div>
    </section>
  )
}