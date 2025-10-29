import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade' | 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClass = {
    'fade': 'animate-fade-in',
    'fade-up': 'animate-fade-in-up',
    'fade-down': 'animate-fade-in-down',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'wave': 'animate-fade-in-up', // Simplified to fade-up
    'ripple': 'animate-fade-in', // Simplified to fade
    'float': 'animate-fade-in-up' // Simplified to fade-up
  }[animation]

  const delayClass = delay > 0 ? `animation-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`scroll-animation ${isVisible ? `visible ${animationClass} ${delayClass}` : ''} ${className}`}
    >
      {children}
    </div>
  )
}
