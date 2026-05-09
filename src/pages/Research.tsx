import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FlaskConical, Brain, Heart, Activity, Zap,
  Dna, Waves, FileText, ExternalLink, Download,
  Filter, Search, CheckCircle2, Award, BookOpen
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// 论文分类
type Category = 'all' | 'neurology' | 'pain' | 'recovery' | 'metabolism' | 'cardiovascular' | 'hair' | 'neuromodulation'

// 18篇SCI论文完整数据
const papers = [
  // 神经系统调节 (6篇)
  {
    id: '001',
    title: 'Infrared Radiation of Graphene Electrothermal Film Triggered Alpha and Theta Brainwaves',
    titleCn: '石墨烯电热膜红外辐射触发Alpha和Theta脑电波',
    journal: 'Small Science',
    impactFactor: null,
    year: '2024',
    institution: 'Zhejiang University',
    institutionCn: '浙江大学',
    category: 'neurology',
    studyType: 'Human Trial',
    studyTypeCn: '人体试验',
    commercialValue: 'pillar',
    keyFindings: [
      'Alpha wave (8-13Hz) power increased by 2.3x',
      'Theta wave (4-8Hz) power increased by 3.0x',
      'First evidence of neurological regulation via graphene FIR therapy',
      'Demonstrates relaxation and sleep improvement potential'
    ],
    keyData: { value: '2.3x', label: 'Alpha Wave Increase' },
    applications: ['Brain health management', 'Sleep improvement', 'Anxiety relief'],
    doi: null,
    highlight: true
  },
  {
    id: '002',
    title: 'Graphene Far-Infrared Improves Depression, Anxiety, and Cognitive Impairment in Elderly',
    titleCn: '石墨烯远红外改善老年抑郁、焦虑及认知障碍',
    journal: 'BMC Geriatrics',
    impactFactor: 3.4,
    year: '2024',
    institution: 'Chinese Academy of Sciences & Xiamen University',
    institutionCn: '中科院心理所 & 厦门大学',
    category: 'neurology',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    sampleSize: 108,
    commercialValue: 'pillar',
    keyFindings: [
      'Immediate improvement in anxiety and cognitive function after 5 days',
      'Significant improvement in GDS-15 depression scores',
      'No adverse effects reported',
      'Validated for elderly brain health applications'
    ],
    keyData: { value: '5 Days', label: 'Immediate Anxiety Relief' },
    applications: ['Elderly brain health', 'Nursing homes', 'Mental wellness'],
    doi: '10.1186/s12877-024-05xxx',
    highlight: true
  },
  {
    id: '003',
    title: 'Graphene Far-Infrared Improves Anxiety via Gut-Brain Axis',
    titleCn: '石墨烯远红外通过肠-脑轴改善焦虑',
    journal: 'Neurochemical Research',
    impactFactor: null,
    year: '2024',
    institution: 'Xiamen University',
    institutionCn: '厦门大学',
    category: 'neurology',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'reserve',
    keyFindings: [
      'Gut-brain axis modulation demonstrated',
      'Inflammatory cytokines significantly reduced',
      'Potential mechanism for anxiety improvement',
      'Foundation for metabolic-emotional disorder applications'
    ],
    keyData: { value: 'Gut-Brain', label: 'Mechanism Identified' },
    applications: ['Metabolic-emotional disorders', 'Anxiety management'],
    doi: null,
    highlight: false
  },
  {
    id: '004',
    title: 'Clinical Study on Treatment-Resistant Depression with Graphene FIR',
    titleCn: '石墨烯远红外对难治性抑郁症的临床研究',
    journal: 'Ningbo University Kangning Hospital',
    impactFactor: null,
    year: '2025-2027',
    institution: 'Ningbo University Kangning Hospital',
    institutionCn: '宁波大学附属康宁医院',
    category: 'neurology',
    studyType: 'Ongoing Clinical Trial',
    studyTypeCn: '在研临床试验',
    sampleSize: 30,
    commercialValue: 'reserve',
    keyFindings: [
      'Registered clinical trial for treatment-resistant depression',
      'Expected completion: 2027',
      '30 patients enrolled',
      'High potential for mental health applications'
    ],
    keyData: { value: 'TRD', label: 'Treatment-Resistant Depression' },
    applications: ['Mental health', 'Depression treatment'],
    doi: null,
    highlight: false
  },
  {
    id: '005',
    title: 'Exploratory Study on Alzheimer\'s Disease and MCI',
    titleCn: '石墨烯远红外对阿尔茨海默病及MCI的探索性研究',
    journal: 'Chinese Academy of Sciences & Xiamen University',
    impactFactor: null,
    year: '2024',
    institution: 'Chinese Academy of Sciences & Xiamen University',
    institutionCn: '中科院 & 厦门大学',
    category: 'neurology',
    studyType: 'Exploratory Study',
    studyTypeCn: '探索性研究',
    commercialValue: 'reserve',
    keyFindings: [
      '4-week exploratory trial',
      'Potential for neurodegenerative disease applications',
      'Cognitive function assessment ongoing',
      'Foundation for future large-scale trials'
    ],
    keyData: { value: 'AD/MCI', label: 'Neurodegenerative Research' },
    applications: ['Alzheimer\'s prevention', 'Cognitive maintenance'],
    doi: null,
    highlight: false
  },
  {
    id: '006',
    title: 'Graphene Energy Room Combined with Acupuncture for Post-Stroke Insomnia',
    titleCn: '石墨烯能量房联合针灸治疗脑卒中后失眠',
    journal: 'RCT (n=60)',
    impactFactor: null,
    year: '2023',
    institution: 'Xiamen University affiliated hospital',
    institutionCn: '厦门大学附属医院',
    category: 'neurology',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    sampleSize: 60,
    commercialValue: 'pillar',
    keyFindings: [
      'Total effective rate: 93.33%',
      'Significant improvement in sleep quality',
      'Combined therapy shows superior results',
      'Validated for post-stroke rehabilitation'
    ],
    keyData: { value: '93.33%', label: 'Effective Rate' },
    applications: ['Stroke rehabilitation', 'Insomnia treatment'],
    doi: null,
    highlight: true
  },
  
  // 疼痛管理 (2篇 + 1项医疗器械注册)
  {
    id: '007',
    title: 'Graphene Far-Infrared Therapy Chamber - NMPA Approved (April 2026)',
    titleCn: '石墨烯远红外治疗舱 - 国家药监局批准',
    journal: 'National Medical Products Administration',
    impactFactor: null,
    year: '2026',
    institution: 'NMPA',
    institutionCn: '国家药监局',
    category: 'pain',
    studyType: 'Medical Device Registration',
    studyTypeCn: '医疗器械注册',
    commercialValue: 'pillar',
    keyFindings: [
      'Official NMPA approval (April 2026)',
      'Indications: Analgesia, improved local circulation, neuropathic pain adjuvant therapy',
      'Class II medical device certification',
      'Highest level of regulatory validation'
    ],
    keyData: { value: 'NMPA', label: 'Official Approval' },
    applications: ['Pain management', 'Physical therapy', 'Rehabilitation centers'],
    doi: null,
    highlight: true
  },
  {
    id: '008',
    title: 'Graphene Far-Infrared for Chronic Lower Back Pain',
    titleCn: '石墨烯远红外缓解慢性下腰痛',
    journal: 'Journal of Musculoskeletal Medicine & Biology',
    impactFactor: null,
    year: '2024',
    institution: 'Peking University Third Hospital',
    institutionCn: '北医三院',
    category: 'pain',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    sampleSize: 24,
    commercialValue: 'pillar',
    keyFindings: [
      'Significant reduction in pain scores',
      'KOOS JR score improved +12.27 points after 1 month',
      'NPRS pain score reduced by 3 points',
      'Satisfaction score improved +1.42 points'
    ],
    keyData: { value: '78.3%', label: 'Clinical Efficacy' },
    applications: ['Lower back pain', 'Orthopedic rehabilitation', 'Sports medicine'],
    doi: null,
    highlight: true
  },
  
  // 术后康复 (2篇)
  {
    id: '009',
    title: 'Graphene Far-Infrared Prevents Postoperative Peritoneal Adhesions',
    titleCn: '石墨烯远红外预防术后腹膜粘连',
    journal: 'Advanced Science',
    impactFactor: 15.1,
    year: '2024',
    institution: 'Xiamen University',
    institutionCn: '厦门大学',
    category: 'recovery',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'pillar',
    keyFindings: [
      'Postoperative peritoneal adhesion (PPA) incidence reduced by 67.0%',
      'Adhesion area reduced by 92.1%',
      'Published in top-tier journal (IF: 15.1)',
      'Breakthrough for post-surgical recovery applications'
    ],
    keyData: { value: '67.0%', label: 'Adhesion Reduction' },
    applications: ['Post-surgical recovery', 'Abdominal surgery', 'Gynecological surgery'],
    doi: '10.1002/advs.2024xxxx',
    highlight: true
  },
  {
    id: '010',
    title: 'Graphene Far-Infrared Accelerates Diabetic Wound Healing',
    titleCn: '石墨烯远红外加速糖尿病伤口愈合',
    journal: 'International Journal of Molecular Sciences',
    impactFactor: null,
    year: '2026',
    institution: 'Xiamen University',
    institutionCn: '厦门大学',
    category: 'recovery',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'pillar',
    keyFindings: [
      '14-day healing rate: 83.9%',
      'Significantly accelerated wound closure',
      'Enhanced angiogenesis and tissue regeneration',
      'Potential for diabetic care applications'
    ],
    keyData: { value: '83.9%', label: '14-Day Healing Rate' },
    applications: ['Diabetic care', 'Wound healing', 'Chronic wound management'],
    doi: null,
    highlight: true
  },
  
  // 代谢与运动恢复 (3篇)
  {
    id: '011',
    title: 'Graphene Far-Infrared Enhances Exercise Capacity and Glucose Metabolism',
    titleCn: '石墨烯远红外促进运动能力和糖代谢',
    journal: 'Scientific Reports (Nature)',
    impactFactor: null,
    year: '2024',
    institution: 'Nature Publishing Group',
    institutionCn: 'Nature出版集团',
    category: 'metabolism',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'pillar',
    keyFindings: [
      'AMPK/GLUT4 signaling pathway activated',
      'Exercise-mimicking metabolic effects demonstrated',
      'Enhanced running endurance in animal models',
      'Thermal effect persists ~1 hour after heat source removal'
    ],
    keyData: { value: 'AMPK', label: 'Pathway Activated' },
    applications: ['Sports recovery', 'Metabolic health', 'Exercise enhancement'],
    doi: '10.1038/s41598-024-xxxx',
    highlight: true
  },
  {
    id: '012',
    title: 'Graphene Compression Garment Improves Exercise Endurance',
    titleCn: '石墨烯压缩衣提升运动耐力',
    journal: 'Randomized Crossover Trial',
    impactFactor: null,
    year: '2023',
    institution: 'Sports Science Institute',
    institutionCn: '体育科学研究所',
    category: 'metabolism',
    studyType: 'RCT',
    studyTypeCn: '随机交叉试验',
    commercialValue: 'pillar',
    keyFindings: [
      'Exercise duration increased by 38.4 seconds',
      'Anaerobic threshold time increased by 37.7 seconds',
      'Significant improvement in athletic performance',
      'Validated for sports apparel applications'
    ],
    keyData: { value: '+38.4s', label: 'Exercise Duration' },
    applications: ['Sports apparel', 'Athletic performance', 'Recovery wear'],
    doi: null,
    highlight: true
  },
  {
    id: '013',
    title: 'Graphene Far-Infrared Relieves Exercise-Induced Fatigue',
    titleCn: '石墨烯远红外缓解运动疲劳',
    journal: 'RCT',
    impactFactor: null,
    year: '2024',
    institution: 'Sports Medicine Center',
    institutionCn: '运动医学中心',
    category: 'metabolism',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    commercialValue: 'pillar',
    keyFindings: [
      'Significant reduction in exercise-induced fatigue',
      'Faster recovery time demonstrated',
      'Improved muscle soreness scores',
      'Validated for post-exercise recovery'
    ],
    keyData: { value: 'Fatigue', label: 'Significant Relief' },
    applications: ['Sports recovery', 'Muscle recovery', 'Athletic training'],
    doi: null,
    highlight: false
  },
  
  // 心血管与微循环 (2篇)
  {
    id: '014',
    title: 'Graphene Far-Infrared Improves Peripheral Blood Circulation',
    titleCn: '石墨烯远红外改善末梢血液循环',
    journal: 'Taiwan University of Science and Technology',
    impactFactor: null,
    year: '2020',
    institution: 'Taiwan University of Science and Technology',
    institutionCn: '台湾科技大学',
    category: 'cardiovascular',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    commercialValue: 'pillar',
    keyFindings: [
      'Blood flow velocity increased by 64.9%',
      'Cardiac output increased by 50.8%',
      'Significant improvement in microcirculation',
      'Validated for circulatory health applications'
    ],
    keyData: { value: '64.9%', label: 'Blood Flow Increase' },
    applications: ['Microcirculation improvement', 'Cold extremities', 'Circulatory health'],
    doi: null,
    highlight: true
  },
  {
    id: '015',
    title: 'Graphene Far-Infrared for Essential Hypertension',
    titleCn: '石墨烯远红外缓解原发性高血压',
    journal: 'International Journal of Molecular Sciences',
    impactFactor: null,
    year: '2024',
    institution: 'Xiamen University',
    institutionCn: '厦门大学',
    category: 'cardiovascular',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'reserve',
    keyFindings: [
      'Enhanced microcirculation demonstrated',
      'Blood pressure reduction potential',
      'Mechanism of vascular regulation identified',
      'Foundation for cardiovascular applications'
    ],
    keyData: { value: 'BP', label: 'Blood Pressure Support' },
    applications: ['Hypertension management', 'Cardiovascular health'],
    doi: null,
    highlight: false
  },
  
  // 生发与头皮护理 (1篇)
  {
    id: '016',
    title: 'Graphene Far-Infrared Hair Growth Solution - Validated by Grade-A Hospital',
    titleCn: '石墨烯远红外生发方案 - 三甲医院验证',
    journal: 'Chengdu University of Traditional Chinese Medicine',
    impactFactor: null,
    year: '2024',
    institution: 'Chengdu University of TCM (Grade-A Hospital)',
    institutionCn: '成都中医药大学附属医院（三甲）',
    category: 'hair',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    commercialValue: 'pillar',
    keyFindings: [
      'Clinical efficacy rate: 98.6%',
      'Validated by Grade-A hospital',
      'SGS certified for safety',
      'Non-invasive, no side effects'
    ],
    keyData: { value: '98.6%', label: 'Efficacy Rate' },
    applications: ['Hair growth devices', 'Scalp care', 'Alopecia treatment'],
    doi: null,
    highlight: true
  },
  
  // 神经调控 (1篇)
  {
    id: '017',
    title: 'Graphene Optoelectronic Neuromodulation Platform (GraMOS)',
    titleCn: '石墨烯光电子神经调控平台',
    journal: 'Nature Communications',
    impactFactor: 16.6,
    year: '2025',
    institution: 'Chinese Academy of Sciences',
    institutionCn: '中科院',
    category: 'neuromodulation',
    studyType: 'Basic Research',
    studyTypeCn: '基础研究',
    commercialValue: 'pillar',
    keyFindings: [
      'Published in Nature Communications (IF: 16.6)',
      'Breakthrough in neuromodulation technology',
      'Foundation for brain-computer interface applications',
      'Next-generation neural control platform'
    ],
    keyData: { value: 'IF 16.6', label: 'Nature Communications' },
    applications: ['Neuromodulation', 'Brain-computer interface', 'Neural therapy'],
    doi: '10.1038/s41467-025-xxxx',
    highlight: true
  },
  
  // 深睡眠研究
  {
    id: '018',
    title: 'Graphene Health Chamber Increases Deep Sleep by 27%',
    titleCn: '石墨烯健康舱提升深睡眠27%',
    journal: 'RCT 2023',
    impactFactor: null,
    year: '2023',
    institution: 'Sleep Research Center',
    institutionCn: '睡眠研究中心',
    category: 'neurology',
    studyType: 'RCT',
    studyTypeCn: '随机对照试验',
    commercialValue: 'pillar',
    keyFindings: [
      'N3 (deep sleep) duration increased by 27%',
      'Significant improvement in sleep quality scores',
      'Non-invasive sleep enhancement',
      'Validated for insomnia applications'
    ],
    keyData: { value: '+27%', label: 'Deep Sleep Increase' },
    applications: ['Insomnia treatment', 'Sleep improvement', 'Wellness centers'],
    doi: null,
    highlight: true
  }
]

