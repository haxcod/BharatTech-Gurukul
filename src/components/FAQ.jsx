import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaPhone, FaWhatsapp } from 'react-icons/fa'

const faqs = [
  {
    question: 'What services does BharatTech Gurukul offer?',
    answer: 'We offer a comprehensive range of services including CCTV & Security Systems installation, Website & Android App Development, Property Dealing & Real Estate Consulting, and Legal Documentation services like rent agreements, affidavits, and certificates.',
    category: 'General',
  },
  {
    question: 'Do you provide services outside Lucknow?',
    answer: 'Yes! While we are based in Lucknow, we serve clients across Uttar Pradesh and can provide remote services pan-India. For CCTV installation and property services, we primarily focus on Lucknow and surrounding areas.',
    category: 'Service Area',
  },
  {
    question: 'How long does it take to complete a website?',
    answer: 'The timeline depends on the complexity of the project. A basic portfolio website takes 5-7 days, while e-commerce or complex web applications can take 2-4 weeks. We provide a clear timeline during the consultation phase.',
    category: 'Development',
  },
  {
    question: 'Do you provide after-service support?',
    answer: 'Absolutely! We provide dedicated after-service support for all our services. For CCTV systems, we offer warranty and maintenance support. For websites and apps, we provide technical support and updates. Our team is available 24/7 for emergencies.',
    category: 'Support',
  },
  {
    question: 'What is the cost of CCTV installation?',
    answer: 'The cost varies based on the number of cameras, type of system (DVR/NVR/IP), and installation requirements. We offer packages starting from affordable rates. Contact us for a free quote tailored to your specific needs.',
    category: 'Pricing',
  },
  {
    question: 'Can you help with property documentation and legal work?',
    answer: 'Yes, we provide comprehensive legal documentation services including rent/lease agreements, affidavits, income certificates, caste certificates, residence certificates, and assistance with legal cases. Our team ensures all documents are properly verified and legally sound.',
    category: 'Legal',
  },
  {
    question: 'Is consultation really free?',
    answer: 'Yes! We offer completely free initial consultation where we understand your requirements, provide expert advice, and give you a transparent quote. There are no hidden charges or obligations during the consultation phase.',
    category: 'General',
  },
  {
    question: 'How can I contact BharatTech Gurukul?',
    answer: 'You can reach us via phone at +91 9140254090, WhatsApp on the same number, or through our contact form on this website. We typically respond within minutes during business hours (Mon-Sat, 9 AM - 8 PM).',
    category: 'Contact',
  },
]

export default function FAQ() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })
  const [openIndex, setOpenIndex] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  // Filter FAQs based on active category
  const filteredFAQs = activeFilter === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFilter)

  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] to-[#050d2e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-0.5 bg-orange-400 rounded" />
              FAQs
              <div className="w-6 sm:w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-3 sm:mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-sub text-sm sm:text-base">
              Find answers to common questions about our services, pricing, and process.
            </p>
          </motion.div>
        </div>

        {/* Category Filter - Mobile: Scrollable, Desktop: Centered */}
        <div className="mb-8 sm:mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:justify-center">
            {categories.map((category, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'glass text-white/70 hover:text-white hover:border-orange-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFAQs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/30"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base">{faq.question}</h3>
                  <span className="inline-block mt-2 text-[10px] sm:text-xs text-orange-400 font-medium px-2 py-0.5 rounded-full bg-orange-500/20">
                    {faq.category}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-orange-400 flex-shrink-0 ml-2"
                >
                  <FaChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 border-t border-white/10">
                      <p className="text-white/70 text-sm leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="glass-dark rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">
              Still Have Questions?
            </h3>
            <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6">
              Can't find what you're looking for? Reach out to us directly and we'll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9140254090" className="btn-primary text-sm sm:text-base justify-center">
                <FaPhone size={14} /> Call Us
              </a>
              <a
                href="https://wa.me/919140254090"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition"
              >
                <FaWhatsapp size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
