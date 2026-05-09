// SEO配置 - 所有页面的meta标签
export const siteConfig = {
  name: 'XGraphene',
  url: 'https://xgraphene.tech',
  description: 'Leading manufacturer of graphene far-infrared heating technology. NMPA certified medical devices with 78.3% clinical efficacy. B2B solutions for healthcare, beauty, and wellness industries.',
  keywords: [
    'graphene heating',
    'far-infrared therapy',
    'medical device',
    'NMPA certified',
    'clinical efficacy',
    'pain relief',
    'hair growth',
    'brain health',
    'therapy helmet',
    'graphene film',
    'flexible heating',
    'B2B manufacturer',
    'OEM ODM',
  ],
  author: 'XGraphene Technology',
  email: 'contact@xgraphene.tech',
  
  // 社交媒体
  social: {
    twitter: '@xgraphene',
    linkedin: 'xgraphene-technology',
  },
  
  // 默认OG图片
  ogImage: '/og-image.png',
}

// 页面SEO配置
export const pageSEO = {
  home: {
    title: 'XGraphene | Graphene Far-Infrared Heating Technology',
    description: 'Leading manufacturer of graphene far-infrared heating technology. NMPA certified medical devices with 78.3% clinical efficacy for pain relief, brain health, and hair growth.',
    keywords: 'graphene heating, far-infrared therapy, medical device, NMPA certified, clinical efficacy',
  },
  
  technology: {
    title: 'Technology | Graphene FIR Heating Principle',
    description: 'How graphene far-infrared heating works. 6-14μm "Life Wave" spectrum, 94% electrothermal efficiency, NTC self-regulation. Compare with carbon fiber and metal wire.',
    keywords: 'graphene technology, far-infrared, 6-14μm, electrothermal efficiency, heating principle',
  },
  
  products: {
    title: 'Products | Medical & Wellness Devices',
    description: 'NMPA certified graphene therapy devices. Therapy helmet for brain health, hair growth device with 98.6% efficacy. OEM/ODM solutions for B2B partners.',
    keywords: 'therapy helmet, hair growth device, graphene products, medical device, OEM ODM',
  },
  
  research: {
    title: 'Research | 18 SCI Papers Database',
    description: 'Peer-reviewed clinical evidence for graphene far-infrared therapy. RCT data from Peking University Third Hospital, Zhejiang University, and more.',
    keywords: 'SCI papers, clinical research, RCT, peer-reviewed, graphene therapy evidence',
  },
  
  certification: {
    title: 'Certification | NMPA & Industry Standards',
    description: 'Class II medical device certification. First-drafting enterprise for national graphene heating film standard. ISO 13485, CE marking.',
    keywords: 'NMPA certification, Class II medical device, industry standard, ISO 13485, CE',
  },
  
  applications: {
    title: 'Applications | Medical, Beauty, Wellness, Sports',
    description: 'Graphene FIR applications: medical rehabilitation, beauty & skincare, daily wellness, sports recovery. Proven efficacy with clinical data.',
    keywords: 'medical rehabilitation, beauty therapy, wellness device, sports recovery, applications',
  },
  
  about: {
    title: 'About | Company & Team',
    description: 'XGraphene incubated by Tan Kah Kee Innovation Laboratory. Led by Academician Nanfeng Zheng. 560,000 units sold with Anta partnership.',
    keywords: 'about xgraphene, team, milestones, Anta partnership, Tan Kah Kee Laboratory',
  },
  
  faq: {
    title: 'FAQ | Evidence-Based Answers',
    description: 'Frequently asked questions about graphene far-infrared therapy. Evidence-based answers backed by clinical research.',
    keywords: 'FAQ, graphene therapy questions, evidence-based, clinical answers',
  },
  
  contact: {
    title: 'Contact | B2B Partnership Inquiry',
    description: 'Contact XGraphene for OEM/ODM partnership, product inquiry, or technical consultation. Response within 24 hours.',
    keywords: 'contact, B2B partnership, OEM ODM inquiry, technical consultation',
  },
  
  therapyHelmet: {
    title: 'Therapy Helmet | Brain Health & Neurological Therapy',
    description: 'Graphene FIR therapy helmet for brain health. Alpha wave enhancement 2.3x, anxiety relief in 5 days. NMPA certified Class II medical device.',
    keywords: 'therapy helmet, brain health, alpha wave, anxiety relief, neurological therapy',
  },
  
  hairGrowth: {
    title: 'Hair Growth Device | 98.6% Clinical Efficacy',
    description: 'Graphene far-infrared hair growth device. 2.8x hair density increase, validated by Chengdu University of TCM. OEM/ODM available.',
    keywords: 'hair growth device, graphene hair therapy, 98.6% efficacy, scalp care',
  },
  
  caseStudyAnta: {
    title: 'Case Study | Anta Partnership - 560,000 Units',
    description: 'How XGraphene partnered with Anta Sports to integrate graphene heating into "Hurricane Warm Tech" apparel. 560,000 units sold.',
    keywords: 'Anta partnership, case study, graphene apparel, 560000 units, success story',
  },
}

// 生成完整meta标签的辅助函数
export function generateMeta(pageKey: keyof typeof pageSEO) {
  const seo = pageSEO[pageKey]
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  }
}
