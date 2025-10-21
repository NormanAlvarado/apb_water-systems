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
      name: "Whole-House Carbon Filtration System",
      description: "Advanced carbon filtration that removes chlorine, chemicals, and improves water taste and odor throughout your entire home.",
      benefits: [
        "Removes chlorine and chloramines",
        "Eliminates chemical odors",
        "Improves water taste",
        "Protects entire household",
        "Low maintenance operation",
        "Long-lasting filters"
      ],
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
    },
    {
      name: "RCUV™ Ultraviolet Water Disinfection System",
      description: "State-of-the-art UV technology that destroys 99.99% of bacteria, viruses, and other microorganisms without chemicals.",
      benefits: [
        "Destroys bacteria and viruses",
        "No chemical additives",
        "Environmentally friendly",
        "Continuous disinfection",
        "Easy maintenance",
        "Highly effective"
      ],
      icon: "💡",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop"
    },
    {
      name: "EC5 OxyTech™",
      description: "Innovative oxidation technology that effectively removes iron, sulfur, and manganese from your water supply.",
      benefits: [
        "Eliminates iron staining",
        "Removes sulfur odors",
        "Clears manganese",
        "No chemicals required",
        "Automatic operation",
        "Efficient performance"
      ],
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    },
    {
      name: "Semi-Automatic Carbon Filtration System",
      description: "Cost-effective whole-house filtration that targets specific water quality issues with reliable performance.",
      benefits: [
        "Targets specific contaminants",
        "Budget-friendly option",
        "Reliable performance",
        "Easy to operate",
        "Customizable filtration",
        "Proven technology"
      ],
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1604754742629-3e768b8e3169?w=400&h=300&fit=crop"
    }
  ]

  // Duplicate filters multiple times to ensure smooth infinite loop with 3 visible slides
  const filters = [...filtersBase, ...filtersBase]

  const problems = [
    {
      issue: "Iron in Water",
      symptoms: ["Red or brown staining on fixtures", "Metallic taste", "Discolored laundry", "Rusty water"],
      solution: "EC5 OxyTech™"
    },
    {
      issue: "Sulfur (Rotten Egg Smell)",
      symptoms: ["Unpleasant odor", "Tarnished silverware", "Corroded pipes", "Bad taste"],
      solution: "EC5 OxyTech™ or Carbon Filtration"
    },
    {
      issue: "Chlorine & Chemicals",
      symptoms: ["Chemical taste and odor", "Dry skin and hair", "Bleach smell", "Irritated eyes"],
      solution: "Whole-House Carbon Filtration"
    },
    {
      issue: "Bacteria & Viruses",
      symptoms: ["Health concerns", "Well water contamination", "Biological growth", "Waterborne illness risk"],
      solution: "RCUV™ UV Disinfection"
    },
    {
      issue: "Manganese",
      symptoms: ["Black staining", "Metallic taste", "Water discoloration", "Appliance damage"],
      solution: "EC5 OxyTech™"
    },
    {
      issue: "VOCs & Pesticides",
      symptoms: ["Chemical odors", "Health risks", "Environmental contaminants", "Poor water quality"],
      solution: "Carbon Filtration System"
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
          style={{ backgroundImage: 'url(https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png)' }}
        >
          <div className="absolute inset-0 bg-indigo-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Problem Solving Filters
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Poor quality water is no match for our advanced filtration systems
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
            {/* Intro with visual */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ADVANCED FILTRATION SOLUTIONS
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Targeted Solutions for Every Water Problem
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Iron, sulfur, manganese, lead, bacteria, viruses, and volatile organic compounds (VOCs) are just some of the contaminants that an APB Water Systems filtration system can address.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Investing in one of our "problem-solving" filters will mean never again having to worry about unpleasant odors, disagreeable tastes, floating particles, and other issues that can diminish your family's water quality.
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
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-blue-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm">Problem-Free Water</div>
                </div>
              </div>
            </div>

            {/* Common Problems Section - Card Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  Common Water Problems We Solve
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Identify your water issue and discover the perfect solution
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-100 hover:border-red-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-red-600">
                        {problem.issue}
                      </h4>
                      <span className="text-3xl">⚠️</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Symptoms:</p>
                      <ul className="space-y-2">
                        {problem.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-red-400 mr-2 font-bold">×</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t-2 border-gray-200 mt-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Solution:</p>
                      <p className="text-indigo-600 font-bold text-sm">{problem.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section - Carousel */}
      <section className="py-20 bg-white">
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

              {/* Pagination */}
              <div className="swiper-pagination-filters"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
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
                Industry-Leading Water Treatment
              </h3>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                Long one of the most well-respected names in the residential water treatment industry, RainSoft manufactures a variety of technologically advanced whole-house filters.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">🏆</div>
                <div className="text-2xl font-bold text-white mb-2">Proven Solutions</div>
                <div className="text-cyan-200">Decades of expertise</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">🔬</div>
                <div className="text-2xl font-bold text-white mb-2">Advanced Technology</div>
                <div className="text-cyan-200">Cutting-edge filtration</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">✅</div>
                <div className="text-2xl font-bold text-white mb-2">Guaranteed Results</div>
                <div className="text-cyan-200">Industry-leading warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                How We Solve Your Water Problems
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven 4-step process ensures you get the perfect solution
              </p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Free Water Analysis</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We test your water to identify specific contaminants and issues
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Custom Solution Design</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Based on results, we recommend the perfect filtration system
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Professional Installation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Certified technicians install your system efficiently
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Enjoy Pure Water</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experience clean, problem-free water throughout your home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-cyan-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-indigo-100">
              <div className="text-center">
                <div className="inline-block bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  PROBLEM-FREE WATER AWAITS
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Solve Your Water Problems?
                </h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Get a free water analysis and discover the perfect filtration solution for your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105">
                    Get Your Free Water Test
                  </button>
                  <button className="border-2 border-indigo-600 text-indigo-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all">
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
