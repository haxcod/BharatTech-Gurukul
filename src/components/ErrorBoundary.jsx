import React from 'react'
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#050d2e] via-[#0a0f2e] to-[#0d1f5c] flex items-center justify-center p-4">
          <div className="glass-dark rounded-3xl p-8 sm:p-12 max-w-lg w-full text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
              <FaExclamationTriangle className="text-red-400 text-4xl" />
            </div>
            <h2 className="text-white font-bold text-2xl sm:text-3xl mb-3">
              Oops! Something Went Wrong
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-6 leading-relaxed">
              We encountered an unexpected error. Don't worry, our team has been notified. 
              Please try refreshing the page.
            </p>
            <button
              onClick={this.handleReload}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaRedo size={14} /> Reload Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-white/40 text-xs cursor-pointer hover:text-white/60 transition">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-black/30 p-4 rounded-xl overflow-auto max-h-40">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
