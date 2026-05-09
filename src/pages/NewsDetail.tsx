import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, Tag, ArrowLeft, Share2, Copy
} from 'lucide-react'
import { InlineLink, RelatedPages, relatedPageSets } from '../components/InternalLinks'

// 新闻数据（从News页面导出）
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
    category: 'standard',
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
    category: 'clinical',
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
    category: 'research',
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
    category: 'partnership',
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
    category: 'product',
    date: '2026-02-28',
    image: '/news/helmet-launch.jpg',
    featured: false,
    tags: ['Product Launch', 'Therapy Helmet', 'NMPA'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const news = newsItems.find(item => item.slug === slug)
  
  if (!news) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">News Not Found</h1>
          <Link to="/news" className="text-gold-400 hover:text-gold-300">
            ← Back to News
          </Link>
        </div>
      </div>
    )
  }

  // 相关新闻（同类别）
  const relatedNews = newsItems
    .filter(item => item.id !== news.id && item.category === news.category)
    .slice(0, 3)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-graphene-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            {/* 返回链接 */}
            <Link 
              to="/news"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            {/* 标签和日期 */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium">
                {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                {formatDate(news.date)}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {news.title}
            </h1>

            {/* 摘要 */}
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {news.excerpt}
            </p>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 特色图片 */}
      <section className="py-8 bg-graphene-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <div className="aspect-video rounded-2xl bg-graphene-700 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                Featured Image: {news.image}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 正文 */}
      <section className="py-12 bg-graphene-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <article className="prose prose-invert prose-lg max-w-none">
              {news.content.split('\n\n').map((paragraph, index) => {
                // 处理标题
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  )
                }
                // 处理列表
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc list-inside text-gray-300 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  )
                }
                // 普通段落
                return (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                )
              })}
            </article>
          </motion.div>

          {/* 分享 */}
          <motion.div {...fadeInUp} className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Share:</span>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm">
                  Twitter
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm">
                  LinkedIn
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 相关新闻 */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-graphene-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-8">Related News</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <Link 
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                  >
                    <div className="text-xs text-gray-500 mb-2">{formatDate(item.date)}</div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-gold-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-12 bg-graphene-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm text-gray-400 leading-relaxed">
              Learn more about our <InlineLink keyword="clinical efficacy">clinical efficacy</InlineLink> research and 
              <InlineLink keyword="SCI papers">SCI papers</InlineLink>. Explore our 
              <InlineLink keyword="NMPA">NMPA approved</InlineLink> products.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
