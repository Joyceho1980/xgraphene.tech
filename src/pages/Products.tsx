import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Eye, Heart, Activity, Zap, Brain,
  ThermometerSun, Car, UtensilsCrossed,
  Factory, Cog, Package, CheckCircle2,
  ChevronDown, ArrowUpRight
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

type Category = 'therapy' | 'cooking' | 'oem'

const therapyProducts = [
  {
    id: 'helmet',
    name: 'Graphene FIR Therapy Helmet',
    nameCn: '石墨烯远红外理疗头盔',
    icon: <Brain className="w-6 h-6" />,
    tempRange: '40-55°C',
    features: ['Alpha wave ↑2.3x', 'Theta wave ↑3.0x', 'Anxiety relief in 5 days', 'USB-C rechargeable'],
    applications: ['Anxiety & stress', 'Sleep improvement', 'Cognitive function', 'Mental fatigue'],
    highlight: 'Clinically validated brain health management',
    link: '/products/therapy-helmet',
    featured: true,
  },
  {
    id: 'hair',
    name: 'Graphene Hair Growth Device',
    nameCn: '石墨烯生发仪',
    icon: <Zap className="w-6 h-6" />,
    tempRange: '40-55°C',
    features: ['98.6% efficacy rate', 'Grade-A hospital validated', 'Non-invasive', 'SGS safety certified'],
    applications: ['Androgenetic alopecia', 'Hair thinning', 'Scalp care'],
    highlight: 'Co-developed with Laisikedun — 98.6% clinical efficacy',
    link: '/products/hair-growth',
    featured: true,
  },
  {
    id: 1,
    name: 'Graphene Electronic Eye Care Massager',
    nameCn: '石墨烯电子眼保健操按摩仪',
    icon: <Eye className="w-6 h-6" />,
    tempRange: '38-46°C',
    features: ['5-15μm far-infrared', 'Vibration massage', '650mAh battery', '~20min × 3-4 uses'],
    applications: ['Heavy study load', 'Digital entertainment', 'Sleep deprivation', 'Desk work'],
    highlight: 'Proven effective for adolescent pseudo-myopia',
  },
  {
    id: 2,
    name: 'Multi-Function Neck Protector',
    nameCn: '多功能护颈',
    icon: <Activity className="w-6 h-6" />,
    tempRange: '40-50°C',
    features: ['100% mulberry silk fabric', 'Vibration massage', '700mAh battery', '~1.5h usage'],
    applications: ['Neck pain & stiffness', 'Cold discomfort', 'Muscle fatigue'],
    highlight: 'Co-branded with Xiamen University Cultural Creative',
  },
  {
    id: 3,
    name: 'Energy Knee Support',
    nameCn: '能量护膝',
    icon: <Heart className="w-6 h-6" />,
    tempRange: '45-65°C',
    features: ['5 temperature levels', '8 vibration levels', '2500mAh battery', '3-in-1 use (knee/elbow/shoulder)'],
    applications: ['Knee joint fatigue', 'Joint pain & swelling', 'Sports recovery'],
    highlight: 'High-frequency professional percussion amplitude',
  },
  {
    id: 4,
    name: 'Far-Infrared Energy Waist Belt',
    nameCn: '远红外能量腰带',
    icon: <Zap className="w-6 h-6" />,
    tempRange: '45-65°C',
    features: ['Extra-large heating area', 'Includes pouch + hand warmer', 'External power bank (5V/2A)'],
    applications: ['Waist soreness', 'Cold waist', 'Muscle fatigue', 'Dampness expulsion'],
    highlight: 'Deep warmth for waist and abdomen',
  },
  {
    id: 5,
    name: 'Energy Mat',
    nameCn: '能量垫',
    icon: <ThermometerSun className="w-6 h-6" />,
    tempRange: '35-50°C',
    features: ['4 temperature levels', 'Dual-purpose (waist/knee/foot)', 'External power', 'Auto-off after 8h'],
    applications: ['Waist warming', 'Uterus care', 'Knee/foot warmth'],
    highlight: '"Sunbath" experience — gentle, persistent warmth',
  },
  {
    id: 6,
    name: 'Far-Infrared Shoulder & Neck Massager',
    nameCn: '远红外肩颈按摩仪',
    icon: <Activity className="w-6 h-6" />,
    tempRange: '45-55°C',
    features: ['Biomimetic kneading', 'NFC smart connection', '1800mAh battery', '15min × 6-7 uses'],
    applications: ['Shoulder relaxation', 'Trapezius relief', 'Back/leg use'],
    highlight: 'Detachable cover for easy cleaning',
  },
  {
    id: 7,
    name: 'Far-Infrared Lower Back Massager',
    nameCn: '远红外腰部按摩仪',
    icon: <Heart className="w-6 h-6" />,
    tempRange: '45-55°C',
    features: ['Biomimetic kneading', 'NFC connection', '2000mAh battery', 'Multi-scenario use'],
    applications: ['Lower back massage', 'Office chair use', 'Car seat compatible'],
    highlight: 'Works with office chairs, car seats, more',
  },
  {
    id: 8,
    name: 'Far-Infrared Energy Cube',
    nameCn: '远红外能量方',
    icon: <Zap className="w-6 h-6" />,
    tempRange: '37-52°C',
    features: ['Dual-side heating', '4 temperature levels', 'External power', '2h auto-reduce + 8h auto-off'],
    applications: ['Shoulder/back', 'Waist/abdomen', 'Knee/foot'],
    highlight: 'Dual-side heating — thorough warmth',
  },
  {
    id: 9,
    name: 'Graphene Light Wave Energy Room',
    nameCn: '石墨烯光波能量房',
    icon: <Factory className="w-6 h-6" />,
    tempRange: 'RT - 65°C',
    features: ['Full-body coverage', '1°C increments', 'Up to 99 min timer', 'Internal/external control panel'],
    applications: ['Sauna therapy', 'Detoxification', 'Immune support', 'Metabolism boost'],
    highlight: 'Premium full-body graphene sauna room',
  },
]

