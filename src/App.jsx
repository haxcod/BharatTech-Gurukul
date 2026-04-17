import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Team />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
