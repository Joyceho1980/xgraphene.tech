import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Users, Package, TrendingUp, Award,
  CheckCircle2, ArrowRight, Quote, Calendar,
  Thermometer, Activity, Target
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const stats = [
  { value: '560,000+', label: 'Units Sold', icon: <Package className="w-5 h-5" /> },
  { value: '30%+', label: 'Price Premium', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '2021-2024', label: 'Partnership Duration', icon: <Calendar className="w-5 h-5" /> },
  { value: '#1', label: 'Sports Brand China', icon: <Award className="w-5 h-5" /> },
]

const timeline = [
  {
    year: '2021',
    title: 'Partnership Initiated',
    description: 'Anta approached XGRAPHENE for graphene heating technology integration into athletic apparel.',
  },
  {
    year: '2022',
    title: 'Product Launch',
    description: 'First graphene-heated jackets and compression wear launched in Anta stores nationwide.',
  },
  {
    year: '2023',
    title: 'Scale Production',
    description: 'Production scaled to 500,000+ units. Product line expanded to multiple categories.',
  },
  {
    year: '2024',
    title: 'Market Leadership',
    description: 'Anta graphene apparel became bestseller in heated sportswear category in China.',
  },
]

const productFeatures = [
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'Instant Heating',
    description: 'Reaches target temperature in <60 seconds with graphene film technology.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Far-Infrared Therapy',
    description: '6-14μm FIR wavelength promotes blood circulation and muscle recovery.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Precision Control',
    description: '3-level temperature control with NTC self-regulation for safety.',
  },
]

const clinicalEvidence = [
  {
    metric: '+38.4s',
    label: 'Exercise Duration Increase',
    source: 'Randomized Crossover Trial 2023',
  },
  {
    metric: '+37.7s',
    label: 'Anaerobic Threshold Time',
    source: 'Sports Science Institute',
  },
  {
    metric: 'Significant',
    label: 'Fatigue Reduction',
    source: 'RCT 2024',
  },
]

export default function AntaCaseStudy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/applications" className="hover:text-white transition-colors">Applications</Link>
              <span>/</span>
              <span className="text-gold-400">Case Studies</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Case Study: Sports Apparel
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Anta Sports: <span className="gradient-text">560,000+</span> Units
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              How China's #1 sports brand integrated graphene heating technology to create premium athletic apparel 
              with 30%+ price premium and market-leading sales performance.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Anta */}
      <section className="py-16 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                About <span className="text-red-400">Anta Sports</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Anta Sports Products Limited is China's largest sportswear company and one of the world's 
                  largest sportswear companies by market capitalization. Founded in 1994, Anta has grown 
                  into a multi-brand sportswear group.
                </p>
                <p>
                  The company owns multiple brands including Anta, FILA (China), DESCENTE (China), 
                  and KOLON SPORT. In 2023, Anta Group's revenue exceeded ¥62.3 billion RMB, 
                  making it the third-largest sportswear company globally.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300">
                    Hong Kong Stock Exchange (2020.HK)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300">
                    2022 Beijing Olympics Partner
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300">
                    30,000+ Stores
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-graphene-800/50 border border-red-500/20">
              <Quote className="w-10 h-10 text-red-400/50 mb-4" />
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Graphene heating technology has become a key differentiator in our premium product line. 
                The clinical evidence and performance data gave us confidence to scale production to 
                over half a million units."
              </blockquote>
              <div className="text-sm text-gray-500">
                — Anta Product Development Team
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Product <span className="gradient-text">Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key technology features that enabled Anta's graphene apparel success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {productFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border border-white/5 hover:border-red-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence */}
      <section className="py-20 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Clinical <span className="gradient-text">Evidence</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Peer-reviewed research supporting graphene compression wear performance claims
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {clinicalEvidence.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-graphene-900 to-graphene-800 border border-white/5 text-center"
              >
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">{item.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <div className="text-sm text-gray-500">{item.source}</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-8 text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              View all clinical research <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-graphene-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Partnership <span className="gradient-text">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-graphene-900" />

                  {/* Content */}
                  <div className={`flex-1 pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="inline-block px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Business <span className="gradient-text">Results</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Units Sold', value: '560,000+', icon: <Package className="w-5 h-5" /> },
              { label: 'Price Premium', value: '30%+', icon: <TrendingUp className="w-5 h-5" /> },
              { label: 'Customer Satisfaction', value: '4.8/5', icon: <Users className="w-5 h-5" /> },
              { label: 'Return Rate', value: '<2%', icon: <CheckCircle2 className="w-5 h-5" /> },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
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
            Ready to Build Your Success Story?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Partner with XGRAPHENE to integrate clinically-validated graphene heating technology 
            into your product line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all"
            >
              View More Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
