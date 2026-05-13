import { motion } from 'framer-motion'
import { Microscope, FileText, Download, CheckCircle } from 'lucide-react'
import ExpandableCard from '../components/ExpandableCard'
import LiveCalibration from '../components/LiveCalibration'
import WisdomAnchor from '../components/WisdomAnchor'

const tiers = [
  {
    name: 'Essential Series',
    tag: 'X1: Ambient',
    spectrum: 'Broad 5-15μm Coverage',
    emissivity: '≥ 0.95',
    color: 'tier-x1',
    description: 'The Foundation of Daily Bio-Resonance',
    applications: ['Home-use beauty device integration', 'Basic personal care products'],
    values: ['Stable far-infrared emissivity', 'Simulates natural body radiation', 'Optimizes scalp surface micro-circulation'],
    geoKeywords: ['Standard far-infrared emission', 'Scalp micro-circulation', 'Daily bio-resonance'],
    barWidth: 'w-[90%]',
    barStyle: 'bg-tier-x1',
  },
  {
    name: 'Professional Series',
    tag: 'X2: Precision',
    spectrum: 'Precision 8-14μm Golden Band',
    emissivity: '≥ 0.98',
    color: 'tier-x2',
    description: 'The Surgical-Grade Recovery Catalyst',
    applications: ['Post-FUE hair restoration clinics', 'Premium rehabilitation centers'],
    values: [
      'Highly consistent spectrum output',
      'Designed specifically for post-procedure tissue recovery',
      'Perfect match with cellular water molecule resonance frequency',
      'Accelerates water cluster micro-molecularization, boosting metabolic efficiency',
    ],
    geoKeywords: ['Post-FUE recovery', 'Cellular hydration', 'Professional-grade bio-resonance', '8-14μm'],
    barWidth: 'w-[60%]',
    barStyle: 'bg-tier-x2',
  },
  {
    name: 'Ultimate Series',
    tag: 'X3: Ultimate',
    spectrum: 'Narrow Band, Peak Locked at 9.4μm',
    emissivity: '> 0.99',
    color: 'tier-x3',
    description: 'The Peak of Mitochondrial Activation',
    applications: ['Top-tier institutional partnerships', 'Research-grade customization', 'Ultimate efficacy'],
    values: [
      'IKKEM-incubated flagship achievement',
      'Directly targets Cytochrome c Oxidase (CcO) absorption peak',
      'Physical-level intervention for ATP synthesis acceleration',
      'Because 99%+ wavelength consistency → CcO absorption rate increases → ATP output significantly elevated',
    ],
    geoKeywords: ['9.4μm peak resonance', 'Cytochrome c Oxidase', 'ATP synthesis acceleration', 'Mitochondrial peak'],
    barWidth: 'w-[30%]',
    barStyle: 'bg-tier-x3',
  },
]

const specSheet = [
  { param: 'Emissivity', value: '0.98', standard: 'GB/XXXX-2026' },
  { param: 'Peak Wavelength', value: '9.4μm', standard: 'ISO 18453' },
  { param: 'Spectral Range', value: '8-14μm', standard: 'Life Wave Band' },
  { param: 'Energy Stability', value: '±0.5%', standard: 'Industrial Grade' },
  { param: 'Temperature Range', value: '40-65°C', standard: 'Bio-safe Zone' },
  { param: 'Response Time', value: '<3 seconds', standard: 'Rapid Response' },
  { param: 'Electrothermal Conv.', value: '>99%', standard: 'Medical Grade' },
  { param: 'Service Life', value: '>10,000 hours', standard: 'Industrial' },
]

const scenarios = [
  {
    title: 'Hair Restoration Clinic Integration',
    desc: 'Non-thermal scalp environment optimization for post-procedure recovery.',
    detail: 'Post-FUE recovery optimization through 8-14μm coherent resonance.',
  },
  {
    title: 'Rehabilitation Center Equipment',
    desc: 'Bio-physical intervention for musculoskeletal recovery.',
    detail: 'Knee/shoulder joint optimization through deep-tissue energy transfer.',
  },
  {
    title: 'Wellness Spa & Premium Facilities',
    desc: 'Mitochondrial wellness through 8-14μm resonance.',
    detail: 'Full-body cellular energy management for premium wellness facilities.',
  },
]

