import logo from '../assets/APBWSWhite.jpeg'
import footerBg from '../assets/water.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white">
      {/* Water Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('${footerBg}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
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
                  href="mailto:cartapate@gmail.com" 
                  className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  cartapate@gmail.com
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
