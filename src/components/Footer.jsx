import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { MdSecurity, MdEmail } from 'react-icons/md'

const services = [
  'CCTV Installation',
  'Security Systems',
  'Website Development',
  'Android App Dev',
  'Property Dealing',
  'Rent Agreement',
  'Affidavit Services',
  'Legal Certificates',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: <FaFacebook />, href: '#', color: '#1877f2' },
  { icon: <FaInstagram />, href: '#', color: '#e1306c' },
  { icon: <FaYoutube />, href: '#', color: '#ff0000' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/919140254090', color: '#25d366' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d2e] to-[#020714]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg">
                <MdSecurity className="text-white text-xl" />
              </div>
              <div>
                <div className="font-bold text-white leading-tight">BharatTech</div>
                <div className="text-orange-400 text-xs font-semibold tracking-wider">GURUKUL</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Your trusted multi-service partner in Lucknow. Digital solutions, security, property, and legal services — all under one roof.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110"
                  style={{ '--hover-color': s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    href={link.href}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <span className="text-white/50 text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-4">
              <a href="tel:9140254090" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaPhone className="text-blue-400 text-xs" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Phone</div>
                  <div className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">+91 9140254090</div>
                </div>
              </a>

              <a href="https://wa.me/919140254090" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaWhatsapp className="text-green-400 text-sm" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">WhatsApp</div>
                  <div className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">+91 9140254090</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-orange-400 text-sm" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Location</div>
                  <div className="text-white/80 text-sm font-medium">Lucknow, Uttar Pradesh</div>
                  <div className="text-white/40 text-xs">India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} BharatTech Gurukul. All rights reserved. · Led by Er. Vinay Kumar
          </p>
          <p className="text-white/20 text-xs">
            Lucknow, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  )
}
