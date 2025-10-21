import apbLogo from '../assets/APBWSWhite.jpeg'
import rainsoftLogo from '../assets/logo.png'

function Temp() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen h-auto sm:h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-6 overflow-hidden font-sans">
      
      {/* Animated water droplets/bubbles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-blue-400 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-cyan-400 rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[25%] left-[25%] w-4 h-4 bg-blue-300 rounded-full animate-[float_7s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-cyan-300 rounded-full animate-[float_9s_ease-in-out_infinite_3s]"></div>
        <div className="absolute bottom-[40%] right-[30%] w-2 h-2 bg-blue-400 rounded-full animate-[float_7s_ease-in-out_infinite_1.5s]"></div>
        <div className="absolute top-[45%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-[float_8s_ease-in-out_infinite_2.5s]"></div>
      </div>
      
      {/* Subtle wave pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50 V100 H0 Z' fill='%230ea5e9'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>
      
      {/* Content with new layout */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        
        {/* Top Section - Logo and Branding */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 animate-[fadeInScale_0.8s_ease-out]">
          {/* APB Logo - Circular */}
          <div className="relative mb-6">
            <img 
              src={apbLogo} 
              alt="APB Water Systems" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300" 
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
            className="w-32 sm:w-40 md:w-48 h-auto animate-[fadeIn_1s_ease-out_0.3s_both]" 
          />
        </div>
        
        {/* Middle Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Left Column - Construction Message */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg animate-[slideUp_0.8s_ease-out_0.5s_both] flex flex-col">
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
          
          {/* Right Column - Contact Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg animate-[slideUp_0.8s_ease-out_0.7s_both] flex flex-col">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-6 text-center lg:text-left tracking-wide">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-light">Phone</p>
                  <a href="tel:+50612345678" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-colors duration-200 font-normal">
                    +506 1234-5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-light">Email</p>
                  <a href="mailto:info@apbwatersystems.com" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-colors duration-200 font-normal break-all">
                    info@apbwatersystems.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}</style>
    </div>
  )
}

export default Temp
