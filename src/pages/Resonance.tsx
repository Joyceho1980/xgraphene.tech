import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Radio, BookOpen, ArrowRight, Calendar, Download } from 'lucide-react'
import WisdomAnchor from '../components/WisdomAnchor'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'insights', label: 'Insights & Resonance' },
  { key: 'standards', label: 'Standard Tracking' },
  { key: 'philosophy', label: 'Philosophy & Gift' },
]

const articles = [
  {
    id: 1,
    title: '9.4μm Spectrum Discussed at the Latest London Dermatology Congress',
    category: 'insights',
    date: '2026-05-13',
    tags: ['PBM', 'Mitochondrial', 'Clinical'],
    excerpt: 'The significance of 9.4μm peak wavelength for Cytochrome c Oxidase activation was a key topic at the recent international dermatology gathering. Experts discussed the growing evidence linking precision far-infrared spectrum to improved cellular energy outcomes.',
    doi: '#',
  },
  {
    id: 2,
    title: 'GB/XXXX-2026: China\'s New National Standard for Far-Infrared Emission Measurement',
    category: 'standards',
    date: '2026-05-10',
    tags: ['Standards', 'Regulation', 'Measurement'],
    excerpt: 'The newly published national standard establishes a unified methodology for measuring far-infrared emissivity and spectrum consistency. This marks a significant step forward for the industry\'s quality control framework.',
    doi: '#',
  },
  {
    id: 3,
    title: 'Why Traditional LLLT Is Being Replaced by Precision Spectrum Technology',
    category: 'insights',
    date: '2026-05-08',
    tags: ['LLLT', 'Comparison', 'Technology'],
    excerpt: 'A comparative analysis of Low-Level Laser Therapy versus coherent far-infrared spectrum technology reveals significant advantages in penetration depth, energy consistency, and clinical applicability for mitochondrial optimization.',
    doi: '#',
  },
  {
    id: 4,
    title: 'Academic Board Q1 2026 Meeting Summary: Standardizing 9.4μm Protocol',
    category: 'insights',
    date: '2026-04-28',
    tags: ['Board', 'Protocol', 'IKKEM'],
    excerpt: 'The XIHE Academic Advisory Board, chaired by Academician Zheng Nanfeng, convened for the Q1 2026 quarterly review. Key outcomes include confirmation of 9.4μm as the optimal peak wavelength for CcO activation.',
    doi: 'IKKEM Technical Report 2026-Q1-001',
  },
  {
    id: 5,
    title: 'From Cellular Exhaustion to Bio-Resonance: The Philosophy of Healing',
    category: 'philosophy',
    date: '2026-04-20',
    tags: ['Philosophy', 'Resonance', 'Healing'],
    excerpt: 'Technology is the humble guest. Life is the sacred host. Exploring how XIHE\'s approach to 5-15μm graphene resonance embodies a philosophy where science becomes a gift to the miracle of life.',
    doi: '#',
  },
  {
    id: 6,
    title: 'The Physics of Being Seen: How Resonance Becomes Healing',
    category: 'philosophy',
    date: '2026-04-15',
    tags: ['Psychology', 'Neuroscience', 'Cross-cultural'],
    excerpt: 'When graphene vibration aligns with cellular frequency, technology ceases to be cold intervention and becomes a profound act of seeing. The physics of resonance meets the poetry of healing.',
    doi: '#',
  },
]

export default function Resonance() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <div>
      <WisdomAnchor />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="bg-radial-glow absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">RESONANCE</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
              Insights &{' '}
              <motion.span
                className="grad-text"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Resonance
              </motion.span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto italic">
              &ldquo;All our technology is but a gift to the miracle of life.&rdquo;
            </p>
            <p className="mt-4 text-sm text-text-dim max-w-3xl mx-auto">
              When technology finds its purpose beyond efficiency — when it learns to listen,
              to resonate, and to heal — it becomes a gift. Explore the science, the philosophy,
              and the breakthroughs that define XIHE&apos;s approach to cellular resonance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-bg-secondary/20 border-b border-accent-primary/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-accent-primary text-bg-primary'
                    : 'text-text-muted hover:text-text-primary hover:bg-accent-primary/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article List */}
      <section className="py-16 bg-bg-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {filtered.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="frosted rounded-xl p-8 group hover:border-accent-glow/20 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                          article.category === 'insights' ? 'bg-accent-glow/10 text-accent-glow' :
                          article.category === 'standards' ? 'bg-accent-primary/10 text-accent-primary' :
                          'bg-tier-x3/10 text-tier-x3'
                        }`}>
                          {categories.find((c) => c.key === article.category)?.label}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-text-dim">
                          <Calendar size={12} />
                          {article.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-glow transition-colors duration-300 mb-3">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed mb-3">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {article.tags.map((tag) => (
                          <span key={tag} className="text-[10px] text-text-dim bg-bg-primary px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-glow transition-colors whitespace-nowrap">
                        Read Full Insight
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Whitepaper CTA */}
      <section className="py-16 bg-bg-secondary/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="frosted rounded-xl p-8 text-center"
          >
            <h2 className="text-xl font-bold text-text-primary mb-4">Download the Graphene White Paper</h2>
            <p className="text-sm text-text-muted mb-6 italic">
              &ldquo;We don&apos;t fight the shadow; we only bring the light.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {[
                'XIHE Bio-Resonance Healing White Paper',
                'Mitochondrial Optimization Protocol',
                'The Philosophy of Cell Charging',
              ].map((paper) => (
                <button
                  key={paper}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm text-text-primary border border-accent-primary/20 rounded-md hover:border-accent-glow hover:text-accent-glow transition-all duration-300"
                >
                  <Download size={14} />
                  <span className="text-left">{paper}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section className="py-12 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-text-dim font-mono leading-relaxed max-w-2xl mx-auto">
            Graphene Bio-resonance · 5-15μm Spectrum · Mitochondrial Optimization ·
            Photobiomodulation · 9.4μm Peak · CcO Activation · ATP Synthesis ·
            Cellular Resonance · Non-thermal Healing · IKKEM Incubation · Life Philosophy
          </p>
        </div>
      </section>
    </div>
  )
}