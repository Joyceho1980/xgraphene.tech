import { Link } from 'react-router-dom'
import { Zap, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-graphene-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-500 to-orange-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-graphene-900" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                X<span className="gradient-text">GRAPHENE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The global standard-setter for graphene flexible heating technology. 
              Incubated by Tan Kah Kee Innovation Laboratory.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Xiamen, China</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                'Health Therapy Series',
                'In-Vehicle Cooking System',
                'Graphene Heating Film',
                'OEM / ODM Services',
              ].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Technology', path: '/technology' },
                { label: 'Certification', path: '/certification' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>info@xgraphene.tech</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>+86 (0) 592 XXXXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>Tan Kah Kee Innovation Laboratory<br />Xiamen, Fujian, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Xiamen Xihe Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>Industry Standard Setter</span>
            <span className="w-1 h-1 rounded-full bg-gold-500" />
            <span>Medical-Grade Technology</span>
            <span className="w-1 h-1 rounded-full bg-gold-500" />
            <span>Clinically Proven</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
