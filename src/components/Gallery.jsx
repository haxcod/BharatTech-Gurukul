import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaExpand } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'

// Gallery items using gradient placeholder cards with icons and labels
const galleryItems = [
  {
    title: 'CCTV Installation',
    category: 'Security',
    bg: 'from-blue-900 via-blue-800 to-cyan-900',
    accent: '#3b82f6',
    emoji: '📹',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Modern Website Design',
    category: 'Development',
    bg: 'from-orange-900 via-red-900 to-orange-800',
    accent: '#f97316',
    emoji: '💻',
    span: 'col-span-1 row-span-2',
  },
  {
    title: 'DVR Security System',
    category: 'Security',
    bg: 'from-slate-900 via-blue-950 to-slate-800',
    accent: '#6366f1',
    emoji: '🔒',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Premium Plots',
    category: 'Property',
    bg: 'from-green-900 via-emerald-900 to-teal-900',
    accent: '#22c55e',
    emoji: '🏡',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Legal Documents',
    category: 'Legal',
    bg: 'from-purple-900 via-violet-900 to-purple-800',
    accent: '#a855f7',
    emoji: '⚖️',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Android App UI',
    category: 'Development',
    bg: 'from-rose-900 via-pink-900 to-red-900',
    accent: '#ec4899',
    emoji: '📱',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'IP Camera Network',
    category: 'Security',
    bg: 'from-sky-900 via-blue-900 to-indigo-900',
    accent: '#0ea5e9',
    emoji: '🔍',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Property Consulting',
    category: 'Property',
    bg: 'from-amber-900 via-yellow-900 to-orange-900',
    accent: '#f59e0b',
    emoji: '🏢',
    span: 'col-span-1 row-span-1',
  },
]

const categoryColors = {
  Security: 'bg-blue-500/20 text-blue-300',
  Development: 'bg-orange-500/20 text-orange-300',
  Property: 'bg-green-500/20 text-green-300',
  Legal: 'bg-purple-500/20 text-purple-300',
}

function GalleryCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} transition-transform duration-500 group-hover:scale-110`} />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${item.accent}88 0%, transparent 60%)`,
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${item.accent}50 1px, transparent 1px), linear-gradient(90deg, ${item.accent}50 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Main icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500"
          style={{ filter: 'drop-shadow(0 0 20px ' + item.accent + ')' }}
        >
          {item.emoji}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center">
          <FaExpand className="text-white text-2xl mx-auto mb-3" />
          <p className="text-white font-semibold text-sm">View Project</p>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}
          style={{ backdropFilter: 'blur(8px)', background: item.accent + '33' }}>
          {item.category}
        </span>
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] to-[#050d2e]" />

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
              Portfolio
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-4">
              Our <span className="gradient-text">Gallery</span>
            </h2>
            <p className="section-sub">
              A showcase of our completed projects across security, development, real estate, and legal services.
            </p>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="tel:9140254090" className="btn-outline inline-flex">
            Request Portfolio → 
          </a>
        </motion.div>
      </div>
    </section>
  )
}