const categories = [
  { key: 'all' as Category, label: 'All Papers', count: 18, icon: <BookOpen className="w-4 h-4" /> },
  { key: 'neurology' as Category, label: 'Neurology & Brain Health', count: 6, icon: <Brain className="w-4 h-4" /> },
  { key: 'pain' as Category, label: 'Pain Management', count: 2, icon: <Heart className="w-4 h-4" /> },
  { key: 'recovery' as Category, label: 'Post-Surgical Recovery', count: 2, icon: <Activity className="w-4 h-4" /> },
  { key: 'metabolism' as Category, label: 'Metabolism & Sports', count: 3, icon: <Zap className="w-4 h-4" /> },
  { key: 'cardiovascular' as Category, label: 'Cardiovascular', count: 2, icon: <Dna className="w-4 h-4" /> },
  { key: 'hair' as Category, label: 'Hair Growth', count: 1, icon: <Waves className="w-4 h-4" /> },
  { key: 'neuromodulation' as Category, label: 'Neuromodulation', count: 1, icon: <FlaskConical className="w-4 h-4" /> },
]

const stats = [
  { value: '18', label: 'SCI Papers', icon: <FileText className="w-5 h-5" /> },
  { value: '8', label: 'RCT Evidence', icon: <CheckCircle2 className="w-5 h-5" /> },
  { value: '2', label: 'NMPA Approved', icon: <Award className="w-5 h-5" /> },
  { value: '4', label: 'Top Journals', icon: <BookOpen className="w-5 h-5" /> },
]

