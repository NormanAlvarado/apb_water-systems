import logo from '../assets/APBWSWhite.jpeg'
import footerBg from '../assets/water.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative" style={{ marginTop: '-1px' }}>
      {/* Water Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 overflow-visible">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('${footerBg}')`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center'
          }}
        />
      </div>

      {/* Wave Overlay for smooth edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none" style={{ transform: 'translateY(-1px)' }}>
        <svg 
          className="relative block w-full h-[60px] md:h-[80px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 pt-[120px] md:pt-[150px] pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Side by Side */}
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img 
                  src={logo} 
                  alt="APB Water Systems" 
                  className="h-20 w-20 rounded-full object-cover mr-3 shadow-lg"
                />
                <span className="text-gray-800 font-bold text-2xl">APB Water Systems</span>
              </div>
              <p className="text-base text-gray-700 max-w-md">
                Premium water conditioning solutions for Costa Rica. Improving water quality and your quality of life.
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h3 className="text-gray-800 font-bold text-xl mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+50660339416" 
                  className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +506 6033-9416
                </a>
                
                <a 
                  href="mailto:info@apbwatersystems.com" 
                  className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@apbwatersystems.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 mt-8">
          <p className="text-center text-sm text-gray-600">© {currentYear} APB Water Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
