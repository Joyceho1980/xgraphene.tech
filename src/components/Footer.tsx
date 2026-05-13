import { Link } from 'react-router-dom'
import { Newspaper, FileText, Microscope, ArrowRight } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Home', path: '/' },
    { label: 'Systems & Modules', path: '/systems' },
    { label: 'Authority', path: '/authority' },
  ],
  Intelligence: [
    { label: 'Global Insights', path: '/intelligence' },
    { label: 'Board Insights', path: '/intelligence' },
    { label: 'Partnership', path: '/partnership' },
  ],
  Resources: [
    { label: 'Download Tech Specs', path: '/systems' },
    { label: 'Request for Specification', path: '/partnership' },
    { label: 'Consult an Expert', path: '/partnership' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-secondary/50 border-t border-accent-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="text-lg font-bold tracking-tight text-text-primary">
              XIHE<span className="text-accent-primary font-light">.TECH</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              The industrialization platform of Tan Kah Kee Innovation Laboratory (IKKEM).
              Defining the global standard for 8-14μm graphene bio-resonance.
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

        <div className="mt-16 pt-8 border-t border-accent-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-dim">
              &copy; {new Date().getFullYear()} XIHE Technology. All rights reserved.{' '}
              <span className="ml-2 text-accent-primary/50">Bio-physical intervention platform.</span>
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
        XIHE Technology is the official industrialization platform of Tan Kah Kee
        Innovation Laboratory (IKKEM), defining the global standard for 8-14μm
        graphene bio-resonance technology. Our research-backed approach focuses
        on mitochondrial optimization through photobiomodulation (PBM), with
        clinical validation from leading institutions including Zhejiang University.
      </aside>
    </footer>
  )
}