const cookingProducts = [
  {
    id: 'grill',
    name: 'Graphene In-Vehicle Cooking Grill',
    nameCn: '石墨烯车载烤盘',
    icon: <UtensilsCrossed className="w-6 h-6" />,
    power: '450W @ 24V DC',
    specs: [
      { label: 'Power', value: '450W @ 24V DC' },
      { label: 'Heating Speed', value: '230°C in 3 minutes' },
      { label: 'Thermal Efficiency', value: '85%' },
      { label: 'Temp Uniformity', value: '≤±3°C across surface' },
      { label: 'Adaptive Voltage', value: '28.8V while driving' },
      { label: 'Structure', value: 'PP+ fiberglass + silicone insulation' },
      { label: 'Cost Reduction', value: '67-80% vs metal base' },
    ],
    advantages: [
      'Graphene film heats 3x faster than traditional elements',
      'No hot spots — consistent cooking results every time',
      '85% thermal efficiency reduces vehicle battery drain',
      'Low-voltage DC operation — no EMI interference',
      'Embedded design — compact, modern appearance',
      '3C compliant — integrated controller in body',
    ],
    applications: ['RV/Camper cooking', 'Truck driver meals', 'Outdoor camping equipment', 'Marine appliances'],
  },
  {
    id: 'heating',
    name: '24V Vehicle Heating System',
    nameCn: '24V车载加热系统',
    icon: <Car className="w-6 h-6" />,
    power: 'Custom (24V DC)',
    specs: [
      { label: 'Voltage', value: '24V DC (vehicle standard)' },
      { label: 'Temperature Range', value: 'Up to 300°C' },
      { label: 'Response Time', value: '<60 seconds' },
      { label: 'Control', value: 'PWM / thermostat optional' },
    ],
    advantages: [
      'Purpose-built for automotive environment',
      'Vibration-resistant construction',
      'Wide operating temperature range (-40°C to +85°C ambient)',
      'Custom form factors available',
    ],
    applications: ['Car seat heaters', 'Steering wheel heating', 'Rear window defoggers', 'Battery pre-heating'],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('therapy')

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
              <Package className="w-4 h-4" />
              Product Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Complete Product{' '}
              <span className="gradient-text">Ecosystem</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              From wearable health therapy devices to industrial-grade in-vehicle cooking systems — 
              our product line covers the full spectrum of graphene flexible heating applications.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { key: 'therapy' as Category, label: 'Health Therapy Series', count: '11 products', icon: <Heart className="w-4 h-4" /> },
              { key: 'cooking' as Category, label: 'In-Vehicle Cooking', count: '2 systems', icon: <Car className="w-4 h-4" /> },
              { key: 'oem' as Category, label: 'OEM / ODM Services', count: 'Turnkey', icon: <Cog className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeCategory === tab.key
                    ? 'bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 shadow-lg shadow-gold-500/20'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.icon}
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded ${activeCategory === tab.key ? 'bg-graphene-900/20' : 'bg-white/10'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== THERAPY PRODUCTS ===== */}
      <AnimatePresence mode="wait">
        {activeCategory === 'therapy' && (
          <motion.section
            key="therapy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="py-16 bg-gradient-to-b from-graphene-900 to-graphene-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {therapyProducts.map((product, i) => (
                  <motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                      product.featured
                        ? 'bg-gradient-to-br from-gold-500/10 to-graphene-800/50 border-gold-500/20 hover:border-gold-500/40'
                        : 'bg-gradient-to-br from-graphene-700/50 to-graphene-800/30 border-white/5 hover:border-gold-500/25'
                    }`}
                  >
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-bold">
                        CLINICAL
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${
                        product.featured
                          ? 'bg-gradient-to-br from-gold-500/20 to-orange-500/20 border-gold-500/20 text-gold-400'
                          : 'bg-gradient-to-br from-gold-500/15 to-orange-500/15 border-gold-500/15 text-gold-400'
                      }`}>
                        {product.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold gradient-text">{product.tempRange}</div>
                        <div className="text-xs text-gray-600">Temp Range</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{product.nameCn}</p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4">
                      {product.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle2 className="w-3 h-3 text-gold-500/50 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Highlight & Link */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                      <p className="text-xs text-cyan-400/80 italic flex-1">✦ {product.highlight}</p>
                      {product.link && (
                        <Link
                          to={product.link}
                          className="shrink-0 px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium hover:bg-gold-500/20 transition-colors"
                        >
                          Details →
                        </Link>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ===== COOKING PRODUCTS ===== */}
      <AnimatePresence mode="wait">
        {activeCategory === 'cooking' && (
          <motion.section
            key="cooking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="py-16 bg-gradient-to-b from-graphene-900 to-graphene-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              {cookingProducts.map((product) => (
                <motion.div
                  key={product.id}
                  {...fadeInUp}
                  className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-graphene-700/50 to-graphene-800/30 border border-white/5"
                >
                  <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20 flex items-center justify-center text-orange-400">
                          {product.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                          <p className="text-gray-500">{product.nameCn}</p>
                        </div>
                      </div>

                      <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                        {product.power}
                      </div>

                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Advantages</h4>
                      <ul className="space-y-2.5 mb-6">
                        {product.advantages.map((adv) => (
                          <li key={adv} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span key={app} className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-400 border border-white/5">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Specs Table */}
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Technical Specifications</h4>
                      <div className="space-y-3">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                            <span className="text-sm text-gray-400">{spec.label}</span>
                            <span className="text-sm font-semibold text-orange-400">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ===== OEM / ODM ===== */}
      <AnimatePresence mode="wait">
        {activeCategory === 'oem' && (
          <motion.section
            key="oem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="py-16 bg-gradient-to-b from-graphene-900 to-graphene-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Turnkey <span className="gradient-text">OEM / ODM</span> Solutions
                </h2>
                <p className="text-gray-400 text-lg">
                  From raw material supply to finished product delivery — we handle everything so you can focus on your brand.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    tier: 'Tier 1',
                    title: 'Material Supply',
                    subtitle: 'XGRAPHENE Brand Materials',
                    items: [
                      'Low-temp flexible film (<100°C)',
                      'Mid-high temp film (<250°C)',
                      'High-temp rigid film (<350°C)',
                      'Graphene conductive ink',
                      'Far-infrared fabrics',
                      'Therapy patches & pads',
                    ],
                    color: 'from-cyan-500 to-blue-500',
                  },
                  {
                    tier: 'Tier 2',
                    title: 'OEM / ODM',
                    subtitle: 'Your Brand, Our Technology',
                    items: [
                      'Finished product customization',
                      'Circuit design & integration',
                      'Temperature control system',
                      'Encapsulation process design',
                      'Form factor engineering',
                      'Quality assurance testing',
                    ],
                    color: 'from-gold-500 to-orange-500',
                  },
                  {
                    tier: 'Tier 3',
                    title: 'Finished B2B',
                    subtitle: 'White-Label Solutions',
                    items: [
                      'Ready-made product lines',
                      'Private labeling',
                      'Packaging design',
                      'Regulatory documentation',
                      'Logistics coordination',
                      'After-sales support',
                    ],
                    color: 'from-green-500 to-emerald-500',
                  },
                ].map((tier) => (
                  <motion.div
                    key={tier.tier}
                    {...fadeInUp}
                    className="relative p-8 rounded-2xl bg-gradient-to-b from-graphene-700/50 to-graphene-800/30 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${tier.color} text-graphene-900 text-xs font-bold mb-4`}>
                      {tier.tier}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
                    <p className="text-sm text-gray-500 mb-6">{tier.subtitle}</p>
                    <ul className="space-y-2.5">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-gold-500/60 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Factory Badge */}
              <motion.div {...fadeInUp} className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gold-500/5 to-orange-500/5 border border-gold-500/10 text-center">
                <div className="text-sm text-gold-400 font-medium mb-2">MANUFACTURING CAPABILITY</div>
                <h3 className="text-2xl font-bold text-white mb-2">Changzhou Facility — Class II Medical Device Certified</h3>
                <p className="text-gray-400">
                  Our Changzhou manufacturing facility holds Class II medical device production certification, 
                  enabling us to deliver medical-grade OEM/ODM solutions with full regulatory compliance.
                </p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section className="py-24 bg-graphene-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Tell us your requirements — temperature range, form factor, target application — and our engineering team will design the perfect solution.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
            >
              Start Your Custom Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
