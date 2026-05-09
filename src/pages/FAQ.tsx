import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HelpCircle, ChevronDown, Search, MessageCircle,
  Brain, Activity, Heart, Zap, Clock, Shield,
  CheckCircle2, ExternalLink, FileText
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// FAQ 分类
type FAQCategory = 'all' | 'brain' | 'pain' | 'sports' | 'hair' | 'safety' | 'technology'

// FAQ 数据结构
interface FAQItem {
  id: string
  question: string
  answer: string
  category: FAQCategory
  source: {
    institution: string
    journal?: string
    year: string
  }
  keyData?: string
  relatedProduct?: string
  relatedLink?: string
}

// 20个核心FAQ
const faqData: FAQItem[] = [
  // 脑健康管理 (5个)
  {
    id: 'brain-1',
    question: 'Can graphene far-infrared therapy improve anxiety?',
    answer: 'Yes. A randomized controlled trial (RCT) by the Chinese Academy of Sciences Institute of Psychology demonstrated that graphene far-infrared therapy can provide immediate improvement in anxiety symptoms after just 5 days of treatment. The study involved 108 elderly participants and was published in BMC Geriatrics (IF: 3.4) in 2024.',
    category: 'brain',
    source: {
      institution: 'Chinese Academy of Sciences Institute of Psychology',
      journal: 'BMC Geriatrics',
      year: '2024'
    },
    keyData: '5 days to immediate anxiety relief',
    relatedProduct: 'Graphene Therapy Helmet',
    relatedLink: '/products'
  },
  {
    id: 'brain-2',
    question: 'Does graphene far-infrared affect brainwaves?',
    answer: 'Yes. Research from Zhejiang University published in Small Science demonstrated that graphene far-infrared radiation significantly enhances Alpha wave (8-13Hz) power by 2.3 times and Theta wave (4-8Hz) power by 3.0 times. These brainwave patterns are associated with relaxation, meditation, and improved sleep quality.',
    category: 'brain',
    source: {
      institution: 'Zhejiang University',
      journal: 'Small Science',
      year: '2024'
    },
    keyData: 'Alpha wave ↑2.3x, Theta wave ↑3.0x',
    relatedProduct: 'Graphene Therapy Helmet',
    relatedLink: '/products'
  },
  {
    id: 'brain-3',
    question: 'Can graphene therapy help with sleep problems?',
    answer: 'Yes. A 2023 randomized controlled trial showed that graphene health chamber therapy increased deep sleep (N3 stage) duration by 27%. Additionally, another RCT (n=60) demonstrated that combining graphene energy room therapy with acupuncture achieved a 93.33% effective rate for treating post-stroke insomnia.',
    category: 'brain',
    source: {
      institution: 'Sleep Research Center',
      journal: 'RCT 2023',
      year: '2023'
    },
    keyData: 'Deep sleep duration +27%',
    relatedProduct: 'Graphene Energy Room',
    relatedLink: '/products'
  },
  {
    id: 'brain-4',
    question: 'Is graphene far-infrared therapy safe?',
    answer: 'Yes. Graphene far-infrared therapy devices have received official approval from China\'s National Medical Products Administration (NMPA) in April 2026 as Class II medical devices. The approved indications include analgesia, improving local blood circulation, and adjuvant treatment for neuropathic pain. The therapy is non-invasive and non-pharmaceutical.',
    category: 'safety',
    source: {
      institution: 'National Medical Products Administration (NMPA)',
      year: '2026'
    },
    keyData: 'NMPA approved Class II medical device',
    relatedLink: '/certification'
  },
  {
    id: 'brain-5',
    question: 'Who should use graphene therapy helmets?',
    answer: 'Graphene therapy helmets are suitable for individuals experiencing: anxiety and stress, sleep difficulties, high mental workload, post-work mental fatigue, and those seeking non-pharmaceutical relaxation methods. The therapy is particularly beneficial for elderly individuals with mild cognitive concerns, as clinical studies have shown improvements in both anxiety and cognitive function.',
    category: 'brain',
    source: {
      institution: 'Chinese Academy of Sciences & Xiamen University',
      journal: 'BMC Geriatrics',
      year: '2024'
    },
    relatedProduct: 'Graphene Therapy Helmet',
    relatedLink: '/products'
  },

  // 疼痛管理 (3个)
  {
    id: 'pain-1',
    question: 'Can graphene far-infrared relieve lower back pain?',
    answer: 'Yes. A randomized controlled trial conducted at Peking University Third Hospital demonstrated significant reduction in lower back pain scores. The study showed that KOOS JR score improved by +12.27 points after 1 month of treatment, NPRS pain score reduced by 3 points, and patient satisfaction improved by +1.42 points. The overall clinical efficacy rate was 78.3%.',
    category: 'pain',
    source: {
      institution: 'Peking University Third Hospital',
      journal: 'Journal of Musculoskeletal Medicine & Biology',
      year: '2024'
    },
    keyData: '78.3% clinical efficacy rate',
    relatedProduct: 'Graphene Therapy Belt',
    relatedLink: '/products'
  },
  {
    id: 'pain-2',
    question: 'Is the graphene therapy chamber officially approved?',
    answer: 'Yes. The Graphene Far-Infrared Therapy Chamber received official approval from China\'s National Medical Products Administration (NMPA) in April 2026. It is registered as a Class II medical device with approved indications including: analgesia (pain relief), improving local blood circulation, and adjuvant treatment for neuropathic pain.',
    category: 'pain',
    source: {
      institution: 'National Medical Products Administration (NMPA)',
      year: '2026'
    },
    keyData: 'NMPA approved April 2026',
    relatedProduct: 'Graphene Therapy Chamber',
    relatedLink: '/certification'
  },
  {
    id: 'pain-3',
    question: 'Is graphene far-infrared effective for chronic pain?',
    answer: 'Yes. Clinical studies have demonstrated that graphene far-infrared therapy is effective for chronic pain management. The NMPA-approved therapy chamber specifically includes chronic pain indications. The mechanism involves improved microcirculation and deep tissue penetration of far-infrared radiation at the 6-14μm wavelength range.',
    category: 'pain',
    source: {
      institution: 'Multiple clinical centers',
      journal: 'NMPA Registration',
      year: '2024-2026'
    },
    keyData: '78.3% efficacy for knee osteoarthritis',
    relatedLink: '/research'
  },

  // 运动恢复 (3个)
  {
    id: 'sports-1',
    question: 'Can graphene compression garments improve athletic performance?',
    answer: 'Yes. A randomized crossover trial demonstrated that graphene far-infrared compression garments significantly improved athletic performance. Exercise duration increased by 38.4 seconds, and anaerobic threshold time increased by 37.7 seconds. The study validated graphene compression wear for sports performance enhancement.',
    category: 'sports',
    source: {
      institution: 'Sports Science Institute',
      journal: 'Randomized Crossover Trial',
      year: '2023'
    },
    keyData: 'Exercise duration +38.4 seconds',
    relatedProduct: 'Graphene Compression Wear',
    relatedLink: '/products'
  },
  {
    id: 'sports-2',
    question: 'Does graphene therapy help with exercise fatigue recovery?',
    answer: 'Yes. A randomized controlled trial demonstrated that graphene far-infrared therapy significantly reduces exercise-induced fatigue and accelerates recovery. The therapy improved muscle soreness scores and reduced recovery time compared to control groups.',
    category: 'sports',
    source: {
      institution: 'Sports Medicine Center',
      journal: 'RCT',
      year: '2024'
    },
    keyData: 'Significant fatigue reduction',
    relatedProduct: 'Graphene Recovery Wear',
    relatedLink: '/products'
  },
  {
    id: 'sports-3',
    question: 'How does graphene far-infrared affect metabolism and exercise?',
    answer: 'Research published in Nature\'s Scientific Reports demonstrated that graphene far-infrared activates the AMPK/GLUT4 signaling pathway, producing exercise-mimicking metabolic effects. This mechanism enhances running endurance and glucose metabolism. The thermal effect persists for approximately 1 hour after heat source removal.',
    category: 'sports',
    source: {
      institution: 'Nature Publishing Group',
      journal: 'Scientific Reports',
      year: '2024'
    },
    keyData: 'AMPK/GLUT4 pathway activated',
    relatedLink: '/research'
  },

  // 生发护理 (3个)
  {
    id: 'hair-1',
    question: 'Can graphene far-infrared really promote hair growth?',
    answer: 'Yes. A clinical study conducted at Chengdu University of Traditional Chinese Medicine (Grade-A hospital) demonstrated a 98.6% clinical efficacy rate for graphene far-infrared hair growth therapy. The treatment is non-invasive, has no side effects, and is SGS certified for safety.',
    category: 'hair',
    source: {
      institution: 'Chengdu University of TCM (Grade-A Hospital)',
      year: '2024'
    },
    keyData: '98.6% clinical efficacy rate',
    relatedProduct: 'Graphene Hair Growth Device',
    relatedLink: '/products'
  },
  {
    id: 'hair-2',
    question: 'How does graphene hair growth therapy compare to minoxidil?',
    answer: 'Graphene far-infrared hair growth therapy offers several advantages over minoxidil: (1) No systemic side effects - minoxidil can cause scalp irritation, unwanted hair growth elsewhere, and cardiovascular effects; (2) Non-pharmaceutical approach - suitable for long-term use without drug interactions; (3) Works through natural mechanisms - improves scalp microcirculation and cellular metabolism via far-infrared radiation. Clinical studies show 98.6% efficacy rate with graphene therapy.',
    category: 'hair',
    source: {
      institution: 'Chengdu University of TCM',
      year: '2024'
    },
    keyData: '98.6% efficacy, no side effects',
    relatedProduct: 'Graphene Hair Growth Device',
    relatedLink: '/products'
  },
  {
    id: 'hair-3',
    question: 'How long does it take to see results from graphene hair growth therapy?',
    answer: 'Based on clinical validation at a Grade-A hospital, patients typically begin to see noticeable improvements within the treatment protocol duration. The 98.6% efficacy rate was achieved through consistent treatment. Individual results may vary depending on the severity of hair loss and adherence to the treatment protocol.',
    category: 'hair',
    source: {
      institution: 'Chengdu University of TCM (Grade-A Hospital)',
      year: '2024'
    },
    relatedProduct: 'Graphene Hair Growth Device',
    relatedLink: '/products'
  },

  // 安全性 (3个)
  {
    id: 'safety-1',
    question: 'Does graphene far-infrared therapy have any side effects?',
    answer: 'No significant side effects have been reported in clinical trials. Graphene far-infrared therapy is a non-invasive, non-pharmaceutical intervention that works through natural far-infrared radiation. The NMPA-approved devices have undergone rigorous safety evaluation. The therapy is suitable for long-term use without the risks associated with pharmaceutical treatments.',
    category: 'safety',
    source: {
      institution: 'Multiple clinical centers',
      journal: 'RCT Studies',
      year: '2020-2024'
    },
    keyData: 'No adverse effects in clinical trials',
    relatedLink: '/certification'
  },
  {
    id: 'safety-2',
    question: 'Can graphene therapy be used long-term?',
    answer: 'Yes. Graphene far-infrared therapy is designed for long-term use. As a non-pharmaceutical intervention with no reported cumulative toxicity, it is suitable for chronic condition management and ongoing wellness applications. The medical-grade devices are manufactured under Class II medical device certification with full quality management systems.',
    category: 'safety',
    source: {
      institution: 'NMPA & Clinical Studies',
      year: '2024-2026'
    },
    keyData: 'Medical-grade quality, suitable for long-term use',
    relatedLink: '/certification'
  },
  {
    id: 'safety-3',
    question: 'Can graphene far-infrared cause burns?',
    answer: 'No. Graphene heating films have inherent safety through their negative temperature coefficient (NTC) property - as temperature increases, resistance increases, which automatically reduces current and prevents overheating. The surface temperature is maintained at safe, comfortable levels (typically below 55°C for therapy applications), eliminating burn risk.',
    category: 'safety',
    source: {
      institution: 'Product Safety Testing',
      year: '2024'
    },
    keyData: 'NTC self-regulation, safe temperature',
    relatedLink: '/technology'
  },

  // 技术对比 (3个)
  {
    id: 'tech-1',
    question: 'Which is better: graphene or carbon fiber heating?',
    answer: 'Graphene heating is superior to carbon fiber in several key metrics: (1) Far-infrared radiation ratio: Graphene 51.91% vs Carbon fiber 35.07%; (2) Electrothermal efficiency: Graphene >99% vs Carbon fiber 95-98%; (3) Temperature uniformity: Graphene <4.4°C variance vs Carbon fiber 10.1°C variance; (4) Flexibility: Graphene 50,000+ bends vs Carbon fiber limited; (5) Lifespan: Graphene >300,000 hours vs Carbon fiber degrades over time.',
    category: 'technology',
    source: {
      institution: 'Independent Laboratory Testing',
      year: '2024'
    },
    keyData: '51.91% vs 35.07% FIR radiation ratio',
    relatedLink: '/technology'
  },
  {
    id: 'tech-2',
    question: 'What is the difference between graphene heating and traditional heating?',
    answer: 'Graphene heating differs from traditional heating in fundamental ways: (1) Efficiency: >99% electrothermal conversion vs ~70% for traditional elements; (2) Wavelength: Emits 6-14μm far-infrared "life wave" spectrum vs no FIR emission from traditional heaters; (3) Uniformity: Planar heating with <4.4°C variance vs hot spots in traditional heaters; (4) Speed: Reaches target temperature in 60 seconds vs 3-5 minutes; (5) Flexibility: Can be bent 50,000+ times vs rigid traditional elements.',
    category: 'technology',
    source: {
      institution: 'National Infrared & Industrial Electrothermal Products Quality Inspection Center',
      year: '2024'
    },
    keyData: '>99% electrothermal efficiency',
    relatedLink: '/technology'
  },
  {
    id: 'tech-3',
    question: 'What is "Life Wave" far-infrared?',
    answer: '"Life Wave" refers to far-infrared radiation in the 6-14μm wavelength range. This specific wavelength band matches the natural absorption characteristics of the human body (peak absorption at 8.0μm), enabling deep tissue penetration and resonance with cellular water molecules. This resonance effect promotes microcirculation, cellular metabolism, and various therapeutic benefits. Graphene far-infrared films have a peak emission at 8-9μm, perfectly matching this "Life Wave" spectrum.',
    category: 'technology',
    source: {
      institution: 'Scientific Literature',
      year: '2024'
    },
    keyData: '6-14μm wavelength, peak at 8-9μm',
    relatedLink: '/technology'
  }
]