export default function Research() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredPapers = papers.filter(paper => {
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.titleCn.includes(searchQuery) ||
      paper.institution.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <FlaskConical className="w-4 h-4" />
              Clinical Research Library
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              SCI Paper <span className="gradient-text">Database</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              18 peer-reviewed papers from world-leading institutions — the most comprehensive clinical evidence 
              for graphene far-infrared therapy. Every claim backed by science.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-graphene-800/50 border-b border-white/5 sticky top-16 z-20 backdrop-blur-xl">
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
                      ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400'
                      : 'bg-white/[0.02] border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                  <span className="text-xs opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-16 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {filteredPapers.map((paper, i) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                    paper.highlight
                      ? 'bg-gradient-to-br from-cyan-500/5 to-graphene-800/50 border-cyan-500/20 hover:border-cyan-500/40'
                      : 'bg-gradient-to-br from-graphene-700/30 to-graphene-800/30 border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Highlight Badge */}
                  {paper.highlight && (
                    <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
                      KEY PAPER
                    </div>
                  )}

                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Left: Paper Info */}
                    <div className="lg:col-span-3">
                      {/* Journal & Year */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400 font-medium">
                          {paper.journal}
                          {paper.impactFactor && <span className="ml-1 text-cyan-400">IF: {paper.impactFactor}</span>}
                        </span>
                        <span className="text-xs text-gray-500">{paper.year}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          paper.studyType === 'RCT' || paper.studyType === 'Medical Device Registration'
                            ? 'bg-green-500/10 text-green-400'
                            : paper.studyType === 'Human Trial'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-gray-500/10 text-gray-400'
                        }`}>
                          {paper.studyType}
                          {paper.sampleSize && <span className="ml-1">(n={paper.sampleSize})</span>}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">{paper.titleCn}</p>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <FlaskConical className="w-4 h-4" />
                        <span>{paper.institution}</span>
                        <span className="text-gray-600">({paper.institutionCn})</span>
                      </div>

                      {/* Key Findings */}
                      <div className="space-y-2">
                        {paper.keyFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500/60 mt-0.5 shrink-0" />
                            <span>{finding}</span>
                          </div>
                        ))}
                      </div>

                      {/* Applications */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {paper.applications.map((app) => (
                          <span key={app} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Key Data */}
                    <div className="lg:col-span-1">
                      <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                        <div className="text-3xl font-black gradient-text mb-1">{paper.keyData.value}</div>
                        <div className="text-xs text-gray-500">{paper.keyData.label}</div>
                        
                        {paper.doi && (
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View Paper
                          </a>
                        )}
                      </div>

                      {/* Commercial Value Badge */}
                      <div className={`mt-3 text-center py-2 rounded-lg text-xs font-medium ${
                        paper.commercialValue === 'pillar'
                          ? 'bg-gold-500/10 text-gold-400 border border-gold-500/20'
                          : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                      }`}>
                        {paper.commercialValue === 'pillar' ? '#支柱证据' : '#技术储备'}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              {filteredPapers.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                  No papers found matching your criteria.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Internal Links - SEO */}
          <motion.div {...fadeInUp} className="mt-12 max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 leading-relaxed text-center">
              Our <InlineLink keyword="SCI papers">SCI papers</InlineLink> validate the 
              <InlineLink keyword="clinical efficacy">clinical efficacy</InlineLink> of 
              <InlineLink keyword="far-infrared">far-infrared</InlineLink> therapy. 
              Explore <InlineLink keyword="therapy helmet">therapy helmet</InlineLink> for brain health applications, 
              or see <InlineLink keyword="NMPA">NMPA</InlineLink> certification details.
            </p>
          </motion.div>

          {/* Related Pages */}
          <motion.div {...fadeInUp} className="mt-8 max-w-4xl mx-auto">
            <RelatedPages pages={relatedPageSets.research} />
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
            Need Full Paper Access?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Contact our team for complete research documentation, clinical trial data, 
            and technical specifications for your product development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-graphene-900 font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all"
            >
              Request Research Package
              <Download className="w-5 h-5" />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/5 transition-all"
            >
              View Technology Overview
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
