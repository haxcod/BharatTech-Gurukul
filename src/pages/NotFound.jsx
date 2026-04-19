import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | BharatTech Gurukul" description="The page you are looking for does not exist." />
      <div className="min-h-screen bg-gradient-to-br from-[#050d2e] via-[#0a0f2e] to-[#0d1f5c] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-orange-500 mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-6">Oops! Page not found</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            The page you're looking for might have been moved, deleted, or never existed in the first place.
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )
}
