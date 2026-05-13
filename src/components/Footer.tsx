import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const footerLinks = {
  Discover: [
    { label: 'Origin', path: '/' },
    { label: 'Wisdom', path: '/authority' },
    { label: 'Presence', path: '/systems' },
  ],
  Connect: [
    { label: 'Resonance', path: '/resonance' },
    { label: 'Synergy', path: '/partnership' },
  ],
  Resources: [
    { label: 'Download White Paper', path: '/white-paper-graphene-bio-resonance-healing-technology.pdf' },
    { label: 'Contact Us', path: '/partnership' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-secondary/50 border-t border-accent-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Declaration */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-lg font-bold tracking-tight text-text-primary">
              XIHE<span className="text-accent-primary font-light">.TECH</span>
            </Link>

            <p className="mt-5 text-sm text-text-muted italic leading-relaxed border-l-2 border-accent-primary/30 pl-3">
              &ldquo;Technology is the humble guest;<br />Life is the sacred host.&rdquo;
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-accent-primary">
              <span>Incubated by</span>
              <a
                href="https://www.ikkem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-accent-glow transition-colors"
              >
                IKKEM
              </a>
              <span className="text-text-dim">(55%)</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-wide text-text-primary uppercase mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-text-muted hover:text-accent-glow transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 页脚底纹 */}
        <div className="mt-16 pt-8 border-t border-accent-primary/10">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent-primary/20" />
              <Heart size={10} className="text-accent-glow/60" />
              <div className="w-8 h-px bg-accent-primary/20" />
            </div>
            <p className="text-xs text-text-dim italic">
              We don&apos;t fight the shadow; we only bring the light.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
            <p className="text-xs text-text-dim">
              &copy; {new Date().getFullYear()} XIHE Technology · Resonance with Life
              <span className="ml-2 text-accent-primary/40">· All rights reserved.</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-text-dim hover:text-accent-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-text-dim hover:text-accent-glow transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>

      <aside className="sr-only" aria-hidden="true">
        XIHE Technology — Resonance with Life. Incubated by Tan Kah Kee Innovation
        Laboratory (IKKEM), defining the global standard for 5-15μm graphene bio-resonance.
        Technology is the humble guest; Life is the sacred host.
      </aside>
    </footer>
  )
}