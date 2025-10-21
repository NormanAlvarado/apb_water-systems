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

export default function DrinkingWater() {

  const systemsBase = [
    {
      name: "Ultrefiner II",
      type: "Multi-Stage Reverse Osmosis System",
      description: "The Ultrefiner II is a multi-stage drinking water purifier that produces better than bottle-quality water for just pennies on the dollar.",
      features: [
        "Three-stage filtration process",
        "Carbon block sediment pre-filter",
        "Advanced membrane cartridge",
        "Carbon block sediment post-filter",
        "Removes contaminants effectively",
        "Better than bottled water quality"
      ],
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop"
    },
    {
      name: "Hydrefiner II",
      type: "Advanced Carbon Block Filter System",
      description: "The Hydrefiner II features an advanced carbon block filter that helps provide a constant supply of delicious drinking water.",
      features: [
        "Advanced carbon block technology",
        "Continuous supply of filtered water",
        "Removes chlorine and impurities",
        "Improves taste and odor",
        "Easy filter replacement",
        "Compact under-sink design"
      ],
      image: "https://www.bruker.com/de/applications/microbiology-and-diagnostics/water-testing-microbiology/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1920.jpeg/1733860544891/water-testing-microbiology-shutterstock-1753533839-md-web.jpeg"
    }
  ]

  // Duplicate systems multiple times to ensure smooth infinite loop with 3 visible slides
  const systems = [...systemsBase, ...systemsBase, ...systemsBase]

  const benefits = [
    {
      icon: "💧",
      title: "Great-Tasting Water",
      description: "Enjoy crystal-clear, delicious water straight from your tap without the plastic bottle hassle."
    },
    {
      icon: "☕",
      title: "Better Coffee & Tea",
      description: "Notice dramatic improvements in the coffee, tea, and soups you prepare with purified water."
    },
    {
      icon: "💰",
      title: "Save Money",
      description: "Stop buying expensive bottled water. Get superior quality for pennies on the dollar."
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Reduce plastic waste and your carbon footprint by eliminating bottled water purchases."
    },
    {
      icon: "🏠",
      title: "Convenient Access",
      description: "Round-the-clock access to purified water right in your own kitchen."
    },
    {
      icon: "🛡️",
      title: "Peace of Mind",
      description: "Know that your family is drinking the highest quality water possible."
    }
  ]

  const contaminantsRemoved = [
    "Chlorine", "Lead", "Mercury", "Arsenic", "Fluoride", "Nitrates",
    "Bacteria", "Viruses", "Cysts", "Sediment", "VOCs", "Bad Taste & Odor"
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://www.cdc.gov/environmental-health-tracking/media/images/DrinkingWater1200x675.jpg)' }}
        >
          <div className="absolute inset-0 bg-cyan-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Drinking Water Systems
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Transform your kitchen tap into a fountain of delicious, purified drinking water
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-all hover:shadow-2xl transform hover:-translate-y-1">
              Schedule Free Water Test
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Intro with Stats */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=525&fit=crop" 
                    alt="Fresh Drinking Water"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-bold mb-2">💧</div>
                  <div className="text-2xl font-bold">Better Than</div>
                  <div className="text-xl">Bottled Water</div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  PREMIUM DRINKING WATER
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Transform Your Kitchen Tap into a Fountain of Delicious Drinking Water
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our sophisticated drinking water filtration systems provide homeowners with the convenience of great-tasting water without the hassles and expense of buying bottled water.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You'll enjoy more than a delicious way to quench your thirst when you have a RainSoft water purification system expertly installed in your home. You'll also notice dramatic improvements in the coffee, tea, and soups you prepare with water straight from your kitchen faucet.
                </p>
                <p className="text-lg text-cyan-700 font-semibold">
                  Your RainSoft dealer can help you decide which of our advanced drinking water systems is right for you.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  Why Choose Our Drinking Water Systems?
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Transform your tap into a source of pure, delicious water
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-cyan-100 hover:border-cyan-400"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Section with Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Our Drinking Water Systems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect system for your family's needs and enjoy premium drinking water every day
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
                  el: '.swiper-pagination-drinking'
                }}
                navigation={{
                  nextEl: '.swiper-button-next-drinking',
                  prevEl: '.swiper-button-prev-drinking',
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
                {systems.map((system, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mx-4 flex flex-col min-h-[450px] sm:min-h-[480px]">
                      {/* Product Image */}
                      <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={system.image} 
                          alt={system.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Product Content */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
                          {system.name}
                        </h3>

                        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base mt-auto">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button
                className="swiper-button-prev-drinking absolute left-0 top-1/3 -translate-y-1/2 bg-white hover:bg-cyan-50 text-cyan-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-cyan-200"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="swiper-button-next-drinking absolute right-0 top-1/3 -translate-y-1/2 bg-white hover:bg-cyan-50 text-cyan-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-cyan-200"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Pagination */}
              <div className="swiper-pagination-drinking"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contaminants Removed Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    ADVANCED FILTRATION
                  </div>
                  <h3 className="text-4xl font-bold mb-4">
                    What We Remove From Your Water
                  </h3>
                  <p className="text-cyan-50 text-lg max-w-2xl mx-auto">
                    Our advanced filtration systems erect a formidable barrier against contaminants
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {contaminantsRemoved.map((contaminant, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105 cursor-default"
                    >
                      <span className="font-semibold text-sm">{contaminant}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                Trusted Quality Since 1953
              </h3>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                RainSoft has specialized in making good water better for more than half a century. Every product is designed and assembled in the U.S.A., extensively tested by third parties, and protected by our industry-leading Limited Warranty.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">70+</div>
                <div className="text-cyan-200 text-lg font-semibold">Years Experience</div>
                <p className="text-cyan-100 text-sm mt-2">Industry-leading expertise</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-cyan-200 text-lg font-semibold">Made in USA</div>
                <p className="text-cyan-100 text-sm mt-2">Proudly manufactured domestically</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">3rd</div>
                <div className="text-cyan-200 text-lg font-semibold">Party Tested</div>
                <p className="text-cyan-100 text-sm mt-2">Independently verified quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-cyan-100">
              <div className="text-center">
                <div className="inline-block bg-cyan-100 text-cyan-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  PURE WATER AWAITS
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready for Delicious Drinking Water?
                </h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Schedule a free in-home water test and discover which drinking water system is perfect for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105">
                    Get Your Free Water Test
                  </button>
                  <button className="border-2 border-cyan-600 text-cyan-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-50 transition-all">
                    Call Us Now
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-6">
                  💧 No obligation • Free water analysis • Expert consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
