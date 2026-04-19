import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { MdSecurity, MdEmail } from 'react-icons/md'
import logo from '../assets/logo.png'

const serviceGroups = [
  {
    title: 'CCTV or Security Devices',
    items: ["CCTV or Security Devices installation with AMC's"]
  },
  {
    title: 'Website or Apps developer ',
    items: ['Website or Apps development with update & maintenance']
  },
  {
    title: 'Legal services',
    items: ["Case's and Legal Documents", 'Cyber fraud and Bank Account freeze']
  },
  {
    title: 'Digital Education',
    items: ['Basic computer, CCC, ADCA & O’LEVEL', 'Web & App designing', 'Tally & Digital Marketing']
  }
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Team', href: '#team' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1DnYfeFzgp/', color: '#1877f2' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/bharattechgurukul?igsh=bDZxOGxnYXRoc3Fv', color: '#e1306c' },
  { icon: <FaYoutube />, href: 'https://youtube.com/@bharattech.gurukul?si=mqlognGYNb2Sj7Nr', color: '#ff0000' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vinay-kumar-abb2ab213', color: '#0077b5' },
  { icon: <FaTwitter />, href: 'https://x.com/bharattech_g', color: '#1da1f2' },
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-all hover:scale-110 hover:bg-white/20">
                <img src={logo} alt="BharatTech Gurukul Official Logo" loading="lazy" className="w-full h-full object-contain scale-150" />
              </div>
              <div>
                <div className="font-black text-white text-lg leading-tight tracking-tight uppercase">BharatTech</div>
                <div className="text-orange-400 text-[10px] font-black tracking-[0.2em] uppercase">Gurukul</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Your trusted multi-service partner in Lucknow. Real estate services via Mahabali Housing Private Limited. Digital solutions, security, and legal services — all under one roof.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.href.includes('facebook') ? 'Facebook' : s.href.includes('instagram') ? 'Instagram' : s.href.includes('youtube') ? 'YouTube' : s.href.includes('linkedin') ? 'LinkedIn' : s.href.includes('wa.me') ? 'WhatsApp' : 'Twitter'}`}
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

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <div className="space-y-4">
              {serviceGroups.map((group, i) => (
                <div key={i}>
                  <h4 className="text-orange-400 text-xs font-bold uppercase tracking-tight mb-2">
                    {group.title}
                  </h4>
                  <ul className="space-y-1.5 ml-1">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-white/50 text-[13px] leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-500/40 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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

              <a href="mailto:contact@bharattechgurukul.tech" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MdEmail className="text-orange-400 text-sm" />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Email</div>
                  <div className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">contact@bharattechgurukul.tech</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-blue-400 text-sm" />
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