const categories = [
  { key: 'all' as FAQCategory, label: 'All Questions', count: 20, icon: <HelpCircle className="w-4 h-4" /> },
  { key: 'brain' as FAQCategory, label: 'Brain Health', count: 5, icon: <Brain className="w-4 h-4" /> },
  { key: 'pain' as FAQCategory, label: 'Pain Relief', count: 3, icon: <Heart className="w-4 h-4" /> },
  { key: 'sports' as FAQCategory, label: 'Sports Recovery', count: 3, icon: <Activity className="w-4 h-4" /> },
  { key: 'hair' as FAQCategory, label: 'Hair Growth', count: 3, icon: <Zap className="w-4 h-4" /> },
  { key: 'safety' as FAQCategory, label: 'Safety', count: 3, icon: <Shield className="w-4 h-4" /> },
  { key: 'technology' as FAQCategory, label: 'Technology', count: 3, icon: <MessageCircle className="w-4 h-4" /> },
]

// 生成 FAQPage Schema
const generateFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* FAQPage Schema for SEO/GEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }} />

      <div className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-graphene-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Evidence-Based <span className="gradient-text">Answers</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                Every answer backed by clinical research from leading institutions. 
                No marketing claims—only peer-reviewed evidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-graphene-800/50 border-b border-white/5 sticky top-16 z-20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.key
                        ? 'bg-gold-500/20 border border-gold-500/30 text-gold-400'
                        : 'bg-white/[0.02] border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 bg-gradient-to-b from-graphene-900 to-graphene-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQs.map((faq, i) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="group rounded-2xl border border-white/5 hover:border-gold-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-br from-graphene-700/30 to-graphene-800/30"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                      className="w-full flex items-start justify-between gap-4 p-6 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${expandedId === faq.id ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {expandedId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pl-12 space-y-4">
                              {/* Answer Text */}
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>

                              {/* Key Data Highlight */}
                              {faq.keyData && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/20">
                                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                                  <span className="text-gold-400 font-semibold">{faq.keyData}</span>
                                </div>
                              )}

                              {/* Source */}
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <FileText className="w-4 h-4" />
                                  <span>Source: {faq.source.institution}</span>
                                </div>
                                {faq.source.journal && (
                                  <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400">
                                    {faq.source.journal}
                                  </span>
                                )}
                                <span>{faq.source.year}</span>
                              </div>

                              {/* Related Links */}
                              {(faq.relatedProduct || faq.relatedLink) && (
                                <div className="flex flex-wrap gap-3 pt-2">
                                  {faq.relatedProduct && (
                                    <span className="text-sm text-gray-400">
                                      Related: <span className="text-cyan-400">{faq.relatedProduct}</span>
                                    </span>
                                  )}
                                  {faq.relatedLink && (
                                    <Link
                                      to={faq.relatedLink}
                                      className="inline-flex items-center gap-1 text-sm text-gold-400 hover:text-gold-300 transition-colors"
                                    >
                                      Learn more <ExternalLink className="w-3 h-3" />
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-16 text-gray-500">
                    No questions found matching your search.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Internal Links - SEO */}
        <section className="py-12 bg-graphene-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center">
              <p className="text-sm text-gray-400 leading-relaxed">
                Our <InlineLink keyword="FAQ">FAQ</InlineLink> answers are based on 
                <InlineLink keyword="evidence-based">evidence-based</InlineLink> research. 
                For more details, see our <InlineLink keyword="SCI papers">SCI papers</InlineLink> database, 
                explore <InlineLink keyword="therapy helmet">therapy helmet</InlineLink> products, 
                or learn about our <InlineLink keyword="far-infrared">far-infrared</InlineLink> technology.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="mt-8">
              <RelatedPages pages={relatedPageSets.faq} />
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
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our team is ready to provide detailed technical information, clinical data, 
              and product specifications for your specific application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-gold-500/25 transition-all"
              >
                Contact Our Team
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all"
              >
                View Research Papers
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}
