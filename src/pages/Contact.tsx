import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, Building2,
  Factory, UserCheck, Package, Globe,
  CheckCircle2, Clock, MessageSquare
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const inquiryTypes = [
  { id: 'oem', label: 'OEM / ODM Inquiry', icon: <Package className="w-5 h-5" />, desc: 'Custom product development & manufacturing' },
  { id: 'material', label: 'Material Supply', icon: <Factory className="w-5 h-5" />, desc: 'Graphene film, ink, and raw materials' },
  { id: 'distribution', label: 'Distribution Partnership', icon: <Globe className="w-5 h-5" />, desc: 'Regional distribution & resale opportunities' },
  { id: 'exhibition', label: 'Exhibition Meeting', icon: <UserCheck className="w-5 h-5" />, desc: 'Schedule meeting at upcoming trade shows' },
  { id: 'other', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" />, desc: 'Other questions or collaboration ideas' },
]

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'info@xgraphene.tech',
    sub: 'Response within 24 hours',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+86 (0) 592 XXXXXXX',
    sub: 'Mon-Fri 9:00-18:00 CST',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Headquarters',
    value: 'Tan Kah Kee Innovation Laboratory',
    sub: 'Xiamen, Fujian Province, China',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    label: 'Manufacturing',
    value: 'Changzhou Facility',
    sub: 'Class II Medical Device Certified',
  },
]

export default function Contact() {
  const [selectedType, setSelectedType] = useState('oem')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-graphene-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6">
              <Send className="w-4 h-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's Build Something{' '}
              <span className="gradientText">Extraordinary</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Whether you need custom OEM/ODM solutions, raw material supply, or distribution partnerships — 
              our team is ready to help you bring graphene-powered products to market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-graphene-900 to-graphene-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form (3 cols) */}
            <div className="lg:col-span-3">
              <motion.div {...fadeInUp}>
                {/* Inquiry Type Selector */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-white mb-3">What can we help you with?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                          selectedType === type.id
                            ? 'bg-gold-500/10 border-gold-500/30 text-white'
                            : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <span className={`shrink-0 ${selectedType === type.id ? 'text-gold-400' : 'text-gray-500'}`}>
                          {type.icon}
                        </span>
                        <div>
                          <div className="text-sm font-medium">{type.label}</div>
                          <div className="text-xs text-gray-600 mt-0.5">{type.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all"
                        placeholder="+1 (xxx) xxx-xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
                      placeholder="Tell us about your project requirements: target application, temperature range, estimated volume, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 text-graphene-900 font-bold rounded-xl hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </button>

                  <p className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock className="w-3.5 h-3.5" />
                    Average response time: 24 business hours
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Right: Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              <motion.div {...fadeInUp} className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-400">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{info.label}</div>
                      <div className="text-sm font-semibold text-white mt-0.5">{info.value}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{info.sub}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Response Promise */}
              <motion.div
                {...fadeInUp}
                className="p-6 rounded-2xl bg-gradient-to-br from-gold-500/5 to-orange-500/5 border border-gold-500/10"
              >
                <h3 className="font-bold text-white mb-3">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'Our team reviews your inquiry within 24 hours',
                    'Technical assessment of your requirements',
                    'Custom proposal with pricing & timeline',
                    'Sample development (if applicable)',
                    'NDA signing & project kickoff',
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-gold-500/60 mt-0.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Office Hours */}
              <motion.div {...fadeInUp} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-bold text-white mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 - 18:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Zone</span>
                    <span className="text-white">UTC+8 (China Standard)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages</span>
                    <span className="text-white">English / Chinese</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
