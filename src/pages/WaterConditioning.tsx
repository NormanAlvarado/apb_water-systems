import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import ProductFeaturesModal from '../components/ProductFeaturesModal'
import PageLoader from '../components/PageLoader'

export default function WaterConditioning() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedProductFeatures, setSelectedProductFeatures] = useState<any>(null)

  const handleGetQuote = (productName: string) => {
    setSelectedProduct(productName)
    setIsModalOpen(true)
  }

  const handleViewFeatures = (product: any) => {
    setSelectedProductFeatures(product)
    setIsFeaturesModalOpen(true)
  }

  const models = [
    {
      name: "WaterTrust Pro Series - Whole House Water Softening System",
      shortName: "Water Softening System",
      description: "Get softer water throughout the home to protect clothing, skin, dishes, laundry, and water-using appliances",
      features: [
        "Get softer water throughout the home to protect clothing, skin, dishes, laundry, and water-using appliances",
        "Newly redesigned and industry-proven technology delivers high performance and simple operation",
        "Trade professional ready - installation is straightforward and efficient with easily accessible parts",
        "Reduced water and salt consumption, which means less salt refills"
      ],
      benefits: [
        "Softer skin and hair",
        "Cleaner dishes and laundry",
        "Extended appliance lifespan",
        "Reduced soap and detergent usage"
      ],
      applications: [
        "Household Size: 35974: 1-4 occupants",
        "Household Size: 35975: 4-6 occupants",
        "Household Size: 35976: 6-8 occupants",
        "Water Source: City or Well"
      ],
      reduces: [
        "Hardness",
        "Scale buildup",
        "Soap scum"
      ],
      image: "https://s3.amazonaws.com/fam.s3.2/damprod/PDP_Retina/10160/pentair_watertrust_3627297_main.png",
      brand: "Pentair WaterTrust Pro Series"
    },
    {
      name: "WaterTrust Pro Series - Whole House Carbon Filtration System",
      shortName: "Carbon Filtration System",
      description: "Carbon filtration provides cleaner, fresher water throughout the whole home",
      features: [
        "Carbon filtration provides cleaner, fresher water throughout the whole home",
        "Newly redesigned and industry-proven technology delivers high performance and simple operation",
        "Trade professional ready - installation is straightforward and efficient with easily accessible parts",
        "With quick start-up settings and automatic calculations, simply set up and go"
      ],
      benefits: [
        "Removes chlorine taste and odor",
        "Cleaner, fresher water",
        "Protects plumbing and appliances",
        "Simple installation and operation"
      ],
      applications: [
        "Household Size: 35977: 1-4 occupants",
        "Household Size: 35978: 4-6 occupants",
        "Household Size: 35979: 6-8 occupants",
        "Water Source: City or Well"
      ],
      reduces: [
        "Chlorine",
        "Taste & Odor",
        "Sediment"
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKSGKBBvsr5trBAtsoNRLm-fb6PjOLlAgOg&s",
      brand: "Pentair WaterTrust Pro Series"
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
          style={{ backgroundImage: 'url(https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg)' }}
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
              Premium Water Conditioning Systems
            </h1>
            <p className="text-lg md:text-xl text-cyan-100 leading-relaxed">
              Transform ordinary water into extraordinary water with RainSoft's technologically advanced water softeners
            </p>
          </div>
        </div>
      </section>

      {/* Models Section with Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Pentair WaterTrust Pro Series
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry-proven technology with simple installation and high performance
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {models.map((model, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-white flex-shrink-0 p-8 flex items-center justify-center">
                    <img 
                      src={model.image} 
                      alt={model.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-xl font-bold text-blue-600 mb-4 min-h-[3.5rem] flex items-center">
                      {model.shortName}
                    </h3>

                    <div className="space-y-3 w-full mt-auto">
                      <button 
                        onClick={() => handleViewFeatures(model)}
                        className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        View Features
                      </button>
                      <button 
                        onClick={() => handleGetQuote(model.name)}
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

      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />

      {selectedProductFeatures && (
        <ProductFeaturesModal 
          isOpen={isFeaturesModalOpen}
          onClose={() => setIsFeaturesModalOpen(false)}
          product={selectedProductFeatures}
        />
      )}

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
                  Transform Your Home's Water Quality
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Water conditioning systems are essential for homes with hard water, which contains high levels of minerals like calcium and magnesium. These minerals cause scale buildup in pipes and appliances, reduce soap effectiveness, and leave residue on fixtures and clothing. A quality water softener removes these minerals, protecting your home's plumbing infrastructure and extending the lifespan of water-using appliances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By transforming hard water into soft water, conditioning systems dramatically improve everyday household activities. You'll notice softer skin and hair after bathing, cleaner and softer laundry, spot-free dishes, and significantly reduced soap and detergent usage. Beyond comfort, these systems represent a smart investment that saves money through lower energy bills, reduced maintenance costs, and longer-lasting appliances.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://c02.purpledshub.com/uploads/sites/41/2018/07/GettyImages-503847945-de8171f.jpg" 
                    alt="Water Softener System"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Benefits Grid - Business Professional Design */}
            <div className="mb-20">
              <div className="text-center mb-16">

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Key Benefits
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
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Each of these premium products undergoes rigorous third-party testing, comes backed by an unsurpassed Limited Warranty, and is assembled in a modern, ISO 9001-certified Midwest facility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">🇺🇸</div>
                <div className="text-blue-200 text-lg font-semibold">Proudly Made in USA</div>
                <p className="text-blue-100 text-sm mt-2">Designed & manufactured domestically</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">ISO</div>
                <div className="text-blue-200 text-lg font-semibold">9001 Certified</div>
                <p className="text-blue-100 text-sm mt-2">Quality management systems</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-blue-200 text-lg font-semibold">Quality Guaranteed</div>
                <p className="text-blue-100 text-sm mt-2">Unsurpassed limited warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  )
}
