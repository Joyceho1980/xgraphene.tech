import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Tag, ArrowRight, FlaskConical, Scale,
  Building2, Award, Megaphone, Handshake, Filter
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

// 新闻分类
type NewsCategory = 'all' | 'research' | 'standard' | 'clinical' | 'product' | 'partnership'

// 新闻数据（后续可改为从CMS或Markdown文件读取）
const newsItems = [
  {
    id: 'industry-standard-2026',
    slug: 'industry-standard-setting-2026',
    title: 'XGraphene Leads National Graphene Heating Film Standard Drafting',
    excerpt: 'As the first-drafting enterprise, XGraphene participated in the national standard setting meeting for graphene flexible electrothermal film in Beijing.',
    content: `As the industry leader, XGraphene was invited to participate in the national standard drafting meeting for "Graphene Flexible Electrothermal Film" organized by the Ministry of Industry and Information Technology.

The meeting was held in Beijing with representatives from major graphene companies, research institutions, and testing centers. XGraphene's technical team presented key proposals on:

- Safety standards for flexible heating films
- Performance testing methods
- Quality control requirements
- Industry terminology standardization

"This is a significant milestone for our company and the entire graphene heating industry," said the technical director. "Standardization will accelerate market adoption and ensure product quality across the sector."`,
    category: 'standard' as NewsCategory,
    date: '2026-05-09',
    image: '/news/standard-meeting.jpg',
    featured: true,
    tags: ['Industry Standard', 'MIIT', 'Beijing'],
  },
  {
    id: 'depression-trial-2026',
    slug: 'depression-therapy-clinical-trial-2026',
    title: 'Clinical Trial Launched: Graphene FIR Therapy for Depression',
    excerpt: 'XGraphene partners with leading psychiatric hospital to study far-infrared therapy efficacy for mild-to-moderate depression treatment.',
    content: `A new clinical trial has been launched to evaluate the efficacy of graphene far-infrared therapy for depression treatment.

The study is conducted in partnership with a Grade-A psychiatric hospital, following a randomized controlled trial (RCT) design. Key parameters:

- **Participants**: 120 patients with mild-to-moderate depression
- **Duration**: 8-week treatment period
- **Primary endpoint**: HAMD-17 score reduction
- **Secondary endpoints**: Sleep quality, anxiety levels, quality of life

Previous pilot studies have shown promising results with far-infrared therapy for neurological conditions. This trial aims to provide Level-A clinical evidence for depression treatment.`,
    category: 'clinical' as NewsCategory,
    date: '2026-05-01',
    image: '/news/clinical-trial.jpg',
    featured: false,
    tags: ['Clinical Trial', 'Depression', 'Psychiatry'],
  },
  {
    id: 'zheng-research-2026',
    slug: 'academician-zheng-new-research-2026',
    title: 'Academician Zheng Nanfeng Publishes Latest Graphene Research',
    excerpt: 'Chief Scientific Advisor Zheng Nanfeng publishes breakthrough research on graphene conductive ink optimization in Nature Materials.',
    content: `Academician Zheng Nanfeng, XGraphene's Chief Scientific Advisor and world-renowned chemist, has published new findings on graphene conductive ink optimization.

The research, published in Nature Materials, demonstrates a novel approach to enhance electrical conductivity while maintaining flexibility - a key challenge in flexible electronics applications.

Key findings:
- 40% improvement in conductivity
- Enhanced adhesion to flexible substrates
- Scalable manufacturing process
- Cost reduction potential

This research directly benefits XGraphene's product development, enabling next-generation heating films with superior performance.`,
    category: 'research' as NewsCategory,
    date: '2026-04-15',
    image: '/news/zheng-research.jpg',
    featured: false,
    tags: ['Research', 'Nature Materials', 'Zheng Nanfeng'],
  },
  {
    id: 'anta-milestone-2026',
    slug: 'anta-partnership-560k-units-2026',
    title: 'Anta Partnership Reaches 560,000 Units Milestone',
    excerpt: 'The graphene heating apparel collaboration with Anta Sports surpasses half-million units sold, validating consumer market acceptance.',
    content: `XGraphene's partnership with Anta Sports has reached a significant milestone - over 560,000 units of graphene heating apparel sold.

The "Hurricane Warm Tech" product line, featuring XGraphene's flexible heating film technology, has been a commercial success since its launch in 2019.

Key achievements:
- 560,000+ units sold
- 30%+ price premium vs traditional heating apparel
- Positive consumer reviews on heating performance
- Expanded to multiple product categories

This partnership demonstrates the commercial viability of graphene heating technology in consumer markets.`,
    category: 'partnership' as NewsCategory,
    date: '2026-03-20',
    image: '/news/anta-milestone.jpg',
    featured: false,
    tags: ['Anta', 'Partnership', 'Consumer Products'],
  },
  {
    id: 'therapy-helmet-launch-2026',
    slug: 'therapy-helmet-product-launch-2026',
    title: 'NMPA Approved Therapy Helmet Officially Launched',
    excerpt: 'XGraphene announces official launch of Class II medical device therapy helmet for brain health and neurological therapy.',
    content: `XGraphene is proud to announce the official launch of our NMPA-approved therapy helmet.

The device has received Class II medical device certification and is now available for hospital and clinical use.

Key features:
- 6-14μm far-infrared emission
- Alpha wave enhancement (2.3x increase)
- 5-day anxiety relief efficacy
- Simple one-button operation
- Safe low-voltage DC power

Clinical validation includes:
- Zhejiang University brainwave study
- CAS Institute of Psychology anxiety trial
- Multiple hospital pilot programs`,
    category: 'product' as NewsCategory,
    date: '2026-02-28',
    image: '/news/helmet-launch.jpg',
    featured: false,
    tags: ['Product Launch', 'Therapy Helmet', 'NMPA'],
  },
]

