import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

export function render(url, helmetContext) {
  return renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <ErrorBoundary>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </ErrorBoundary>
      </HelmetProvider>
    </React.StrictMode>
  )
}
