import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaExpand } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'
import img1 from '../assets/gallery/image-1.jpeg'
import img2 from '../assets/gallery/image-2.jpeg'
import img3 from '../assets/gallery/image-3.jpeg'
import img4 from '../assets/gallery/image-4.jpeg'
import img5 from '../assets/gallery/image-5.jpeg'
import img6 from '../assets/gallery/image-6.jpeg'
import img7 from '../assets/gallery/image-7.jpeg'
import img8 from '../assets/gallery/image-8.jpeg'

// Gallery items using gradient placeholder cards with icons and labels
const galleryItems = [
  {
    title: 'Property Dealer',
    category: 'Property',
    image: img1,
    accent: '#f97316',
  },
  {
    title: 'Villa Construction - Ahmamau Project',
    category: 'Construction',
    image: img2,
    accent: '#3b82f6',
  },
  {
    title: 'Real Estate Dealer',
    category: 'Property',
    image: img3,
    accent: '#f97316',
  },
  {
    title: 'Home Construction - Vrindavan Yojna',
    category: 'Construction',
    image: img4,
    accent: '#3b82f6',
  },
  {
    title: 'Apartment Construction - Ahmamau',
    category: 'Construction',
    image: img5,
    accent: '#3b82f6',
  },
  {
    title: 'Residential Project - Vrindavan Yojna',
    category: 'Property',
    image: img6,
    accent: '#f97316',
  },
  {
    title: 'Villa Site - Ahmamau Project',
    category: 'Construction',
    image: img7,
    accent: '#3b82f6',
  },
  {
    title: 'Plots & Development - Vrindavan Yojna',
    category: 'Property',
    image: img8,
    accent: '#f97316',
  },
]

const categoryColors = {
  Property: 'bg-orange-500/20 text-orange-300',
  Construction: 'bg-blue-500/20 text-blue-300',
  Development: 'bg-green-500/20 text-green-300',
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
      style={{ aspectRatio: '1/1' }}
    >
      {/* Background Image */}
      {item.image ? (
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
      )}

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${item.accent}44 0%, transparent 70%)`,
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white mx-auto mb-3 shadow-xl">
            <FaExpand />
          </div>
          <p className="text-white font-bold text-xs tracking-wider uppercase">Enlarge</p>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${categoryColors[item.category]}`}
          style={{ backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {item.category}
        </span>
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
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
