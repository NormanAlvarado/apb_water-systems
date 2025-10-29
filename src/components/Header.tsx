import { useState } from 'react'
import { Link } from 'react-router-dom'
import apbLogo from '../assets/APBWSWhite.jpeg'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={apbLogo} 
              alt="APB Water Systems" 
              className="h-14 w-14 rounded-full object-cover border-2 border-blue-500"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800 hidden sm:block">
              APB Water Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative group"
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Menu Dropdown */}
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 fixed top-20 left-1/2 -translate-x-1/2 mt-0 pt-2 z-50">
                <div className="bg-white rounded-lg shadow-2xl py-8 px-8 w-[1000px]">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Water Conditioning Systems */}
                    <Link to="/products/water-conditioning" className="group">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src="https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg" 
                          alt="Water Conditioning" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-cyan-600 text-center group-hover:text-blue-600">
                        Water Conditioning Systems
                      </h3>
                    </Link>

                    {/* Drinking Water Systems */}
                    <Link to="/products/drinking-water" className="group">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src="https://www.cdc.gov/environmental-health-tracking/media/images/DrinkingWater1200x675.jpg" 
                          alt="Drinking Water" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-cyan-600 text-center group-hover:text-blue-600">
                        Drinking Water Systems
                      </h3>
                    </Link>

                    {/* Problem Solving Filters */}
                    <Link to="/products/problem-solving-filters" className="group">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src="https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png" 
                          alt="Filters" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-cyan-600 text-center group-hover:text-blue-600">
                        Problem Solving Filters
                      </h3>
                    </Link>

                    {/* Constant Pressure Water Systems */}
                    <Link to="/products/constant-pressure" className="group">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img 
                          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop" 
                          alt="Constant Pressure" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-cyan-600 text-center group-hover:text-blue-600">
                        Constant Pressure Water Systems
                      </h3>
                    </Link>

                   

                    
                  </div>
                </div>
              </div>
            </div>

            <Link to="/knowledge" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Knowledge Center
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+50660339416" 
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +506 6033-9416
            </a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div className="lg:hidden py-4 border-t animate-[slideDown_0.3s_ease-out]">
            <nav className="flex flex-col space-y-3">
              <div className="text-gray-900 py-2 font-semibold">Products</div>
              <Link to="/products/water-conditioning" className="text-gray-600 hover:text-blue-600 py-1 pl-4 text-sm">
                Water Conditioning Systems
              </Link>
              <Link to="/products/drinking-water" className="text-gray-600 hover:text-blue-600 py-1 pl-4 text-sm">
                Drinking Water Systems
              </Link>
              <Link to="/products/problem-solving-filters" className="text-gray-600 hover:text-blue-600 py-1 pl-4 text-sm">
                Problem Solving Filters
              </Link>
              <Link to="/products/constant-pressure" className="text-gray-600 hover:text-blue-600 py-1 pl-4 text-sm">
                Constant Pressure Water Systems
              </Link>
              <Link to="/knowledge" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                Knowledge Center
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">
                Contact Us
              </Link>
              <a 
                href="tel:+50660339416" 
                className="text-blue-600 font-semibold py-2"
              >
                📞 +506 6033-9416
              </a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 w-full">
                Contact Us
              </button>
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
