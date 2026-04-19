import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import WhyUs from '../components/WhyUs'
import SEO from '../components/SEO'

// Lazy loaded components
const Testimonials = lazy(() => import('../components/Testimonials'))
const Process = lazy(() => import('../components/Process'))
const FAQ = lazy(() => import('../components/FAQ'))
const Team = lazy(() => import('../components/Team'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))
const FloatingButtons = lazy(() => import('../components/FloatingButtons'))

const LoadingSection = () => (
  <div className="py-20 text-center text-white/20 animate-pulse">
    Loading section...
  </div>
)

export default function Home() {
  return (
    <>
      <SEO 
        title="BharatTech Gurukul | CCTV, Web Development & Property Services in Lucknow"
        description="BharatTech Gurukul - Your trusted technology partner in Lucknow. Expert CCTV installation, website development, Android apps, and property dealing services."
      />
      <div className="min-h-screen font-poppins">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <WhyUs />
          <Suspense fallback={<LoadingSection />}>
            <Team />
            <Testimonials />
            <Process />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingButtons />
        </Suspense>
      </div>
    </>
  )
}
