import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, HeartPulse, Sparkles, Home,
  Dumbbell, CheckCircle2, Star, Users,
  Building2, Globe, Award
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// 四大应用场景
const applications = [
  {
    category: 'Medical Rehabilitation',
    subtitle: 'Clinical-Grade Therapy Solutions',
    icon: <HeartPulse className="w-8 h-8" />,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Class II medical device certified solutions for hospitals, clinics, and rehabilitation centers.',
    scenarios: [
      { 
        title: 'Post-Surgery Recovery', 
        desc: 'Accelerates healing, reduces inflammation, minimizes scar tissue formation',
        evidence: '67% reduction in post-operative adhesions (Advanced Science, 2024)'
      },
      { 
        title: 'Chronic Pain Management', 
        desc: 'Knee osteoarthritis, lower back pain, cervical spondylosis',
        evidence: '78.3% clinical efficacy rate (PKU Third Hospital RCT)'
      },
      { 
        title: 'Neurological Therapy', 
        desc: 'Anxiety relief, sleep improvement, brainwave modulation',
        evidence: 'Alpha wave power increased 2.3x (Zhejiang University, 2024)'
      },
      { 
        title: 'Wound Healing', 
        desc: 'Diabetic ulcers, pressure sores, surgical wounds',
        evidence: '83.9% healing rate in 14 days (International Journal of Nanomedicine)'
      },
    ],
    targetClients: ['Hospitals', 'Rehabilitation Centers', 'Pain Clinics', 'TCM Centers'],
    productLink: '/products/therapy-helmet',
  },
  {
    category: 'Beauty & Skincare',
    subtitle: 'Premium Aesthetic Solutions',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    description: 'Far-infrared beauty devices for spas, salons, and aesthetic brands.',
    scenarios: [
      { 
        title: 'Hair Growth Therapy', 
        desc: 'Scalp microcirculation enhancement, follicle stimulation',
        evidence: '98.6% efficacy rate, 2.8x hair density increase'
      },
      { 
        title: 'Facial Rejuvenation', 
        desc: 'Collagen stimulation, wrinkle reduction, skin tightening',
        evidence: '6-14μm "Life Wave" penetrates dermis layer'
      },
      { 
        title: 'Anti-Aging Treatment', 
        desc: 'Cellular regeneration, oxidative stress reduction',
        evidence: 'AMPK pathway activation (Nature Metabolism)'
      },
      { 
        title: 'Scalp Care & Wellness', 
        desc: 'Dandruff control, oil balance, hair quality improvement',
        evidence: 'Validated by Chengdu University of TCM'
      },
    ],
    targetClients: ['Beauty Salons', 'Spa Centers', 'Aesthetic Brands', 'Hair Clinics'],
    productLink: '/products/hair-growth',
  },
  {
    category: 'Daily Wellness',
    subtitle: 'Home-Use Health Products',
    icon: <Home className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    description: 'Consumer-friendly devices for daily health maintenance and family care.',
    scenarios: [
      { 
        title: 'Pain Relief at Home', 
        desc: 'Knee support, back belt, neck warmer for daily use',
        evidence: 'Safe low-voltage DC power, one-button operation'
      },
      { 
        title: 'Sleep & Stress Relief', 
        desc: 'Relaxation therapy, anxiety reduction, better sleep quality',
        evidence: '5-day anxiety improvement (CAS Institute of Psychology)'
      },
      { 
        title: 'Elderly Care', 
        desc: 'Joint warmth, circulation improvement, chronic condition support',
        evidence: 'Simple operation, safe for daily use'
      },
      { 
        title: 'Family Health', 
        desc: 'Multi-purpose heating pads, portable therapy devices',
        evidence: 'NTC self-regulation, no overheating risk'
      },
    ],
    targetClients: ['E-commerce Platforms', 'Retail Chains', 'Health Brands', 'Distributors'],
    productLink: '/products',
  },
  {
    category: 'Sports & Fitness',
    subtitle: 'Performance & Recovery',
    icon: <Dumbbell className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Athletic recovery and performance enhancement for sports brands and fitness centers.',
    scenarios: [
      { 
        title: 'Muscle Recovery', 
        desc: 'Post-workout relaxation, lactic acid reduction, faster recovery',
        evidence: 'Enhanced microcirculation speeds up recovery'
      },
      { 
        title: 'Pre-Exercise Warm-Up', 
        desc: 'Muscle activation, injury prevention, flexibility improvement',
        evidence: '60s to 50°C, rapid heating response'
      },
      { 
        title: 'Injury Rehabilitation', 
        desc: 'Strain recovery, joint support, chronic injury management',
        evidence: 'Clinical-grade therapy in portable format'
      },
      { 
        title: 'Athletic Apparel', 
        desc: 'Heated jackets, gloves, insoles for outdoor sports',
        evidence: '560,000 units sold (Anta partnership)'
      },
    ],
    targetClients: ['Sports Brands', 'Fitness Chains', 'Athletic Teams', 'Outdoor Brands'],
    productLink: '/products',
  },
]

