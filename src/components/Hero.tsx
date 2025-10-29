import heroBg from '../assets/HeroBG.png'
import rainsoftLogo from '../assets/RainSoft-Logo-white.png'
import ScrollAnimation from './ScrollAnimation'

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

      {/* Authorized Distributor Badge - Bottom Right Corner */}
      <ScrollAnimation animation="fade-up" delay={600}>
        <div className="absolute bottom-8 right-4 md:right-8 z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-6 py-4 md:px-10 md:py-6 flex flex-col items-center">
            <p className="text-sm md:text-base text-white/90 font-light tracking-wider uppercase mb-3">
              Authorized Distributor
            </p>
            <img 
              src={rainsoftLogo} 
              alt="RainSoft" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent mt-3"></div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Centered */}
          <div className="text-center mb-12">
            <ScrollAnimation animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Premium Water Solutions<br />
                <span className="text-cyan-300">for Your Home & Business</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
                Experience crystal-clear, pure water with world-class filtration technology. 
                Trusted by families across Costa Rica.
              </p>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation animation="fade" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                  Contact Us Today
                </button>
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
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
