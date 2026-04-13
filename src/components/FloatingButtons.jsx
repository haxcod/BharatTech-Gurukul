import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-6 right-5 flex flex-col gap-3 z-50">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/919140254090"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white shadow-2xl transition-colors"
            title="Chat on WhatsApp"
            style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.5)' }}
          >
            <FaWhatsapp size={26} />
          </motion.a>

          {/* Call */}
          <motion.a
            href="tel:9140254090"
            initial={{ opacity: 0, scale: 0, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 flex items-center justify-center text-white shadow-2xl transition-all"
            title="Call Now"
            style={{ boxShadow: '0 4px 24px rgba(249,115,22,0.5)', animation: 'pulse-glow 2s ease-in-out infinite' }}
          >
            <FaPhone size={20} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