// 成功案例
const successCases = [
  {
    partner: 'Anta Sports',
    type: 'Sports Apparel',
    result: '560,000 units',
    desc: 'Graphene heating technology integrated into "Hurricane Warm Tech" apparel line',
    icon: <Users className="w-6 h-6" />,
  },
  {
    partner: 'Laisikedun',
    type: 'Hair Growth Device',
    result: '98.6% efficacy',
    desc: 'Joint development of graphene FIR hair growth device with clinical validation',
    icon: <Award className="w-6 h-6" />,
  },
  {
    partner: 'Peking University Third Hospital',
    type: 'Clinical Trial',
    result: '78.3% efficacy',
    desc: 'RCT confirms efficacy for knee osteoarthritis treatment',
    icon: <Building2 className="w-6 h-6" />,
  },
]

export default function Applications() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Application Scenarios
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Health with{' '}
              <span className="gradient-text">Graphene FIR</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              From clinical rehabilitation to daily wellness, our graphene far-infrared technology 
              powers solutions across medical, beauty, home care, and sports applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 四大应用场景 */}
      {applications.map((app, index) => (
        <section 
          key={app.category}
          className={`py-20 ${index % 2 === 0 ? 'bg-graphene-800' : 'bg-graphene-900'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* 左侧：标题和描述 */}
              <motion.div {...fadeInUp} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl ${app.bgColor} border ${app.borderColor} mb-6`}>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${app.color} text-white`}>
                    {app.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{app.category}</h2>
                    <p className="text-sm text-gray-400">{app.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {app.description}
                </p>

                {/* 目标客户 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.targetClients.map((client) => (
                    <span 
                      key={client}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
                    >
                      {client}
                    </span>
                  ))}
                </div>

                <Link
                  to={app.productLink}
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* 右侧：应用场景卡片 */}
              <motion.div {...fadeInUp} className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {app.scenarios.map((scenario) => (
                  <div 
                    key={scenario.title}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{scenario.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{scenario.desc}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <p className="text-xs text-emerald-400/80">{scenario.evidence}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* 成功案例 */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proven track record with leading brands and medical institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {successCases.map((item) => (
              <motion.div
                key={item.partner}
                {...fadeInUp}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 text-gold-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.partner}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.type}</p>
                <div className="text-2xl font-bold gradient-text mb-3">{item.result}</div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links - SEO */}
      <section className="py-12 bg-graphene-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm text-gray-400 leading-relaxed">
              Our applications are backed by <InlineLink keyword="clinical efficacy">clinical efficacy</InlineLink> data from 
              <InlineLink keyword="SCI papers">SCI papers</InlineLink>. Explore our 
              <InlineLink keyword="therapy helmet">therapy helmet</InlineLink> for brain health, 
              <InlineLink keyword="hair growth">hair growth</InlineLink> devices, and 
              <InlineLink keyword="NMPA">NMPA approved</InlineLink> certifications.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="mt-8">
            <RelatedPages pages={relatedPageSets.applications} />
          </motion.div>
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
            Have a Unique Application in Mind?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our engineering team specializes in custom graphene heating solutions. 
            Tell us your application requirements and we'll design the perfect fit.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
          >
            Discuss Your Application
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
