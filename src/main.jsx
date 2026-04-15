import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Loading component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050d2e] via-[#0a0f2e] to-[#0d1f5c] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border-3 sm:border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-white/60 text-sm sm:text-base animate-pulse">Loading BharatTech Gurukul...</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
)
