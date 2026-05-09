import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Zap, Shield, Award, CheckCircle2, ArrowRight,
  Thermometer, Activity, Clock, Users, FileText,
  Building2, Star, ChevronRight
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
  { label: 'Temperature Range', value: '40-55°C (Adjustable)' },
  { label: 'Heating Speed', value: '<60 seconds' },
  { label: 'Power', value: '5W (USB Rechargeable)' },
  { label: 'Battery Life', value: '4+ hours continuous' },
  { label: 'Safety Certification', value: 'SGS, CE, FCC' },
]

const clinicalResults = [
  { value: '98.6%', label: 'Clinical Efficacy Rate', source: 'Grade-A Hospital' },
  { value: '0', label: 'Side Effects', source: 'SGS Safety Certified' },
  { value: 'Non-Invasive', label: 'Treatment Method', source: 'Drug-Free' },
]

const features = [
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'Graphene FIR Heating',
    description: '6-14μm far-infrared wavelength penetrates scalp to stimulate hair follicles and improve microcirculation.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Clinical Validation',
    description: 'Validated by Chengdu University of TCM (Grade-A Hospital) with 98.6% efficacy rate.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe & Non-Invasive',
    description: 'No pharmaceutical intervention. SGS certified for safety. Suitable for long-term use.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Convenient Treatment',
    description: '15-20 minutes per session. Portable design for home or travel use.',
  },
]

const comparisonItems = [
  { feature: 'Side Effects', graphene: 'None', minoxidil: 'Scalp irritation, unwanted hair growth', finasteride: 'Sexual dysfunction, depression risk' },
  { feature: 'Treatment Method', graphene: 'Non-invasive FIR therapy', minoxidil: 'Topical drug application', finasteride: 'Oral medication' },
  { feature: 'Long-term Safety', graphene: 'Suitable for continuous use', minoxidil: 'Continuous use required', finasteride: 'Requires monitoring' },
  { feature: 'Mechanism', graphene: 'Microcirculation + cellular metabolism', minoxidil: 'Vasodilation', finasteride: 'DHT inhibition' },
]

const partnershipDetails = [
  { label: 'Partner', value: 'Laisikedun (莱斯科顿)' },
  { label: 'Collaboration Model', value: 'Technology + Manufacturing + Joint Sales' },
  { label: 'Market', value: 'China & International' },
  { label: 'Product Line', value: 'Hair Growth Helmet + Scalp Massager' },
]

export default function HairGrowthDevice() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold-400">Hair Growth Device</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Clinical-Grade Hair Growth Solution
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Graphene FIR <span className="gradient-text">Hair Growth</span> Device
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Clinically validated with <span className="text-white font-semibold">98.6% efficacy rate</span>. 
                  Non-invasive, drug-free hair growth therapy using graphene far-infrared technology.
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

      {/* Features */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Product <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border border-white/5 hover:border-purple-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Clinical <span className="gradient-text">Validation</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The graphene far-infrared hair growth solution has been clinically validated by 
                  <span className="text-white font-semibold"> Chengdu University of Traditional Chinese Medicine</span>, 
                  a Grade-A tertiary hospital in China.
                </p>
                <p>
                  The randomized controlled trial demonstrated a <span className="text-purple-400 font-semibold">98.6% clinical efficacy rate</span> for 
                  promoting hair growth in patients with androgenetic alopecia and other forms of hair loss.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Grade-A Hospital Validated
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                    <Shield className="w-4 h-4 text-blue-400" />
                    SGS Safety Certified
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm">
                    <Award className="w-4 h-4 text-gold-400" />
                    RCT Evidence
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-graphene-800/50 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
                <span className="text-lg font-semibold text-white">Clinical Study Summary</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400">Institution</span>
                  <span className="text-white">Chengdu University of TCM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400">Hospital Level</span>
                  <span className="text-purple-400">Grade-A Tertiary</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400">Study Type</span>
                  <span className="text-white">RCT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-gray-400">Efficacy Rate</span>
                  <span className="text-2xl font-bold gradient-text">98.6%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400">Safety</span>
                  <span className="text-green-400">No adverse effects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Treatment <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-gray-400">Graphene FIR vs Traditional Hair Loss Treatments</p>
          </motion.div>

          <motion.div {...fadeInUp} className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Feature</th>
                  <th className="text-left p-4 text-sm font-semibold text-purple-400">Graphene FIR</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-500">Minoxidil</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-500">Finasteride</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm text-gray-300 font-medium">{row.feature}</td>
                    <td className="p-4 text-sm text-purple-400 font-semibold">{row.graphene}</td>
                    <td className="p-4 text-sm text-gray-500">{row.minoxidil}</td>
                    <td className="p-4 text-sm text-gray-500">{row.finasteride}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Technical <span className="gradient-text">Specifications</span>
              </h2>
              <div className="space-y-3">
                {productSpecs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Partnership <span className="gradient-text">Details</span>
              </h2>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-gold-400" />
                  <span className="text-lg font-semibold text-white">Laisikedun Partnership</span>
                </div>
                <div className="space-y-3">
                  {partnershipDetails.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
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
              { step: '1', title: 'FIR Penetration', desc: '6-14μm far-infrared penetrates scalp tissue to reach hair follicles' },
              { step: '2', title: 'Microcirculation', desc: 'Enhanced blood flow delivers nutrients and oxygen to follicle cells' },
              { step: '3', title: 'Cellular Activation', desc: 'Improved cellular metabolism promotes hair growth cycle restoration' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl font-bold mx-auto mb-4">
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
            Interested in This Product?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Contact us for product samples, clinical data, and partnership opportunities.
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
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all"
            >
              View All Products
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