// 分类配置
const categories = [
  { id: 'all', label: 'All News', icon: <Megaphone className="w-4 h-4" /> },
  { id: 'research', label: 'Research', icon: <FlaskConical className="w-4 h-4" /> },
  { id: 'standard', label: 'Standards', icon: <Scale className="w-4 h-4" /> },
  { id: 'clinical', label: 'Clinical', icon: <Building2 className="w-4 h-4" /> },
  { id: 'product', label: 'Products', icon: <Award className="w-4 h-4" /> },
  { id: 'partnership', label: 'Partnerships', icon: <Handshake className="w-4 h-4" /> },
]

// 格式化日期
function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all')
  
  // 过滤新闻
  const filteredNews = newsItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  )
  
  // 置顶新闻
  const featuredNews = newsItems.find(item => item.featured)
  // 普通新闻列表
  const regularNews = filteredNews.filter(item => !item.featured)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Megaphone className="w-4 h-4" />
              Latest Updates
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              News & <span className="gradient-text">Updates</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              Stay updated with our latest research breakthroughs, clinical trials, 
              industry standards, and partnership announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 置顶新闻 */}
      {featuredNews && (
        <section className="py-12 bg-graphene-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <Link 
                to={`/news/${featuredNews.slug}`}
                className="block group"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-gradient-to-br from-graphene-700 to-graphene-800 border border-gold-500/20 hover:border-gold-500/40 transition-all">
                  {/* 图片占位 */}
                  <div className="aspect-video rounded-xl bg-graphene-600 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <img 
                        src={featuredNews.image} 
                        alt={featuredNews.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <span className="absolute">Featured Image</span>
                    </div>
                  </div>
                  
                  {/* 内容 */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-medium">
                        Featured
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredNews.date)}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                      {featuredNews.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-gold-400 font-medium">
                      Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* 新闻列表 */}
      <section className="py-16 bg-graphene-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 分类筛选 */}
          <motion.div {...fadeInUp} className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as NewsCategory)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-graphene-900'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* 新闻网格 */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {regularNews.map((item) => (
                <motion.div
                  key={item.id}
                  {...fadeInUp}
                  className="group"
                >
                  <Link 
                    to={`/news/${item.slug}`}
                    className="block h-full"
                  >
                    <article className="h-full p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                      {/* 图片 */}
                      <div className="aspect-video rounded-lg bg-graphene-700 mb-4 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                          Image
                        </div>
                      </div>
                      
                      {/* 标签和日期 */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-xs text-gray-400">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(item.date)}
                        </span>
                      </div>
                      
                      {/* 标题 */}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      {/* 摘要 */}
                      <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                        {item.excerpt}
                      </p>
                      
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs text-gray-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 空状态 */}
          {regularNews.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No news found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Internal Links - SEO */}
      <section className="py-12 bg-graphene-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm text-gray-400 leading-relaxed">
              Stay updated with our latest <InlineLink keyword="clinical efficacy">clinical efficacy</InlineLink> research and 
              <InlineLink keyword="SCI papers">SCI papers</InlineLink>. Learn about our 
              <InlineLink keyword="NMPA">NMPA approved</InlineLink> products and 
              <InlineLink keyword="industry standard">industry standard</InlineLink> initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 订阅 CTA */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Subscribe to receive the latest news on graphene technology, clinical research, 
              and industry developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
