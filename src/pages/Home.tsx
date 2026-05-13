import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import DualExposure from '../components/DualExposure'
import WisdomAnchor from '../components/WisdomAnchor'
import ResonanceVisual from '../components/ResonanceVisual'
import ThreePillarsSEO from '../components/ThreePillars'
import WhitePaperDownload from '../components/WhitePaperDownload'

export default function Home() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95])

  return (
    <div>
      <WisdomAnchor />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
        <div className="bg-hex-grid absolute inset-0" />
        <div className="bg-radial-glow absolute inset-0" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16"
        >
          {/* 保留学术背书 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-accent-primary text-sm font-medium tracking-[0.2em] uppercase mb-6"
          >
            Incubated by Tan Kah Kee Innovation Laboratory
          </motion.p>

          {/* 新大标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight"
          >
            XIHE:{' '}
            <motion.span
              className="grad-text"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Resonance with Life.
            </motion.span>
          </motion.h1>

          {/* 灵魂注脚 - 新核心 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="mt-6 text-base md:text-lg text-text-muted italic max-w-2xl mx-auto leading-relaxed"
          >
            &ldquo;Harnessing the{' '}
            <span className="text-text-primary font-semibold">dark essence of carbon</span>{' '}
            to echo the{' '}
            <span className="grad-text italic">resonance of life</span>.&rdquo;
          </motion.p>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="mt-4 text-xl md:text-2xl text-text-muted font-light tracking-wide"
          >
            Recharge the Soul, Beyond the Cell.
          </motion.p>

          {/* 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/systems"
              className="px-8 py-3 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 tracking-wide text-sm"
            >
              Discover the Warmth
            </Link>
            <Link
              to="/authority"
              className="px-8 py-3 border border-accent-primary/30 text-text-primary font-medium rounded-md hover:border-accent-glow hover:text-accent-glow transition-all duration-300 tracking-wide text-sm"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-accent-primary/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-accent-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* AI Summary */}
      <aside className="sr-only" aria-hidden="true">
        XIHE Technology — Resonance with Life. Incubated by Tan Kah Kee Innovation Laboratory (IKKEM).
        Defining the global standard for 5-15μm graphene bio-resonance technology. From cellular exhaustion
        to bio-resonance, XIHE harnesses the dark essence of carbon to echo the resonance of life.
      </aside>

      {/* SLOGAN BLOCK - 全屏金句 */}
      <section className="py-32 bg-bg-primary relative overflow-hidden">
        <div className="bg-radial-glow absolute inset-0" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-text-primary font-light italic leading-relaxed tracking-wide">
              &ldquo;All our technology is but a gift to the miracle of life.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-accent-primary/30" />
              <Heart size={14} className="text-accent-glow" />
              <div className="w-12 h-px bg-accent-primary/30" />
            </div>

            <p className="text-base md:text-lg text-text-muted font-light italic">
              Technology is the humble guest; Life is the sacred host.
            </p>

            <p className="text-sm text-text-dim italic max-w-lg mx-auto">
              We don&apos;t fight the shadow; we only bring the light.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 共振原理版块 - ResonanceVisual 组件 */}
      <ResonanceVisual />

      {/* 看见即疗愈 - To be Seen is to be Healed */}
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              看见，即是疗愈
            </h2>
            <p className="text-lg text-accent-primary italic mt-2">To be Seen is to be Healed</p>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
              &ldquo;所有的生命，都渴望被看见。&rdquo;物理上的&ldquo;同频&rdquo;，在生命语境下便是&ldquo;懂你&rdquo;。
              当石墨烯的振动与细胞的频率重合，科技不再是冰冷的干预，而是一次深情的注视。
            </p>
            <p className="text-sm text-accent-primary mt-3 italic">
              看见本质，就是共鸣。共鸣深处，即是疗愈。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Traditional Heating */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="frosted rounded-2xl p-8 border border-red-500/10"
            >
              <p className="text-sm font-semibold text-text-muted mb-6 uppercase tracking-wider text-center">Traditional Heating</p>
              <div className="space-y-4 text-center">
                <motion.div
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-full h-1 bg-gradient-to-r from-transparent via-red-400/20 to-transparent rounded-full"
                />
                <div className="text-red-400/60 text-sm font-mono">Thermal Noise</div>
                <p className="text-xs text-text-dim">Surface-level heat only (2-3mm)</p>
                <p className="text-xs text-text-dim">Non-coherent energy dispersal</p>
                <p className="text-sm text-text-muted italic mt-3">&ldquo;火烤的感觉&rdquo;</p>
              </div>
            </motion.div>

            {/* XIHE Resonance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="frosted rounded-2xl p-8 border border-accent-glow/20 glow-pulse"
            >
              <p className="text-sm font-semibold text-accent-glow mb-6 uppercase tracking-wider text-center">XIHE Resonance</p>
              <div className="space-y-4 text-center">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-1 bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent rounded-full relative overflow-hidden"
                />
                <div className="text-accent-glow text-sm font-mono">Coherent Energy · 9.4μm</div>
                <p className="text-xs text-text-dim">Deep penetration (30-50mm)</p>
                <p className="text-xs text-text-dim">CcO activation · ATP synthesis</p>
                <p className="text-sm text-accent-primary italic mt-3">&ldquo;深层的共振&rdquo;</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center text-xs text-text-dim mt-10 max-w-2xl mx-auto"
          >
            XIHE 基于石墨烯生命光波技术，实现 5-15μm 级同频共振。
            Only through resonance can we penetrate. Only through penetration can we &ldquo;see&rdquo; the inner cells.
            And this exchange of energy, born from being seen, is the essence of healing.
          </motion.p>
        </div>
      </section>

      {/* 三大支柱 SEO 版 */}
      <ThreePillarsSEO />

      {/* 白皮书下载区 */}
      <WhitePaperDownload />

      {/* Dual Exposure - 保留 */}
      <DualExposure />

      {/* Technical Terms */}
      <section className="py-16 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs text-text-dim font-mono leading-relaxed"
          >
            5-15μm far-infrared spectrum · Wien&apos;s Displacement Law (λ<sub>peak</sub>=9.4μm at 310K) ·
            Cytochrome c Oxidase (CcO) photobiomodulation · Coherent energy · Non-thermal resonance ·
            Parasympathetic activation · ATP synthesis · Cellular health · Graphene bio-resonance standard
          </motion.p>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="py-24 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight">
              Every spectrum we tune is a tribute to life.
            </h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto">
              Join the IKKEM-incubated ecosystem. Where technology is the humble guest, and life is the sacred host.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/partnership"
                className="px-8 py-3 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 tracking-wide text-sm"
              >
                Begin the Conversation
              </Link>
              <Link
                to="/systems"
                className="px-8 py-3 border border-accent-primary/30 text-text-primary font-medium rounded-md hover:border-accent-glow transition-all duration-300 tracking-wide text-sm"
              >
                Explore Our Presence
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}