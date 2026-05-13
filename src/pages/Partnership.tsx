import { motion } from 'framer-motion'
import { Building2, FlaskConical, Stethoscope, Users, ArrowRight, Mail, Globe } from 'lucide-react'
import WisdomAnchor from '../components/WisdomAnchor'

const targetClients = [
  {
    icon: Stethoscope,
    title: 'Hair Restoration Clinics',
    desc: 'Integrate XIHE precision spectrum modules into post-procedure recovery protocols. Enhance patient outcomes through non-thermal bio-physical intervention.',
  },
  {
    icon: Building2,
    title: 'Rehabilitation Centers',
    desc: 'Embed industrial-grade graphene heating panels into your existing equipment. Meet the growing demand for drug-free, non-invasive wellness enhancement.',
  },
  {
    icon: FlaskConical,
    title: 'Research Institutions',
    desc: 'Access XIHE\'s Ultimate Series for laboratory-grade photobiomodulation research. Co-author papers with our IKKEM-affiliated scientific team.',
  },
  {
    icon: Users,
    title: 'Distributors & Integrators',
    desc: 'Become part of the IKKEM-incubated ecosystem. Gain exclusive regional access to China\'s leading graphene industrialization pipeline.',
  },
]

export default function Partnership() {
  return (
    <div>
      <WisdomAnchor />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bg-primary overflow-hidden">
        <div className="bg-dot-grid absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-accent-primary text-xs font-medium tracking-[0.2em] uppercase mb-4">B2B Partnership</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
              Join the <span className="grad-text">IKKEM-incubated</span> Ecosystem
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
              You are not buying a product. You are gaining access to China&apos;s leading
              materials laboratory industrialization pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-24 bg-bg-secondary/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Who We <span className="grad-text">Partner With</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetClients.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="frosted rounded-xl p-8 group hover:border-accent-glow/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                    <client.icon size={22} className="text-accent-primary group-hover:text-accent-glow transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{client.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{client.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="frosted rounded-2xl p-10"
          >
            <h2 className="text-2xl font-bold text-text-primary text-center mb-8">
              Strategic Inquiry
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors placeholder:text-text-dim"
                    placeholder="Dr. / Prof. / Mr. / Ms."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors placeholder:text-text-dim"
                    placeholder="Clinic / Research Institution / Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors placeholder:text-text-dim"
                    placeholder="you@institution.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                    Country / Region *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors placeholder:text-text-dim"
                    placeholder="e.g. Germany, United States"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                  Interest Area *
                </label>
                <select className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors">
                  <option value="">Select your area of interest</option>
                  <option value="clinic">Hair Restoration Clinic Integration</option>
                  <option value="rehab">Rehabilitation Center Equipment</option>
                  <option value="research">Research Collaboration</option>
                  <option value="distribution">Distribution / OEM Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-dim uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-bg-primary border border-accent-primary/20 rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-glow transition-colors placeholder:text-text-dim resize-none"
                  placeholder="Tell us about your institution and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-accent-primary text-bg-primary font-semibold rounded-md hover:bg-accent-glow transition-all duration-300 text-sm tracking-wide"
              >
                Submit Strategic Inquiry
              </button>

              <p className="text-xs text-text-dim text-center mt-4">
                By submitting, you agree to our Privacy Policy. We respect your confidentiality
                and will respond within 48 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16 bg-bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="frosted rounded-xl p-8 text-center">
              <Mail size={28} className="text-accent-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Email Directly</h3>
              <p className="text-sm text-text-muted">partnership@xihe-tech.com</p>
            </div>
            <div className="frosted rounded-xl p-8 text-center">
              <Globe size={28} className="text-accent-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">Visit IKKEM</h3>
              <p className="text-sm text-text-muted">
                <a
                  href="https://www.ikkem.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-glow transition-colors"
                >
                  www.ikkem.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}