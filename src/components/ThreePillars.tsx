import { motion } from 'framer-motion'
import { ShieldCheck, Droplets, Heart } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'The Graphene Standard',
    sub: 'We don\'t follow; we define.',
    desc: '单层石墨烯与嘉庚创新实验室 (IKKEM) 共同定义行业标准。远红外发射率领先行业；XIHE 就是行业标杆。',
    alt: 'Graphene far-infrared bio-resonance standard certification',
    kw: ['Graphene Standard', 'IKKEM Certified', 'Far-infrared Benchmark'],
  },
  {
    icon: Droplets,
    title: 'The 9.4μm Peak',
    sub: 'The exact frequency your body speaks.',
    desc: '基于 Wien Displacement Law (λ=9.4μm @ 310K) 精准触发 Cytochrome c Oxidase。不是表面温热，是细胞层面的能量对话。',
    alt: '9.4μm peak wavelength CcO activation photobiomodulation',
    kw: ['9.4μm Peak', 'CcO Activation', 'Photobiomodulation', 'ATP Synthesis'],
  },
  {
    icon: Heart,
    title: 'A Gift to the Miracle of Life',
    sub: 'Every spectrum we tune is a tribute.',
    desc: '我们所有的科技，不过是献给生命奇迹的一份礼物。郑南峰院士主持，浙江大学林世胜教授团队学术背书。',
    alt: 'XIHE graphene bio-resonance gift to life philosophy',
    kw: ['Life Philosophy', 'Zheng Nanfeng', 'ZJU Research Team', 'Bio-resonance'],
  },
]

export default function ThreePillarsSEO() {
  return (
    <section className="py-24 bg-bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">Three Pillars</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
            Where Technology Meets{' '}
            <span className="grad-text">the Miracle of Life</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="frosted rounded-xl p-8 hover:border-accent-glow/30 transition-all duration-500 group"
            >
              <pillar.icon size={28} className="text-accent-primary mb-5 group-hover:text-accent-glow transition-colors duration-500" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">{pillar.title}</h3>
              <p className="text-sm text-accent-primary mb-3 italic">{pillar.sub}</p>
              <p className="text-sm text-text-muted leading-relaxed">{pillar.desc}</p>

              <div className="mt-5 pt-4 border-t border-accent-primary/10">
                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-1">SEO Keywords</p>
                <div className="flex flex-wrap gap-1.5">
                  {pillar.kw.map((w) => (
                    <span key={w} className="text-[10px] text-text-dim bg-bg-primary px-1.5 py-0.5 rounded">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}