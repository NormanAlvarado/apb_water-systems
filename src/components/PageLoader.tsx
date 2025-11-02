import { usePageLoader } from '../hooks/usePageLoader'

export default function PageLoader() {
  const { isLoading, fadeOut } = usePageLoader()

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Water droplet loader with enhanced animation */}
        <div className="relative w-24 h-24">
          {/* Main droplet */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-blue-600 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
          {/* Ripple effect 1 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-blue-300 animate-ping opacity-75"></div>
          </div>
          {/* Ripple effect 2 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-3 border-cyan-400 animate-ping opacity-50" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
        
        {/* Company name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">APB Water Systems</h2>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-gray-600 font-medium text-sm">Loading</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
