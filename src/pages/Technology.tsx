import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Download, FlaskConical, Thermometer,
  Activity, Brain, HeartPulse, Dna, Waves,
  CheckCircle2, FileText, BookOpen
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const techPrinciples = [
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Graphene Conductive Ink',
    description: 'Proprietary graphene high-conductivity ink developed by Academician Nanfeng Zheng\'s team. Creates a uniform planar conductive network with zero hotspots.',
    specs: ['Patent-protected formula', 'Planar heating surface', 'Zero local overheating'],
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'Far-Infrared Emission (5-15μm)',
    description: 'Peak emission at 8-9μm perfectly matches the human body\'s absorption characteristic at 8.0μm — creating bio-resonance that conventional heating cannot achieve.',
    specs: ['8-9μm peak wavelength', '51.91% FIR radiation ratio', '"Life Light Wave" spectrum'],
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Rapid & Uniform Heating',
    description: 'Reaches 50°C in 60 seconds with surface temperature variance of less than 4.4°C across the entire heating area — far superior to carbon fiber (10.1°C).',
    specs: ['60s to 50°C', '<4.4°C temperature variance', '>99% electrothermal efficiency'],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Self-Balancing Safety',
    description: 'Graphene\'s negative temperature coefficient (NTC) provides inherent safety: higher temperature → increased resistance → reduced current → automatic thermal equilibrium.',
    specs: ['NTC self-regulation', 'No thermostat needed for basic use', 'Inherently safe operation'],
  },
]

const clinicalStudies = [
  {
    institution: 'Zhejiang University',
    year: '2024',
    journal: 'Small Science',
    title: 'Far-Infrared Radiation Effects on Brainwave Frequency',
    findings: [
      'Alpha wave (8-13Hz) power increased by 2.3x',
      'Theta wave (4-8Hz) power increased by 3.0x',
      'First evidence of neurological regulation via FIR therapy',
      'Demonstrates relaxation and sleep improvement potential',
    ],
    highlight: '2.3x',
    highlightLabel: 'Alpha Wave Increase',
  },
  {
    institution: 'Chinese Academy of Sciences',
    year: '2024',
    journal: 'BMC Geriatrics (IF: 3.4)',
    title: 'Graphene FIR Improves Depression, Anxiety in Elderly',
    findings: [
      'Immediate improvement in anxiety after 5 days',
      'RCT with 108 elderly participants',
      'No adverse effects reported',
      'Validated for elderly brain health applications',
    ],
    highlight: '5 Days',
    highlightLabel: 'Anxiety Relief',
  },
  {
    institution: 'Peking University Third Hospital',
    year: '2025',
    journal: 'The Open Orthopaedics Journal',
    title: 'RCT: Far-Infrared Compressive Knee Brace for Osteoarthritis',
    findings: [
      'KOOS JR score improved +12.27 points after 1 month',
      'NPRS pain score reduced by 3 points',
      'Clinical efficacy rate: 78.3%',
      'Validates FIR therapy for orthopedic applications',
    ],
    highlight: '78.3%',
    highlightLabel: 'Clinical Efficacy',
  },
  {
    institution: 'Xiamen University',
    year: '2024',
    journal: 'Advanced Science (IF: 15.1)',
    title: 'Graphene FIR Prevents Postoperative Peritoneal Adhesions',
    findings: [
      'Postoperative adhesion incidence reduced by 67.0%',
      'Adhesion area reduced by 92.1%',
      'Published in top-tier journal',
      'Breakthrough for post-surgical recovery',
    ],
    highlight: '67.0%',
    highlightLabel: 'Adhesion Reduction',
  },
  {
    institution: 'Xiamen University',
    year: '2026',
    journal: 'International Journal of Molecular Sciences',
    title: 'Graphene FIR Accelerates Diabetic Wound Healing',
    findings: [
      '14-day healing rate: 83.9%',
      'Significantly accelerated wound closure',
      'Enhanced angiogenesis and tissue regeneration',
      'Potential for diabetic care applications',
    ],
    highlight: '83.9%',
    highlightLabel: '14-Day Healing',
  },
  {
    institution: 'Nature Publishing Group',
    year: '2024',
    journal: 'Scientific Reports (Nature)',
    title: 'AMPK/GLUT4 Pathway Activation by Graphene FIR',
    findings: [
      'AMPK/GLUT4 signaling pathway activated',
      'Exercise-mimicking metabolic effects',
      'Enhanced running endurance in animal models',
      'Thermal effect persists ~1 hour after removal',
    ],
    highlight: 'AMPK',
    highlightLabel: 'Pathway Activated',
  },
  {
    institution: 'Chengdu University of TCM',
    year: '2024',
    journal: 'Grade-A Hospital Validation',
    title: 'Graphene FIR Hair Growth Solution',
    findings: [
      'Clinical efficacy rate: 98.6%',
      'Validated by Grade-A hospital',
      'SGS certified for safety',
      'Non-invasive, no side effects',
    ],
    highlight: '98.6%',
    highlightLabel: 'Hair Growth Efficacy',
  },
  {
    institution: 'Taiwan University of Science & Technology',
    year: '2020',
    journal: 'Human Trial',
    title: 'Graphene FIR Improves Peripheral Blood Circulation',
    findings: [
      'Blood flow velocity increased by 64.9%',
      'Cardiac output increased by 50.8%',
      'Significant improvement in microcirculation',
      'Validated for circulatory health',
    ],
    highlight: '64.9%',
    highlightLabel: 'Blood Flow Increase',
  },
]

