import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Shield, ThermometerSun, Cog, 
  Award, Users, TrendingUp, ChevronRight,
  Zap, Heart, Activity, Factory
} from 'lucide-react'
import SEO, { seoConfigs } from '../components/SEO'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
}

const advantages = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Medical-Grade Efficiency',
    subtitle: 'Clinical Excellence',
    points: [
      '>99% electrothermal conversion efficiency',
      '78.3% clinical efficacy rate (RCT validated)',
      'Peak far-infrared at 8-9μm — perfectly matches human absorption',
      'Microcirculation improvement >40%',
    ],
    stat: { value: '78.3%', label: 'Clinical Efficacy' }
  },
  {
    icon: <ThermometerSun className="w-7 h-7" />,
    title: 'Full-Temperature Coverage',
    subtitle: 'Global Unique Technology',
    points: [
      'Low-temp <100°C: Health therapy & wearables',
      'Mid-high <250°C: Industrial applications',
      'High-temp <350°C: High-temperature industrial',
      'The only company globally with full temperature range coverage',
    ],
    stat: { value: '<350°C', label: 'Max Temperature' }
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: 'Turnkey Solution',
    subtitle: 'Pure B2B Model',
    points: [
      'Material supply → OEM/ODM → Finished product B2B',
      'Never competes with customers',
      'Circuit design + encapsulation + temp control included',
      'Changzhou facility: Class II medical device certified',
    ],
    stat: { value: '100%', label: 'Customer Focus' }
  },
]

const productPreview = [
  { name: 'Therapy Helmet', category: 'Brain Health', temp: '40-55°C', icon: <Zap className="w-5 h-5" />, featured: true, link: '/products/therapy-helmet' },
  { name: 'Hair Growth Device', category: 'Hair Care', temp: '40-55°C', icon: <Heart className="w-5 h-5" />, featured: true, link: '/products/hair-growth' },
  { name: 'Eye Care Massager', category: 'Therapy', temp: '38-46°C', icon: <Activity className="w-5 h-5" /> },
  { name: 'Knee Support', category: 'Therapy', temp: '45-65°C', icon: <Zap className="w-5 h-5" /> },
  { name: 'Energy Waist Belt', category: 'Therapy', temp: '45-65°C', icon: <Activity className="w-5 h-5" /> },
  { name: 'Sauna Room', category: 'Premium', temp: 'RT-65°C', icon: <Factory className="w-5 h-5" /> },
]

