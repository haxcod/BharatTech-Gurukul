import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaClock, FaRupeeSign, FaThumbsUp, FaRocket, FaHeadset, FaStar, FaShieldAlt, FaUserCheck } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaHeadset size={28} />,
    title: '24x7 Support',
    desc: 'Round-the-clock assistance for all your queries and emergencies. We\'re always just a call away.',
    color: 'from-blue-500 to-cyan-500',
    number: '01',
  },
  {
    icon: <FaRupeeSign size={28} />,
    title: 'Affordable Pricing',
    desc: 'Transparent and competitive pricing with no hidden charges. Quality service at the best value.',
    color: 'from-green-500 to-emerald-500',
    number: '02',
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: 'Trusted Services',
    desc: 'Verified, reliable, and professional services backed by 500+ happy clients and years of experience.',
    color: 'from-orange-500 to-amber-500',
    number: '03',
  },
  {
    icon: <FaRocket size={28} />,
    title: 'Fast Delivery',
    desc: 'On-time project completion with swift turnaround. We respect your deadlines and commitments.',
    color: 'from-purple-500 to-violet-500',
    number: '04',
  },
  {
    icon: <FaUserCheck size={28} />,
    title: 'Expert Professionals',
    desc: 'Skilled engineers, legal advisors, and real estate consultants with proven domain expertise.',
    color: 'from-rose-500 to-pink-500',
    number: '05',
  },
  {
    icon: <FaStar size={28} />,
    title: 'Premium Quality',
    desc: 'From materials to execution, we use the best quality products and maintain highest standards.',
    color: 'from-yellow-500 to-orange-500',
    number: '06',
  },
]

const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '5+', label: 'Years Active' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function WhyUs() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f5c]/80 via-[#0a0f2e] to-[#050d2e]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/8 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />

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
              Our Advantage
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-4">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
            <p className="section-sub">
              BharatTech Gurukul stands apart with its commitment to quality, transparency, and client-first approach.
            </p>
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-orange-500/30 transition-all duration-400 relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 text-5xl font-black text-white/5 select-none">
                {item.number}
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats band */}
        <div ref={statsRef} className="glass-dark rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
