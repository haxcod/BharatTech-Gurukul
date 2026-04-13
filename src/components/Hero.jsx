import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCode, FaHome, FaBalanceScale, FaChevronDown } from 'react-icons/fa'
import { MdSecurity, MdLocationOn } from 'react-icons/md'

const floatingIcons = [
  { icon: <MdSecurity size={28} />, color: 'from-blue-500 to-blue-700', style: { top: '18%', left: '7%' }, delay: 0 },
  { icon: <FaCode size={24} />, color: 'from-orange-500 to-orange-700', style: { top: '14%', right: '10%' }, delay: 1.2 },
  { icon: <FaHome size={24} />, color: 'from-green-500 to-green-700', style: { bottom: '28%', left: '5%' }, delay: 0.6 },
  { icon: <FaBalanceScale size={22} />, color: 'from-purple-500 to-purple-700', style: { bottom: '20%', right: '8%' }, delay: 1.8 },
  { icon: <FaShieldAlt size={20} />, color: 'from-cyan-500 to-cyan-700', style: { top: '42%', left: '2%' }, delay: 2.4 },
]

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d2e] via-[#0d1f5c] to-[#1a0a05]" />

      {/* Mesh gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[100px]" />
      </div>

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:flex w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} items-center justify-center text-white shadow-2xl`}
          style={item.style}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1, scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay: item.delay + 0.8, duration: 0.5 },
            scale: { delay: item.delay + 0.8, duration: 0.5 },
            y: {
              delay: item.delay + 1.2,
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm font-medium text-orange-300"
        >
          <MdLocationOn className="text-orange-400" />
          Based in Lucknow, India · Est. 2020
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="section-title text-white mb-6"
        >
          Your Technology &{' '}
          <span className="gradient-text">Service Partner</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg sm:text-xl text-white/65 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          All-in-one solution for <span className="text-orange-400 font-semibold">Digital</span>,{' '}
          <span className="text-blue-400 font-semibold">Security</span>,{' '}
          <span className="text-green-400 font-semibold">Property</span> &{' '}
          <span className="text-purple-400 font-semibold">Legal</span> Services
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/45 mb-10 text-sm tracking-wide"
        >
          Led by <span className="text-white/80 font-semibold">Er. Vinay Kumar</span> · Trusted by hundreds of clients across UP
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="tel:9140254090" className="btn-primary text-base pulse-glow">
            <FaPhone /> Contact Now
          </a>
          <button
            onClick={() => scrollToSection('#services')}
            className="btn-outline text-base"
          >
            View Services <span className="ml-1">→</span>
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '4+', label: 'Service Domains' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{stat.number}</div>
              <div className="text-white/55 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <FaChevronDown className="text-orange-400 text-sm" />
      </motion.div>
    </section>
  )
}