const comparisonData = [
  { metric: 'Electrothermal Efficiency', graphene: '>99%', carbonFiber: '95-98%', feCrAl: '~85%', tdp: '~60-70%' },
  { metric: 'FIR Radiation Ratio', graphene: '51.91%', carbonFiber: '35.07%', feCrAl: '<10%', tdp: '36.05%' },
  { metric: 'Temperature Uniformity', graphene: '<4.4°C', carbonFiber: '10.1°C', feCrAl: '15-20°C', tdp: 'Variable' },
  { metric: 'FIR Peak Wavelength', graphene: '8-9μm', carbonFiber: '7.6μm', feCrAl: 'N/A', tdp: '8.9-9.4μm' },
  { metric: 'Operational Lifespan', graphene: '>300,000h', carbonFiber: 'Degrades', feCrAl: '5,000-10,000h', tdp: '800-1,500h' },
  { metric: 'Flexibility', graphene: '50,000 bends', carbonFiber: 'Limited', feCrAl: 'None (rigid wire)', tdp: 'Rigid' },
  { metric: 'Heating Speed (to 50°C)', graphene: '<60s', carbonFiber: '90-120s', feCrAl: '120-180s', tdp: '300-600s' },
  { metric: 'Safety (Self-regulation)', graphene: 'NTC inherent', carbonFiber: 'Requires thermostat', feCrAl: 'Requires thermostat', tdp: 'Requires thermostat' },
]

export default function Technology() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <FlaskConical className="w-4 h-4" />
              Technology Deep Dive
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The Science Behind{' '}
              <span className="gradient-text">Graphene Far-Infrared</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              From quantum-level electron movement in a 2D honeycomb lattice to clinically validated therapeutic outcomes — 
              understand why graphene flexible electrothermal film represents a paradigm shift in heating technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Principles */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Technology Principles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Four foundational innovations that make our graphene film superior to every alternative
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techPrinciples.map((principle) => (
              <motion.div
                key={principle.title}
                {...fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-graphene-700/50 to-graphene-800/30 border border-white/5 hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-gold-500/15 to-orange-500/15 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                      {principle.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-gold-500/60" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-24 bg-graphene-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
              <Dna className="w-4 h-4" />
              Peer-Reviewed Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Clinical Research & <span className="gradient-text">Validation</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Published research from world-leading institutions confirms graphene FIR's unique biological effects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {clinicalStudies.map((study) => (
              <motion.article
                key={study.institution}
                {...fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-graphene-700/60 to-graphene-900/40 border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs text-cyan-400 font-medium mb-1">{study.journal}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <div className="shrink-0 ml-4 w-20 h-20 rounded-xl bg-gradient-to-br from-gold-500/10 to-orange-500/10 border border-gold-500/20 flex flex-col items-center justify-center">
                    <div className="text-lg font-black gradient-text">{study.highlight}</div>
                    <div className="text-[10px] text-gray-500 text-center mt-0.5">{study.highlightLabel}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Brain className="w-4 h-4" />
                  <span>{study.institution}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{study.year}</span>
                </div>

                <ul className="space-y-2">
                  {study.findings.map((finding) => (
                    <li key={finding} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-graphene-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technology <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-gray-400">Head-to-head: Graphene vs Carbon Fiber vs FeCrAl Alloy vs TDP Lamp</p>
          </motion.div>

          <motion.div {...fadeInUp} className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Metric</th>
                  <th className="text-left p-4 text-sm font-semibold text-gold-400">Graphene Film</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-500">Carbon Fiber</th>
                  <th className="text-left p-4 text-sm font-semibold text-orange-400">FeCrAl Alloy</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-500">TDP Lamp</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.metric} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm text-gray-300 font-medium">{row.metric}</td>
                    <td className="p-4 text-sm text-gold-400 font-semibold">{row.graphene}</td>
                    <td className="p-4 text-sm text-gray-500">{row.carbonFiber}</td>
                    <td className="p-4 text-sm text-orange-400/80">{row.feCrAl}</td>
                    <td className="p-4 text-sm text-gray-500">{row.tdp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Note */}
          <motion.div {...fadeInUp} className="mt-6 text-center text-sm text-gray-500">
            <p>FeCrAl (Iron-Chromium-Aluminum) alloy is the traditional metal wire heating element used in most industrial and automotive heating applications.</p>
          </motion.div>

          {/* Internal Links - SEO */}
          <motion.div {...fadeInUp} className="mt-8 max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 leading-relaxed text-center">
              Our <InlineLink keyword="graphene heating">graphene heating</InlineLink> technology demonstrates 
              superior <InlineLink keyword="clinical efficacy">clinical efficacy</InlineLink> compared to traditional heating methods. 
              See our <InlineLink keyword="SCI papers">SCI papers</InlineLink> for peer-reviewed evidence, 
              or explore <InlineLink keyword="NMPA">NMPA approved</InlineLink> medical devices.
            </p>
          </motion.div>

          {/* Related Pages */}
          <motion.div {...fadeInUp} className="mt-8 max-w-4xl mx-auto">
            <RelatedPages pages={relatedPageSets.technology} />
          </motion.div>
        </div>
      </section>

      {/* Whitepaper Download CTA */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-graphene-800 to-graphene-900 border border-gold-500/20 glow-gold text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-orange-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-gold-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Download Our <span className="gradient-text">Technology Whitepaper</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Comprehensive technical specifications, clinical data summaries, and application guidelines 
              for integrating graphene flexible electrothermal film into your products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Whitepaper (PDF)
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                <FileText className="w-5 h-5" />
                Request Custom Specs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
