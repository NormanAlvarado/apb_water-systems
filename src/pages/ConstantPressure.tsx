import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import PageLoader from '../components/PageLoader'

export default function ConstantPressure() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const product = {
    name: "HydroStart Pressure Relief Valve/System",
    description: "Advanced pressure management system that maintains constant water pressure throughout your home",
    features: [
      "Maintains constant pressure",
      "Protects plumbing system",
      "Reduces water hammer",
      "Extends appliance life",
      "Quiet operation",
      "Easy installation"
    ],
    image: "https://www.rainsoft.com/wp-content/uploads/2024/08/hydrostart-web-graphic.jpg.webp",
    brand: "RainSoft"
  }

  const benefits = [
    {
      title: "Consistent Pressure",
      description: "Enjoy steady water pressure at every faucet, shower, and appliance regardless of usage."
    },
    {
      title: "System Protection",
      description: "Prevent damage from pressure fluctuations and water hammer throughout your plumbing."
    },
    {
      title: "Extended Appliance Life",
      description: "Protect water heaters, washing machines, and dishwashers from pressure-related wear."
    },
    {
      title: "Quieter Operation",
      description: "Eliminate banging pipes and noisy fixtures caused by pressure variations."
    }
  ]

  return (
    <div className="min-h-screen">
      <PageLoader />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://www.hotpropane.com/assets/uploads/images/water-faucet-sink.webp)' }}
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
              Constant Pressure Water Systems
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Maintain consistent water pressure throughout your home for optimal comfort and system protection
            </p>
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
                  PRESSURE MANAGEMENT
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Stable Water Pressure, Every Time
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the difference of constant water pressure with our HydroStart system. No more 
                  pressure drops during peak usage or annoying fluctuations that affect your daily comfort.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Constant pressure systems protect your plumbing infrastructure and water-using appliances 
                  from damaging pressure fluctuations. By maintaining steady pressure throughout your home, 
                  you'll enjoy better shower experiences, quieter operation, and extended appliance lifespan.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.hotpropane.com/assets/uploads/images/water-faucet-sink.webp" 
                    alt="Constant Pressure System"
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
                  Why Choose Constant Pressure?
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience consistent water pressure throughout your home for optimal comfort and system protection
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
            </div>

            {/* Product Showcase */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Our Constant Pressure Solution
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 flex items-center justify-center">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm font-semibold text-cyan-600 mb-2">{product.brand}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">
                      {product.name}
                    </h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition"
                    >
                      Get Quote
                    </button>
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
        productName="HydroStart Pressure Relief Valve/System"
      />

      <Footer />
    </div>
  )
}