export default function Home() {
  return (
    <div>
      <SEO {...seoConfigs.home} />
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-grid-pattern">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/8 rounded-full blur-[120px]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
              style={{ top: `${35 + i * 15}%`, width: '60%', left: '20%' }}
              animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.5 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Industry Standard Setter
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Standard-Setter for{' '}
                <span className="gradient-text">Graphene Flexible</span>{' '}
                Heating Technology
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                Medical-grade. Clinically proven. Globally trusted. 
                Pioneering graphene far-infrared technology that delivers 
                <span className="text-white font-semibold"> 78.3% clinical efficacy</span> 
                {' '}through bio-resonance therapy.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {[
                  { icon: <Shield className="w-4 h-4" />, text: '18 SCI Papers' },
                  { icon: <Award className="w-4 h-4" />, text: 'NMPA Approved' },
                  { icon: <Users className="w-4 h-4" />, text: '560K+ Anta Units' },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                    <span className="text-cyan-400">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300"
                >
                  Request OEM Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/technology"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  Download Whitepaper
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Central Hexagon */}
                <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-graphene-700/80 to-graphene-800/80 backdrop-blur-xl border border-white/10 glow-gold rotate-6 hover:rotate-0 transition-transform duration-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold gradient-text mb-2">99%+</div>
                    <div className="text-sm text-gray-400">Electrothermal</div>
                    <div className="text-sm text-gray-400">Conversion Efficiency</div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-xl bg-white/5">
                        <div className="text-2xl font-bold text-cyan-400">8-9μm</div>
                        <div className="text-xs text-gray-500 mt-1">FIR Peak</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5">
                        <div className="text-2xl font-bold text-gold-400">&lt;4.4°C</div>
                        <div className="text-xs text-gray-500 mt-1">Temp Variance</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { label: '5-15μm Life Wave', angle: -30, delay: 0 },
                  { label: '&gt;300K Hours', angle: 90, delay: 1 },
                  { label: 'Bio-Resonance', angle: 210, delay: 2 },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    className="absolute px-3 py-1.5 rounded-lg bg-graphene-700/90 border border-gold-500/20 text-xs text-gray-300 whitespace-nowrap"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      x: Math.cos((item.angle * Math.PI) / 180) * 200,
                      y: Math.sin((item.angle * Math.PI) / 180) * 200,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: item.delay,
                    }}
                  >
                    {item.label}
                  </motion.div>
                ))}

                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-3xl border border-gold-500/20 animate-pulse-glow" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-gold-500/50 rotate-90" />
        </motion.div>
      </section>

      {/* ===== THREE CORE ADVANTAGES ===== */}
      <section className="py-24 bg-graphene-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="gradient-text">XGRAPHENE</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Three structural advantages that set us apart from every competitor in the global market
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-graphene-800/50 to-graphene-800/20 border border-white/5 hover:border-gold-500/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-orange-500/20 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>

                {/* Stat Badge */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="text-2xl font-bold gradient-text">{adv.stat.value}</div>
                  <div className="text-xs text-gray-500">{adv.stat.label}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{adv.title}</h3>
                <p className="text-gold-500/70 text-sm font-medium mb-4">{adv.subtitle}</p>

                <ul className="space-y-2.5">
                  {adv.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CLINICAL DATA SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 via-graphene-800 to-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Clinically Validated
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Evidence That <span className="gradient-text">Speaks for Itself</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Peer-reviewed research from leading institutions proves graphene far-infrared's superiority over conventional heating technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '2.3x', label: 'Alpha Brainwave Increase', source: 'Zhejiang University 2024', color: 'cyan' },
              { value: '98.6%', label: 'Hair Growth Efficacy', source: 'Grade-A Hospital RCT', color: 'gold' },
              { value: '78.3%', label: 'Knee OA Pain Relief', source: 'Peking Univ. Third Hospital', color: 'gold' },
              { value: '67.0%', label: 'Adhesion Reduction', source: 'Advanced Science IF:15.1', color: 'orange' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                {...fadeInUp}
                className="relative p-6 rounded-2xl bg-graphene-800/50 border border-white/5 text-center hover:border-${stat.color}-500/30 transition-colors"
              >
                <div className={`text-4xl font-bold ${stat.color === 'gold' ? 'gradient-text' : stat.color === 'cyan' ? 'text-cyan-400' : 'text-orange-400'} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.source}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
            >
              View Full Clinical Data & Research Papers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCT PREVIEW ===== */}
      <section className="py-24 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Product <span className="gradient-text">Portfolio</span>
              </h2>
              <p className="text-gray-400">From wearable health therapy to industrial heating solutions</p>
            </div>
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productPreview.map((product) => (
              <motion.div
                key={product.name}
                variants={{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-graphene-800/50 to-graphene-800/20 border border-white/5 hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/15 to-orange-500/15 border border-gold-500/15 flex items-center justify-center text-gold-400">
                    {product.icon}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.temp}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-8 md:hidden text-center">
            <Link to="/products" className="text-gold-400 hover:text-gold-300 font-medium">
              View All Products →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PARTNER / TRUST SECTION ===== */}
      <section className="py-24 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our technology powers products from global brands, delivering measurable business results
            </p>
          </motion.div>

          {/* Anta Case Study Card */}
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-graphene-800 to-graphene-900 border border-white/5 glow-gold"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-gold-400 font-medium mb-2">CASE STUDY</div>
                <h3 className="text-2xl font-bold text-white mb-4">ANTA "Hurricane Warm Tech" Partnership</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  XGRAPHENE's graphene far-infrared heating technology was integrated into ANTA's winter apparel line, 
                  enabling self-heating functionality through far-infrared radiation from graphene conductive fabric.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '560K+', label: 'Units Sold' },
                    { value: '30%+', label: 'Price Premium' },
                    { value: '2021-24', label: 'Partnership' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-white/5">
                      <div className="text-xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-gold-500/10 to-orange-500/10 border border-gold-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black gradient-text">ANTA</div>
                    <div className="text-xs text-gray-500 mt-2">Official Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

        <motion.div
          {...fadeInUp}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Power Your Next Product{' '}
            <span className="gradient-text">with Graphene?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            From material supply to turnkey OEM/ODM solutions — we deliver medical-grade graphene heating technology that sets your brand apart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all duration-300"
            >
              Request Your Custom Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
