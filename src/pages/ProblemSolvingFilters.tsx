import Header from '../components/Header'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
// @ts-ignore
import 'swiper/css/navigation'

export default function ProblemSolvingFilters() {

  const filtersBase = [
    {
      name: "Iron Filter System",
      icon: "🏠",
      description: "Advanced iron removal for clear, stain-free water",
      benefits: ["Removes iron & rust", "Prevents staining", "Protects fixtures", "Automatic backwash"],
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop"
    },
    {
      name: "Sulfur Filter System",
      icon: "💡",
      description: "Eliminate rotten egg odor from your water",
      benefits: ["Removes sulfur smell", "Fresh, clean water", "No chemicals needed", "Low maintenance"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
    },
    {
      name: "Whole House Carbon Filter",
      icon: "⚡",
      description: "Comprehensive filtration for the entire home",
      benefits: ["Removes chlorine", "Reduces VOCs", "Better taste & odor", "Protects all water"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    },
    {
      name: "Lead Removal System",
      icon: "🔧",
      description: "Protect your family from harmful lead contamination",
      benefits: ["99% lead removal", "NSF certified", "Safe drinking water", "Peace of mind"],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"
    }
  ]

  // Duplicate filters multiple times for smooth infinite loop
  const filters = [...filtersBase, ...filtersBase]

  const benefits = [
    {
      title: "Remove Iron & Rust",
      description: "Eliminate rust stains on fixtures, clothing, and surfaces caused by iron in your water."
    },
    {
      title: "Eliminate Odors",
      description: "Say goodbye to unpleasant sulfur and rotten egg smells that make water unusable."
    },
    {
      title: "Remove Contaminants",
      description: "Filter out lead, arsenic, bacteria, and other harmful substances for safer water."
    },
    {
      title: "Protect Appliances",
      description: "Prevent damage to water heaters, dishwashers, and washing machines from water problems."
    },
    {
      title: "Better Taste & Clarity",
      description: "Enjoy crystal-clear water that tastes fresh without sediment or discoloration."
    },
    {
      title: "Whole-Home Protection",
      description: "Every tap in your home delivers clean, safe, problem-free water."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&h=900&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-indigo-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Problem-Solving Water Filters
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Advanced filtration systems engineered to solve your specific water quality challenges
            </p>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-all hover:shadow-2xl transform hover:-translate-y-1">
              Schedule Water Test
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Intro with image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  TARGETED SOLUTIONS
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Targeted Solutions for Every Water Problem
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Iron, sulfur, manganese, lead, bacteria, viruses, and volatile organic compounds (VOCs) are just some of the contaminants that an APB Water Systems filtration system can address.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Investing in one of our "problem-solving" filters will mean never again having to worry about unpleasant odors, disagreeable tastes, floating particles, and other issues that can diminish your family's water quality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our advanced filtration technology is designed to tackle the most challenging water problems, delivering clean, safe, and great-tasting water throughout your entire home.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" 
                    alt="Water Filtration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold mb-1">🇺🇸</div>
                  <div className="text-sm font-semibold">Proudly Designed &</div>
                  <div className="text-sm font-semibold">Manufactured in USA</div>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded text-sm font-bold mb-4 uppercase tracking-wide">
                  Key Benefits
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Complete Water Problem Solutions
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our problem-solving filters address a wide range of water quality issues for comprehensive protection
                </p>
              </div>
              
              {/* Professional Grid Layout - 3 Columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-indigo-400"
                  >
                    {/* Indigo top bar */}
                    <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-500"></div>
                    
                    <div className="p-6">
                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-800 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-indigo-100 text-sm uppercase tracking-wide">Contaminants Removed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-indigo-100 text-sm uppercase tracking-wide">Filtration Efficiency</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-indigo-100 text-sm uppercase tracking-wide">Years Appliance Life Extension</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-indigo-100 text-sm uppercase tracking-wide">Clean Water Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section with Carousel */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Our Advanced Filtration Systems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Technologically advanced whole-house filters designed to solve your specific water quality issues
              </p>
            </div>
            
            {/* Swiper Carousel */}
            <div className="w-full relative">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                centeredSlides={true}
                loop={true}
                slidesPerGroup={1}
                loopAdditionalSlides={3}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                speed={800}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-filters'
                }}
                navigation={{
                  nextEl: '.swiper-button-next-filters',
                  prevEl: '.swiper-button-prev-filters',
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10
                  },
                  640: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
                className="pb-16"
              >
                {filters.map((filter, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mx-4 flex flex-col min-h-[450px] sm:min-h-[480px]">
                      {/* Product Image */}
                      <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={filter.image} 
                          alt={filter.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Product Content */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
                          {filter.name}
                        </h3>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base mt-auto">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <div className="swiper-pagination-filters"></div>

              {/* Custom Navigation Buttons */}
              <button
                className="swiper-button-prev-filters absolute left-0 top-1/3 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-indigo-200"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="swiper-button-next-filters absolute right-0 top-1/3 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-indigo-200"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Uncompromising Quality & Performance
              </h3>
              <p className="text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-indigo-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-indigo-100 text-sm mt-2">Designed & manufactured domestically</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">ISO</div>
                <div className="text-indigo-200 text-lg font-semibold">9001 Certified</div>
                <p className="text-indigo-100 text-sm mt-2">Quality management systems</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-indigo-200 text-lg font-semibold">Quality Guaranteed</div>
                <p className="text-indigo-100 text-sm mt-2">Unsurpassed limited warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
