import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade' | 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClass = {
    'fade': 'animate-fade-in',
    'fade-up': 'animate-fade-in-up',
    'fade-down': 'animate-fade-in-down',
    'slide-left': 'animate-fade-in',
    'slide-right': 'animate-fade-in',
    'wave': 'animate-fade-in',
    'ripple': 'animate-fade-in',
    'float': 'animate-fade-in'
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
