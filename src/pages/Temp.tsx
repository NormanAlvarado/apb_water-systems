import apbLogo from '../assets/APBWSWhite.jpeg'
import rainsoftLogo from '../assets/logo.png'
import ScrollAnimation from '../components/ScrollAnimation'

function Temp() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen h-auto sm:h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-6 overflow-hidden font-sans">
      
      {/* Content with new layout */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        
        {/* Top Section - Logo and Branding */}
        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            {/* APB Logo - Circular */}
            <div className="relative mb-6">
              <img 
                src={apbLogo} 
                alt="APB Water Systems" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl" 
              />
            </div>
            
            {/* Distributor text */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center font-light tracking-widest uppercase mb-3">
              Costa Rica's Authorized Distributor for
            </p>
            
            {/* RainSoft logo */}
            <img 
              src={rainsoftLogo} 
              alt="RainSoft" 
              className="w-32 sm:w-40 md:w-48 h-auto" 
            />
          </div>
        </ScrollAnimation>
        
        {/* Middle Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Left Column - Construction Message */}
          <ScrollAnimation animation="slide-left">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col">
              <div className="text-center lg:text-left flex-1 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 tracking-tight">
                  Website Under Construction
                </h2>
                <div className="w-16 h-1 bg-blue-500 mb-4 mx-auto lg:mx-0"></div>
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                  We are working to provide you with a better experience. Our new website will feature comprehensive information about our water filtration solutions.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Right Column - Contact Card */}
          <ScrollAnimation animation="slide-right">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 text-center lg:text-left tracking-wide">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-light">Phone</p>
                    <a href="tel:+50660339416" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition font-normal">
                      +506 6033-9416
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-light">Email</p>
                    <a href="mailto:apbwatersystems@gmail.com" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition font-normal break-all">
                      apbwatersystems@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
        </div>
      </div>
    </div>
  )
}

export default Temp
