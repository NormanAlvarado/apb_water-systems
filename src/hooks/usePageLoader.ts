import { useEffect, useState } from 'react'

export function usePageLoader(duration: number = 600) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden'

    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, duration)

    // Remove component and restore scrolling after fade out
    const removeTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'auto'
    }, duration + 300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = 'auto'
    }
  }, [duration])

  return { isLoading, fadeOut }
}
