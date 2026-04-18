import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'

export default function Contact() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello BharatTech Gurukul!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/919140254090?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', service: '', message: '' })
  }

  const infoCards = [
    {
      icon: <FaPhone size={22} />,
      title: 'Call Us',
      value: '+91 9140254090',
      sub: 'Mon–Sat, 9 AM – 8 PM',
      color: 'from-blue-500 to-blue-700',
      href: 'tel:9140254090',
    },
    {
      icon: <FaWhatsapp size={22} />,
      title: 'WhatsApp',
      value: '+91 9140254090',
      sub: 'Chat with us anytime',
      color: 'from-green-500 to-green-700',
      href: 'https://wa.me/919140254090',
    },
    {
      icon: <FaMapMarkerAlt size={22} />,
      title: 'Location',
      value: 'Lucknow, India',
      sub: 'Uttar Pradesh, IN',
      color: 'from-orange-500 to-orange-700',
      href: 'https://maps.google.com/?q=Lucknow,India',
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d2e] via-[#0a0f2e] to-[#0d1f5c]/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
              Get In Touch
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-4">
              Contact <span className="gradient-text">Us</span>
            </h2>
            <p className="section-sub">
              Reach out for a free consultation. We respond within minutes on WhatsApp.
            </p>
          </motion.div>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {infoCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex items-center gap-5 group hover:border-orange-500/30 transition-all no-underline"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <div className="text-white/50 text-xs font-medium mb-0.5">{card.title}</div>
                <div className="text-white font-bold text-base">{card.value}</div>
                <div className="text-white/40 text-xs">{card.sub}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form + Map split */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-dark rounded-3xl p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-orange-400" />
              Send a Message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-5 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium text-center"
              >
                ✅ Message sent via WhatsApp! We'll respond shortly.
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-white/60 text-sm font-medium block mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-500/60 focus:bg-white/8 transition"
                />
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium block mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-500/60 focus:bg-white/8 transition"
                />
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium block mb-1.5">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#0d1f5c] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/60 transition cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  <option value="CCTV & Security">CCTV & Security</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Android App">Android App Development</option>
                  <option value="Property Dealer">Property Dealer</option>
                  <option value="Legal Services">Legal Services</option>
                  <option value="Digital Education">Digital Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-orange-500/60 focus:bg-white/8 transition resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="btn-primary w-full justify-center text-base mt-2"
              >
                <FaWhatsapp size={18} />
                Send via WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Map embed + contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Google Map */}
            <div className="flex-1 rounded-3xl overflow-hidden border border-white/10 min-h-[280px]">
              <iframe
                title="BharatTech Gurukul Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick CTA */}
            <div className="glass-dark rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-lg font-black shadow-lg">VK</div>
                <div>
                  <div className="text-white font-bold">Er. Vinay Kumar</div>
                  <div className="text-orange-400 text-xs">Available for Free Consultation</div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="tel:9140254090" className="btn-primary flex-1 justify-center text-sm py-2.5">
                  <FaPhone size={13} /> Call Now
                </a>
                <a
                  href="https://wa.me/919140254090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
                >
                  <FaWhatsapp size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
