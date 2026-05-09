import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain, Shield, Award, CheckCircle2, ArrowRight,
  Thermometer, Activity, Clock, Waves, FileText,
  Star, ChevronRight, Zap, Heart
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const productSpecs = [
  { label: 'Heating Technology', value: 'Graphene Far-Infrared Film' },
  { label: 'FIR Wavelength', value: '6-14μm (Life Wave)' },
  { label: 'Peak Emission', value: '8-9μm' },
  { label: 'Temperature Range', value: '40-55°C (3 Levels)' },
  { label: 'Heating Speed', value: '<60 seconds' },
  { label: 'Treatment Duration', value: '15-30 min/session' },
  { label: 'Power', value: '10W (USB-C Rechargeable)' },
  { label: 'Battery Life', value: '6+ hours continuous' },
  { label: 'Weight', value: '<400g' },
  { label: 'Safety Certification', value: 'CE, FCC, RoHS' },
]

const clinicalResults = [
  { value: '2.3x', label: 'Alpha Wave Increase', source: 'Zhejiang University' },
  { value: '3.0x', label: 'Theta Wave Increase', source: 'Small Science 2024' },
  { value: '5 Days', label: 'Anxiety Relief', source: 'CAS & Xiamen Univ.' },
]

const applications = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Anxiety & Stress Relief',
    description: 'Immediate improvement in anxiety symptoms after 5 days. Validated by CAS Institute of Psychology.',
    evidence: 'RCT n=108, BMC Geriatrics',
  },
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Sleep Improvement',
    description: 'Enhances Alpha and Theta brainwaves associated with relaxation and deep sleep.',
    evidence: 'Small Science 2024',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Cognitive Function',
    description: 'Improves cognitive scores in elderly. Potential for neurodegenerative disease prevention.',
    evidence: 'BMC Geriatrics 2024',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Mental Fatigue Recovery',
    description: 'Accelerates recovery from mental exhaustion. Ideal for high-workload professionals.',
    evidence: 'Clinical observation',
  },
]

const brainwaveData = [
  { wave: 'Alpha (8-13Hz)', before: 'Baseline', after: '2.3x Increase', effect: 'Relaxation, Calm Focus' },
  { wave: 'Theta (4-8Hz)', before: 'Baseline', after: '3.0x Increase', effect: 'Deep Relaxation, Creativity' },
  { wave: 'Beta (13-30Hz)', before: 'High (Stress)', after: 'Normalized', effect: 'Reduced Anxiety' },
]

const targetUsers = [
  'Individuals with anxiety and stress',
  'People with sleep difficulties',
  'High mental workload professionals',
  'Elderly with cognitive concerns',
  'Post-work mental fatigue recovery',
  'Meditation and relaxation practitioners',
]

export default function TherapyHelmet() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold-400">Therapy Helmet</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  Brain Health Management
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Graphene FIR <span className="gradient-text">Therapy Helmet</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Clinically proven to enhance <span className="text-white font-semibold">Alpha brainwaves by 2.3x</span> and 
                  provide <span className="text-white font-semibold">anxiety relief in 5 days</span>. 
                  Non-invasive brain health management.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all"
                  >
                    Request Sample <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
                  >
                    View Clinical Data
                  </Link>
                </div>
              </div>

              {/* Clinical Results */}
              <div className="grid grid-cols-3 gap-4">
                {clinicalResults.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{item.value}</div>
                    <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                    <div className="text-xs text-gray-600">{item.source}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Clinical <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Evidence-based applications for brain health and mental wellness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{app.description}</p>
                <div className="text-xs text-cyan-400/70">{app.evidence}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brainwave Science */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Brainwave <span className="gradient-text">Science</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Research from <span className="text-white font-semibold">Zhejiang University</span> published in 
                  <span className="text-cyan-400 font-semibold"> Small Science</span> demonstrated that 
                  graphene far-infrared therapy significantly enhances specific brainwave patterns.
                </p>
                <p>
                  <span className="text-cyan-400 font-semibold">Alpha waves (8-13Hz)</span> increased by 
                  <span className="text-white font-semibold"> 2.3 times</span>, associated with relaxed alertness, 
                  calm focus, and meditative states.
                </p>
                <p>
                  <span className="text-cyan-400 font-semibold">Theta waves (4-8Hz)</span> increased by 
                  <span className="text-white font-semibold"> 3.0 times</span>, associated with deep relaxation, 
                  creativity, and improved sleep quality.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    First FIR brainwave evidence
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Non-invasive modulation
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-sm font-semibold text-gray-400">Brainwave</th>
                    <th className="text-left p-4 text-sm font-semibold text-gray-500">Before</th>
                    <th className="text-left p-4 text-sm font-semibold text-cyan-400">After FIR</th>
                  </tr>
                </thead>
                <tbody>
                  {brainwaveData.map((row) => (
                    <tr key={row.wave} className="border-b border-white/5">
                      <td className="p-4 text-sm text-gray-300 font-medium">{row.wave}</td>
                      <td className="p-4 text-sm text-gray-500">{row.before}</td>
                      <td className="p-4 text-sm text-cyan-400 font-semibold">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Clinical <span className="gradient-text">Evidence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Study 1 */}
            <motion.div
              {...fadeInUp}
              className="p-6 rounded-2xl bg-gradient-to-br from-graphene-900 to-graphene-800 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-400">Small Science 2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brainwave Frequency Modulation
              </h3>
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Alpha wave power increased by 2.3x</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Theta wave power increased by 3.0x</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>First evidence of FIR neurological regulation</span>
                </div>
              </div>
              <div className="text-xs text-gray-500">Institution: Zhejiang University</div>
            </motion.div>

            {/* Study 2 */}
            <motion.div
              {...fadeInUp}
              className="p-6 rounded-2xl bg-gradient-to-br from-graphene-900 to-graphene-800 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-400">BMC Geriatrics (IF: 3.4) 2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Anxiety & Cognitive Improvement in Elderly
              </h3>
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Immediate anxiety relief after 5 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>RCT with 108 elderly participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>No adverse effects reported</span>
                </div>
              </div>
              <div className="text-xs text-gray-500">Institution: CAS Institute of Psychology & Xiamen University</div>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8 text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              View all 18 clinical papers <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Who Should <span className="gradient-text">Use</span>
              </h2>
              <div className="space-y-3">
                {targetUsers.map((user, i) => (
                  <motion.div
                    key={user}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-gray-300">{user}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Technical <span className="gradient-text">Specifications</span>
              </h2>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border border-white/5">
                <div className="space-y-3">
                  {productSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400 text-sm">{spec.label}</span>
                      <span className="text-white font-medium text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'FIR Emission', desc: 'Graphene film emits 6-14μm far-infrared radiation, penetrating scalp and reaching brain tissue' },
              { step: '2', title: 'Neural Modulation', desc: 'FIR resonance with cellular water molecules modulates neural activity and brainwave patterns' },
              { step: '3', title: 'Brainwave Enhancement', desc: 'Alpha and Theta waves increase, promoting relaxation, reducing anxiety, improving sleep' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <motion.div
          {...fadeInUp}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Transform Brain Health Management
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Clinically validated, non-invasive brain health therapy. Contact us for product samples 
            and partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
            >
              Request Information
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
