import { Link } from 'react-router-dom'
import heroBg from '../assets/HeroBG.png'
import rainsoftLogo from '../assets/RainSoft-Logo-white.png'
import apbLogo from '../assets/APBWSWhite.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-cyan-400/10"></div>
      </div>

      {/* Authorized Distributor Badge */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-4 py-3 md:px-10 md:py-6 flex flex-col items-center">
            <p className="text-xs md:text-base text-white/90 font-light tracking-wider uppercase mb-2 md:mb-3">
              Authorized Distributor
            </p>
            <img 
              src={rainsoftLogo} 
              alt="RainSoft" 
              className="h-8 md:h-16 w-auto object-contain"
            />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent mt-2 md:mt-3"></div>
          </div>
        </div>

      <div className="container mx-auto px-4 py-16 pb-24 md:pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-12">
            {/* APB Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={apbLogo} 
                alt="APB Water Systems" 
                className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Premium Water Solutions<br />
              <span className="text-cyan-300">for Your Home & Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              Experience crystal-clear, pure water with world-class filtration technology. 
              Trusted by families across Costa Rica.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Contact Us Today
                </Link>
                <button 
                  onClick={() => {
                    const productsSection = document.getElementById('products-section')
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                >
                  View Products
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow - Desktop Only */}
      <button
        onClick={() => {
          const nextSection = document.getElementById('products-section')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white hover:text-cyan-300 transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
