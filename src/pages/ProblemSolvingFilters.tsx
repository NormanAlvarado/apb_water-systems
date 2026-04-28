import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import PageLoader from '../components/PageLoader'
import ProductFeaturesModal from '../components/ProductFeaturesModal'
import { useMetaTags } from '../hooks/useMetaTags'

export default function ProblemSolvingFilters() {
  const { t } = useTranslation()

  useMetaTags({
    title: t('seo.problemSolvingFilters.title'),
    description: t('seo.problemSolvingFilters.description'),
    keywords: 'water filters, UV disinfection, problem solving filters, Costa Rica',
    ogTitle: t('seo.problemSolvingFilters.title'),
    ogDescription: t('seo.problemSolvingFilters.description'),
    canonicalUrl: 'https://apbwatersystems.com/products/problem-solving-filters'
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false)
  const [selectedProductFeatures, setSelectedProductFeatures] = useState<any>(null)

  const handleGetQuote = (productName: string) => {
    setSelectedProduct(productName)
    setIsModalOpen(true)
  }

  const handleViewFeatures = (product: any) => {
    setSelectedProductFeatures(product)
    setIsFeaturesModalOpen(true)
  }

  const filters = [
    {
      name: "RCUV™ Ultraviolet Water Disinfection System",
      shortName: "RCUV™ UV Disinfection",
      icon: "⚡",
      description: "UV disinfection solution for problematic water sources",
      features: [
        "Advanced UV disinfection technology",
        "Chemical-free water treatment",
        "Effective against bacteria and viruses",
        "Continuous flow disinfection",
        "Low maintenance operation",
        "Energy efficient design",
        "Compact footprint",
        "Easy lamp replacement"
      ],
      benefits: [
        "UV disinfection", 
        "Chemical-free", 
        "Kills bacteria & viruses", 
        "Safe water solution",
        "No taste or odor changes",
        "Environmentally friendly",
        "Cost-effective operation",
        "Reliable protection"
      ],
      applications: [
        "Well water treatment",
        "Private water systems",
        "Cottage and cabin water",
        "Point-of-entry disinfection",
        "Problem water sources",
        "Rural water systems",
        "Lake and surface water",
        "Backup disinfection"
      ],
      reduces: [
        "Bacteria and pathogens",
        "E. coli",
        "Coliform bacteria",
        "Viruses",
        "Cryptosporidium",
        "Giardia",
        "Waterborne microorganisms",
        "Biological contaminants"
      ],
      image: "https://rainsoftofnorthernmichigan.com/wp-content/uploads/2024/10/RCUV-Water-Disinfection-System-Michigan.png",
      brand: "RainSoft"
    }
  ]

  const benefits = [
    {
      title: "Chemical-Free Filtration",
      description: "OxyTech systems remove iron, sulfur, and manganese without harsh chemicals."
    },
    {
      title: "UV Disinfection",
      description: "RCUV™ system kills bacteria and viruses using advanced ultraviolet technology."
    },
    {
      title: "Better Taste & Odor",
      description: "Carbon filtration removes chlorine, improving taste and eliminating odors."
    },
    {
      title: "Whole-Home Protection",
      description: "Every tap in your home delivers clean, safe, problem-free water."
    }
  ]

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png)' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Problem-Solving Water Filters
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 leading-relaxed">
              Advanced filtration systems engineered to solve your specific water quality challenges
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section with Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
              {filters.map((filter, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="aspect-video overflow-hidden bg-white flex-shrink-0 p-6 flex items-center justify-center">
                    <img 
                      src={filter.image} 
                      alt={filter.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 min-h-[3.5rem] flex items-center">
                      {filter.name}
                    </h3>

                    <div className="space-y-3 mt-auto w-full max-w-xs">
                      <button 
                        onClick={() => handleViewFeatures(filter)}
                        className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors"
                      >
                        View Features
                      </button>
                      <button 
                        onClick={() => handleGetQuote(filter.name)}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                    src="https://olympianwatertesting.com/wp-content/uploads/2024/01/clean-tap-water.png" 
                    alt="Water Filtration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded text-sm font-bold mb-4 uppercase tracking-wide">
                  Key Benefits
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Complete Water Problem Solutions
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our problem-solving filters address a wide range of water quality issues for comprehensive protection
                </p>
              </div>
              
              {/* Professional Grid Layout - 4 Columns */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
                  >
                    {/* Blue top bar */}
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                    
                    <div className="p-6">
                      {/* Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
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
              <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-800 rounded-lg p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Contaminants Removed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Filtration Efficiency</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Years Appliance Life Extension</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-cyan-100 text-sm uppercase tracking-wide">Clean Water Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Uncompromising Quality & Performance
              </h3>
              <p className="text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-cyan-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-cyan-100 text-sm mt-2">Designed & manufactured domestically</p>
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

      {/* Modals */}
      {isFeaturesModalOpen && selectedProductFeatures && (
        <ProductFeaturesModal
          isOpen={isFeaturesModalOpen}
          product={selectedProductFeatures}
          onClose={() => setIsFeaturesModalOpen(false)}
        />
      )}

      {isModalOpen && (
        <QuoteModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          productName={selectedProduct}
        />
      )}

      <Footer />
    </div>
  )
}
