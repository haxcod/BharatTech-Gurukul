import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaShieldAlt, FaUsers, FaStar, FaAward } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const highlights = [
  {
    icon: <FaShieldAlt size={22} />,
    title: 'Trusted Service',
    desc: 'Over 500+ satisfied clients across Lucknow and UP with verified reviews.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: <FaUsers size={22} />,
    title: 'Experienced Team',
    desc: 'Led by Er. Vinay Kumar with 5+ years of multi-domain professional expertise.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: <FaStar size={22} />,
    title: 'Multi-Domain Expertise',
    desc: 'From tech to legal — we cover all your service needs under one roof.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: <FaAward size={22} />,
    title: 'Quality Assured',
    desc: 'Premium quality in every project with timely delivery and after-service support.',
    color: 'from-green-500 to-green-700',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#070e2a] to-[#0d1f5c]/60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
                <div className="w-8 h-0.5 bg-orange-400 rounded" />
                About Us
              </div>

              <h2 className="section-title text-white mb-6">
                About{' '}
                <span className="gradient-text">BharatTech</span>
                <br />Gurukul
              </h2>

              <p className="text-white/65 leading-relaxed mb-6 text-base">
                BharatTech Gurukul is a <span className="text-white font-semibold">multi-service company</span> providing
                digital solutions, security systems, real estate services, and legal assistance under one roof.
                We are committed to delivering reliable and affordable services to individuals, businesses, and organizations.
              </p>

              <p className="text-white/55 leading-relaxed mb-8 text-base">
                Founded and led by <span className="text-orange-400 font-semibold">Er. Vinay Kumar</span>, a qualified engineer
                with deep expertise across technology, property, and legal domains — we bring a unique blend of
                professional knowledge and personalized service.
              </p>

              <div className="flex flex-wrap gap-3">
                {['CCTV Expert', 'Web Developer', 'Property Dealer', 'Legal Advisor', 'Lucknow Based'].map((tag) => (
                  <span key={tag} className="glass px-4 py-1.5 rounded-full text-sm text-white/80 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-2xl p-6 group hover:border-orange-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Owner card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-dark rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl flex-shrink-0">
            VK
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-white font-bold text-xl">Er. Vinay Kumar</h3>
              <MdVerified className="text-blue-400 text-xl" />
            </div>
            <p className="text-orange-400 font-semibold text-sm mb-2">Founder & Director — BharatTech Gurukul</p>
            <p className="text-white/55 text-sm leading-relaxed">
              Qualified engineer with expertise in security systems, digital solutions, and real estate (via Mahabali Housing Private Limited). 
              Committed to providing trustworthy, affordable, and professional services to every client.
            </p>
          </div>
          <a href="tel:9140254090" className="btn-primary flex-shrink-0">
            Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}
