import logo from '../assets/APBWSWhite.jpeg'
import footerBg from '../assets/water.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      {/* First Section - White Background with Company Info and Contact */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Main Content - Side by Side */}
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              {/* Company Description */}
              <div className="text-center md:text-left">
                <h3 className="text-gray-800 font-bold text-2xl mb-4">About Us</h3>
                <p className="text-base text-gray-700 max-w-md mb-3">
                  Premium water conditioning solutions for Costa Rica. As an authorized distributor of RainSoft products, we bring you world-class water treatment systems backed by decades of innovation and quality.
                </p>
                <p className="text-base text-gray-700 max-w-md">
                  Improving water quality and your quality of life with trusted, certified solutions.
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

                  <a 
                    href="https://www.facebook.com/share/1C3YDrXdTz/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Water Background with Logo and Company Name */}
      <div className="relative bg-blue-900">
        {/* Water Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-full opacity-40"
            style={{
              backgroundImage: `url('${footerBg}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom'
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center justify-center mb-8">
              <img 
                src={logo} 
                alt="APB Water Systems" 
                className="h-32 w-32 rounded-full object-cover shadow-2xl mb-4"
              />
              <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-4">
                APB Water Systems
              </h2>
              
              {/* Social Media Links */}
              <div className="flex gap-4 mt-2">
                <a 
                  href="https://www.facebook.com/share/1C3YDrXdTz/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/30 pt-6">
              <p className="text-center text-sm text-white/90">
                © {currentYear} APB Water Systems. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
