import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    location: 'Lucknow',
    rating: 5,
    text: 'BharatTech Gurukul installed CCTV cameras in my shop and the service was excellent. Er. Vinay Kumar is very professional and knowledgeable. Highly recommended for security solutions!',
    service: 'CCTV Installation',
    avatar: 'RS',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Priya Verma',
    role: 'Entrepreneur',
    location: 'Kanpur',
    rating: 5,
    text: 'Got my e-commerce website developed from BharatTech. The design is modern, responsive and the delivery was on time. Their team is very supportive and provided great after-service support.',
    service: 'Website Development',
    avatar: 'PV',
    color: 'from-orange-500 to-orange-700',
  },
  {
    name: 'Amit Singh',
    role: 'Investor',
    location: 'Lucknow',
    rating: 5,
    text: 'Excellent property consulting service! They helped me find the perfect plot for investment. The documentation process was smooth and transparent. Trustworthy professionals.',
    service: 'Property Dealer',
    avatar: 'AS',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Sneha Patel',
    role: 'Homeowner',
    location: 'Lucknow',
    rating: 5,
    text: 'Got my rent agreement and other legal documents prepared. Very hassle-free service. The team explained everything clearly and completed the work faster than expected.',
    service: 'Legal Services',
    avatar: 'SP',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Vikram Yadav',
    role: 'Restaurant Owner',
    location: 'Gomti Nagar',
    rating: 5,
    text: 'Outstanding work on our restaurant website and billing app! The Android app works flawlessly and the website looks amazing on all devices. Great value for money.',
    service: 'App Development',
    avatar: 'VY',
    color: 'from-rose-500 to-rose-700',
  },
  {
    name: 'Meera Joshi',
    role: 'Teacher',
    location: 'Indira Nagar',
    rating: 5,
    text: 'Very satisfied with the security system installed at my home. The remote monitoring feature is very convenient. Er. Vinay Kumar provided excellent guidance throughout the process.',
    service: 'Security Systems',
    avatar: 'MJ',
    color: 'from-cyan-500 to-cyan-700',
  },
]

export default function Testimonials() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials on mobile
  useRef(() => {
    if (autoplay) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d2e] via-[#0a0f2e] to-[#070e2a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

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
              Client Reviews
              <div className="w-6 sm:w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-3 sm:mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-sub text-sm sm:text-base">
              Trusted by hundreds of satisfied clients across Uttar Pradesh. Here's what they have to say about our services.
            </p>
          </motion.div>
        </div>

        {/* Desktop Grid - Shows 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden mb-8">
          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            
            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={16} />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 min-h-0 rounded-full transition-all ${
                      i === currentIndex ? 'bg-orange-500 w-6' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition"
                aria-label="Next testimonial"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Second Row Desktop - Shows next 3 cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.slice(3, 6).map((testimonial, i) => (
            <TestimonialCard key={i + 3} testimonial={testimonial} index={i + 3} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex text-sm sm:text-base">
            Share Your Experience →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-5 sm:p-6 group hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Quote icon */}
      <FaQuoteLeft className="text-orange-500/20 text-2xl sm:text-3xl mb-3 sm:mb-4" />

      {/* Rating */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-white/70 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
        "{testimonial.text}"
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-sm sm:text-base font-bold flex-shrink-0 shadow-lg`}>
          {testimonial.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.name}</div>
          <div className="text-white/50 text-xs sm:text-sm">{testimonial.role} · {testimonial.location}</div>
        </div>
      </div>

      {/* Service badge */}
      <div className="mt-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-300">
          {testimonial.service}
        </span>
      </div>
    </motion.div>
  )
}
