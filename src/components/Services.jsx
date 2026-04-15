import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MdSecurity, MdVerified } from 'react-icons/md'
import { FaCode, FaHome, FaBalanceScale, FaCamera, FaMobile, FaLaptopCode, FaBuilding, FaHandshake, FaFileAlt, FaGavel, FaIdCard, FaCog } from 'react-icons/fa'

const services = [
  {
    icon: <MdSecurity size={36} />,
    title: 'CCTV & Security',
    tagline: 'Professional Surveillance Solutions',
    color: 'from-blue-500 to-cyan-600',
    glowColor: 'rgba(59,130,246,0.3)',
    features: [
      { icon: <FaCamera />, text: 'CCTV Camera Installation' },
      { icon: <MdSecurity />, text: 'Security Systems Setup' },
      { icon: <FaCog />, text: 'Maintenance & Support' },
      { icon: <FaLaptopCode />, text: 'Remote Monitoring Setup' },
    ],
    desc: 'Complete security solutions for homes, offices, shops & commercial properties. DVR/NVR, IP cameras, and full surveillance systems.',
  },
  {
    icon: <FaCode size={34} />,
    title: 'Development',
    tagline: 'Digital Solutions & Tech Services',
    color: 'from-orange-500 to-red-600',
    glowColor: 'rgba(249,115,22,0.3)',
    features: [
      { icon: <FaLaptopCode />, text: 'Website Development' },
      { icon: <FaMobile />, text: 'Android App Development' },
      { icon: <FaCode />, text: 'Responsive Design' },
      { icon: <MdVerified />, text: 'SEO & Digital Marketing' },
    ],
    desc: 'Modern, responsive websites and Android apps tailored to your business. From portfolios to full e-commerce solutions.',
  },
  {
    icon: <FaHome size={34} />,
    title: 'Property Dealer',
    tagline: 'Real Estate & Investment',
    color: 'from-green-500 to-emerald-600',
    glowColor: 'rgba(34,197,94,0.3)',
    features: [
      { icon: <FaBuilding />, text: 'Plot Buying & Selling' },
      { icon: <FaHome />, text: 'Real Estate Consulting' },
      { icon: <FaHandshake />, text: 'Investment Guidance' },
      { icon: <FaFileAlt />, text: 'Property Documentation' },
    ],
    desc: 'Expert real estate services provided through Mahabali Housing Private Limited. Buy, sell or invest in property across Lucknow with trusted professional guidance.',
  },
  {
    icon: <FaBalanceScale size={34} />,
    title: 'Legal Services',
    tagline: 'Documentation & Legal Assistance',
    color: 'from-purple-500 to-violet-600',
    glowColor: 'rgba(168,85,247,0.3)',
    features: [
      { icon: <FaFileAlt />, text: 'Rent Agreement' },
      { icon: <FaGavel />, text: 'Affidavit Services' },
      { icon: <FaIdCard />, text: 'Income / Caste / Residence Certificates' },
      { icon: <FaBalanceScale />, text: 'Legal Case Assistance' },
    ],
    desc: 'Hassle-free legal documentation and certificate services. From rent agreements to affidavits — we handle all your paperwork.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="service-card group cursor-default"
      style={{ '--glow': service.glowColor }}
    >
      {/* Icon header */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
      <p className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">{service.tagline}</p>
      <p className="text-white/55 text-sm leading-relaxed mb-6">{service.desc}</p>

      {/* Features list */}
      <ul className="space-y-2.5">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
            <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center text-white text-xs opacity-80`}>
              {f.icon}
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      {/* Bottom CTA */}
      <div className="mt-6 pt-5 border-t border-white/10">
        <a
          href="tel:9140254090"
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg`}
        >
          Enquire Now →
        </a>
        <div className="flex items-center justify-center gap-2 text-white/30 text-xs group-hover:hidden">
          <span>Hover for enquiry</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e2a] via-[#0a0f2e] to-[#070e2a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
              What We Offer
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-sub">
              Four powerful service domains under one trusted name — digital, security, property, and legal.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
