import { Link } from 'react-router-dom'

// 内链配置 - 关键词到页面的映射
export const internalLinks = {
  // 核心概念
  'far-infrared': { to: '/technology', text: 'far-infrared' },
  'FIR': { to: '/technology', text: 'FIR' },
  'graphene heating': { to: '/technology', text: 'graphene heating' },
  'Life Wave': { to: '/technology', text: 'Life Wave' },
  '6-14μm': { to: '/technology', text: '6-14μm' },
  
  // 临床证据
  'clinical efficacy': { to: '/research', text: 'clinical efficacy' },
  'SCI papers': { to: '/research', text: 'SCI papers' },
  'RCT': { to: '/research', text: 'RCT' },
  'clinical validation': { to: '/certification', text: 'clinical validation' },
  'peer-reviewed': { to: '/research', text: 'peer-reviewed' },
  
  // 产品
  'therapy helmet': { to: '/products/therapy-helmet', text: 'therapy helmet' },
  'brain health': { to: '/products/therapy-helmet', text: 'brain health' },
  'Alpha wave': { to: '/products/therapy-helmet', text: 'Alpha wave' },
  'Alpha waves': { to: '/products/therapy-helmet', text: 'Alpha waves' },
  'hair growth': { to: '/products/hair-growth', text: 'hair growth' },
  'hair growth device': { to: '/products/hair-growth', text: 'hair growth device' },
  'pain relief': { to: '/products', text: 'pain relief' },
  
  // 认证
  'NMPA': { to: '/certification', text: 'NMPA' },
  'NMPA approved': { to: '/certification', text: 'NMPA approved' },
  'Class II': { to: '/certification', text: 'Class II' },
  'medical device': { to: '/certification', text: 'medical device' },
  'industry standard': { to: '/certification', text: 'industry standard' },
  'Grade-A hospital': { to: '/certification', text: 'Grade-A hospital' },
  
  // 案例
  'Anta': { to: '/case-studies/anta', text: 'Anta' },
  '560,000': { to: '/case-studies/anta', text: '560,000' },
  'Laisikedun': { to: '/products/hair-growth', text: 'Laisikedun' },
  
  // FAQ
  'FAQ': { to: '/faq', text: 'FAQ' },
  'evidence-based': { to: '/research', text: 'evidence-based' },
}

// 内联链接组件 - 用于在文本中插入链接
interface InlineLinkProps {
  keyword: keyof typeof internalLinks
  children?: React.ReactNode
  className?: string
}

export function InlineLink({ keyword, children, className = '' }: InlineLinkProps) {
  const link = internalLinks[keyword]
  if (!link) return <>{children}</>
  
  return (
    <Link 
      to={link.to} 
      className={`text-gold-400 hover:text-gold-300 underline decoration-gold-400/30 hover:decoration-gold-300 transition-colors ${className}`}
    >
      {children || link.text}
    </Link>
  )
}

// 预定义的内链段落组件
export function LinkedParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-400 leading-relaxed">{children}</p>
}

// 相关页面推荐组件 - 用于页面底部
interface RelatedPagesProps {
  pages: Array<{
    to: string
    title: string
    description: string
  }>
}

export function RelatedPages({ pages }: RelatedPagesProps) {
  return (
    <div className="mt-8 pt-6 border-t border-white/5">
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
        Related Pages
      </h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pages.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            className="group p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-gold-500/20 transition-all"
          >
            <div className="text-sm font-medium text-white group-hover:text-gold-400 transition-colors mb-1">
              {page.title}
            </div>
            <div className="text-xs text-gray-500">{page.description}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// 常用的相关页面组合
export const relatedPageSets = {
  technology: [
    { to: '/research', title: 'Research Database', description: '18 SCI papers' },
    { to: '/products', title: 'Products', description: 'Therapy devices' },
    { to: '/certification', title: 'Certifications', description: 'NMPA approved' },
  ],
  research: [
    { to: '/products/therapy-helmet', title: 'Therapy Helmet', description: 'Brain health' },
    { to: '/products/hair-growth', title: 'Hair Growth', description: '98.6% efficacy' },
    { to: '/faq', title: 'FAQ', description: 'Evidence-based answers' },
  ],
  products: [
    { to: '/research', title: 'Clinical Evidence', description: 'SCI papers' },
    { to: '/certification', title: 'Certifications', description: 'Medical grade' },
    { to: '/applications', title: 'Applications', description: 'Use cases' },
  ],
  applications: [
    { to: '/products', title: 'Products', description: 'Therapy devices' },
    { to: '/research', title: 'Clinical Evidence', description: 'SCI papers' },
    { to: '/certification', title: 'Certifications', description: 'NMPA approved' },
  ],
  certification: [
    { to: '/research', title: 'Research', description: 'Clinical validation' },
    { to: '/products', title: 'Products', description: 'Medical devices' },
    { to: '/case-studies/anta', title: 'Case Study', description: 'Anta partnership' },
  ],
  faq: [
    { to: '/research', title: 'Research', description: 'Full papers' },
    { to: '/products', title: 'Products', description: 'Therapy devices' },
    { to: '/technology', title: 'Technology', description: 'How it works' },
  ],
}
