import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Building2, Users, Target,
  Lightbulb, Globe, Award, FlaskConical,
  CheckCircle2, ArrowUpRight
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const milestones = [
  { year: '2019', event: 'ANTA Partnership — Graphene heating technology integrated into "Hurricane Warm Tech" apparel line' },
  { year: '2020', event: 'Company Founded — Incubated by Tan Kah Kee Innovation Laboratory (Fujian Provincial Lab)' },
  { year: '2022', event: 'Product Launch — First health therapy product line released to market' },
  { year: '2024', event: 'Industry Standard — Became first-drafting enterprise for national graphene heating film standard' },
  { year: '2025', event: 'Clinical Validation — Peking University Third Hospital RCT confirms 78.3% efficacy' },
  { year: '2026', event: 'Global Expansion — xgraphene.tech international B2B platform launch' },
]

const team = [
  {
    role: 'Technology Leadership',
    name: 'Academician Nanfeng Zheng',
    title: 'Chief Scientific Advisor',
    description: 'World-leading chemist, Nature paper author, inventor of proprietary graphene conductive ink technology.',
  },
  {
    role: 'Incubation Platform',
    name: 'Tan Kah Kee Innovation Laboratory',
    title: 'Parent Organization',
    description: 'Fujian Provincial Key Laboratory — providing world-class R&D infrastructure and academic resources.',
  },
  {
    role: 'Manufacturing',
    name: 'Changzhou Facility',
    title: 'Production Base',
    description: 'Class II medical device certified manufacturing facility with full OEM/ODM capability.',
  },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Science-First',
    desc: 'Every claim backed by peer-reviewed research. No marketing fluff — only clinical evidence.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation-Driven',
    desc: 'From lab to market in record time. We turn cutting-edge research into commercial reality.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Partner-Centric',
    desc: 'Pure B2B model — we never compete with our customers. Your success is our success.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Vision',
    desc: 'Setting international standards today for a globally connected graphene future tomorrow.',
  },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              About XGRAPHENE
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              From Laboratory to{' '}
              <span className="gradient-text">Global Industry Leader</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Xiamen Xihe Technology Co., Ltd., incubated by Tan Kah Kee Innovation Laboratory, 
              is dedicated to bringing graphene technology out of the lab and into real-world applications — 
              starting with healthcare and expanding across industries.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '2020', label: 'Founded' },
              { value: '#1', label: 'Standard Setter' },
              { value: '5+', label: 'Hospital Partners' },
              { value: '9+', label: 'Product Lines' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <FlaskConical className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed text-white mb-6">
              "Dedicated to making{' '}
              <span className="gradient-text">greater breakthroughs</span>{' '}
              in graphene material applications within healthcare — 
              letting scientific research step out of the laboratory and into everyday life."
            </blockquote>
            <p className="text-gray-500">— Xiamen Xihe Technology Mission</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-graphene-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-xl mx-auto">The principles that guide every decision we make</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                {...fadeInUp}
                className="group p-6 rounded-2xl bg-gradient-to-b from-graphene-700/50 to-transparent border border-white/5 hover:border-gold-500/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/15 to-orange-500/15 border border-gold-500/15 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Organization */}
      <section className="py-24 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              World-Class <span className="gradient-text">Backing</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Backed by top-tier academic institutions and manufacturing capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                {...fadeInUp}
                className="p-8 rounded-2xl bg-gradient-to-br from-graphene-800/50 to-graphene-900/50 border border-white/5"
              >
                <div className="text-xs text-gold-400 font-medium uppercase tracking-wider mb-3">{member.role}</div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400">Key milestones on our path to industry leadership</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500 via-orange-500 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  {...fadeInUp}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-graphene-900 -translate-x-1.5 z-10 shadow-lg shadow-gold-500/30" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="text-sm font-black gradient-text mb-1">{item.year}</div>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphene-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Award className="w-14 h-14 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Join Our Growth Story
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Whether you're a brand seeking innovative heating technology or an investor looking at the next frontier of materials science — we'd love to connect.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
