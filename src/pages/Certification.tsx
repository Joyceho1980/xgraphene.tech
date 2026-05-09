import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Award, FileCheck, Building2, Users,
  CheckCircle2, ExternalLink, Download, BadgeCheck,
  Globe, BookOpen, Scale, ShieldCheck, FlaskConical,
  Star, Hospital, Clock, ArrowRight
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const certifications = [
  {
    icon: <Award className="w-7 h-7" />,
    title: 'NMPA Approved Medical Device',
    subtitle: 'April 2026 Official Registration',
    description: 'Graphene Far-Infrared Therapy Chamber received official NMPA approval as Class II medical device for pain management and circulation improvement.',
    details: [
      'Registration No.: 2026-XXXX-XXXX',
      'Indications: Analgesia, improved local circulation',
      'Neuropathic pain adjuvant therapy',
      'Class II medical device certification',
      'Valid for clinical and home use',
    ],
    highlight: 'NMPA',
    badge: 'APPROVED',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Class II Medical Device',
    subtitle: 'Changzhou Manufacturing Facility',
    description: 'Our Changzhou facility holds Class II medical device production certification, enabling medical-grade OEM/ODM manufacturing.',
    details: [
      'Class II medical device production license',
      'GMP-compliant manufacturing environment',
      'ISO 13485 quality management system',
      'Full traceability from material to finished product',
    ],
    highlight: 'Class II',
    badge: 'MEDICAL',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Industry Standard Setter',
    subtitle: 'First Drafter of National Standard',
    description: 'Xiamen Xihe Technology is the first-drafting enterprise for China\'s "Graphene Flexible Electrothermal Film" industry standard (Plan No. 2024-0923T-YB).',
    details: [
      'First-drafter status — we define the product rules',
      'Standard adopted by ASEAN countries as import reference',
      'Ministry of Industry and Information Technology (MIIT) announcement',
      'Ongoing international standardization efforts',
    ],
    highlight: '#1 Standard',
    badge: 'AUTHORITY',
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Clinical Validation',
    subtitle: '18 SCI Papers Published',
    description: 'Clinical trials across 5 Class-A hospitals affiliated with Xiamen University, plus RCT at Peking University Third Hospital.',
    details: [
      '18 peer-reviewed SCI papers',
      'Peking University Third Hospital RCT (78.3% efficacy)',
      'Zhejiang University brainwave research (2.3x Alpha)',
      'Nature Scientific Reports publication',
      'Advanced Science (IF: 15.1) publication',
    ],
    highlight: '18 Papers',
    badge: 'PROVEN',
  },
]

const hospitals = [
  { name: 'Xiamen University First Affiliated Hospital', abbr: 'XMUH-1st' },
  { name: 'Xiamen University Zhongshan Hospital', abbr: 'Zhongshan' },
  { name: 'Xiamen Maternity & Child Health Care Hospital', abbr: 'Maternity' },
  { name: 'Xiamen Hospital of Traditional Chinese Medicine', abbr: 'TCM' },
  { name: 'Xiamen University Xiang\'an Hospital', abbr: 'Xiang\'an' },
]

const roadmap = [
  { phase: 'Q2 2026', item: 'SGS/TÜV third-party testing reports', status: 'in-progress' },
  { phase: 'Q3 2026', item: 'ISO 13485 certification completion', status: 'planned' },
  { phase: 'Q4 2026', item: 'CE-LVD/EMC (Wellness pathway)', status: 'planned' },
  { phase: '2027', item: 'FDA 510(k) pre-submission', status: 'roadmap' },
  { phase: '2027-2028', item: 'MDR Class IIa (EU)', status: 'roadmap' },
]

export default function Certification() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trust & Certification
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The Ultimate{' '}
              <span className="gradient-text">Trust Infrastructure</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              From national standard-setting authority to Class II medical device certification — 
              our credentials form an impenetrable moat of trust that no competitor can replicate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                {...fadeInUp}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-graphene-700/50 to-graphene-800/30 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute top-6 right-6 px-2 py-1 rounded-md bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold tracking-wider">
                  {cert.badge}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-13 h-13 shrink-0 rounded-xl bg-gradient-to-br from-gold-500/15 to-orange-500/15 border border-gold-500/20 flex items-center justify-center text-gold-400">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-sm text-gold-500/70">{cert.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">{cert.description}</p>

                <ul className="space-y-2">
                  {cert.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-500/60 mt-0.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Highlight Stat */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-2xl font-black gradient-text">{cert.highlight}</span>
                  <Star className="w-5 h-5 text-gold-500/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Network */}
      <section className="py-24 bg-graphene-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <Hospital className="w-4 h-4" />
              Clinical Partners
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Validated by <span className="gradient-text">Top-Tier Hospitals</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Clinical trials conducted at 5 Class-A hospitals affiliated with Xiamen University, covering TCM therapy, post-surgical recovery, and pediatric vision restoration.
            </p>
          </motion.div>

          <motion.div
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } },
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {hospitals.map((hospital) => (
              <motion.div
                key={hospital.abbr}
                variants={{ initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 } }}
                className="group p-5 rounded-xl bg-gradient-to-br from-graphene-700/50 to-graphene-800/30 border border-white/5 hover:border-red-500/20 text-center transition-all"
              >
                <Hospital className="w-8 h-8 text-red-400/60 mx-auto mb-3" />
                <div className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                  {hospital.name}
                </div>
                <div className="text-xs text-gray-600 mt-1">{hospital.abbr}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certification Roadmap */}
      <section className="py-24 bg-graphene-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Global Certification <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-gray-400">Strategic path to full global market compliance</p>
          </motion.div>

          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.phase}
                {...fadeInUp}
                className={`flex items-start gap-4 p-5 rounded-xl border transition-all ${
                  item.status === 'in-progress'
                    ? 'bg-gold-500/5 border-gold-500/20'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                  item.status === 'in-progress'
                    ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                    : 'bg-white/5 text-gray-500 border border-white/10'
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-white">{item.item}</h3>
                    <span className={`shrink-0 text-xs px-2 py-0.5 rounded ${
                      item.status === 'in-progress' 
                        ? 'bg-gold-500/10 text-gold-400' 
                        : item.status === 'planned'
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'bg-gray-500/10 text-gray-500'
                    }`}>
                      {item.status === 'in-progress' ? 'In Progress' : item.status === 'planned' ? 'Planned' : 'Roadmap'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Target: {item.phase}</p>
                </div>
                {item.status === 'in-progress' && (
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Internal Links - SEO */}
          <motion.div {...fadeInUp} className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 leading-relaxed text-center">
              Our <InlineLink keyword="Class II">Class II</InlineLink> medical device certification 
              is backed by <InlineLink keyword="clinical validation">clinical validation</InlineLink> from 
              <InlineLink keyword="Grade-A hospital">Grade-A hospital</InlineLink> partners. 
              See <InlineLink keyword="SCI papers">SCI papers</InlineLink> for research evidence, 
              or explore our <InlineLink keyword="therapy helmet">therapy helmet</InlineLink> products.
            </p>
          </motion.div>

          {/* Related Pages */}
          <motion.div {...fadeInUp} className="mt-8 max-w-4xl mx-auto">
            <RelatedPages pages={relatedPageSets.certification} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Building2 className="w-14 h-14 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Partner With the Industry <span className="gradient-text">Standard-Setter</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our certifications aren't just paperwork — they're proof that your products will be built on the most authoritative technical foundation available.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
