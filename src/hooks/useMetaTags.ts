import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface MetaTagProps {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  canonicalUrl?: string
}

export function useMetaTags({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonicalUrl
}: MetaTagProps) {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title
    }

    // Remove or update existing meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                   document.querySelector(`meta[property="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(name.includes('og:') ? 'property' : 'name', name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Update meta tags
    if (description) updateMetaTag('description', description)
    if (keywords) updateMetaTag('keywords', keywords)
    
    // Open Graph tags
    if (ogTitle) updateMetaTag('og:title', ogTitle)
    if (ogDescription) updateMetaTag('og:description', ogDescription)
    if (ogImage) updateMetaTag('og:image', ogImage)
    if (ogUrl) updateMetaTag('og:url', ogUrl)

    // Set language attribute
    document.documentElement.lang = i18n.language

    // Handle canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = canonicalUrl
    }

    // Add hreflang links for both languages
    const currentUrl = window.location.href
    const baseUrl = currentUrl.split('/').slice(0, 3).join('/')
    const path = currentUrl.split(`/${i18n.language}`)[1] || ''

    // Remove existing hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"]')
    existingHreflangs.forEach(tag => tag.remove())

    // Add hreflang for English
    const englishLink = document.createElement('link')
    englishLink.rel = 'alternate'
    englishLink.setAttribute('hreflang', 'en')
    englishLink.href = `${baseUrl}/en${path}`
    document.head.appendChild(englishLink)

    // Add hreflang for Spanish
    const spanishLink = document.createElement('link')
    spanishLink.rel = 'alternate'
    spanishLink.setAttribute('hreflang', 'es')
    spanishLink.href = `${baseUrl}/es${path}`
    document.head.appendChild(spanishLink)

    // Add hreflang for x-default
    const defaultLink = document.createElement('link')
    defaultLink.rel = 'alternate'
    defaultLink.setAttribute('hreflang', 'x-default')
    defaultLink.href = baseUrl
    document.head.appendChild(defaultLink)

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonicalUrl, i18n.language])
}
