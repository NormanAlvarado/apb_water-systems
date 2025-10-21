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

export default function WaterConditioning() {

  const modelsBase = [
    {
      name: "EC5 Water Conditioning System",
      description: "Our flagship water softener with advanced technology and smart performance",
      features: ["Smart digital controls", "High efficiency", "Space-saving design", "Industry-leading warranty"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop"
    },
    {
      name: "EC5-CAB Water Conditioning System",
      description: "Premium cabinet-style system for seamless integration",
      features: ["Elegant cabinet design", "Compact footprint", "Advanced filtration", "Easy maintenance"],
      image: "https://images.unsplash.com/photo-1604754742629-3e768b8e3169?w=400&h=300&fit=crop"
    },
    {
      name: "EC4 Water Conditioning System",
      description: "Reliable performance with proven technology",
      features: ["Dependable operation", "Cost-effective", "Simple controls", "Durable construction"],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"
    },
    {
      name: "TC-M Series Water Conditioning System",
      description: "Twin-tank system for continuous soft water",
      features: ["Continuous operation", "No downtime", "High capacity", "Commercial grade"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    }
  ]

  // Duplicate models multiple times to ensure smooth infinite loop with 3 visible slides
  const models = [...modelsBase, ...modelsBase]

  const benefits = [
    {
      title: "Softer Skin & Hair",
      description: "Say goodbye to dry skin and brittle hair. Soft water leaves you feeling clean and refreshed."
    },
    {
      title: "Better Soap Performance",
      description: "Enjoy luxurious lather with less soap, saving money and reducing residue."
    },
    {
      title: "Protect Your Appliances",
      description: "Prevent costly repairs and extend the life of water-using appliances by eliminating scale buildup."
    },
    {
      title: "Lower Energy Bills",
      description: "Scale-free appliances run more efficiently, reducing your energy consumption and costs."
    },
    {
      title: "Cleaner Dishes & Laundry",
      description: "No more spots on glassware or dingy clothes. Everything comes out cleaner and brighter."
    },
    {
      title: "Preserve Plumbing",
      description: "Eliminate mineral deposits that clog pipes and reduce water flow throughout your home."
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
          style={{ backgroundImage: 'url(https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg)' }}
        >
          <div className="absolute inset-0 bg-blue-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Water Conditioning Systems
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Transform ordinary water into extraordinary water with RainSoft's technologically advanced water softeners
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
            {/* Intro with image */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  PREMIUM WATER SOFTENING
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Smart Performance You Can Count On
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For decades, the RainSoft name has been synonymous with technologically advanced water softening equipment that homeowners can depend on. Every RainSoft water softener is designed to provide a lifetime of superior performance and worry-free operation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By turning ordinary water into extraordinary water, RainSoft water softeners noticeably improve a wide variety of everyday household activities, such as bathing, doing laundry, and washing dishes.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=600&fit=crop" 
                    alt="Water Softener System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold mb-1">🇺🇸</div>
                  <div className="text-sm font-semibold">Proudly Designed &</div>
                  <div className="text-sm font-semibold">Manufactured in USA</div>
                </div>
              </div>
            </div>

            {/* Benefits Grid - Business Professional Design */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded text-sm font-bold mb-4 uppercase tracking-wide">
                  Key Benefits
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Business Case for Soft Water
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Investing in water softening technology delivers measurable returns across multiple areas of your home and lifestyle
                </p>
              </div>
              
              

              {/* Stats Bar */}
              <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold mb-2">50%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Less Soap Usage</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">30%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Energy Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Years Extended Appliance Life</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Scale Prevention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section with Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Our Water Conditioning Systems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your local authorized APB Water Systems dealer will determine which system best fits the needs of your family
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
                  el: '.swiper-pagination'
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
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
                {models.map((model, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 mx-4 flex flex-col min-h-[450px] sm:min-h-[480px]">
                      {/* Product Image */}
                      <div className="aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                        <img 
                          src={model.image} 
                          alt={model.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* Product Content */}
                      <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">
                          {model.name}
                        </h3>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base mt-auto">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button
                className="swiper-button-prev-custom absolute left-0 top-1/3 -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-blue-200"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="swiper-button-next-custom absolute right-0 top-1/3 -translate-y-1/2 bg-white hover:bg-blue-50 text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 border-2 border-blue-200"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 relative overflow-hidden">
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
                Unmatched Quality & Warranty
              </h3>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-cyan-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-cyan-100 text-sm mt-2">Designed & manufactured</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">ISO</div>
                <div className="text-cyan-200 text-lg font-semibold">9001 Certified</div>
                <p className="text-cyan-100 text-sm mt-2">Quality management systems</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-cyan-200 text-lg font-semibold">Quality Guaranteed</div>
                <p className="text-cyan-100 text-sm mt-2">Unsurpassed limited warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-blue-100">
              <div className="text-center">
                <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  START YOUR JOURNEY TO BETTER WATER
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Experience Soft Water?
                </h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Schedule a free in-home water test and discover which RainSoft water conditioning system is right for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105">
                    Get Your Free Water Test
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
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
