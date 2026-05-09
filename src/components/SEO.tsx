import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  type?: 'website' | 'article' | 'product'
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title ? `${title} | XGRAPHENE` : 'XGRAPHENE - Graphene Far-Infrared Therapy Technology'
    
    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = name
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    // Basic meta
    updateMeta('description', description)
    if (keywords) updateMeta('keywords', keywords)
    
    // Open Graph
    updateProperty('og:title', title)
    updateProperty('og:description', description)
    updateProperty('og:type', type)
    updateProperty('og:image', ogImage)
    if (canonicalUrl) updateProperty('og:url', canonicalUrl)
    
    // Twitter
    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', ogImage)

    // Canonical link
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonicalUrl
    }

    // Cleanup function (optional - for SPA navigation)
    return () => {
      // Meta tags persist across navigation in SPA
    }
  }, [title, description, keywords, canonicalUrl, ogImage, type])

  return null
}

// Predefined SEO configurations for each page
export const seoConfigs = {
  home: {
    title: 'Graphene Far-Infrared Therapy Technology',
    description: 'Medical-grade graphene heating technology with 18 SCI papers, NMPA approved. 78.3% clinical efficacy for pain relief, 98.6% for hair growth. OEM/ODM solutions for global brands.',
    keywords: 'graphene heating, far-infrared therapy, medical device, OEM heating solutions, graphene FIR, pain relief therapy',
  },
  technology: {
    title: 'Technology - Graphene Heating Science',
    description: 'Scientific comparison: Graphene vs Carbon Fiber vs FeCrAl Alloy. >99% electrothermal efficiency, 51.91% FIR radiation ratio. 8 clinical studies with peer-reviewed evidence.',
    keywords: 'graphene heating technology, FIR wavelength, electrothermal efficiency, graphene vs carbon fiber, heating comparison',
  },
  research: {
    title: 'Research - 18 SCI Papers Database',
    description: 'Complete clinical evidence library: 18 peer-reviewed papers from Zhejiang University, CAS, Peking University. Brain health, pain relief, wound healing, hair growth studies.',
    keywords: 'graphene research, SCI papers, clinical trials, far-infrared studies, peer-reviewed evidence',
  },
  products: {
    title: 'Products - Health Therapy & OEM Solutions',
    description: '11 therapy products including brain health helmet, hair growth device, sauna room. OEM/ODM services with Class II medical device certification.',
    keywords: 'graphene therapy products, heating devices, OEM heating, medical device manufacturing',
  },
  applications: {
    title: 'Applications - Use Cases & Success Stories',
    description: 'Health therapy, infrared sauna, wearable heating, industrial applications. Anta partnership: 560,000+ units sold with 30% price premium.',
    keywords: 'graphene applications, heating use cases, therapy applications, industrial heating',
  },
  certification: {
    title: 'Certification - NMPA Approved Medical Device',
    description: 'Class II medical device certification. NMPA approved April 2026. SGS safety certified. ISO 13485 quality management system.',
    keywords: 'NMPA certification, medical device approval, SGS certified, ISO 13485',
  },
  faq: {
    title: 'FAQ - Evidence-Based Answers',
    description: '20 clinical questions answered with peer-reviewed evidence. Brain health, pain relief, hair growth, safety. FAQPage schema for AI optimization.',
    keywords: 'graphene therapy FAQ, far-infrared questions, clinical evidence, therapy safety',
  },
  contact: {
    title: 'Contact - Request OEM Quote',
    description: 'Request custom graphene heating solutions. OEM/ODM inquiry, product samples, technical consultation. Response within 24 hours.',
    keywords: 'graphene OEM contact, heating solutions inquiry, custom manufacturing',
  },
  therapyHelmet: {
    title: 'Therapy Helmet - Brain Health Management',
    description: 'Graphene FIR therapy helmet: Alpha wave 2.3x increase, anxiety relief in 5 days. Clinically validated by Zhejiang University and CAS.',
    keywords: 'brain health device, therapy helmet, anxiety relief, alpha brainwave, graphene FIR',
  },
  hairGrowth: {
    title: 'Hair Growth Device - 98.6% Efficacy',
    description: 'Graphene FIR hair growth device: 98.6% clinical efficacy, Grade-A hospital validated. Non-invasive, drug-free. Co-developed with Laisikedun.',
    keywords: 'hair growth device, graphene therapy, alopecia treatment, hair restoration',
  },
  antaCase: {
    title: 'Anta Partnership - 560,000+ Units',
    description: 'Case study: Anta Sports integrated graphene heating into athletic apparel. 560,000+ units sold, 30% price premium, market-leading performance.',
    keywords: 'Anta partnership, graphene apparel, sports heating, case study',
  },
}
