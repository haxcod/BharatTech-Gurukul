import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, image, url, type = 'website' }) {
  const siteName = 'BharatTech Gurukul'
  const defaultDescription = 'BharatTech Gurukul - Your trusted multi-service technology partner in Lucknow. Expert CCTV installation, website development, Android apps, property dealing, and legal services.'
  const defaultImage = 'https://bharattechgurukul.tech/og-image.png'
  const siteUrl = 'https://bharattechgurukul.tech'

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="title" content={title || siteName} />
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || siteUrl} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical */}
      <link rel="canonical" href={url || siteUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': siteName,
          'image': defaultImage,
          'url': siteUrl,
          'telephone': '+91-XXXXXXXXXX', // Should be replaced with real phone
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Lucknow',
            'addressLocality': 'Lucknow',
            'addressRegion': 'UP',
            'postalCode': '226001',
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 26.8467,
            'longitude': 80.9462
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            'opens': '09:00',
            'closes': '18:00'
          },
          'sameAs': [
            'https://www.facebook.com/bharattechgurukul',
            'https://www.instagram.com/bharattechgurukul',
            'https://www.linkedin.com/company/bharattechgurukul'
          ]
        })}
      </script>
    </Helmet>
  )
}
