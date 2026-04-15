import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaHandshake, FaTools, FaCheckCircle, FaHeadset } from 'react-icons/fa'

const steps = [
  {
    icon: <FaPhone size={28} />,
    title: 'Contact Us',
    description: 'Reach out via call, WhatsApp, or fill out our contact form. We respond within minutes during business hours.',
    color: 'from-blue-500 to-blue-700',
    number: '01',
  },
  {
    icon: <FaHandshake size={28} />,
    title: 'Free Consultation',
    description: 'Discuss your requirements with Er. Vinay Kumar. Get expert advice and a transparent quote with no hidden charges.',
    color: 'from-orange-500 to-orange-700',
    number: '02',
  },
  {
    icon: <FaTools size={28} />,
    title: 'Execution',
    description: 'Our skilled team begins work on your project with precision and professionalism, keeping you updated at every stage.',
    color: 'from-green-500 to-green-700',
    number: '03',
  },
  {
    icon: <FaCheckCircle size={28} />,
    title: 'Quality Check',
    description: 'Thorough testing and quality assurance before delivery. We ensure everything meets our high standards and your expectations.',
    color: 'from-purple-500 to-purple-700',
    number: '04',
  },
  {
    icon: <FaHeadset size={28} />,
    title: 'After-Service Support',
    description: 'Our relationship doesn\'t end at delivery. Enjoy continuous support, maintenance, and assistance for all our services.',
    color: 'from-rose-500 to-rose-700',
    number: '05',
  },
]

export default function Process() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="process" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f5c]/60 via-[#0a0f2e] to-[#050d2e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-orange-500/8 blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-600/8 blur-[80px] sm:blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-0.5 bg-orange-400 rounded" />
              How It Works
              <div className="w-6 sm:w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-3 sm:mb-4">
              Our Simple <span className="gradient-text">Process</span>
            </h2>
            <p className="section-sub text-sm sm:text-base">
              Getting started with BharatTech Gurukul is easy. Follow these simple steps and we'll handle the rest.
            </p>
          </motion.div>
        </div>

        {/* Steps - Desktop: Horizontal timeline, Mobile: Vertical stack */}
        <div className="relative">
          {/* Connection line - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 via-orange-500/30 to-rose-500/30 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Icon circle */}
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-2xl mb-3 sm:mb-4 relative z-10`}>
                    {step.icon}
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-gray-900 shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="glass-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">Ready to Get Started?</h3>
            <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6">
              Contact us today for a free consultation and see how we can help with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9140254090" className="btn-primary text-sm sm:text-base justify-center">
                <FaPhone size={14} /> Call Now
              </a>
              <a
                href="https://wa.me/919140254090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