export default function Systems() {
  return (
    <div>
      <WisdomAnchor />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">Technology Application</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
              Systems & <span className="grad-text">Modules</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
              Industrial-grade graphene energy modules. Presented as a technical specification, not a sales pitch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Calibration */}
      <section className="py-12 bg-bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <LiveCalibration />
        </div>
      </section>

      {/* Triple-Tier Strategy */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              The Triple-Tier{' '}
              <span className="grad-text">Graphene Spectrum Strategy</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              不同应用场景需要不同的能谱精度。5-15μm 能谱一致性是 XIHE 产品的核心差异点。
            </p>
          </motion.div>

          {/* Spectrum Charts Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {tiers.map((tier) => (
              <div key={tier.name} className="text-center">
                <p className="text-xs text-text-dim font-medium mb-3">{tier.name.split(' ')[0]}</p>
                <div className="h-32 frosted rounded-lg flex items-end justify-center px-4 py-4 relative overflow-hidden">
                  {/* Spectrum bar visualization */}
                  <div
                    className={`${tier.barWidth} ${tier.barStyle} h-24 rounded-t-full opacity-80 mx-auto`}
                    style={{
                      boxShadow: `0 0 20px rgba(${tier.name === 'Essential' ? '139,164,196' : tier.name === 'Professional' ? '90,122,158' : '61,90,128'}, 0.3)`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-text-dim mt-2 font-mono">{tier.spectrum}</p>
                <p className={`text-xs font-semibold mt-1 text-${tier.color}`}>{tier.emissivity}</p>
              </div>
            ))}
          </motion.div>

          {/* Tier Details */}
          <div className="space-y-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="frosted rounded-xl overflow-hidden"
              >
                <div className={`p-8 border-l-4 border-${tier.color}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <p className={`text-xs font-semibold tracking-[0.15em] uppercase text-${tier.color}`}>
                        {tier.tag}
                      </p>
                      <h3 className="text-xl font-bold text-text-primary mt-2">{tier.name}</h3>
                      <p className="text-sm text-accent-primary italic mt-1">{tier.description}</p>

                      <div className="mt-6 space-y-3">
                        <div>
                          <p className="text-xs text-text-dim uppercase tracking-wider">Spectrum</p>
                          <p className="text-sm text-text-primary font-mono">{tier.spectrum}</p>
                        </div>
                        <div>
                          <p className="text-xs text-text-dim uppercase tracking-wider">Emissivity</p>
                          <p className="text-sm text-text-primary font-mono">{tier.emissivity}</p>
                        </div>
                        <div>
                          <p className="text-xs text-text-dim uppercase tracking-wider">Applications</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {tier.applications.map((app) => (
                              <span key={app} className="text-xs bg-accent-primary/10 text-accent-primary px-2 py-1 rounded">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-80">
                      <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Core Values</h4>
                      <ul className="space-y-2">
                        {tier.values.map((v) => (
                          <li key={v} className="flex items-start gap-2 text-sm text-text-muted">
                            <CheckCircle size={14} className={`text-${tier.color} flex-shrink-0 mt-0.5`} />
                            {v}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-accent-primary/10">
                        <p className="text-[10px] text-text-dim uppercase tracking-wider mb-1">GEO Keywords</p>
                        <div className="flex flex-wrap gap-1">
                          {tier.geoKeywords.map((kw) => (
                            <span key={kw} className="text-[10px] text-text-dim bg-bg-primary px-1.5 py-0.5 rounded">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Spec Sheet */}
      <section className="py-24 bg-bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
              Technical Specifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="frosted rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent-primary/10">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-dim uppercase tracking-wider">Parameter</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-dim uppercase tracking-wider">Value</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text-dim uppercase tracking-wider">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {specSheet.map((row, i) => (
                    <tr key={row.param} className={`border-b border-accent-primary/5 ${i % 2 === 0 ? 'bg-accent-primary/[0.02]' : ''}`}>
                      <td className="px-6 py-3.5 text-sm text-text-primary font-medium">{row.param}</td>
                      <td className="px-6 py-3.5 text-sm text-accent-glow font-mono">{row.value}</td>
                      <td className="px-6 py-3.5 text-sm text-text-muted">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 text-sm tracking-wide">
              <Download size={16} />
              Download Tech Specs
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-accent-primary/30 text-text-primary font-medium rounded-md hover:border-accent-glow transition-all duration-300 text-sm tracking-wide">
              <FileText size={16} />
              Request for Specification
            </button>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Application <span className="grad-text">Scenarios</span>
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              System integration solutions, not product use-cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="frosted rounded-xl p-8 group hover:border-accent-glow/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent-primary/20 transition-colors">
                  <Microscope size={20} className="text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{scenario.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{scenario.desc}</p>
                <ExpandableCard title="Technical Details">
                  <p className="text-sm text-text-muted leading-relaxed">{scenario.detail}</p>
                </ExpandableCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Feedback Module */}
      <section className="py-24 bg-bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Bio-Feedback: <span className="grad-text">Real Experience, Scientific Language</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Brainwave transition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="frosted rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6">Sleep Architecture Optimization</h3>
              <p className="text-sm text-text-muted italic mb-6">
                &ldquo;From Beta waves (stress) to Delta waves (deep sleep) — the XIHE resonance journey&rdquo;
              </p>

              <div className="flex items-center justify-between gap-3 mb-8">
                {['Beta\n(Stress)', 'Alpha\n(Relax)', 'Theta\n(Sleep)'].map((stage, i) => (
                  <div key={stage} className="flex items-center gap-2">
                    <div className={`frosted rounded-lg px-4 py-3 text-center ${i === 2 ? 'border-accent-glow/30' : ''}`}>
                      <p className="text-xs text-text-dim whitespace-pre-line">{stage}</p>
                    </div>
                    {i < 2 && <span className="text-accent-primary text-lg">→</span>}
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm text-text-muted">
                <p className="flex items-start gap-2">
                  <span className="text-accent-glow mt-1">1.</span>
                  8-14μm resonance → Parasympathetic activation
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent-glow mt-1">2.</span>
                  Cortisol reduction → Neural rhythm recalibration
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent-glow mt-1">3.</span>
                  Beta → Alpha → Theta transition within minutes
                </p>
              </div>
            </motion.div>

            {/* Modular Applications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="frosted rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-6">Modular Applications</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-accent-primary/[0.03]">
                  <div className="w-12 h-12 rounded-lg bg-tier-x1/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-tier-x1 font-bold text-sm">X1</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Essential Series — Eye Mask</p>
                    <p className="text-xs text-text-muted mt-1">Daily fatigue relief · Quick relaxation · Parasympathetic activation</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-accent-primary/[0.03]">
                  <div className="w-12 h-12 rounded-lg bg-tier-x3/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-tier-x3 font-bold text-sm">X3</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Ultimate Series — Head Wrap</p>
                    <p className="text-xs text-text-muted mt-1">Deep tissue repair · Sleep architecture optimization · Systemic rhythm intervention</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg border border-accent-primary/10">
                <p className="text-xs text-text-dim leading-relaxed">
                  <span className="text-accent-primary font-semibold">Scientific Note:</span> XIHE resonance doesn&apos;t just block light;
                  it recalibrates your neural rhythm. Deep tissue energy balancing for natural sleep induction — a bio-physical
                  intervention, not a medical claim.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary tracking-tight">
            Technical Documentation & Strategic Inquiry
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 text-sm tracking-wide">
              <Download size={16} className="inline mr-2" />
              Download Tech Specs
            </button>
            <button className="px-8 py-3 border border-accent-primary/30 text-text-primary font-medium rounded-md hover:border-accent-glow transition-all duration-300 text-sm tracking-wide">
              Consult an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}