import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import apbLogo from '../assets/APBWSWhite.jpeg'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center">
            <img 
              src={apbLogo} 
              alt="APB Water Systems" 
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-blue-500"
            />
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold text-gray-800 hidden sm:block">
              APB Water Systems
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
            {/* Water Conditioning */}
            <div className="relative group">
              <Link 
                to="/products/water-conditioning" 
                className={`${location.pathname === '/products/water-conditioning' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-2 block`}
              >
                Water Conditioning
              </Link>
              
              {/* Preview Card on Hover */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 z-50">
                <Link to="/products/water-conditioning" className="block">
                  <div className="bg-white rounded-lg shadow-2xl p-4 w-64 hover:shadow-3xl transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg" 
                        alt="Water Conditioning" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-cyan-600 text-center">
                      Water Conditioning Systems
                    </h3>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Premium softening solutions
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Drinking Water */}
            <div className="relative group">
              <Link 
                to="/products/drinking-water" 
                className={`${location.pathname === '/products/drinking-water' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-2 block`}
              >
                Drinking Water
              </Link>
              
              {/* Preview Card on Hover */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 z-50">
                <Link to="/products/drinking-water" className="block">
                  <div className="bg-white rounded-lg shadow-2xl p-4 w-64 hover:shadow-3xl transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://www.cdc.gov/environmental-health-tracking/media/images/DrinkingWater1200x675.jpg" 
                        alt="Drinking Water" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-cyan-600 text-center">
                      Drinking Water Systems
                    </h3>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Pure, clean drinking water
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Problem Solving Filters */}
            <div className="relative group">
              <Link 
                to="/products/problem-solving-filters" 
                className={`${location.pathname === '/products/problem-solving-filters' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-2 block`}
              >
                Water Filters
              </Link>
              
              {/* Preview Card on Hover */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 z-50">
                <Link to="/products/problem-solving-filters" className="block">
                  <div className="bg-white rounded-lg shadow-2xl p-4 w-64 hover:shadow-3xl transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png" 
                        alt="Filters" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-cyan-600 text-center">
                      Problem Solving Filters
                    </h3>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Specialized filtration solutions
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Constant Pressure */}
            <div className="relative group">
              <Link 
                to="/products/constant-pressure" 
                className={`${location.pathname === '/products/constant-pressure' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-2 block`}
              >
                Constant Pressure
              </Link>
              
              {/* Preview Card on Hover */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 z-50">
                <Link to="/products/constant-pressure" className="block">
                  <div className="bg-white rounded-lg shadow-2xl p-4 w-64 hover:shadow-3xl transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="https://www.hotpropane.com/assets/uploads/images/water-faucet-sink.webp" 
                        alt="Constant Pressure" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-cyan-600 text-center">
                      Constant Pressure Systems
                    </h3>
                    <p className="text-xs text-gray-600 text-center mt-1">
                      Consistent water pressure
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Side - Phone & CTA */}
          <div className="hidden xl:flex items-center space-x-4">
            <a 
              href="tel:+50660339416" 
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +506 6033-9416
            </a>
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t animate-[slideDown_0.3s_ease-out]">
            <nav className="flex flex-col space-y-3">
              <div className="text-gray-900 py-2 font-semibold">Products</div>
              <Link 
                to="/products/water-conditioning" 
                className={`${location.pathname === '/products/water-conditioning' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} py-1 pl-4 text-sm`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Water Conditioning Systems
              </Link>
              <Link 
                to="/products/drinking-water" 
                className={`${location.pathname === '/products/drinking-water' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} py-1 pl-4 text-sm`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Drinking Water Systems
              </Link>
              <Link 
                to="/products/problem-solving-filters" 
                className={`${location.pathname === '/products/problem-solving-filters' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} py-1 pl-4 text-sm`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Problem Solving Filters
              </Link>
              <Link 
                to="/products/constant-pressure" 
                className={`${location.pathname === '/products/constant-pressure' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'} py-1 pl-4 text-sm`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Constant Pressure Water Systems
              </Link>
              
              <a 
                href="tel:+50660339416" 
                className="text-blue-600 font-semibold py-2"
              >
                📞 +506 6033-9416
              </a>
              
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 w-full text-center block"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
